import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Content } from "../styles/Offers";
import Cards from "../components/Cards";

const Offers = () => {
  return (
    <>
      <Navbar />
      <Content>
        <div className="title">
          <h1>Internet 100% Fibra Óptica</h1>
          <p>Internet com Ultravelocidade para conectar a casa toda.</p>
        </div>
        <Cards />
      </Content>
      <Footer />
    </>
  );
};

export default Offers;