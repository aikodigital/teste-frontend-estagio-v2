## Teste Front-End (Estágio)

![photo_2021-09-08_05-30-14](https://user-images.githubusercontent.com/55220803/132475103-d55369dd-a9cd-4661-83fc-25ef6ed85794.jpg)

![photo_2021-09-08_05-30-47](https://user-images.githubusercontent.com/55220803/132477840-9deeee98-d7a7-4203-b8ea-309903fea20c.jpg)

#### Ideia

Seguindo as exigências do teste, foi-se criado uma aplicação que consegue a posição dos equipamentos agrícolas da empresa Aiko.

Baseado nas cores da empresa, quis fazer uma estilização suave, para quem acessa.

#### Observações

- Houveram algumas limitações técnicas na hora de pegar o último valor das posições. Não estou acostumado e não tenho experiência para lidar com tantos dados assim, fiquei bastante confuso e fiz o melhor que pude. Sendo assim, o valor das últimas posições se encontram na posição [50], dos 9 itens.

- Não entendi como trabalhar com as ids, por isso não obtive sucesso ao parear os idStates e os status das máquinas.

#### Como rodar

- No seu editor de código:

1.  Clone a aplicação via git clone ou baixe na sua máquina

2.  No diretório, faça:

```
npm install
```

3. Ao acabar o processo, digite o comando:

   ```
   npm run serve


   npm run build para obter uma build do projeto

   ```

4. Acesse a porta local de número 8000. Para testar a responsividade, você pode entrar pelo celular, a aplicação vai te dar um ip e você acessa por lá.

#### Tecnologias usadas

- De primeiro, usei Nuxt e aprendi bastante. Mas de última hora, mudei para apenas Vetur e Vue 2.0

- Usei a biblioteca de componentes Vue2Leaflet, para loopar mais fácil dentre as localizações.

- O site é completamente responsivo, usei apenas media queries e flex-wraps pra poder lidar com a responsividade desejada.

![photo_2021-09-08_04-07-39](https://user-images.githubusercontent.com/55220803/132478188-e95a8ded-cef2-4458-853e-c86be776d1d5.jpg)

#### Considerações finais

A aplicação não atende os requisitos pela limitação de conhecimento. Com um pouco mais de estudo e sabendo dos problemas, a aplicação poderia ser completa.

Vou aproveitar a oportunidade para ganhar um pouco de direcionamento, em relação aos estudos. O JS básico precisa ser treinado e sinto que deixei a desejar.

Tem um arquivo chamado aiko.xd que contêm algumas ideias que eu coletei, pra home page mesmo.
