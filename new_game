
Mingen.Level1 = function (game) {

};

Mingen.Level1.prototype = {

  create: function () {

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.stage.backgroundColor = '#202121';
	
	this.spikes1 = this.add.sprite(289, 616, 'spikes1');
	
	this.map = this.add.tilemap('level1');
	this.map.addTilesetImage('tiles1');
	this.layer = this.map.createLayer('Tile Layer 1');
	this.layer.resizeWorld();
	this.map.setCollisionBetween(0, 100);
	
	
	this.player = this.add.sprite(64, 64, 'mingen');
	this.physics.arcade.enable(this.player);
	this.player.body.collideWorldBounds = true;
	
	this.player.animations.add('right', [0, 1, 2, 3], 10, true);
	this.player.animations.add('left', [4, 5, 6, 7], 10, true);
	this.player.animations.add('rightJ', [1], 10, true);
	this.player.animations.add('leftJ', [5], 10, true);
	
	this.player.animations.add('mingFL', [8], 10, true);
	this.player.animations.add('mingFR', [9], 10, true);
	
	this.camera.follow(this.player);
	this.cursors = this.input.keyboard.createCursorKeys();
	
	this.facing = 'right';
	this.jumpTimer = 0;
	this.damageTimer = 0;
	this.invincible = false;
	this.cantMove = false;
	this.cantMoveTimer = 0;
	this.physics.arcade.enable(this.spikes1);
	this.rekt = false;
	
	this.hBar4 = this.add.sprite(2,-8, 'hBar');
	this.player.addChild(this.hBar4);
	this.hBar3 = this.add.sprite(-6,-4, 'hBar');
	this.player.addChild(this.hBar3);
	this.hBar2 = this.add.sprite(-10,4, 'hBar');
	this.player.addChild(this.hBar2);
	this.hBar1 = this.add.sprite(-6,12, 'hBar');
	this.player.addChild(this.hBar1);

	
	this.player.body.maxVelocity.setTo(Mingen.MAX_SPEED, Mingen.MAX_SPEED * 2);
	this.player.body.drag.setTo(Mingen.DRAG, 0);
	this.physics.arcade.gravity.y = Mingen.GRAVITY;
	
	
  },

  update: function () {
  
		this.pooo = this.physics.arcade.overlap(this.player, this.spikes1);
  
		this.physics.arcade.collide(this.player, this.layer);
		this.physics.arcade.collide(this.spikes1, this.layer);
    //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

	
	
	

if (this.pooo && this.game.time.now > this.damageTimer) {
	
		this.player.body.velocity.x = -400;
		this.player.body.velocity.y = -600;
		this.player.animations.stop();
		this.player.animations.play('mingFL');
		
		
	
	this.damageTimer = this.game.time.now + 500;
		
	}




	
if (this.cantMove==false)
	{	
	if (this.cursors.left.isDown) {
        // If the LEFT key is down, set the player velocity to move left
        this.player.body.acceleration.x = - Mingen.ACCELERATION;
		if (this.player.body.onFloor())
		{
			this.player.animations.play('left');
		}
		else
		{
			this.player.animations.play('leftJ');
		}
		if (this.facing != 'left')
        {
            this.facing = 'left';
        }
		
    } 
	else if (this.cursors.right.isDown) {
        // If the RIGHT key is down, set the player velocity to move right
        this.player.body.acceleration.x = Mingen.ACCELERATION;
		if (this.player.body.onFloor())
		{
			this.player.animations.play('right');
		}
		else
		{
			this.player.animations.play('rightJ');
		}
		if (this.facing != 'right')
        {
            this.facing = 'right';
        }
    } 
	else {
		if (this.facing != 'idle') {
			this.player.body.acceleration.x = 0;
			this.player.animations.stop();
			if (this.facing == 'right') 
			{
				this.player.frame = 0;
            }
            else
            {
                this.player.frame = 4;
            }
			this.facing = 'idle';
		}
    }
	//Variable height jumping 
	if (this.cursors.up.isDown && this.player.body.onFloor()) 
	{
		this.player.body.velocity.y = Mingen.JUMP_SPEED;
		this.jumpTimer = 1
	}
	else if (this.cursors.up.isDown && this.jumpTimer != 0) 
	{
		if (this.jumpTimer > 10){
			this.jumpTimer = 0;
			}
		else {
			this.jumpTimer++;
			this.player.body.velocity.y = Mingen.JUMP_SPEED;
			}
	}
	else if (this.jumpTimer != 0) {
		this.jumpTimer = 0;
		}
	
	}
  },

  quitGame: function (pointer) {

    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

    //  Then let's go back to the main menu.
    this.state.start('MainMenu');

  }
  


};
