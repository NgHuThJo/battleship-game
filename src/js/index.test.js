import { GameModel } from "./mvc/game-model";

test("Initialize gameboard", () => {
  const gameConfig = {
    players: 2,
    ships: [4, 3, 2, 1],
  };
  const model = new GameModel(gameConfig);

  expect(model.gameBoards).toStrictEqual([]);
});
