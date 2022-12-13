/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

export default class EmojiGame extends Component {
  state = {
    emojiImagesList: emojisList,
    score: 0,
    totalScore: 0,
    clickedEmojisIdsList: [],
    isPreviouslyClicked: false,
  }

  shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)

  setRandomEmojisToList = id => {
    const {clickedEmojisIdsList} = this.state
    const getShuffledEmojisList = this.shuffledEmojisList()

    this.setState(prevState => ({
      score: prevState.score + 1,
      emojiImagesList: getShuffledEmojisList,
      clickedEmojisIdsList: [...prevState.clickedEmojisIdsList, id],
    }))

    console.log(clickedEmojisIdsList)
  }

  checkPreviouslyClickedOrNotAndRender = id => {
    const {clickedEmojisIdsList} = this.state

    const previouslyClicked = clickedEmojisIdsList.includes(id)
    console.log(` previouslyClicked ${previouslyClicked}`)

    if (previouslyClicked === true) {
      this.setState(prevState => ({
        isPreviouslyClicked: !prevState.isPreviouslyClicked,
      }))
    }
  }

  displayTheEmojisFunction = () => {
    const {emojiImagesList} = this.state
    const component = (
      <ul className="unordered-list-container">
        {emojiImagesList.map(eachEmoji => (
          <EmojiCard
            eachEmoji={eachEmoji}
            key={eachEmoji.id}
            shuffledEmojisList={this.shuffledEmojisList}
            setRandomEmojisToList={this.setRandomEmojisToList}
            checkPreviouslyClickedOrNotAndRender={
              this.checkPreviouslyClickedOrNotAndRender
            }
          />
        ))}
      </ul>
    )
    return component
  }

  emojisListDisplay = () => {
    this.setState({
      isPreviouslyClicked: false,
      score: 0,
      clickedEmojisIdsList: [],
    })
    this.updateTotalScore()
  }

  updateTotalScore = () => {
    const {score, totalScore} = this.state

    if (score > totalScore) {
      this.setState({
        totalScore: score,
      })
    }
  }

  isWinOrLoseFunction = () => {
    const {score, totalScore, emojiImagesList, isPreviouslyClicked} = this.state
    let component
    if (isPreviouslyClicked === false) {
      component = this.displayTheEmojisFunction()
      if (score === 12) {
        component = (
          <WinOrLoseCard
            emojisListDisplay={this.emojisListDisplay}
            score={score}
            totalScore={totalScore}
            isLose="false"
          />
        )
      }
    } else if (isPreviouslyClicked === true) {
      if (score < emojiImagesList.length) {
        component = (
          <WinOrLoseCard
            emojisListDisplay={this.emojisListDisplay}
            score={score}
            totalScore={totalScore}
            isLose="true"
          />
        )
      }
    }
    return component
  }

  render() {
    const {score, totalScore, isPreviouslyClicked} = this.state
    const component = this.isWinOrLoseFunction()

    return (
      <>
        <div className="emoji-game-container">
          <NavBar
            totalScore={totalScore}
            score={score}
            isPreviouslyClicked={isPreviouslyClicked}
          />
          <div className="total-emojis-parent-container">{component}</div>
        </div>
      </>
    )
  }
}
