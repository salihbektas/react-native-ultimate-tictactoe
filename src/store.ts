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

const init: Initial = {board: initialBoard, turn: 'X', winner: ''};

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

export type UltimateBoard = [
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

export type Initial = {
  board: UltimateBoard;
  turn: TileValue;
  winner: TileValue;
};
