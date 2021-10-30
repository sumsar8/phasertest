import { Game } from "phaser";
import titlescreen from "./titlescreen";

const config = {
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade'
    },
    scene: [
        titlescreen,
        gamewindow,
        scoreboard
    ]
};

new Phaser.Game(config);