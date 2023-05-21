import React, { FC } from "react";
import cn from "clsx";
import s from "./Cell.module.sass";

const cellTypesArray = ["born", "alive", "dead"] as const;
type CellType = (typeof cellTypesArray)[number];

type CellProps = {
  type: CellType;
  onClick?: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Cell: FC<CellProps> = ({ type, onClick, ...props }): JSX.Element => {
  return (
    <>
      <div
        role="cell"
        onClick={!!onClick ? (e) => onClick(e) : undefined}
        className={cn(s[type], s.cell, props)}
      ></div>
    </>
  );
};

export { Cell, CellProps, CellType, cellTypesArray };
