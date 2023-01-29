import React, { Component } from 'react';

import { ILogMousePosition, IProps, IState } from '../../types';

export class ClassMouse extends Component<IProps, Pick<IState, 'x' | 'y'>> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (e: ILogMousePosition) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.logMousePosition);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.logMousePosition);
  }

  render() {
    return (
      <div>
        X - {this.state.x} Y - {this.state.y}
      </div>
    );
  }
}
