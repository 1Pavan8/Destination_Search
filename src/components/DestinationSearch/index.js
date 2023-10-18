// Write your code here
import {Component} from 'react'
import Destinationitem from '../DestinationItem/index'

import './index.css'

class DestinationSearch extends Component {
  state = {searchinp: ''}

  change = event => {
    this.setState({searchinp: event.target.value})
  }

  render() {
    const {searchinp} = this.state
    const {destinationsList} = this.props

    const placeslist = destinationsList.filter(eachpl =>
      eachpl.name.toLowerCase().includes(searchinp.toLowerCase()),
    )

    return (
      <div className="main">
        <h1 className="lpad">Destination Search</h1>
        <div className="lpad searchbg">
          <input placeholder="search" type="Search" onChange={this.change} />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchimg"
          />
        </div>

        <ul className="piccont">
          {placeslist.map(eachpl => (
            <Destinationitem placedetails={eachpl} key={eachpl.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
