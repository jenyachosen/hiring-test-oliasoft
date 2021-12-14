import React from 'react'
import {Input} from '~gui-library';

export const SearchInput = ({value, onChange}) => (
  <Input 
    value={value}
    placeholder='Find site'
    name='search-sites' 
    onChange={onChange}
    width='300px'
  />
)
