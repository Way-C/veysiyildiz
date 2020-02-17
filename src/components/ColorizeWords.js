import React, { Component } from 'react';
import data, { getRandomColor } from '../data';

class ColorizeWords extends Component {
	render() {
        const seperator = this.props.seperator;
        const words = this.props.text.split(seperator || ' ');
        if (!data) {
            return (
              <p>loading...</p>
            );
          }
		return words && words.map((word, key)=>(
      <span key={key} style={{color: getRandomColor()}}>{word}{seperator || ' '}</span>
    ))
	}
}

export default ColorizeWords;