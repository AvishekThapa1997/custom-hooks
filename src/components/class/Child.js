import { Component } from 'react';

class Child extends Component {
  componentDidMount() {
    console.log('CHILD COMPONENT MOUNTED');
  }
  render() {
    return (
      <>
        <div>CHILD</div>
      </>
    );
  }
}

export default Child;
