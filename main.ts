namespace SpriteKind {
    export const Personaje = SpriteKind.create()
}
let miPersonaje = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 d f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 d d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 d d d f . . . . . . 
. . . . . . f d 1 1 1 d d d d d d f . . . . . . 
. . . . . . f d 1 d f b d d d d b f . . . . . . 
. . . . . . f b d d f c d b b b c f . . . . . . 
. . . . . . . f 1 1 1 1 1 b b c f . . . . . . . 
. . . . . . . f 1 b 1 f f f f f . . . . . . . . 
. . . . . . . f b f c 1 1 1 b f . . . . . . . . 
. . . . . . . . f f 1 b 1 b f f . . . . . . . . 
. . . . . . . . . f b f b f f f . f . . . . . . 
. . . . . . . . . . f f f f f f f f . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
miPersonaje.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
let enemigo = sprites.create(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`, SpriteKind.Enemy)
enemigo.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
let persona = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Personaje)
scene.setBackgroundColor(7)
controller.moveSprite(miPersonaje)
forever(function () {
	
})
