import React from 'react'
import { type Icon } from '../types'

export const Card = ({ src }: Pick<Icon, 'src'>) => {
  return <img src={src}></img>
}
