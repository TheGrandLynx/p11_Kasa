import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'
import Host from '../../components/Host'
import Rate from '../../components/Rate'
import Tag from '../../components/Tag'
import axios from 'axios'

function FicheLogement() {
  //soutenance 6 appartment
  const params = useParams()
  const navigate = useNavigate()

  const [pickedAppart, setPickedAppart] = useState()
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/logements.json')
      const picked = res.data.find(({ id }) => id === params.id)
      res.data.map(() => setPickedAppart(picked))
      if (picked === undefined) {
        navigate('/404', { state: { message: "Can't get data" } })
      }
    }
    getData()
    // eslint-disable-next-line
  }, [])
  const slidePics = pickedAppart && pickedAppart.pictures
  const tags = pickedAppart && pickedAppart.tags
  const equipments = pickedAppart && pickedAppart.equipments
  const equip =
    pickedAppart &&
    equipments.map((item, index) => (
      <li key={index} className="equipList">
        {item}
      </li>
    ))
  return (
    pickedAppart && (
      <div key={params.id} className="appartmentContainer">
        <Carrousel slides={slidePics} />
        <section className="hostInfoContainer">
          <div className="titleTagsContainer">
            <div className="titleContainer redFont">
              <h1>{pickedAppart.title}</h1>
              <h3>{pickedAppart.location}</h3>
            </div>
            <div className="tagsContainer">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="rateHostcontainer">
            <div className="hostInfoContainer redFont">
              <Host
                hostName={pickedAppart.host.name}
                hostPic={pickedAppart.host.picture}
              />
            </div>
            <div className="rateContainer">
              <Rate note={pickedAppart.rating} />
            </div>
          </div>
        </section>
        <div className="collapseAppartmentContainer">
          <Collapse
            aboutTitle="Description"
            aboutText={pickedAppart.description}
          />
          <Collapse aboutTitle="Équipements" aboutText={equip} />
        </div>
      </div>
    )
  )
}

export default FicheLogement
