import { useState } from 'react'
import './App.css'

const App = () => {
  const playFiled = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [squares, setSquares] = useState<Array<number | string>>([])

  const handleClick = (item: number) => {
    console.log("clicked", item)
  }

  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <div className='first-row'>
            {playFiled.map((item) => {
              return (
                <button key={item} value={item} className='square' onClick={() => handleClick(item)}/>
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
