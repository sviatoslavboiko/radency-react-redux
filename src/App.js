import React from 'react';
import './App.css';
import { connect } from 'react-redux'

import { archiveNote as archiveNoteAction, createNote as createNoteAction, deleteNote as deleteNoteAction } from './redux/modules/notes'

import MainTable from './components/main-table';
import StatsTable from './components/stats-table';
import CreateModal from './components/modals/create-modal';

function App({ notes, archivedNotes, createNote, deleteNote, archiveNote }) {

  return (
      <div className='App'>
        <div className="container pt-5">
          <div className="row main-table mb-3">
            <MainTable deleteNote={deleteNote} archiveNote={archiveNote} notes={notes}/>
          </div>
          
          <div className="row">
            <div className="col p-0">
              <CreateModal createNote={createNote}/>
            </div>
          </div>
  
          <div className="row statistics-table">
            <StatsTable notes={notes} archivedNotes={archivedNotes}/>
          </div>
        </div>  
      </div>
  );
}

export default connect(
  ({notes}) => ({notes: notes.notes, archivedNotes: notes.archivedNotes}),
  {
    createNote: createNoteAction,
    deleteNote: deleteNoteAction,
    archiveNote: archiveNoteAction
  }
)(App);
