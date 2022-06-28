
# Teste estágio front-end Aiko

## Tecnologias utilizadas

Para desenvolver esse projeto utilizei React, TypeScript, Leaflet como biblioteca de mapas, Vite para melhorar o tempo de inicialização e atualização do servidor e o React-router-dom para fazer as rotas.

## Desenvolvimento do projeto

Desenvolvi esse projeto utilizando 3 componentes, um para o Header envolvendo toda a aplicação, um para a página com o mapa e outro para a página que rastreia todos os estados do equipamento.  
  
Ao selecionar o equipamento no mapa abre um popup com o nome do equipamento, modelo, último estado e um link que redireciona para uma nova página "/equipment/:id" com todos os estados daquele equipamento.  
  
Para pegar o ID do equipamento e listar as informações na página equipment, passei o ID por parâmetro pela URL utilizando o Params.

