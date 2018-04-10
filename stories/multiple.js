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

const onSnaping = () => {

}

let guide = null

export default () => {

  setTimeout(() => {
    guide.chart();
  }, 1000)

  return (
    <DraggableAlignGuide
      ref={(o) => { guide = o }}
      className="DraggableAlignGuide"
      onSnaping={onSnaping}
      snapTreshhold={2}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {[...Array(3).keys()].map((_, i) => {
        return <Rnd
          bounds="parent"
          style={style}
          default={{
            width: 200,
            height: 200,
            x: 100 * i,
            y: 100 * i,
          }}
        >
          00{i}
        </Rnd>
      })}
    </DraggableAlignGuide >
  )
};
