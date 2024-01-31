import { useState } from 'react'
import './App.css'

const App = () => {
  const playFiled = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [Xscore, setXScore] = useState<Array<number | string>>([])
  const [Oscore, setOScore] = useState<Array<number | string>>([])
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
      setOScore([...Oscore, item])
      setXIsNext(true)
    }
  }
  
  console.log("score X: ", Xscore)
  console.log("score O: ", Oscore)
  
  const calculateWinner = () => {
    const winner = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      
      [1, 5, 9],
      [3, 5, 7]
    ]
    for (let i = 0; i < winner.length; i++) {
      const [a, b, c] = winner[i]
      if (Xscore.includes(a) && Xscore.includes(b) && Xscore.includes(c)) {
        console.log("X is winner")
      } else if (Oscore.includes(a) && Oscore.includes(b) && Oscore.includes(c)) {
        console.log("O is winner")
      }
    }
  }
  calculateWinner()
  
  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <div className='first-row'>
            {playFiled.map((item) => {
              return (
                <button key={item} value={item} className='square' onClick={() => handleClick(item)}>
                  {Xscore.includes(item) ? 'X' : Oscore.includes(item) ? 'O' : ''}
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
