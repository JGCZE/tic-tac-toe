import { ReactElement } from "react";

interface IProps {
  value: number;
}

const Square = ({ value }:IProps):ReactElement => {
  const handleClick = () => {
    console.log('clicked', value)
  }

  return (
    <div>
      <button onClick={handleClick}> {value} </button>
    </div>
  )
}

export default Square
