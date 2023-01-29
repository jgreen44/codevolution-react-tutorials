import React, { Component } from 'react';

import { IProps, IState } from '../../types';

export class ClassCounter extends Component<IProps, Pick<IState, 'count'>> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    );
  }
}
