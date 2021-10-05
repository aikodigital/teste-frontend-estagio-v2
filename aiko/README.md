# Teste Frontend estágio V2

![Aiko](img/aiko.png)

Neste trabalho implementei, da maneira mais simples que encontrei, uma interface de demonstração do principal produto da AIKO, o TrackIT. A escolha de faze-lo simplificado foi tomada em razão do público alvo ser rural, logo, o uso deverá ser rápido e eficaz nas informações, necessitando de demonstrações mais gráficas para a agilidade do dia a dia. Com essa ideia elementos gráficos foram usados ao invés da opção de um input de escrita convencional

## O Desafio

Você é o desenvolvedor frontend de uma empresa que coleta dados de equipamentos utilizados em uma operação florestal. Dentre esses dados estão o histórico de posições e estados desses equipamentos. O estado de um equipamento é utilizado para saber o que o equipamento estava fazendo em um determinado momento, seja *Operando*, *Parado* ou em *Manutenção*. O estado é alterado de acordo com o uso do equipamento na operação, já a posição do equipamento é coletada através do GPS e é enviada e armazenada de tempo em tempo pela aplicação.

Seu objetivo é, de posse desses dados, desenvolver o frontend de aplicação web que trate e exibida essas informações para os gestores da operação.

## Requisitos

* **Posições dos equipamentos**: Todos os equipamentos estão sendo exibidos com icones personalizados, ao clicar no icone é mostrado o estado atual de sua última posição fornecida, além do nome do equipamento. O modelo é indicado pela personalização do icone

* **Estado atual do equipamento**: Como dito anteriormente, basta clicar no icone para saber o estado atual do equipamento

* **Histórico de estados do equipamento**: Histórico de estado do equipamento é mostrado através do filtro na página históricos, há um link no Header da página, próximo ao logotipo da AIKO. Essa escolha foi feita pautada na quantidade de entradas de estados e posições de cada equipamento, o que deixaria a página inicial poluída.

## Dados

Todos os dados utilizados foram fornecidos pela empresa AIKO

## O que foi utilizado

* React.JS (embora, pela minha pesquisa, o framework utilizado pela AIKO é o Vue.js, trabalhei com React pois tenho maior experiência prática neste framework)

* JavaScript, HTML, CSS.

* Bibliotecas de componentes (Apenas React-Router. Todo CSS foi feito a mão, principalmente porque tentei transmitir a sensação do site da AIKO, de onde me inspirei para criação do design da page. Essa decisão foi feita inteiramente pautada no meu possível futuro profissional na AIKO, dado que produzirei designs que serão a cara da empresa, logo achei que seria o melhor treinar desde cedo.)

* Bibliotecas e APIs de Mapas (Leaflet - como foi o proposto no teste.)

* **Linter**: Foi utilizado em todo o código, não somente na sugestão como no enforço na utilização da linguagem pedida.


## Extras implementados

* **Filtros**: concentração de filtros é localizada na página histórico, podendo filtrar as localizações baseada o nome dos veículos, além de ter acesso ao suas identificações, modelos e nomes.

* **Pesquisa**: Foi implementado.

* **Percentual de Produtividade do equipamento**: Calcular a produtividade do equipamento, que consiste em uma relação das horas produtivas (em estado "Operando") em relação ao total de horas. Exemplo se um equipamento teve 18 horas operando no dia a formula deve ser `18 / 24 * 100 = 75% de produtividade`.

* **Ganho por equipamento**: Calcular o ganho do equipamento com base no valor recebido por hora informado no Modelo de Equipamento. Exemplo se um modelo de equipamento gera 100 por hora em operando e -20 em manutenção, então se esse equipamento ficou 10 horas em operação e 4 em manutenção ele gerou `10 * 100 + 4 * -20 = 920`.

* **Diferenciar os equipamentos**: Foi implementado através de icones dos tipos de equipamento.

* **Histórico de posições**: Foi implementado na página histórico. É possível ver as coordenadas de posicionamento do veículo desejado somente selecionando o dropdown, sendo possível ver a localização ao longo de todos os dias de operação.

* **Testes**: Testes foram desenvolvidos de forma unitária, porém acredito que ainda falta mais testes para o desenvolvimento estar completo.

## Entregas

  Foi entregue no dia 04/10/2021