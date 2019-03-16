import React, { Component } from 'react';
import logo from '../../logo.svg';

export class Photo extends Component {
  state = {
    isFlipped: false,
  };

  flipPhoto = (event) => {
    console.debug("Photo " + this.props.alt + " Flipped");
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  };

  render() {
    return (
      <input
        type={"image"}
        onClick={(event) => {
          this.flipPhoto(event);
        }}
        src={this.state.isFlipped ?
          logo
          :
          this.props.src
        }
        alt={"Photo of " + this.props.alt}
        className={"Photo"}
      />
    )
  }
}
