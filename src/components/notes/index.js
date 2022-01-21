import pencil from '../../img/pencil-fill.svg'
import archive from '../../img/archive-fill.svg'
import trash from '../../img/trash-fill.svg'
import { IMG } from '../../img'
import { noteStatuses } from '../../enums.js'

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value)
}

const Note = ({name, created, category, content, dates, id, deleteNote, archiveNote}) => {

  const imgCategory = getKeyByValue(noteStatuses, category)
  
  return(
  <tr className="my-cell">
    <td dangerouslySetInnerHTML={{__html: IMG[imgCategory]}}></td>
    <td>{name}</td>
    <td>{created}</td>
    <td>{category}</td>
    <td className="content-cell">{content}</td>
    <td>{dates}</td>
    <td>
      <input type="image" src={pencil} className="btn edit" data-toggle="modal" data-target="#editNoteModal"></input>
      <input type="image" onClick={() => archiveNote(id)} src={archive} className="btn archive"></input>
      <input type="image" onClick={() => deleteNote(id)} src={trash} className="btn remove"></input>
    </td>
  </tr>
)}

export default Note