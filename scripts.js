// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');
// our game's configuration
let config = {

    parent: divId,


    width: window.innerWidth,
    height: window.innerHeight,

    scale: {
        // Or set parent divId here
        parent: divId,

        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,

        // Or put game size here
        // width: 1024,
        // height: 768,

        // Minimum size
        min: {
            width: 800,
            height: 600
        },
        // Or set minimum size like these
        // minWidth: 800,
        // minHeight: 600,

        // Maximum size
        max: {
            width: 1600,
            height: 1200
        },
        // Or set maximum size like these
        // maxWidth: 1600,
        // maxHeight: 1200,

        zoom: 1,  // Size of game canvas = game size * zoom
    },
    autoRound: false
    // ...
    scene: gameScene // our newly created scene
};
// create the game, and pass it the configuration
let game = new Phaser.Game(config);

// load asset files for our game
gameScene.preload = function () {
    // load images
    this.load.image('background', 'background.jpg');
};
// executed once, after assets were loaded
gameScene.create = function () {
    // background
    this.add.sprite(0, 0, 'background');
}