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
        const fetchItems = async () => {
          const result = await axios(`https://fantasy.premierleague.com/api/element-summary/${id}/`)
          
          console.log(result.data)
          
          setFixtures(result.data.fixture)
          setResults(result.data.history)
          setHistory(result.data.history_past)

          setIsLoading(false)
        }
        
        fetchItems()
    }, [])
    
    const player = players.filter((player) => player.id == id)[0]

    console.log(player)
    
    return isLoading ? 
    <Spinner /> :
    <>
    <div className="flex">
    <StatPlayer player={player}/>
    <section className="player-card-grid">
        {history.map(history => (
            <StatItem history={history}/>
            ))}
    </section>
    </div>
    </>
}

export default StatGrid