import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log('CONSTRUCTOR');
    this.state = {
      counter: this.props.count,
    };
    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    console.log(this);
    this.setState({
      counter: this.state.counter + 1,
    });
    // throw new Error('I am custom error');
  }

  componentDidMount() {
    console.log('COUNTER MOUNTED');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({ prevProps, prevState });
    console.log('UPDATED');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log({ nextProps, nextState });
    return true;
  }

  getSnapshotBeforeUpdate(a) {
    console.log('SNAPSHOT');
    return {
      a: 10,
    };
  }
  render() {
    return (
      <>
        <p>Count - {this.state.counter}</p>
        <button
          onClick={this.increaseCounter}
          className='border-none tracking-wider capitalize  shadow shadow-slate-400 px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded text-white'
        >
          Click
        </button>
      </>
    );
  }
}

export default Counter;
