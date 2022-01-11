import { Link } from 'react-router-dom'

const TinyTeamItem = ({ team }) => {
  var imageDomain = 'https://resources.premierleague.com/premierleague/badges/t'
  var imageNum = team.code
  var imageEnd = '.png'

  var image = imageDomain.concat(imageNum).concat(imageEnd)

  return (
    <Link to={`/team/${team.id}`}>
        <div className='tiny-card'>
            <div className='tiny-card-inner'>
                <div className='tiny-card-front'>
                    <img src={image} alt='' />
                </div>
            </div>
        </div>
    </Link>
  )
}

export default TinyTeamItem