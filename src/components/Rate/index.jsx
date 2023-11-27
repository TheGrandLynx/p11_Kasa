import emptyStar from '../../assets/emptyStar.svg'
import plainStar from '../../assets/plainStar.svg'

function Rate({ note }) {
  const stars = [1, 2, 3, 4, 5]
  return (
    <div className="rate-comp">
      {stars.map((level) =>
        note >= level ? (
          <img
            key={level.toString()}
            className="star"
            src={plainStar}
            alt="rating star"
          />
        ) : (
          <img
            key={level.toString()}
            className="star"
            src={emptyStar}
            alt="rating star"
          />
        )
      )}
    </div>
  )
}

export default Rate
