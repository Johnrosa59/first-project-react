import React, { useState, useEffect } from "react";

import People from "../../assets/avatar.png";

import axios from "axios";

import Arrow from "../../assets/arrow1.png";
import { useNavigate } from "react-router-dom";

import { H1 } from "../../components/Title/styles";

import { ContainerItens } from "./styles";

import { Button } from "../../components/Button/style";

import { Container, Image, User, Button2 } from "./styles";

import Trash from "../../assets/trash.png";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image alt="Logo-imagem" src={People}></Image>
      <ContainerItens isblur={true}>
        <H1>Usuários</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <Button2 onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="Lata de Lixo" />
              </Button2>
            </User>
          ))}
        </ul>
        <Button isBack={true} onClick={goBackPage}>
          Voltar
          <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
