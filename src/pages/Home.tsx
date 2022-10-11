import { Content } from "../styles/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "../styles/Home";
import Modal from "../components/Modal";


const Home = () => {
  return (
    <Content>
      <Navbar />
      <Container>
        <Modal />
      </Container>
      <Footer />
    </Content>
  );
};

export default Home;