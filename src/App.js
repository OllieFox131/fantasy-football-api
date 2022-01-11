import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import TeamGrid from './components/teams/TeamGrid'
import TeamItem from './components/teams/TeamItem'
import TinyTeamGrid from './components/teams/TinyTeamGrid'
import TinyTeamItem from './components/teams/TinyTeamItem'
import PlayerGrid from './components/players/PlayerGrid'
import PlayerItem from './components/players/PlayerItem'

const App = () => {
  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://fantasy.premierleague.com/api/bootstrap-static/`)
      
      console.log(result.data.teams[1])
      console.log(result.data.elements[1])

      setTeams(result.data.teams)
      setPlayers(result.data.elements)
      setIsLoading(false)
    }

    fetchItems()
  }, [])
  
  return(
    <Router>
    <div className="container">
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