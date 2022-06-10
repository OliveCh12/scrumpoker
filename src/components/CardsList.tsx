import React from 'react'

type Props = {
    children: React.ReactNode
}

const CardsList = (props: Props) => {
  return (
    <div className="cards-list">
        {props.children}
    </div>
  )
}

export default CardsList