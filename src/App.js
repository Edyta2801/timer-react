import React, { useState, useEffect, Component } from 'react';
import './App.css';

class TimerClass extends Component {
  state = {
    counter: 0
  };
  render() {
    const { counter } = this.state;
    return (<h2>{counter}</h2>);
  };
  componentDidMount() {
    this.counterRef = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.counterRef);
  }

}

function TimerFn() {
  const[ counter, setCounter ] = useState(0);


  useEffect(() => {
    const counterRef = setInterval(() => {
      setCounter(counter=>counter + 1);
    }, 1000);
    return () => clearInterval(counterRef);
  }, []);
  return <h2>{counter}</h2>;

}



const Counter=()=>{
  const [start, setStart]=useState(0);
  const handleSetStart=()=>setStart(start+1);

  setTimeout(()=>handleSetStart(),1000);
  return <p>{start}</p>;
}




export default function App() {
  return (
    <div className="App">
      <TimerClass />
      <TimerFn />
      <Counter/>
    </div>
  )
}
