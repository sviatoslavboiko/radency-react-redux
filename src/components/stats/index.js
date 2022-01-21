import { IMG } from '../../img'
import { noteStatuses } from '../../enums.js'

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value)
}

const StatNote = ({name, active, archived, category}) => {
  
  const imgCategory = getKeyByValue(noteStatuses, category)

  return(
  <tr className="my-cell">
    <td dangerouslySetInnerHTML={{__html: IMG[imgCategory]}}></td>
    <td>{name}</td>
    <td>{active}</td>
    <td>{archived}</td>
  </tr>
)}

export default StatNote



