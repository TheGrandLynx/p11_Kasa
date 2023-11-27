import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import dataAbout from '../../data/dataAbout.json'

function About() {
  return (
    <>
      <Banner className="aboutBackground" />
      {dataAbout.map((wAbout, id) => (
        <Collapse
          key={id}
          aboutTitle={wAbout.aboutTitle}
          aboutText={wAbout.aboutText}
          aboutStyle="aboutStyle"
        />
      ))}
    </>
  )
}
export default About
