"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef, useState, useCallback } from "react";

export interface CalendarProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
  /** Selected date */
  value?: Date | null;
  /** Change handler */
  onChange?: (date: Date | null) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  invalid?: boolean;
  /** Label */
  label?: ReactNode;
  /** Min date */
  min?: Date;
  /** Max date */
  max?: Date;
}

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      value,
      onChange,
      placeholder = "날짜 선택",
      disabled = false,
      invalid = false,
      label,
      min,
      max,
      className,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [viewDate, setViewDate] = useState(() => value || new Date());

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const handleDateSelect = useCallback(
      (day: number) => {
        const selected = new Date(year, month, day);
        if (min && selected < min) return;
        if (max && selected > max) return;
        onChange?.(selected);
        setIsOpen(false);
      },
      [year, month, min, max, onChange],
    );

    const handlePrevMonth = () => {
      setViewDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
      setViewDate(new Date(year, month + 1, 1));
    };

    const formatDate = (date: Date | null | undefined) => {
      if (!date) return "";
      return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
    };

    const isSelected = (day: number) => {
      if (!value) return false;
      return (
        value.getFullYear() === year &&
        value.getMonth() === month &&
        value.getDate() === day
      );
    };

    const isDisabledDate = (day: number) => {
      const date = new Date(year, month, day);
      if (min && date < min) return true;
      if (max && date > max) return true;
      return false;
    };

    const classNames = ["krds-calendar", invalid && "is-error", className]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={classNames} {...props}>
        {label && <span className="krds-calendar-label">{label}</span>}
        <button
          type="button"
          className={`krds-calendar-trigger ${invalid ? "is-error" : ""}`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          <span className={value ? "krds-calendar-value" : "krds-calendar-placeholder"}>
            {value ? formatDate(value) : placeholder}
          </span>
          <svg
            className="krds-calendar-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 1v3M14 1v3M1 8h18M3 3h14a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="krds-calendar-popup" role="dialog" aria-label="날짜 선택">
            <div className="krds-calendar-header">
              <button
                type="button"
                className="krds-calendar-nav-btn"
                onClick={handlePrevMonth}
                aria-label="이전 달"
              >
                ‹
              </button>
              <span className="krds-calendar-title">
                {year}년 {month + 1}월
              </span>
              <button
                type="button"
                className="krds-calendar-nav-btn"
                onClick={handleNextMonth}
                aria-label="다음 달"
              >
                ›
              </button>
            </div>

            <table className="krds-calendar-grid" role="grid">
              <thead>
                <tr>
                  {DAYS.map((day) => (
                    <th key={day} scope="col" className="krds-calendar-weekday">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(() => {
                  const rows: ReactNode[] = [];
                  let cells: ReactNode[] = [];

                  for (let i = 0; i < firstDay; i++) {
                    cells.push(<td key={`empty-${i}`} className="krds-calendar-cell empty" />);
                  }

                  for (let day = 1; day <= daysInMonth; day++) {
                    const selected = isSelected(day);
                    const disabledDay = isDisabledDate(day);

                    cells.push(
                      <td key={day} className="krds-calendar-cell">
                        <button
                          type="button"
                          className={`krds-calendar-day ${selected ? "selected" : ""} ${disabledDay ? "disabled" : ""}`}
                          onClick={() => !disabledDay && handleDateSelect(day)}
                          disabled={disabledDay}
                          aria-selected={selected}
                          aria-label={`${year}년 ${month + 1}월 ${day}일`}
                        >
                          {day}
                        </button>
                      </td>,
                    );

                    if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
                      rows.push(<tr key={`row-${day}`}>{cells}</tr>);
                      cells = [];
                    }
                  }

                  return rows;
                })()}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  },
);

Calendar.displayName = "Calendar";
