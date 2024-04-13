import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

// React.memo only re-renders cells which change
export default React.memo(Cell);
