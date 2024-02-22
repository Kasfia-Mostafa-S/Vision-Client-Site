import QnA from "./QnA/QnA"
import Services from "./Services/Services"
import TitleSection from "./TitleSection/TitleSection"


const Home = () => {
  return (
    <div>
     <TitleSection></TitleSection>
     <Services></Services>
     <QnA></QnA>
    </div>
  )
}

export default Home


