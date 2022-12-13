import {Component} from 'react'
import './index.css'

export default class NavBar extends Component {
  render() {
    const {totalScore, score, isPreviouslyClicked} = this.props

    let scoresContainer
    if (isPreviouslyClicked === false) {
      scoresContainer = (
        <div className="nav-2-container">
          <p className="score">Score: {score}</p>
          <p>Top Score: {totalScore}</p>
        </div>
      )
    } else {
      scoresContainer = null
    }

    return (
      <nav className="navbar-container">
        <div className="nav-1-container">
          <img
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1>Emoji Game</h1>
        </div>
        {scoresContainer}
      </nav>
    )
  }
}
