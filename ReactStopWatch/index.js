import {Component} from 'react'
import './index.css'

let timerId = null

class Stopwatch extends Component {
  state = {timeElapsedInSeconds: 0}

  getTimeElapsedInSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  startButtonClicked = () => {
    console.log('Button CLicked')
    clearInterval(timerId)
    timerId = setInterval(() => {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    }, 1000)
  }

  stopButtonClicked = () => {
    console.log('Button s CLicked')
    clearInterval(timerId)
  }

  resetButtonClicked = () => {
    clearInterval(timerId)
    this.setState({timeElapsedInSeconds: 0})
  }

  render() {
    return (
      <div className="app-container">
        <div className="stop-watch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <span>Timer</span>
            </div>

            <h1 className="timer">{this.getTimeElapsedInSeconds()}</h1>
            <div className="button-container">
              <button
                className="button start"
                onClick={this.startButtonClicked}
                type="button"
              >
                Start
              </button>
              <button
                className="button stop"
                onClick={this.stopButtonClicked}
                type="button"
              >
                Stop
              </button>
              <button
                className="button reset"
                onClick={this.resetButtonClicked}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
