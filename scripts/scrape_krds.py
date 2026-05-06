#!/usr/bin/env python3
"""
KRDS 공식 사이트 전체 문서 스크래퍼 v3
HTML 원본 그대로 저장 (이미지 참조 등 손실 방지).
community_06.html (문의 게시판)은 제외.

Usage:
    python3 scripts/scrape_krds.py

Output:
    docs/scraped/<section>/<page>.html
"""

import os
import re
import time
from urllib.parse import urljoin, urlparse
from collections import deque

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://www.krds.go.kr"
START_URL = f"{BASE_URL}/html/site/index.html"
ALLOWED_PREFIX = f"{BASE_URL}/html/site/"
OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "docs", "scraped")

SKIP_PATTERNS = [
    "community_06.html",
]

DELAY = 0.3
HEADERS = {
    "User-Agent": "KRDS-DesignMD-Scraper/3.0 (educational; new-krds-react project)",
    "Accept-Language": "ko-KR,ko;q=0.9,en;q=0.8",
}

visited = set()
queue = deque()


def should_skip(url):
    for pattern in SKIP_PATTERNS:
        if pattern in url:
            return True
    return False


def extract_all_links(html_text, current_url):
    """Extract ALL internal links from raw HTML."""
    soup = BeautifulSoup(html_text, "html.parser")
    links = set()
    for a in soup.find_all("a", href=True):
        href = a["href"]
        if href.startswith(("#", "javascript:", "mailto:", "tel:", "{")):
            continue
        if href.startswith("#{"):
            continue

        full_url = urljoin(current_url, href)
        full_url = full_url.split("#")[0]
        full_url = full_url.split("?")[0]

        if full_url.startswith(ALLOWED_PREFIX) and full_url.endswith(".html"):
            if not should_skip(full_url):
                links.add(full_url)

    return links


def url_to_filepath(url):
    """Convert URL to local file path (keep .html extension)."""
    parsed = urlparse(url)
    path = parsed.path
    path = path.replace("/html/site/", "")
    return os.path.join(OUTPUT_DIR, path)


def scrape_page(url):
    """Fetch page and return (raw_html, new_links)."""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=15)
        resp.raise_for_status()
        resp.encoding = "utf-8"
    except requests.RequestException as e:
        print(f"  ERROR: {e}")
        return None, set()

    html = resp.text
    links = extract_all_links(html, url)
    return html, links


def main():
    import shutil
    if os.path.exists(OUTPUT_DIR):
        shutil.rmtree(OUTPUT_DIR)
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    queue.append(START_URL)
    total = 0

    print(f"KRDS Scraper v3 (HTML raw)")
    print(f"Start: {START_URL}")
    print(f"Output: {OUTPUT_DIR}")
    print(f"Skip: {SKIP_PATTERNS}")
    print("=" * 60)

    while queue:
        url = queue.popleft()

        if url in visited:
            continue
        visited.add(url)

        html, new_links = scrape_page(url)

        if html and len(html) > 100:
            filepath = url_to_filepath(url)
            os.makedirs(os.path.dirname(filepath), exist_ok=True)

            with open(filepath, "w", encoding="utf-8") as f:
                f.write(f"<!-- source: {url} -->\n")
                f.write(html)

            total += 1
            print(f"[{total}] {filepath.replace(OUTPUT_DIR + '/', '')} ({len(html)//1024}KB)")
        else:
            print(f"[x] {url} (skipped)")

        for link in new_links:
            if link not in visited:
                queue.append(link)

        time.sleep(DELAY)

    print("=" * 60)
    print(f"Done! {total} pages saved from {len(visited)} URLs.")


if __name__ == "__main__":
    main()
