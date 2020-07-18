namespace SpriteKind {
    export const keys = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    mySprite4.startEffect(effects.blizzard, 4000)
    mySprite4.destroy(effects.fire, 5000)
    statusbar.setOffsetPadding(-100, -100)
    pause(6000)
    game.over(true, effects.blizzard)
    music.siren.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    mySprite4.startEffect(effects.fire, 500)
    statusbar.value += -0.5
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
5 5 
5 5 
5 5 
5 5 
5 5 
5 5 
`, mySprite, 0, -100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 500)
})
info.onLifeZero(function () {
    mySprite.destroy(effects.fire, 500)
    game.over(false, effects.dissolve)
})
let mySprite2: Sprite = null
let projectile2: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite4: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
. . . . . . . d . . . . . . . 
. . . . . . d d d . . . . . . 
. . . . . . d d d . . . . . . 
. . . . . d d d d d . . . . . 
. . . . . d d d d d . . . . . 
. . . . d d d d d d d . . . . 
. . . . d d d d d d d . . . . 
. . . d d d d d d d d d . . . 
8 . . d d d d d d d d d . . 8 
8 8 c d c d c d c d c d c 8 8 
8 8 8 c c c c c c c c c 8 8 8 
8 8 8 8 c c c c c c c 8 8 8 8 
8 8 8 8 c c c c c c c 8 8 8 8 
8 8 8 c c c c c c c c c 8 8 8 
8 8 c c c c c c c c c c c 8 8 
8 . c c c c c c c c c c c . 8 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
info.setLife(3)
let timeEnem = 700
game.onUpdateInterval(timeEnem, function () {
    mySprite2 = sprites.create(img`
2 . . b b b b b b b b b . . 2 
2 2 . b b b b b b b b b . 2 2 
2 2 2 b b b b b b b b b 2 2 2 
2 2 2 2 b b b b b b b 2 2 2 2 
2 2 2 2 b b b b b b b 2 2 2 2 
2 2 2 b b b b b b b b b 2 2 2 
2 2 . 1 b 1 b 1 b 1 b 1 . 2 2 
2 . . 1 1 1 1 1 1 1 1 1 . . 2 
. . . 1 1 1 1 1 1 1 1 1 . . . 
. . . . 1 1 1 1 1 1 1 . . . . 
. . . . 1 1 1 1 1 1 1 . . . . 
. . . . . 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 . . . . . . 
. . . . . . 1 1 1 . . . . . . 
. . . . . . . 1 . . . . . . . 
`, SpriteKind.Enemy)
    mySprite2.setPosition(Math.randomRange(1, 155), 0)
    mySprite2.setVelocity(0, 75)
    if (info.score() == 25) {
        mySprite4 = sprites.create(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . 
. . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . 
. . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 2 2 2 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . 5 2 2 2 2 2 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . 
`, SpriteKind.Boss)
        mySprite4.setPosition(78, 10)
        timeEnem = 500
        statusbar = statusbars.create(35, 4, StatusBarKind.EnemyHealth)
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.setLabel("Boss", 2)
        statusbar.positionDirection(CollisionDirection.Bottom)
        info.changeScoreBy(1)
    }
})
