class Ship {
  constructor(length) {
    this.length = length;
    this.numberOfTimesHit = 0;
    this.isSunk = false;
  }

  hit() {
    this.numberOfTimesHit++;
  }

  isSunk() {
    this.numberOfTimesHit === this.length;
  }
}

export { Ship };
