import './App.css';
import React from 'react';
import BloodMoon from './bloodmoon';

class App extends React.Component{
  render(){
    return (
      <div className='App'>
        {/* BLOODMOON BACKGROUND */}
        {
          this.props.isBloodMoon
            ? <BloodMoon />
            : <div />
        }

        {/* TITLE */}
        <h1 id='app-title'>Axie Energy Calculator</h1>

        {/* BLOODMOON TITLE */}
        {
          this.props.isBloodMoon
            ? <h1 id='bloodmoon-title'>Bloodmoon Curse</h1>
            : <div />
        }

        <div id="content-container">
          <div id='side-button-container'>
            {/* RESET BUTTON */}
            <button id='reset-button' onClick={this.props.resetRound}>Reset</button>

            {/* UNDO BUTTON */}
            <button id='undo-button' onClick={this.props.undoRound}>Undo</button>
          </div>

          {/* ROUND COUNT */}
          <p id='round-count'>Round {this.props.roundCount}</p>

          {/* ENERGY COUNT */}
          <p id='energy-count'>{this.props.energyCount}</p>

          {/* INCREMENT/DECREMENT BUTTONS */}
          <div id='count-button-container'>
            <button id='button-decrement' onClick={this.props.removeEnergy}>-</button>
            <button id='button-increment' onClick={this.props.addEnergy}>+</button>
          </div>

          {/* END TURN BUTTON */}
          <button id='end-turn-button' onClick={this.props.endTurn}>End Turn</button>
        </div>
      </div>
    );
  }
}

export default App;
