<div align="center" style="margin-bottom: 20px;">
<img alt="demonstração da pagina" src="./src/Components/assets/img/finish.png" width="auto" heigth="auto"/>
</div>

<div align="center" style="margin: 20px;">
    <p align="center" >
      <a href="#fire-prévia-da-aplicação"> :fire: Prévia da Aplicação</a> |
      <a href="#rocket-tecnologias-usadas"> :rocket: Tecnologias Usadas</a> |
      <a href="#zap-executando-o-projeto"> :zap: Executando o Projeto </a> |
      <a href="#open_book-codigo"> :open_book: Código </a>
    </p>

</div>

## :barber: O projeto

O AIM é o resultado do desáfio proposto pela Aiko Digital de criar uma aplicação onde é possível localizar no mapa equipamentos e informações importantes como: modelo, nome do equipamento, estado de funcionamento e outros.

## :fire: Prévia da Aplicação

<div align="center">
<img src="./src/Components/assets/img/gif.gif" alt="preview"/>
</div>

## :rocket: Tecnologias Usadas

O projeto foi feito com as seguintes tecnologias:

- [ReactJS](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev)
- [Styled-Components](https://styled-components.com/)
- [React-Redux](https://react-redux.js.org)
- [React-Bootstrap](https://react-bootstrap.github.io)
- [Leaflet](https://react-leaflet.js.org)
- {...}

## :zap: Executando o Projeto
#### Clonando o projeto
```sh
$ git clone git@github.com:orloke/teste-frontend-estagio-v2.git
$ cd teste-frontend-estagio-v2
```

#### Iniciando o projeto
```sh
$ npm install
$ npm run dev
```

#### Pagina Inicial

Na pagina incial do projeto temos as seguintes informações:

* Mapa de todos os equipamentos

Nessse é possível filtrar os equipamentos por modelo e por situação atual.

* Tabela de informações

Na tabela logo abaixo do primeiro mapa, estão as informações do equipamento clicado, para ver outro equipamento basta clica-lo.

* Mapa de histórico de posições

Esse mostra todas as posições em que o equipamento selecionado esteve (para selecionar outro, basta clica-lo no mapa acima).

* Tabela de histórico de posições

Na tabela ao lado do segundo mapa, é exibido as informações dos estados do equipamento ao longo do tempo.

## :open_book: Código 

Na construção da aplicação, tentei dividir as responsabilidades entre os arquivos de modo a facilitar o entendimento e manutenção: as funções usadas estão em um arquivo, os tipos em outro arquivo e o mesmo para os hooks. Os componentes também foram feitos em pastas separadas para poderem ser reaproveitados.

Para fazer a leitura do dados, preferi usar o import, mas caso os dados fossem disponibilizados via API teria de lançar mão de outras ferramentas como o Axios. Abaixo tem um exemplo como os dados são chamados e usados.

```javascript
import equipment from '../data/equipment.json'

export const takeNameEquipment = (id:string) => {
    try {
        let filterName = equipment.filter(item => item.id === id)
        return filterName[0]
    } catch (error) {
        return console.error('Houve algum erro ', error) as any  
    }
}
```

O nome de algumas variavéis pode parecer extenso, mas é porque tentei usar nomes o mais semântico possível, que expliquem sua utilidade.

Outro cuidado tomado foi deixar o código o mais limpo possível, nem sempre com sucesso como no caso abaixo. Mas com a prática alcançarei o nível desejado!

```javascript
export const EquipmentStateHistory = (id:string) => {

    try {
        let equipment = equipmentStateHistory.filter(item=>item.equipmentId == id)[0].states
        let arrayStateEquipment = [] as NameState[]
        equipment.map(item=>{
            equipmentState.forEach(itemState=>{
                if(item.equipmentStateId==itemState.id){
                    arrayStateEquipment.push({date:item.date, name:itemState.name, color: itemState.color})
                }
            })
        })
        return arrayStateEquipment.reverse()
    } catch (error) {
        return console.error('Houve algum erro ', error) as unknown as NameState[]
    }
}
```

Nessa função o objetivo é pegar o histórico de estado do equipamento. Usei um filter para selecionar o equipamento desejado através do id e em seguida um map para poder selecionar o nome do estado (operando, parado, manutenção), data e cor que representa esse estado, todas essas informações são adicionadas em um array. A função retorna esse array só que na ordem inversa, afinal o último estado registrado no banco de dados é o mais recente!

#### Responsividade

A Aiko desenvolve funcionalidades para gestão de operações. E essa gestaõ não é feita apenas de dentro de um escritório na frente de um computador. Muitas vezes o funcionario tem que ir a campo se deslogar até onde o problema está ocorrendo. Por essa razão fiz a aplicação para que seja responsiva, podendo ser usada em smartphones e tablets, sem perda de informções, e facilitando a vida do cliente (ninguém quer sair por ai carregando um computador).


Teste em um Iphone 6/7/8
<div align="center">
<img src="./src/Components/assets/img/gifresponsividade.gif" alt="gif responsividade"/>
</div>
