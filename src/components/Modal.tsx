import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { Button, Container, ContainerInput, Input } from '../styles/Modal';
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../contexts/UserContext';


const Modal = () => {
  const [input, setInput] = useState('');
  const { setAddress } = useContext(UserContext);


  async function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (input.length < 8) {
      toast.error("Digite um CEP válido!")
      return;
    }

    const response = await fetch(`https://viacep.com.br/ws/${input.replace("-", "")}/json/`)
      .then((data) => {
        return data.json();
      });
      

    if (response.erro) {
      toast.error("Endereço não encontrado, por favor digite o CEP novamente!")
    } else {
      setAddress(response);
    } 
  }

  function handleCep(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={handleSearch}>
      <Container>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <h1>Seja Bem-vindo(a)!</h1>
      <p><i>Somos a <strong>Omnix</strong>! Aqui você a melhor internet da sua região!</i></p>
        <ContainerInput>
          <Input type="text"
            placeholder='Digite seu CEP...'
            value={input}
            onChange={handleCep}
          />
          <Button
            type='submit'
          >
            <FiSearch size={25} color="#000000" />
          </Button>
        </ContainerInput>
      </Container>
    </form>
  )
}

export default Modal