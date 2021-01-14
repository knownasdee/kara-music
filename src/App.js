import React from 'react';
import ReactPlayer from 'react-player';

import './App.css';

function App() {
  return (
    <div className="app">
        <div className="title">
            <b><span>K</span>A<span>R</span>I<span>NH</span>O</b>
        </div>
        <div className="content">
            <div className="video">
                <ReactPlayer width="400px" height="250px" url="https://www.youtube.com/watch?v=-KkJEZ5Atgw&ab_channel=karamatik" />
            </div>
        </div>
    </div>
  );
}

export default App;
