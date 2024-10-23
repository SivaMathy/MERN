import React from 'react';
import '../styles/button.scss';
import ArrowSvg from '../assets/arrow.svg'

class Button extends React.Component {
  render() {
    const { text, onClick, className, type = 'button' } = this.props; 
    return (
      <button type={type} className={className} onClick={onClick}>
        {text}
        {/* <img src={ArrowSvg} className='svgIcon'/> */}
      </button>
    );
  }
}

export default Button;