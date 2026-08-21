import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Feedbacks from "./Components/FeedBacks";
import Footer from "./Components/Footer";
import "./Global.css"
function App() {

  return (
    <div className="container">

      <Header titleHeader="Bem-vindo à OpenPizzaria!"
      textHeader="As melhores pizzas, feitas com carinho especial para você!">
      </Header>

      <hr className="divider" />

      <Menu />

      <Banner />

      <Cards />

      <Feedbacks />

      <Menu />

      <Footer textFooter="Todos os direitos reservados - 2026" />
    </div>

  )
}

export default App
