function Banner({ cover, title }) {
  return (
    //soutenance 3 card
    <article className="cardLogement">
      <img src={cover} alt="location" />
      <div className="cardLogement__pctn">
        <p className="cardLogement__pctn__title">{title}</p>
      </div>
    </article>
  )
}

export default Banner
