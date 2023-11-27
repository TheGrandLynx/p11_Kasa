function Banner({ className }) {
  const wArg = className
  if (wArg === 'banner') {
    //if it is the banner from the home page
    return (
      <div className={className}>
        <div className="banner__textContainer">
          <div className="banner__textContainer__text">
            Chez vous, partout et ailleurs
          </div>
        </div>
      </div>
    )
  } else {
    //if it is the banner from the about page
    return <div className="aboutBackground"></div>
  }
}

export default Banner
