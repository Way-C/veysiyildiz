import React, { Component, Fragment } from 'react';
import data, { getRandomColor } from '../data';

class ColorizeWords extends Component {
	render() {
        const words = this.props.text.split(" ");
        if (!data) {
            return (
              <p>loading...</p>
            );
          }
		return (
			<Fragment>
                {
                    words && words.map((word, key)=>(
                        <span key={key} style={{color: getRandomColor()}}>{word} </span>
                    ))
                }
			</Fragment>
		);
	}
}

export default ColorizeWords;