import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios')

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      const { data } = await axios.get('/projects')
      setProjects(data)
    }
    getProjects()
  }, [])

  const handleOnClickProject = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="projects-list">
          {projects.map(p =>
            <div key={p.id}className="projects">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <p> {p.completed ? 'completed' : 'incomplete'}</p>
            </div>)}
        </div>
      </header>
    </div>
  );
}

export default App;
