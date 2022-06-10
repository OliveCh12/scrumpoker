import React from 'react'
import {BiShareAlt} from "react-icons/bi"
import {GiPokerHand} from "react-icons/gi"

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="app__header">
        <div className="app__header-container">
            <h1 className="app__header-brand"><GiPokerHand  size={25}/> ScrumPoker</h1>
          <span className="app__header-room-id">Room: #432123 <BiShareAlt /></span>
            {/* <span className="app__header-user">OC</span> */}
        </div>
    </header>
  )
} 

export default Header