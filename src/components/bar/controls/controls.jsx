import { Prev } from '../prev/prev'
import { Play } from '../play/play'
import { Next } from '../next/next'
import { Repeat } from '../repeat/repeat'
import { Shuffle } from '../shuffle/shuffle'
import { ControlsPlayer } from './controlsStyle.jsx'

export const Controls = () => {
  return (
    <ControlsPlayer>
      <Prev />
      <Play />
      <Next />
      <Repeat />
      <Shuffle />
    </ControlsPlayer>
  )
}
