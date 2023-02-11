import React, {useState} from 'react'

import './index.css'

function App() {

  // state
  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(0)
  const [result, setresult] = useState('')
  const [message, setMessage] = useState('')



  let calc = (event) => {
    //prevent submitting
    event.preventDefault()

    }
  }



  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>React Calculator</h2>
        <form onSubmit={calc}>
          <div>
            <input value={num1} onChange={(e) => setnum1(e.target.value)} />
          </div>
          <div>
            <input value={num2} onChange={(event) => setnum2(event.target.value)} />
          </div>
          <div>
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
          </div>
        </form>

        <div className='center'>
          <h3>Result= {result}</h3>
          <p>{message}</p>
        </div>

      </div>
    </div>
  );
}

export default App;