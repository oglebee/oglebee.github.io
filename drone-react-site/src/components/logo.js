import React from 'react';
import './logo.css'
import Prop from './prop.js'

const Logo = () => {
  return (
    <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
      <g style={{fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeWidth: 2}}>
        <ellipse cx="36" cy="36" rx="6" ry="17"/>
        <circle cx="56" cy="56" r="10"/>
        <path d="m42 42 6.9 6.9"/>
        <circle cx="16" cy="56" r="10"/>
        <path d="m30 42-6.9 6.9"/>
        <circle cx="16" cy="16" r="10"/>
        <path d="m30 30-6.9-6.9"/>
        <circle cx="56" cy="16" r="10"/>
        <path d="m42 30 6.9-6.9"/>
      </g>
      <Prop id="prop1" className="prop" position="relative"/>
    </svg>
  );
}

export default Logo;
