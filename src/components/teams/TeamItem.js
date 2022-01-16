import { Link } from 'react-router-dom'

const TeamItem = ({ team }) => {
  var imageDomain = 'https://resources.premierleague.com/premierleague/badges/t'
  var imageNum = team.code
  var imageEnd = '.png'

  var image = imageDomain.concat(imageNum).concat(imageEnd)

  return (
    <Link to={`/team/${team.id}`}>
      <div className="m-10 bg-gradient-to-r from-cyan-200 to-cyan-400 rounded-xl">
          <img className="w-full p-2 md:p-5" id={team.code} src={image} alt='team' />
      </div>
    </Link>
  )
}

export default TeamItem