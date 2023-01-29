import React, { Component } from 'react';

import { IProps, IState } from '../../types';

export class ClassTimer extends Component<IProps, Pick<IState, 'timer'>> {
  interval: string | number | NodeJS.Timer | undefined;

  constructor(props: IProps) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => this.setState({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Class Timer - {this.state.timer} -<button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
      </div>
    );
  }
}
