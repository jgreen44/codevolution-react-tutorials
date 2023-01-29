import React, { Component } from 'react';

import { IProps, IState } from '../../types';

export class ClassCounterOne extends Component<IProps, Pick<IState, 'count' | 'name'>> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
      name: '',
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (prevState.count !== this.state.count) {
      // eslint-disable-next-line no-console
      console.log('Updating document title');
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click {this.state.count} times</button>
      </div>
    );
  }
}
