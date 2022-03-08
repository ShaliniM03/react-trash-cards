import React from 'react';
import './index.css';

const MainCard = (props) => {
  return (
    <div className="mainCard">
      <i class="fa fa-trash" aria-hidden="true" />
      <p className="mainCard_text">Trash</p>
    </div>
  );
};

export default MainCard;
