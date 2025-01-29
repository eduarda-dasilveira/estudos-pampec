import { useRef, useState } from "react";
import { v4 } from "uuid";
import {AddButton, Container} from './styles'

function Home() {
  const inputRef = useRef();
  const [produtos, setProdutos] = useState([]);

  function cliqueiNoBotao() {
    setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos]);
    inputRef.current.value = ''
  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input placeholder="produto..." ref={inputRef} />
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

      {produtos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <button onClick={() => deletarProduto(produto.id)}>🗑️</button>
        </div>
      ))}
    </Container>
  );
}

export default Home;
