import archive from '../../img/archive.svg';
import collection from '../../img/collection.svg';
import Note from '../notes'
import './main-table.css';
import { Table } from 'react-bootstrap';

const MainTable = ({notes, deleteNote, archiveNote}) => {
  return(
  <Table striped variant="dark">
    <thead>
      <tr className="table-active">
        <th></th>
        <th scope="col">Name</th>
        <th scope="col">Created</th>
        <th scope="col">Category</th>
        <th scope="col">Content</th>
        <th scope="col">Dates</th>
        <th scope="col">
          <input type="image" src={archive} className="btn archived-btn"></input>
          <input type="image" src={collection} className="btn all-collection"></input>
        </th>
      </tr>
    </thead>
    <tbody className="main-tbody table-active">
      {notes.map(item => <Note key={item.id} id={item.id} name={item.name} category={item.category} content={item.content} created={item.created} dates={item.dates} archiveNote={archiveNote} deleteNote={deleteNote}/>)}
    </tbody>
  </Table>
)}

export default MainTable;