import React, { useState, useEffect } from 'react';
import Header from './../../components/Header';
import api from './../../Api';

export default function ProdList() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get(
      '/product/listar_prod'
    ).then(response => {
      setProduct(response.data);
    })
  });

  async function handleDeleteProduct(id) {
    try{
      await api.delete(
        `/product/deletar_prod/${id}`
      );
      setProduct(product.filter(prod => prod.id !== id ));
    } catch (err) {
      alert('Erro ao deletar o usuário, tende novamente.');
    }
  }

  return (
    <>
      <Header />
      <ul>
        {product.map(prod => (
          <li key={prod._id}>
            <strong>Nome do Produto</strong>
            <p>{prod.nome}</p>

            <strong>Descrição</strong>
            <p>{prod.descricao}</p>

            <strong>Categoria</strong>
            <p>{prod.categoria}</p>

            <strong>Valor:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(prod.preco)}</p>

            <strong>Quantidade</strong>
            <p>{prod.quantidade}</p>

            <button onClick={() => handleDeleteProduct(prod._id)} type="button">
              {/* <FiTrash2 size={20} color="#a8a8b3" /> */}
              Confirmar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}