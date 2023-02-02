import React, { useState, useRef } from "react";

import Avatar from "../../assets/people.png";

import axios from "axios";

import Arrow from "../../assets/arrow1.png";

import { useNavigate } from "react-router-dom";

import { H1 } from "../../components/Title/styles";

import { ContainerItens } from "../../components/ContainerItens/styles";

import { Container, Image, InputLabel, Input } from "./styles";

import { Button } from "../../components/Button/style";

const App = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    navigate("/usuarios");
  }

  return (
    <Container>
      <Image alt="Logo-imagem" src={Avatar}></Image>
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
