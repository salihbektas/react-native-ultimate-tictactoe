import {atom} from 'jotai';

const initialBoard: UltimateBoard = [
  [['', '', '', '', '', '', '', '', ''], ''],
  [['', '', '', '', '', '', '', '', ''], ''],
  [['', '', '', '', '', '', '', '', ''], ''],
  [['', '', '', '', '', '', '', '', ''], ''],
  [['', '', '', '', '', '', '', '', ''], ''],
  [['', '', '', '', '', '', '', '', ''], ''],
  [['', '', '', '', '', '', '', '', ''], ''],
  [['', '', '', '', '', '', '', '', ''], ''],
  [['', '', '', '', '', '', '', '', ''], ''],
];

let initialTurn: TileValue = 'X';

const init: Initial = {board: initialBoard, turn: initialTurn};

export const store = atom(init);

type TileValue = 'X' | 'O' | '';

type SubBoard = [
  TileValue,
  TileValue,
  TileValue,
  TileValue,
  TileValue,
  TileValue,
  TileValue,
  TileValue,
  TileValue,
];

type UltimateBoard = [
  [SubBoard, TileValue],
  [SubBoard, TileValue],
  [SubBoard, TileValue],
  [SubBoard, TileValue],
  [SubBoard, TileValue],
  [SubBoard, TileValue],
  [SubBoard, TileValue],
  [SubBoard, TileValue],
  [SubBoard, TileValue],
];
type Initial = {board: UltimateBoard; turn: TileValue};
