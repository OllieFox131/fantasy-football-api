import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/ui/Header'
import TeamGrid from './components/teams/TeamGrid'
import TinyTeamGrid from './components/teams/TinyTeamGrid'
import PlayerGrid from './components/players/PlayerGrid'
import './index.css'

const App = () => {
  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://fantasy.premierleague.com/api/bootstrap-static/`)
      
      console.log(result.data.teams[0])
      console.log(result.data.elements[0])

      setTeams(result.data.teams)
      setPlayers(result.data.elements)
      setIsLoading(false)
    }

    fetchItems()
  }, [])
  
  return(
    <Router>
    <div>
      <Header />
      <Routes>
      <Route path='' exact element={
        <>
        <TeamGrid isLoading={isLoading} teams={teams} />
        </>
      } />
      <Route path='/team/:id' element={
        <>
        <TinyTeamGrid isLoading={isLoading} teams={teams} />
        <PlayerGrid isLoading={isLoading} teams={teams} players={players} />
        </>
      } />
      </Routes>
    </div>
    </Router>
  )
}

export default App;