import React from 'react';

export class Font extends React.PureComponent {
  render() {
    return <p>{this.props.children}</p>;
  }
}
