class gamewindow extends Phaser.Scene {

    gamewindow(){
        var keyA;
        var keyD;
        var keySpace;
        var snowballsize = 0.2; 
    }
    constructor () {
        super('gamewindow');
        
    }

    init() {
        // Used to prepare data
    }

    preload() {
        this.load.image("ground", "assets/platform.png");
        this.load.image("star", "assets/star.png");
        this.load.image("snowball", "assets/Snowball.png");
        this.load.image("emisod", "assets/emisod.jpg");
    }

    create(data) {
        
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        this.add.image(400, 300, 'emisod');
        platforms = this.physics.add.staticGroup();
        this.add.text(280, 100, 'Round 1', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize:"50px"})
    
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        platforms.create(360, 400, 'ground').setScale(0.3).refreshBody();
        player = this.physics.add.sprite(360, 500, 'star');
    
        player.setBounce(0.05);
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player, platforms);
    
        snowball = this.physics.add.group({
            key: 'snowball',
            repeat: 50,
            setXY: { x: 12, y: 0, stepX: 22 },
            setScale: {x: snowballsize,y: snowballsize}
        });
        snowball.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
    
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(snowball, platforms);
    
        this.physics.add.overlap(player, snowball, hitball, null, this);
    }

    update(time, delta) {
        if (keyA.isDown)
        {
            player.setVelocityX(-160);
        }
        else if (keyD.isDown)
        {
            player.setVelocityX(160);
        }
        else
        {
            player.setVelocityX(0);
        }
    
        if (keySpace.isDown && player.body.touching.down)
        {
            player.setVelocityY(-200);
        }    }
}

function hitball ()
    {
        player.disableBody(true, true);
        console.log("Hit");
    }
export default gamewindow;