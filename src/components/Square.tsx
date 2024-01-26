import { useState } from "react";
import { ReactElement } from "react";
import styles from "./Square.module.css"

interface IProps {
  value: number;
}

const Square = ({ value }:IProps):ReactElement => {  
  const [clickedSquared, setClickedAquared] = useState<number | string>("")

  const handleClick = () => {
    setClickedAquared(() => "X")
    console.log("clicked", value)
  }

  return (
  <div>
      <button
        onClick={handleClick}
        className={styles.square}
      > 
        {clickedSquared} 
      </button>
    </div>
  )
}

export default Square
