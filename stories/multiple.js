/* eslint-disable */

import React from 'react';
import Rnd from '../src';
import { DraggableAlignGuide } from 'react-draggable-rotate';
console.log('Draggable', DraggableAlignGuide);

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
};
const rndTemp = {}
let _currentRND = null
const onSnaping = (snap) => {
  if (_currentRND) {
    _currentRND.draggable.moveSnaping(snap)
  }
}

let guide = null

export default () => {

  setTimeout(() => {
    guide.refresh();
  }, 300)

  return (
    <DraggableAlignGuide
      ref={(o) => { guide = o }}
      wrapperProps={{
        className: "DraggableAlignGuide"
      }}
      onSnaping={onSnaping}
      snapTreshhold={5}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {[...Array(3).keys()].map((_, i) => {
        return <Rnd
          ref={(e) => { rndTemp[i] = e }}
          bounds="parent"
          style={style}
          default={{
            width: 200,
            height: 200,
            x: 100 * i,
            y: 100 * i,
          }}
          onDrag={(e, data) => {
            _currentRND = rndTemp[i]
          }}
        >
          00{i}
        </Rnd>
      })}
    </DraggableAlignGuide >
  )
};
