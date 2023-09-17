import { Component } from 'react';
class Errorboundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    console.log('DERIVED STATE FROM ERROR');
    return { isError: true, error };
  }

  componentDidMount() {
    console.log('ERROR BOUNDARY MOUNTED');
  }

  //   componentDidCatch(error) {
  //     console.log('CATCH');
  //     this.setState({
  //       isError: true,
  //       error,
  //     });
  //   }
  render() {
    console.log(this.state.isError);
    if (this.state.isError) {
      return <p>{this.state.error.message}</p>;
    }
    return this.props.children;
  }
}

export default Errorboundary;
