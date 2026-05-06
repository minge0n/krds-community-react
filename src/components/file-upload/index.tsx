"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef, useCallback, useRef, useState } from "react";

export interface FileUploadFile {
  file: File;
  id: string;
}

export interface FileUploadProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
  /** Label */
  label?: ReactNode;
  /** Hint text */
  hint?: ReactNode;
  /** Error message */
  error?: ReactNode;
  /** Error state */
  invalid?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Accepted file types */
  accept?: string;
  /** Allow multiple files */
  multiple?: boolean;
  /** Max file size in bytes */
  maxSize?: number;
  /** File list */
  files?: FileUploadFile[];
  /** Change handler */
  onChange?: (files: FileUploadFile[]) => void;
  /** Drag area text */
  dragText?: string;
  /** Button text */
  buttonText?: string;
}

let fileIdCounter = 0;

export const FileUpload = forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      label,
      hint,
      error,
      invalid = false,
      disabled = false,
      accept,
      multiple = false,
      maxSize,
      files: controlledFiles,
      onChange,
      dragText = "파일을 여기에 끌어다 놓으세요",
      buttonText = "파일 선택",
      className,
      ...props
    },
    ref,
  ) => {
    const [internalFiles, setInternalFiles] = useState<FileUploadFile[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const files = controlledFiles !== undefined ? controlledFiles : internalFiles;

    const addFiles = useCallback(
      (newFiles: FileList | null) => {
        if (!newFiles) return;

        const additions: FileUploadFile[] = Array.from(newFiles)
          .filter((file) => {
            if (maxSize && file.size > maxSize) return false;
            return true;
          })
          .map((file) => ({
            file,
            id: `file-${++fileIdCounter}`,
          }));

        const updated = multiple ? [...files, ...additions] : additions.slice(0, 1);
        setInternalFiles(updated);
        onChange?.(updated);
      },
      [files, multiple, maxSize, onChange],
    );

    const removeFile = useCallback(
      (id: string) => {
        const updated = files.filter((f) => f.id !== id);
        setInternalFiles(updated);
        onChange?.(updated);
      },
      [files, onChange],
    );

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled) setIsDragging(true);
    };

    const handleDragLeave = () => {
      setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (!disabled) addFiles(e.dataTransfer.files);
    };

    const classNames = [
      "krds-file-upload",
      invalid && "is-error",
      disabled && "is-disabled",
      isDragging && "is-dragging",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={classNames} {...props}>
        {label && <span className="krds-file-upload-label">{label}</span>}

        <div
          className="krds-file-upload-dropzone"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          role="presentation"
        >
          <p className="krds-file-upload-text">{dragText}</p>
          <button
            type="button"
            className="krds-file-upload-btn"
            onClick={() => inputRef.current?.click()}
            disabled={disabled}
          >
            {buttonText}
          </button>
          <input
            ref={inputRef}
            type="file"
            className="krds-file-upload-input"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={(e) => addFiles(e.target.files)}
            aria-label={buttonText}
          />
        </div>

        {hint && !invalid && <p className="krds-file-upload-hint">{hint}</p>}
        {invalid && error && (
          <p className="krds-file-upload-error" role="alert">
            {error}
          </p>
        )}

        {files.length > 0 && (
          <ul className="krds-file-upload-list" aria-label="업로드된 파일 목록">
            {files.map((f) => (
              <li key={f.id} className="krds-file-upload-item">
                <span className="krds-file-upload-filename">{f.file.name}</span>
                <span className="krds-file-upload-filesize">
                  {(f.file.size / 1024).toFixed(1)}KB
                </span>
                <button
                  type="button"
                  className="krds-file-upload-remove"
                  onClick={() => removeFile(f.id)}
                  aria-label={`${f.file.name} 삭제`}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  },
);

FileUpload.displayName = "FileUpload";
