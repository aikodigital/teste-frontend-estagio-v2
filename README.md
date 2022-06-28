
# Teste Front-end Estágio Aiko

![Logo Aiko](https://raw.githubusercontent.com/aikodigital/teste-frontend-estagio-v2/master/img/aiko.png)


## O Desafio

Você é o desenvolvedor frontend de uma empresa que coleta dados de equipamentos utilizados em uma operação florestal. Dentre esses dados estão o histórico de posições e estados desses equipamentos. O estado de um equipamento é utilizado para saber o que o equipamento estava fazendo em um determinado momento, seja Operando, Parado ou em Manutenção. O estado é alterado de acordo com o uso do equipamento na operação, já a posição do equipamento é coletada através do GPS e é enviada e armazenada de tempo em tempo pela aplicação.

Seu objetivo é, de posse desses dados, desenvolver o frontend de aplicação web que trate e exibida essas informações para os gestores da operação.


## Tecnologias utilizadas

- React
- TailwindCSS
- Leaflet
- Vite
## Funcionalidades

- Mapa com as posições mais recentes.
- Diferenciação de equipamentos por modelos pelo icone.
- Diferenciação de equipamentos por estado pela cor.
- Barra lateral esquerda com a lista de equipamentos.
- Opção de filtrar os equipamentos.
- Opção de pesquisar os equipamentos.
- Barra lateral direita com informações sobre o equipamento selecionado.
- Aba na barra lateral direita de produtividade com o percentual de produtividade e os ganhos, ambos mensais e totais.
- Aba na barra lateral direita de histórico de estado do equipamento selecionado.
- Linha do tempo para ver as posições anteriores do equipamento selecionado.

Observação: O percentual de produtividade e os ganhos foram feitos levando em consideração que o equipamento deva estar até o atual momento no mesmo estado de sua ultima atualização.
## Demonstração

Foi feito o deploy deste projeto no Vercel e está hospedado em meu domínio:
- [https://teste-aiko.lucasribas.dev/](https://teste-aiko.lucasribas.dev/)
## Rodando localmente

Clone o projeto

```bash
  git clone -b teste/lucas-ribas https://github.com/lsribas/teste-aiko-frontend-estagio.git
```

Entre no diretório do projeto

```bash
  cd teste-aiko-frontend-estagio
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Erros
Há um bug no qual o site trava ao deslizar muito a linha do tempo em um curto período de tempo, porém somente tive conhecimento desse erro perto do prazo final e não tive tempo para corrigi-lo.
## Captura de tela

![Captura de tela](https://i.imgur.com/tFppFyG.png)

