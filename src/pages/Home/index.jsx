import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
  const [data, setData] = useState([])
  //soutenance 2 home
  useEffect(() => {
    axios.get('/logements.json').then((res) => setData(res.data))
  }, [])

  return (
    <>
      <Banner className="banner" />
      <div className="cards-container">
        {data.map((appart, id) => (
          <div className="card_logement" key={id}>
            <Link className="link_card_logement" to={`/logement/${appart.id}`}>
              <Card cover={appart.cover} title={appart.title} />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
