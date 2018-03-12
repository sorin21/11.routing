import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null
    }

    componentDidMount() {
      // importComponent is the argument and must be a function
      importComponent()
      // cmp.default is the component that we load dinamically
        .then(cmp => {
          this.setState({ component: cmp.default });
        });
    }

    render() {
      const C = this.state.component;
      // check if C is set, pass any props that this component needs
      return C ? <C {...this.props} /> : null;
    }
  }
}

export default asyncComponent;