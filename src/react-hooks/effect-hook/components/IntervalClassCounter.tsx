import React, { Component } from 'react';

import { IProps, IState } from '../../types';

export class IntervalClassCounter extends Component<IProps, Pick<IState, 'count'>> {
  private interval: NodeJS.Timer | undefined;
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return <h1>{this.state.count}</h1>;
  }
}
