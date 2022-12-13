// Write your code here.
import {Component} from 'react'
import './index.css'

export default class EmojiCard extends Component {
  render() {
    const {
      eachEmoji,
      key,
      shuffledEmojisList,
      setRandomEmojisToList,
      checkPreviouslyClickedOrNotAndRender,
    } = this.props
    const {emojiName, emojiUrl, id} = eachEmoji
    console.log(shuffledEmojisList)

    this.changeToRandomList = () => {
      setRandomEmojisToList(id)
      checkPreviouslyClickedOrNotAndRender(id)
    }

    return (
      <li key={key} className="emoji-card-container">
        <button
          onClick={this.changeToRandomList}
          className="button-style"
          type="button"
        >
          <img alt={emojiName} src={emojiUrl} />
        </button>
      </li>
    )
  }
}
