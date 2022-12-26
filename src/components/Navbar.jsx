import Avatar from '../img/eu.jpg'
import '../style/components/sidebar.sass'
import InformationContainer from './InformationContainer'






import NetWork from './NetWork'

const Navbar = () => {
  return (
    <aside id="sidebar">

      <img src={Avatar} alt="Vinicius Simão"/>
      <p className="title">Dev FullStack</p>
      <NetWork/>
      <InformationContainer/>
      
    </aside>
  )
}

export default Navbar