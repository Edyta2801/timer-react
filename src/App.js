import React, {Component} from 'react';
import './App.css';

class TimerClass extends Component {
  state={
    counter:0
  };
   render(){
     const {counter}= this.state;
     return(<h2>{counter}</h2>);
   };
   componentDidMount(){
     this.counterRef=setInterval(()=>{
       this.setState({counter:this.state.counter +1});
     },1000)
   }
   componentWillUnmount(){
     clearInterval(this.counterRef);
   }

}

export default function App(){
  return(
    <div className="App">
      <TimerClass/>
    </div>
  )
}
