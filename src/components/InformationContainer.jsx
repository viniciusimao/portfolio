import '../style/components/infocontainer.sass'
import { AiFillPhone, AiOutlineTwitter, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(21)98447-8887</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineTwitter id="twitter-icon" />
        <div>
          <h3>Twitter</h3>
          <a href="https://twitter.com/Icaroskkk">@icaroskkkk</a>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Niterói-Rj</p>
        </div>
      </div>
    </section>
    
  )
}

export default InformationContainer