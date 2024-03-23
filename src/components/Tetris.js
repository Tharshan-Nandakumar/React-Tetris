import React from "react";

import { createStage } from "../gameHelpers";
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </aside>
        <StartButton />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
