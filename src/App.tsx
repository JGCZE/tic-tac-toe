import './App.css'
import Square from './components/Square'

const App = () => {

  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <div className='first-row'>
            <Square value={1} />
            <Square value={2} />
            <Square value={3} />
          </div>
          <div className='second-row'>
            <Square value={4} />
            <Square value={5} />
            <Square value={6} />
          </div>
          <div className='third-row'>
            <Square value={7} />
            <Square value={8} />
            <Square value={9} />
          </div>
        </div>


      </div>
    </>
  )
}

export default App
