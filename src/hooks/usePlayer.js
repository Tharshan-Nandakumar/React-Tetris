import { useState } from "react";

import { randomTertomino } from "../tetrominos";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTertomino().shape,
    collided: false,
  });

  return [player];
};
