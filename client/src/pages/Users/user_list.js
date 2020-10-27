import React, { useState, useEffect } from 'react';
import Header from './../../components/Header';
import api from './../../Api';

export default function UserList(){
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    api.get(
      '/user/listar_user'
    ).then(response => {
      setUsers(response.data);
    })
  });

  async function handleDeleteUser(id) {
    try{
      await api.delete(
        `/user/deletar_user/${id}`
      );
      setUsers(Users.filter(user => user.id !== id ));
    } catch (err) {
      alert('Erro ao deletar o usuário, tende novamente.');
    }
  }

  return(
    <>
      <Header />
      <ul>
        {Users.map(user => (
          <li key={user._id}>
            {/* {console.log(user._id)} */}
            <strong>Nome do Usuário</strong>
            <p>{user.nome}</p>

            <strong>Email</strong>
            <p>{user.email}</p>

            {/* <strong>Senha</strong>
            <p>{user.senha}</p> */}

            <button onClick={() => handleDeleteUser(user._id)} type="button">
              {/* <FiTrash2 size={20} color="#a8a8b3" /> */}
              Confirmar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}