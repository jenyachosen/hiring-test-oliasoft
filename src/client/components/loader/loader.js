import React from 'react'
import {Spinner, Loader} from '~gui-library';

export const Load = () => (
  <Loader cover text="Loading..." theme="light">
    <Spinner dark />
  </Loader>
)