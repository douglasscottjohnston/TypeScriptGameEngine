/**
 * @author Douglas Johnston
 *
 * A type script game engine heavily inspired by this JavaScript game engine: https://github.com/algorithm0r/Empty--GameEngine
 *
 * */


export class GameEngine {
  private entities: any[];
  private isRunning: boolean;


  constructor() {
    this.entities = [];
    this.isRunning = false;
  }


  addEntity(entity: any) {
    this.entities.push(entity);
  }

  draw() {

  }


  update() {

  }


  gameLoop() {
    this.update();
    this.draw();
  }


}
