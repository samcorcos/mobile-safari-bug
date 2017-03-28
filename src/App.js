import React, { Component } from 'react';
import './App.css';

const styles = {
  container: {
    position: 'relative',
    height: 100,
    width: 300,
  },
  input: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    color: 'black',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: '1px solid black',
    borderRadius: 0,
    marginLeft: 30,
    marginRight: 30,
    fontSize: '2.6em',
    width: 240,
    textAlign: 'center',
    backgroundColor: 'transparent',
    outline: 'none',
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.container}>
          <input
            style={styles.input}
            placeholder="PLATE"
            type="text"  />
        </div>
      </div>
    );
  }
}

export default App;
