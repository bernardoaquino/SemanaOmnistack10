import React, { useState, useEffect } from 'react';
import api from './services/api';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

// 3 Principais conceito do React
// Componente - Função que retorna algum conteúdo html(Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação)
// Propriedade - Informações que um componente PAI passa para o componente filho
// Estado - Informações mantidas pelo componente, lida e atualizada pelo próprio componente (Lembrar: Imutabilidade)

//JSX - Primeira letra do componente sempre maiúscula
// React não altera o valor(Imutabilidade), ele cria outra variável com o valor antigo + alterações
//Para exibir mais de um elemento abaixo do outro tem que haver um componente envolta(Ex: div) ou fragment para não atrapalhar na estilização
//For é uma palavra reservada do JS

function App() { 
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []); //Dispara uma função toda vez que um evento alterar ou uma única vez

  async function handleAddDev(data) { //(e) é ação do formulário através do botão
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);
  }

  return ( 
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;