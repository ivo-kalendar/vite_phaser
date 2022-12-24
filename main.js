import Phaser from 'phaser'
import L_System from './public/components/scenes/l_system'
import TestScene from './public/components/scenes/testScene'
// import ScaleGraphics from './public/components/scenes/scaleGraphics'
// import IsoGraphics from './public/components/scenes/isoGraphics'
// import Phaser_example_scene from './public/components/scenes/phaser_example_scene'
// import './public/engines/phaser_example'
// import './public/engines/game_engine'
import { init } from './public/engines/game'
// import './public/engines/game'

// init(ScaleGraphics, 'graphic-scene')
// init(L_System, 'l-system')
init(TestScene, 'testScene')

