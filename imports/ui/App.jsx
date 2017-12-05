import React from 'react';

const App = props => {
  return <div>
      <a href='/'>Home</a> <a href='/about'>About</a>
      <div>
        {props.content}
      </div>
    </div>;
};

export default App;
