# Aiko Location

### Tecnologias utilizadas no desenvolvimento:
* Leaflet
* Next.js
* Styled Components
* Polished
* Material UI
* Date-fns
* Axios
* Sharp

## Iniciar projeto em servidor local

Primeiro, instale as dependencias:

``yarn``

Em seguida inicie o servidor de desenvolvimento:

``yarn dev``

Para produção compile o codigo:

``yarn build` 

``yarn start``

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.


## API

* Busca a última data do histórico de posição dos veículos.
http://localhost:3000/api/lastPositionDate
``` bash
    "2021-02-28T17:00:00.000Z"
```

* Busca todos os veículos com a data da última posição.
Rota: /api/equipments/{data}
[exemplo](http://localhost:3000/api/equipments/01-02-2021)
``` json
[
    {
        "id": "a7c53eb1-4f5e-4eba-9764-ad205d0891f9",
        "name": "CA-0001",
        "model": "Caminhão de carga",
        "state": "Operando",
        "position": {
            "lat": -19.278562,
            "lon": -45.958986
        }
    },
    {
        "id": "1c7e9615-cc1c-4d72-8496-190fe5791c8b",
        "name": "CA-0002",
        "model": "Caminhão de carga",
        "state": "Operando",
            "position": {
                "lat": -19.07747,
                "lon": -45.958734
            }
    }
]
```

* Busca os principais dados de um veículo específico.
Rota: /api/equipment/{idVeiculo}
[exemplo](http://localhost:3000/api/equipment/a7c53eb1-4f5e-4eba-9764-ad205d0891f9)
``` json
[
    {
        "id": "a7c53eb1-4f5e-4eba-9764-ad205d0891f9",
        "name": "CA-0001",
        "model": {
            "name": "Caminhão de carga",
            "hourlyEarnings": [
                {
                    "value": 100,
                    "state": "Operando"
                },
                {
                    "value": -5,
                    "state": "Parado"
                },
                {
                    "value": -20,
                    "state": "Manutenção"
                }
            ]
        },
        "state": "Operando",
        "position": "2021-02-28T20:00:00.000Z"
    }
]
```

* Busca todos os dados de um veículo específico filtrado pela data de posição.
Rota: /api/equipmentAll/{idVeiculo}/{data}
[exemplo](http://localhost:3000/api/equipmentAll/a7c53eb1-4f5e-4eba-9764-ad205d0891f9/01-02-2021)
``` json
{
    "model": {
    "name": "Caminhão de carga",
    "hourlyEarnings": [
        {
            "value": 100,
            "name": "Operando",
            "color": "#2ecc71"
        },
        {
            "value": -5,
            "name": "Parado",
            "color": "#f1c40f"
        },
        {
            "value": -20,
            "name": "Manutenção",
            "color": "#e74c3c"
        }
    ]
    },
    "positionHistory": [
        {
            "date": "2021-02-02T09:00:00.000Z",
            "lat": -19.258918,
            "lon": -45.955511
        },
        {
            "date": "2021-02-02T20:00:00.000Z",
            "lat": -19.126602,
            "lon": -46.095732
        }
    ],
    "stateHistory": [
        {
            "date": "2021-02-02T10:00:00.000Z",
            "name": "Manutenção",
            "color": "#e74c3c"
        } 
    ]
}
```

## Justificativas
Leaflet: utilizado para renderizar o mapa
Next.js: escolhido por oferecer ambiente backend integrado permitindo criação de API interna
Styled Components: Utilizado para renderizar o mapa.
Polished: Oferece recursos complementares de estilização.
Material UI: Utilizado apenas para aproveitar os componentes de tabela e data.
Date-fns: Utilizado para formatar as datas.
Axios: Utilizado para consumir a API interna.
Sharp: Otimiza as imagens (recurso complementar Next.js).

OBS: Existe um Warining ao realizar o processo de build por conta de um componente do Material UI, porem não afeta a aplicação.