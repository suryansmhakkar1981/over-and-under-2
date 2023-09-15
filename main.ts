scene.onOverlapTile(SpriteKind.Player, assets.tile`empty cave`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    truck.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.over(false)
})
let truck: Sprite = null
scene.cameraFollowSprite(truck)
truck = sprites.create(assets.image`truck2`, SpriteKind.Player)
truck.ay = 500
truck.vx = 100
scene.cameraFollowSprite(truck)
