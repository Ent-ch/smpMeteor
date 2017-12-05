import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Footer from './Footer';

const App = props => {
  return <MuiThemeProvider>
      <div>
        <Header />
        <div className='contentWrapper'>
          {props.content}
        </div>
        <Footer />
      </div>
  </MuiThemeProvider>;
};

export default App;
