import { GameController } from "./mvc/game-controller";
import { GameModel } from "./mvc/game-model";
import { GameView } from "./mvc/game-view";
import "../scss/style.scss";

function main() {
  const gameConfig = {
    players: 2,
    ships: [4, 3, 2, 1],
  };
  const game = new GameController(new GameModel(gameConfig), new GameView());
  game.gameLoop();
}

main();
