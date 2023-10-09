/**
 * @author Douglas Johnston
 *
 * A type script game engine heavily inspired by this JavaScript game engine: https://github.com/algorithm0r/Empty--GameEngine
 *
 * */

export class Timer {
  private gameTime: number;
  private readonly maxStep: number;
  private lastTimestamp: number;

  constructor() {
    this.gameTime = 0;
    this.maxStep = 0.5
    this.lastTimestamp = 0;
  }

  /**
   * Preforms a game tick by calculating the deltaTime then adding it to gameTime
   *
   * @return number representing the calculated game delta time
   */
  tick(): number {
    const currentTime = Date.now();
    const deltaTime = Math.min((currentTime - this.lastTimestamp) / 1000, this.maxStep); // time between now and the last call in milliseconds
    this.lastTimestamp = currentTime;
    this.gameTime += deltaTime;
    return deltaTime;
  }
}
