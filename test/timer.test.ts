import {Timer} from "../src/timer";

describe("Timer", () => {
    let timer = new Timer();

    describe("tick", () => {
        it("returns the correct deltaTime", () => {
            timer = new Timer();
            let expectedDeltaTime = (Date.now() - 0) / 1000; // lastTimeStamp is 0 on init

            expect(timer.tick()).toEqual(expectedDeltaTime)
        });
    });
});