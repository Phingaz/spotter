import React from "react";
import { TOrder } from "../../types";
import { twMerge } from "tailwind-merge";

const TableCell = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
  sortDirection?: TOrder | boolean;
}) => {
  return (
    <td className={twMerge("text-[13px] text-gray-600 p-3", className)}>
      <span className="line-clamp-1 hover:line-clamp-none">{children}</span>
    </td>
  );
};

export default TableCell;
