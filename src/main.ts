import * as Phaser from 'phaser';
import Scenes from './scenes';
let game: Phaser.Game;

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

// game = new Phaser.Game(gameConfig);

window.addEventListener('resize', () => {
  // game.scale.refresh();
});

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', async () => {
  console.log('click clear button');

  // game.destroy(true);
  // new Phaser.Renderer.WebGL.WebGLRenderer(game).flush()

  const iframe = document.getElementById('iframe-scene') as HTMLIFrameElement;
  console.log("Get iframe" , iframe)
  iframe.src = 'about:blank';

  if (iframe) {
    try {
      iframe.contentWindow.document.write('');
      iframe.contentWindow.document.clear();
      iframe.contentWindow.close();
    } catch (error) {
      console.log(error);
    }
  }

  iframe.parentElement.removeChild(iframe);
});

const loadButton = document.getElementById('load');
loadButton.addEventListener('click', async () => {
  console.log('click load button');

  const iframe = document.createElement("iframe")
  iframe.setAttribute('id', 'iframe-scene');
  iframe.setAttribute('src', 'test.html');
  iframe.setAttribute('style', 'display:block;');
  iframe.setAttribute('frameborder', '0');
  iframe.style.height = '100%';
  iframe.style.width = '100%';
  iframe.style.border = 'none';
  document.body.appendChild(iframe)

  // game = new Phaser.Game(gameConfig);
});
