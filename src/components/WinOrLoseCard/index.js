import {Component} from 'react'
import './index.css'

export default class WinOrLoseCard extends Component {
  render() {
    const {score, isLose, emojisListDisplay} = this.props

    this.displayEmojisList = () => {
      emojisListDisplay()
    }

    let winOrLoose
    if (isLose === 'true') {
      winOrLoose = (
        <div className="win-container">
          <div className="content-container">
            <h1>You Lose</h1>
            <p>Score</p>
            <p>{score}/12</p>
            <button
              onClick={this.displayEmojisList}
              className="play-button-style"
              type="button"
            >
              Play Again
            </button>
          </div>
          <img
            alt="win or lose"
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          />
        </div>
      )
    } else {
      winOrLoose = (
        <div className="win-container">
          <div className="content-container">
            <h1>You Won</h1>
            <p>Best Score</p>
            <p>{score}/12</p>
            <button
              onClick={this.displayEmojisList}
              className="play-button-style"
              type="button"
            >
              Play Again
            </button>
          </div>
          <img
            alt="win or lose"
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          />
        </div>
      )
    }

    return <>{winOrLoose}</>
  }
}
