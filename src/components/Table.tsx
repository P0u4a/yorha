import { type ReactNode } from "react";
import { cn } from "./utils";

interface TableColumn<T> {
  key: keyof T & string;
  header: string;
  align?: "left" | "right" | "center";
  width?: string;
}

interface TableProps<T extends Record<string, ReactNode>> {
  columns: TableColumn<T>[];
  data: T[];
}

export function Table<T extends Record<string, ReactNode>>({
  columns,
  data,
}: TableProps<T>) {
  const alignClass = (align?: string) =>
    align === "right"
      ? "text-right"
      : align === "center"
        ? "text-center"
        : "text-left";

  return (
    <table className="w-full bg-surface border-collapse">
      <thead>
        <tr className="bg-muted">
          {columns.map((col) => (
            <th
              key={col.key}
              className={cn(
                "py-1 px-3 font-medium text-sm tracking-[1px] text-primary",
                alignClass(col.align)
              )}
              style={col.width ? { width: col.width } : undefined}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, ri) => (
          <tr key={ri} className="text-foreground">
            {columns.map((col) => (
              <td
                key={col.key}
                className={cn(
                  "py-1.5 px-3 text-sm tracking-[1px]",
                  alignClass(col.align)
                )}
              >
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
