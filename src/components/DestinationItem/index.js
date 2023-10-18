// Write your code here
import './index.css'

const DestinationItem = props => {
  const {placedetails, key} = props
  const {name, imgUrl} = placedetails
  return (
    <li>
      <img src={imgUrl} className="pic" alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
