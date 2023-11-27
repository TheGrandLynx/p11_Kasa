import { useState, useRef, useEffect } from 'react'
import Chevron from '../../assets/chevronDown.svg'

export default function Collapse(props) {
  const [toggle, setToggle] = useState(false) //we set the toggle state wihich is by default false
  const [heightCollapse, setHeightCollapse] = useState() //we set the state of the height of the collapse

  const toggleState = () => {
    //in order to change the value of toggle on clic
    setToggle(!toggle)
  }

  const refHeight = useRef() //get and stock the height of an open collapse

  useEffect(() => {
    //starting at the building of the component, set the height of the collapse when it's first opened
    //and stores it in refheight
    setHeightCollapse(`${refHeight.current.scrollHeight}px`)
  }, [])

  return (
    //first we show the collapse close by default
    //on clic we open it
    //still on clic we make it disappearby erasing text and style
    <div className={`collapse ${props.aboutStyle}`}>
      <div onClick={toggleState} className="collapse__visible">
        <h2>{props.aboutTitle}</h2>
        <img
          className={toggle ? 'chevron rotatedChevron' : 'chevron'}
          src={Chevron}
          alt="chevron"
        />
      </div>
      <div
        ref={refHeight}
        className={
          toggle ? 'collapse__toggle animatedChevron' : 'collapse__toggle'
        }
        style={{ height: toggle ? `${heightCollapse}` : '0px' }}
      >
        <p aria-hidden={toggle ? 'true' : 'false'}>{props.aboutText}</p>
      </div>
    </div>
  )
}
