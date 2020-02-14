import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios')

function App() {
  const [projects, setProjects] = useState([])
  const [actions, setActions] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      const { data } = await axios.get('/projects')
      setProjects(data)
    }
    getProjects()
  }, [])

  const handleOnClickProject = async (projectID) => {
    const { data } = await axios.get(`/projects/${projectID}/actions`)
    setActions(data)
  }

  const handleOnClickAction = () => {
    setActions([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="projects-list">
          {projects.map(p =>
            <div onClick={() => handleOnClickProject(p.id)} key={p.id} className="projects">
              <h3 >{p.name}</h3>
              <p>{p.description}</p>
              <p> {p.completed ? 'completed' : 'incomplete'}</p>
            </div>)}
        </div>
        {actions.length > 0 ? 
          <div className="actions-list">
          <button onClick={handleOnClickAction}>Go Back</button>
            {actions.map(a => <div className="action">
              <h4>{a.description}</h4>
              <p>{a.notes}</p>
              
            </div>)}
          </div> : null}
      </header>
    </div>
  );
}

export default App;
