import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeId: event.target.value})
  }

  geCountry = () => {
    const {activeId} = this.state

    const ActiveCountryAndCapital = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeId,
    )

    return ActiveCountryAndCapital.country
  }

  render() {
    const {activeId} = this.state
    const country = this.geCountry(activeId)

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              value={activeId}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  className="option"
                  key={eachItem.id}
                  value={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country"> {country} </p>
        </div>
      </div>
    )
  }
}

export default Capitals
