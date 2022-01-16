import StatItem from './StatItem'
import Spinner from '../ui/Spinner' 
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import StatPlayer from './StatPlayer'

const StatGrid = ({ players, teams }) => {
    const { id } = useParams();
    const [fixtures, setFixtures] = useState([])
    const [results, setResults] = useState([])
    const [history, setHistory] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPlayer = async () => {
          const result = await axios(`https://fantasy.premierleague.com/api/element-summary/${id}/`)
          
          setFixtures(result.data.fixture)
          setResults(result.data.history)
          setHistory(result.data.history_past)

          setIsLoading(false)
        }

        fetchPlayer()
    }, [])
    
    const player = players.filter((player) => player.id == id)[0]
    const team = teams.filter((team) => team.id == player.team)[0]

    return isLoading ? 
    <Spinner /> :
    <>
    <div className="container">
        <div className="flex">
    <StatPlayer player={player} team={team}/>
    <div className="stat-card grid grid-cols-4">
        <p className="stat-header">Season Name</p>
        <p className="stat-header">Goals</p>
        <p className="stat-header">Assists</p>
        <p className="stat-header">Goals and Assists</p>
        {history.map(history => (
            <>
            <p className="stat-header">{history.season_name}</p>
            <p className="stat-header">{history.goals_scored}</p>
            <p className="stat-header">{history.assists}</p>
            <p className="stat-header">{history.goals_scored + history.assists}</p>
            </>
            // <StatItem history={history}/>
        ))}
    </div>
    </div>
    </div>
    </>
}

export default StatGrid