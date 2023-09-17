import { Component } from 'react';

class Parent extends Component {
  componentDidMount() {
    console.log('PARENT COMPONENT MOUNTED');
  }

  render() {
    return (
      <>
        <div>{this.props.children}</div>
        {console.log('PARENT')}
      </>
    );
  }
}

export default Parent;
