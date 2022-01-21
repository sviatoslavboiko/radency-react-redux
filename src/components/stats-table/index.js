import StatNote from '../stats'
import { Table} from 'react-bootstrap';
import './stats-table.css';
import createNoteStatistics from './../stats/create-stats.js'

const StatsTable = ({notes, archivedNotes}) => {

  const stats = createNoteStatistics(notes, archivedNotes)

  return(
  <Table striped variant="dark">
    <thead className="thead-dark">
      <tr className="table-active">
        <th></th>
        <th scope="col">Note Category</th>
        <th scope="col">Active</th>
        <th scope="col">Archived</th>
      </tr>  
    </thead>
    <tbody className="statistics-tbody table-active">
        {stats.map((item, index) => <StatNote key={index} name={item.name} active={item.active} archived={item.archived} category={item.name}/>)}
    </tbody>
  </Table>
)}

export default StatsTable;