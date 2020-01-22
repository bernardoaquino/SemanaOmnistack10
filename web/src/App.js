import React, { useState } from 'react';
import Header from './Header';

// 3 Principais conceito do React
// Componente - Função que retorna algum conteúdo html(Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação)
// Propriedade - Informações que um componente PAI passa para o componente filho
// Estado - Informações mantidas pelo componente, lida e atualizada pelo próprio componente (Lembrar: Imutabilidade)

function App() { //JSX - Primeira letra do componente sempre maiúscula
  const [counter, setCounter] = useState(0); // React não altera o valor(Imutabilidade), ele cria outra variável com o valor antigo + alterações

  function incrementCounter() {
    setCounter(counter + 1);
  }
  
  return ( //Para exibir mais de um elemento abaixo do outro tem que haver um componente envolta(Ex: div) ou fragment para não atrapalhar na estilização
    <> 
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
      <Header title="Título 1" /> 
      <Header title="Título 2" />
      <Header title="Título 4" />
    </>
  );
}

export default App;