"use strict";
/**
 * @author Douglas Johnston
 *
 * A type script game engine heavily inspired by this JavaScript game engine: https://github.com/algorithm0r/Empty--GameEngine
 *
 * */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEngine = void 0;
class GameEngine {
    constructor() {
        this.entities = [];
    }
    addEntity(entity) {
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
exports.GameEngine = GameEngine;
//# sourceMappingURL=GameEngine.js.map