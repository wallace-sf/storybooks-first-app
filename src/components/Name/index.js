import React from 'react';

import './Name.css';

export default function Name(props) {
  const {type, name} = props;

  return (
      <div className={`name ${type ? type : ''}`}>{name}</div>
    )
}