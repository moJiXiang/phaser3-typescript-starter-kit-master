import * as Phaser from 'phaser';
import Scenes from './scenes';
let game: Phaser.Game

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sample',

  type: Phaser.AUTO,

  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },

  scene: Scenes,

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },

  parent: 'content',
  backgroundColor: '#000000',
};

game = new Phaser.Game(gameConfig);


window.addEventListener('resize', () => {
  game.scale.refresh();
});


const clearButton = document.getElementById("clear")
clearButton.addEventListener("click", async () => {
  console.log("click clear button")
 
  game.destroy(true);
  // new Phaser.Renderer.WebGL.WebGLRenderer(game).flush()

})

const loadButton = document.getElementById("load")
loadButton.addEventListener("click", async () => {
  console.log("click load button")
 
  game = new Phaser.Game(gameConfig);


})