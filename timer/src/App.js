import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [timer, setTimer] = useState(0);
  const [value, setValue] = useState(0);

useEffect(()=>{
let interval;
if (timer){
  interval = setInterval(()=>{
    setValue(seconds => seconds + 1)
  }, 1000);
}
else {
  clearInterval(interval);
}
return ()=> {
  clearInterval(interval);
}

}, [timer])

  const onStart =()=>{
    setTimer(true);
  }
  const onStop = ()=> {
    setTimer(false);
  }
  return (
    <div className="App">
    {value}
    <br/>
    <button onClick={onStart}>Start</button>
    <button onClick={onStop}>Stop</button>
    </div>
  );
}

export default App;
