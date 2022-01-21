const moduleName = 'notes'
const CREATE_NOTE = `${moduleName}/CREATE_NOTE`;
const EDIT_NOTE = `${moduleName}/EDIT_NOTE`;
const DELETE_NOTE = `${moduleName}/DELETE_NOTE`;
const ARCHIVE_NOTE = `${moduleName}/ARCHIVE_NOTE`;
const options = { month: 'long', day: 'numeric', year: 'numeric'}


const defaultState = {
  notes: [
    {
      name: 'Shopping list', 
      created: 'April 20, 2021', 
      category: 'Task', 
      content: 'Tomatoes, bread', 
      dates: '', 
      id: 123
    },
    {
      name: 'The theory evolution', 
      created: 'April 27, 2021', 
      category: 'Random Thought', 
      content: 'The theory of evolution is a shortened form of the term “theory of evolution by natural selection,” which was proposed by Charles Darwin and Alfred Russel Wallace in the nineteenth century.', 
      dates: '', 
      id: 315
    },
    {
      name: 'New Feature', 
      created: 'May 05, 2021', 
      category: 'Idea', 
      content: 'Implement new feature', 
      dates: '3/5/2021, 5/5/2021',
      id: 458
    },
    {
      name: 'William Gaddis', 
      created: 'May 07, 2021', 
      category: 'Quote', 
      content: 'Power doesn\'t corrupt people, people corrupt power.', 
      dates: '',
      id: 883
    },
    {
      name: 'Books', 
      created: 'May 15, 2021', 
      category: 'Task', 
      content: 'The Lean Startup', 
      dates: '',
      id: 336
    }
  ],
  archivedNotes: [
    {
      name: 'William Gaddis', 
      created: 'May 07, 2021', 
      category: 'Quote', 
      content: 'Power doesn\'t corrupt people, people corrupt power.', 
      dates: '',
      id: 883
    },
    {
      name: 'Books', 
      created: 'May 15, 2021', 
      category: 'Task', 
      content: 'The Lean Startup', 
      dates: '',
      id: 336
    }
  ]
}

export default (state = defaultState, {type, payload }) => {
  switch(type){
    case CREATE_NOTE:
      return {...state, notes: [...state.notes, payload]}
    case EDIT_NOTE:
      return {...state, notes: payload}
    case DELETE_NOTE:
      return {...state, notes: state.notes.filter(item => item.id != payload.id)}
    case ARCHIVE_NOTE:
      return {...state, notes: state.notes.filter(item => item.id != payload.id), 
        archivedNotes: [...state.archivedNotes, ...state.notes.filter(item => item.id == payload.id)]}
    default:
      return state
  }
}

export const createNote = ({name, category, content}) => (dispatch) => {
  dispatch({type: CREATE_NOTE, payload: {name, category, content, created: new Date().toLocaleDateString("en-US", options), id: Math.trunc(Math.random() * 10000), key: Math.trunc(Math.random() * 10000)}})
}

export const deleteNote = (id) => (dispatch) => {
  dispatch({type: DELETE_NOTE, payload: { id } })
}

export const archiveNote = (id) => (dispatch) => {
  dispatch({type: ARCHIVE_NOTE, payload: { id } })
}