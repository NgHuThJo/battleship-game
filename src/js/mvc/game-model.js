class GameModel {
  constructor(gameConfig) {
    this.gameConfig = gameConfig;
    this.gameBoards = [];
    this.players = [];

    for (let i = 0; i < gameConfig.players; i++) {}
  }

  createGameboard(shipNumber) {}
}

export { GameModel };
