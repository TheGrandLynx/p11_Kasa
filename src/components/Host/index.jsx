function Host(props) {
  return (
    <aside className="hostContainer">
      <div className="hostName">{props.hostName}</div>
      <div className="hostPicture">
        <img src={props.hostPic} alt={props.id} />
      </div>
    </aside>
  )
}

export default Host
