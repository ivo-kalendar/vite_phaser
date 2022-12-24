export const init = (scene, name = 'phaser_example_scene', auto_start = true, arcade_physics = false) => {
    window.versionNumber = "0.0.1";
    window.versionCode = "0";

    const width = 1920 // 10
    const height = 1080 // 10
    const physics = arcade_physics && { default: 'arcade', arcade: { gravity: { y: 200 } } }

    const config = {
        type: Phaser.WEBGL,
        width,
        height,
        parent: 'БИЛО ШТО',
        dom: { createContainer: true },
        input: { activePointers: 3 },
        mipmapFilter: 'LINEAR',
        physics,
        scale: { mode: Phaser.Scale.ScaleModes.FIT, width, height },
        // scene
    };

    const game = new Phaser.Game(config);
    game.scene.add(name, new scene({ game }), auto_start)
    window.game = game // samo vo development

    // window.requestAnimationFrame(() => game.scale.setGameSize(width, height))
};
