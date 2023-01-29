import { Prev } from '../prev/prev'
import { Play } from '../play/play'
import { Next } from '../next/next'
import { Repeat } from '../repeat/repeat'
import { Shuffle } from '../shuffle/shuffle'

export const Controls = () => {
  return (
    <div className="player__controls">
      <Prev />
      <Play />
      <Next />
      <Repeat />
      <Shuffle />
    </div>
  )
}
