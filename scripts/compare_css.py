#!/usr/bin/env python3
"""
KRDS CSS 정적 비교 분석
공식 krds-react CSS vs 우리 CSS의 차이점을 찾는다.

비교 항목:
1. 클래스명 매핑 (공식에 있는데 우리에 없는 것)
2. CSS 변수 사용 차이
3. 속성값 차이 (border-radius, height, padding 등)
"""

import re
import os
from pathlib import Path

OFFICIAL_CSS = "node_modules/krds-react/dist/index.css"
OUR_CSS_DIR = "src/components"


def extract_rules(css_text):
    """Extract CSS rules as {selector: {property: value}}"""
    rules = {}
    # Remove comments
    css_text = re.sub(r'/\*.*?\*/', '', css_text, flags=re.DOTALL)
    # Split into rules
    matches = re.findall(r'([^{]+)\{([^}]+)\}', css_text)
    for selector, body in matches:
        selector = selector.strip()
        props = {}
        for prop_match in re.findall(r'([\w-]+)\s*:\s*([^;]+)', body):
            props[prop_match[0].strip()] = prop_match[1].strip()
        if props:
            rules[selector] = props
    return rules


def extract_classes(css_text):
    """Extract all class names used"""
    return set(re.findall(r'\.([\w-]+)', css_text))


def extract_variables_used(css_text):
    """Extract all CSS custom properties referenced"""
    return set(re.findall(r'var\((--[\w-]+)\)', css_text))


def extract_variables_defined(css_text):
    """Extract all CSS custom properties defined"""
    return set(re.findall(r'(--[\w-]+)\s*:', css_text))


def main():
    # Load official CSS
    official = open(OFFICIAL_CSS).read()

    # Load all our CSS files
    our_files = list(Path(OUR_CSS_DIR).rglob("*.css"))
    our_css = ""
    for f in our_files:
        our_css += open(f).read() + "\n"

    # Also include tokens
    tokens_css = open("src/styles/tokens.css").read()

    print("=" * 70)
    print("KRDS CSS 정적 비교 분석")
    print("=" * 70)

    # 1. Class comparison
    official_classes = extract_classes(official)
    our_classes = extract_classes(our_css)

    # Filter to krds- prefixed only
    official_krds = {c for c in official_classes if c.startswith("krds-")}
    our_krds = {c for c in our_classes if c.startswith("krds-")}

    missing_in_ours = official_krds - our_krds
    extra_in_ours = our_krds - official_krds

    print(f"\n## 1. 클래스명 비교")
    print(f"공식 KRDS 클래스: {len(official_krds)}개")
    print(f"우리 KRDS 클래스: {len(our_krds)}개")
    print(f"공식에만 있는 것: {len(missing_in_ours)}개")
    print(f"우리에만 있는 것: {len(extra_in_ours)}개")

    if missing_in_ours:
        print(f"\n### 공식에 있는데 우리에 없는 클래스:")
        for c in sorted(missing_in_ours):
            print(f"  - .{c}")

    if extra_in_ours:
        print(f"\n### 우리에만 있는 클래스:")
        for c in sorted(extra_in_ours):
            print(f"  - .{c}")

    # 2. CSS Variable usage
    official_vars_used = extract_variables_used(official)
    our_vars_used = extract_variables_used(our_css)

    # Filter to krds vars
    official_krds_vars = {v for v in official_vars_used if v.startswith("--krds-")}
    our_krds_vars = {v for v in our_vars_used if v.startswith("--krds-")}

    missing_vars = official_krds_vars - our_krds_vars
    extra_vars = our_krds_vars - official_krds_vars

    print(f"\n## 2. CSS 변수 사용 비교")
    print(f"공식이 사용하는 KRDS 변수: {len(official_krds_vars)}개")
    print(f"우리가 사용하는 KRDS 변수: {len(our_krds_vars)}개")
    print(f"공식만 사용: {len(missing_vars)}개")
    print(f"우리만 사용: {len(extra_vars)}개")

    if missing_vars:
        print(f"\n### 공식이 쓰는데 우리가 안 쓰는 변수 (상위 30개):")
        for v in sorted(missing_vars)[:30]:
            print(f"  - {v}")

    # 3. Key property comparison for .krds-btn
    print(f"\n## 3. 버튼(.krds-btn) 속성 비교")

    # Extract button rules from official
    btn_rules_official = re.findall(r'\.krds-btn\b[^{]*\{([^}]+)\}', official)
    btn_rules_ours = re.findall(r'\.krds-btn\b[^{]*\{([^}]+)\}', our_css)

    # Get unique properties from official button
    official_btn_props = set()
    for rule in btn_rules_official:
        for prop in re.findall(r'([\w-]+)\s*:', rule):
            official_btn_props.add(prop)

    our_btn_props = set()
    for rule in btn_rules_ours:
        for prop in re.findall(r'([\w-]+)\s*:', rule):
            our_btn_props.add(prop)

    missing_btn_props = official_btn_props - our_btn_props
    print(f"공식 버튼 속성: {len(official_btn_props)}개")
    print(f"우리 버튼 속성: {len(our_btn_props)}개")
    if missing_btn_props:
        print(f"공식에만 있는 속성:")
        for p in sorted(missing_btn_props):
            print(f"  - {p}")

    # 4. Component-level variable definitions (official pattern)
    official_component_vars = {v for v in extract_variables_defined(official) if "--krds-button" in v or "--krds-icon" in v}
    our_component_vars = {v for v in extract_variables_defined(our_css) if "--krds-button" in v or "--krds-icon" in v}

    print(f"\n## 4. 컴포넌트 로컬 변수 정의")
    print(f"공식 버튼/아이콘 로컬 변수: {len(official_component_vars)}개")
    print(f"우리 버튼/아이콘 로컬 변수: {len(our_component_vars)}개")
    if official_component_vars and not our_component_vars:
        print("  → 우리는 로컬 변수 없이 글로벌 토큰 직접 참조 (의도적 차이)")

    # 5. Border radius comparison
    print(f"\n## 5. Border Radius 비교")
    official_radius = re.findall(r'border-radius\s*:\s*([^;]+)', official)
    our_radius = re.findall(r'border-radius\s*:\s*([^;]+)', our_css)

    official_radius_vals = set(v.strip() for v in official_radius)
    our_radius_vals = set(v.strip() for v in our_radius)

    print(f"공식 radius 값 종류: {len(official_radius_vals)}개")
    print(f"우리 radius 값 종류: {len(our_radius_vals)}개")
    print(f"\n공식 radius 값:")
    for v in sorted(official_radius_vals)[:15]:
        print(f"  {v}")
    print(f"\n우리 radius 값:")
    for v in sorted(our_radius_vals)[:15]:
        print(f"  {v}")

    print("\n" + "=" * 70)
    print("분석 완료")


if __name__ == "__main__":
    main()
