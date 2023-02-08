input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let ticks = 0
let Bird: game.LedSprite = null
let index = 0
let Obstacles: game.LedSprite[] = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
let emptyObstacle = randint(0, 4)
for (let index = 0; index <= 4; index++) {
    if (index != emptyObstacle) {
        Obstacles.push(game.createSprite(4, index))
    }
}
basic.forever(function () {
    while (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
        Obstacles.removeAt(0).delete()
    }
    for (let obstacle of Obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacle = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != emptyObstacle) {
                Obstacles.push(game.createSprite(4, index))
            }
        }
    }
    for (let obstacle of Obstacles) {
        if (obstacle.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && obstacle.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
