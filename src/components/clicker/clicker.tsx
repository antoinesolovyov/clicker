import React from 'react';
import './clicker.css'

export const Clicker = (props: any) => (
  <button
    className="clicker"
    onClick={props.onClick}
  >
      click
  </button>
)
