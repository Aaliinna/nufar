var game = new Phaser.Game(640, 480, Phaser.CANVAS, 'testing-poo', { preload: preload, create: create, update: update, render: render });

function preload() {
	
	game.load.tilemap('level1', 'level1.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('tiles1', 'tiles1.png');
	game.load.spritesheet('mingen', 'mingen-walk.png', 32, 32);
}

var map;
var layer;
var player;
var cursors;
var fullscreen;

var facing = 'right';
var jumptimer = 0;

var MAX_SPEED = 500;
var ACCELERATION = 1500;
var DRAG = 400;
var GRAVITY = 2600;
var JUMP_SPEED = -1000;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = '#202121';
	
	map = game.add.tilemap('level1');
	map.addTilesetImage('tiles1');
	map.setCollisionBetween(0, 100);
	
	layer = map.createLayer('Tile Layer 1');
	layer.resizeWorld();
	
	player = game.add.sprite(64, 64, 'mingen');
	game.physics.arcade.enable(player);
	player.body.collideWorldBounds = true;
	player.body.maxVelocity.setTo(MAX_SPEED, MAX_SPEED * 10);
	player.body.drag.setTo(DRAG, 0);
	game.physics.arcade.gravity.y = GRAVITY;
	
	player.animations.add('right', [0, 1, 2, 3], 10, true);
	player.animations.add('left', [4, 5, 6, 7], 10, true);
	
	cursors = game.input.keyboard.createCursorKeys();
	
	fullscreen = game.input.keyboard.addKey(Phaser.Keyboard.O);
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
	fullscreen.onDown.add(gofull, this);
	
	game.camera.follow(player);
}

function gofull() {

    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }

}

function update() {

	game.physics.arcade.collide(player, layer);
	
	if (cursors.left.isDown) {
        // If the LEFT key is down, set the player velocity to move left
        player.body.acceleration.x = -ACCELERATION;
		if (facing != 'left')
        {
            player.animations.play('left');
            facing = 'left';
        }
    } 
	else if (cursors.right.isDown) {
        // If the RIGHT key is down, set the player velocity to move right
        player.body.acceleration.x = ACCELERATION;
		if (facing != 'right')
        {
            player.animations.play('right');
            facing = 'right';
        }
    } 
	else {
        player.body.acceleration.x = 0;
		player.animations.stop();
		 if (facing == 'right')
            {
                player.frame = 0;
            }
            else
            {
                player.frame = 5;
            }
    }
	if (cursors.up.isDown && player.body.onFloor() && game.time.now > jumpTimer) {
		player.body.velocity.y = JUMP_SPEED;
		jumpTimer = game.time.now + 400;
	}
}
