import './index.css'


const faqsList = [
    {
      id: 0,
      questionText: 'What is ISRO?',
      answerText:
        'ISRO stands for indian space research organization',
    },
    {
      id: 1,
      questionText: 'where is it located?',
      answerText:
        'It is located in Sriharikota of Andra Pradesh.',
    },
    {
      id: 2,
      questionText:
        'who is the founding father of ISRO?',
      answerText:
        'Dr Vikram A Sarabhai is considered as the founding father of space programmes in India.',
    },
    {
      id: 3,
      questionText: 'when is ISRO Formed?',
      answerText:
        'ISRO was formed on August 15, 1969.',
    },
  ]

const FaqItem = props => {
  const {faqDetails, onButtonClicked} = props
  const {questionText, buttonClicked, id, answerText} = faqDetails
  const imgUrl = buttonClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
  const onButtonStatusChange = () => {
    onButtonClicked(id)
  }

  return (
    <li className="list-item-container">
      <div className="list-item-top-section">
        <h1 value="question">{questionText}</h1>
        <button className="button" type="button" onClick={onButtonStatusChange}>
          <img src={imgUrl} alt={buttonClicked ? 'minus' : 'plus'} />
        </button>
      </div>
      {buttonClicked && (
        <div>
          <hr />
          <p value="answer">{answerText}</p>
        </div>
      )}
    </li>
  )
}



/******************************************************************* */

import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faqsList: props.faqsList.map(eachItem => ({
        ...eachItem,
        buttonClicked: false,
      })),
    }
  }

  onButtonClicked = id => {
    const {faqsList} = this.state
    const updatedList = faqsList.map(eachItem => {
      if (id === eachItem.id) {
        return {...eachItem, buttonClicked: !eachItem.buttonClicked}
      }
      return {...eachItem}
    })
    this.setState({faqsList: updatedList})
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="app-container">
        <h1 className="main-heading">FAQs</h1>
        <ul className="list-container">
          {faqsList.map(eachItem => (
            <FaqItem
              key={eachItem.id}
              onButtonClicked={this.onButtonClicked}
              faqDetails={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs