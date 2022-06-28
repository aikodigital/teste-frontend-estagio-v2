import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { EquipmentsInterface } from '../interfaces/Equipments';
import EquipmentsService from '../services/EquipmentsService';

export const EquipmentsPage = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const [equipments, setEquipments] = useState<EquipmentsInterface[]>(
    EquipmentsService.fetchAllEquipments()
  );

  const search = (equipments: EquipmentsInterface[]) => {
    const searchParam = ['name', 'equipmentModelId'];
    return equipments.filter((item) =>
      searchParam.some(
        (newItem) =>
          //@ts-ignore
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
      )
    );
  };
  return (
    <Layout currentPath="/equipments">
      <main className="mt-4 mx-4 w-full ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-gray-800">Equipamentos</h1>
          <div className="flex gap-2 items-center group rounded-lg p-2 border-2 shadow-md border-gray-300 focus-within:ring-2 focus-within:ring-primary-500 hover:border-gray-400 duration-200 transition-all">
            <input
              placeholder="Pesquisar"
              className="outline-none"
              onChange={(e) => setQuery(e.target.value)}
            />
            <FiSearch className="text-gray-400 group-focus-within:text-primary-500 duration-200 transition-colors" />
          </div>
        </div>
        <section className="mt-8 border rounded-lg p-2 shadow-md">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Modelo</th>
                <th>Estado</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {search(equipments).map((equipment) => {
                const equipmentModel = EquipmentsService.getModel(
                  equipment.equipmentModelId
                );
                const equipmentState = EquipmentsService.getEquipmentState(
                  equipment.id
                );

                return (
                  <tr>
                    <td>{equipment.name}</td>
                    <td>{equipmentModel.name}</td>
                    <td>
                      <p className="flex items-center justify-start gap-2">
                        <span
                          className="w-2 h-2 rounded"
                          style={{
                            background: equipmentState[0].color,
                          }}
                        ></span>
                        {equipmentState[0].name}
                      </p>
                    </td>
                    <td>
                      <button className="p-2 text-primary-500">
                        <Link to={`/equipments/${equipment.id}`}>
                          Ver detalhes
                        </Link>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </Layout>
  );
};
