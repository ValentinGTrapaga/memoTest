import { type Icon } from '../types'
import { Card } from './Card'

type cardProps = {
  icons: Icon[]
}

export const MemoBoard = ({ icons }: cardProps) => {
  return (
    <div>
      {' '}
      {icons.map((icon) => (
        <Card src={icon.src} />
      ))}
    </div>
  )
}
