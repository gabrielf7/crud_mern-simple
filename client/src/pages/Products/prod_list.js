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

  return (
    <div>
      <Header />
      <ul>
        {product.map(prod => (
          <li key={prod.id}>
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

            {/* <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}