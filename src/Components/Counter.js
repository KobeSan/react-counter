import React from 'react';
import Button from '@material-ui/core/Button';


class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increment = () => {
    const count = this.state.count;
    this.setState({count: count + 1});
  }
  decrement = () => {
    const count = this.state.count;
    if(count > 0){
      this.setState({count: count - 1});
    }
  }
  render() {
    const count = this.state.count;
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.increment}>+1</Button>
        <p>{count}</p>
        <Button variant="contained" color="primary" onClick={this.decrement}>-1</Button>
      </div>
    );
  }
}

export default Counter;