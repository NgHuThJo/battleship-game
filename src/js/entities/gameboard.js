import { Ship } from "./ship";

class GameBoard {
  constructor(id) {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(false));
    this.id = id;
  }

  placeShip(x, y) {}

  receiveAttack(x, y) {}
}

export { GameBoard };
