import { useState } from 'react'
import './App.css'

const App = () => {
  const playFiled = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [Xscore, setXScore] = useState<Array<number | string>>([])
  const [Yscore, setYScore] = useState<Array<number | string>>([])
  const [xIsNext, setXIsNext] = useState<boolean>(true)

  const handleClick = (item: number) => {
    console.log("clicked", item)
    nextMove(item)
  }

  const nextMove = (item:number) => {
    if (xIsNext) {
      setXScore([...Xscore, item])
      setXIsNext(false)
    } else {
      setYScore([...Yscore, item])
      setXIsNext(true)
    }
  }

  console.log("score X: ", Xscore)
  console.log("score Y: ", Yscore)

  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <div className='first-row'>
            {playFiled.map((item) => {
              return (
                <button key={item} value={item} className='square' onClick={() => handleClick(item)}>
                  {}
                </button>
              ) 
            }
            )}
          </div>
        </div>


      </div>
    </>
  )
}

export default App
