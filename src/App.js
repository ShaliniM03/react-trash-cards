import React from 'react';
import './style.css';

const json = [
  {
    name: 'Trash',
    id: 'trash',
  },
  {
    name: 'Trash3',
    id: 'trash',
  },
  {
    name: 'Trash1',
    id: 'trash',
  },
  {
    name: 'Trash2',
    id: 'trash',
  },
  {
    name: 'Trash',
    id: 'trash',
  },
  {
    name: 'Trash3',
    id: 'trash',
  },
  {
    name: 'Trash1',
    id: 'trash',
  },
  {
    name: 'Trash2',
    id: 'trash',
  },
];

export default function App() {
  return (
    <div className="main">
      {json &&
        json.length > 0 &&
        json.map((item) => {
          return (
            <div className="mainCard" key={item.id}>
              <p className="mainCard_text1">{item.name}</p>
            </div>
          );
        })}
    </div>
  );
}
