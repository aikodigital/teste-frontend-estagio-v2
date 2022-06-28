import { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Marker, Popup } from 'react-leaflet';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { MapLeaflet } from '../components/Map';
import { getIcon } from '../helpers/Equipments';
import { EquipmentPositionHistory } from '../interfaces/EquipmentPositionHistory';
import { EquipmentsInterface } from '../interfaces/Equipments';
import EquipmentsService from '../services/EquipmentsService';

export const EquipmentPage = () => {
  const { equipmentId } = useParams();
  const navigate = useNavigate();

  const [equipment, setEquipment] = useState<EquipmentsInterface>();
  const [equipmentHistoryPositions, setEquipmentHistoryPositions] = useState<
    EquipmentPositionHistory | undefined
  >();
  useEffect(() => {
    if (equipmentId) {
      try {
        const equipment = EquipmentsService.getById(equipmentId);
        if (!equipment) {
          navigate('/equipments');
        }
        const positionHistory = EquipmentsService.getEquipmentPositionHistory(
          equipment.id
        );
        setEquipment(equipment);
        setEquipmentHistoryPositions(positionHistory);
      } catch (err) {
        navigate('/equipments');
      }
    }
  }, []);
  return (
    <Layout currentPath="/equipments">
      {!equipment && <p>Carregando...</p>}
      {equipment && (
        <main className="mt-4 mx-4 w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl text-gray-800">
              Equipamento - {equipment.name}
            </h1>
            <Link
              to="/equipments"
              className="flex gap-2 items-center p-4 rounded bg-primary-100 hover:bg-primary-500 hover:text-white duration-200 transition-colors "
            >
              <FiArrowLeft />
              Voltar
            </Link>
          </div>
          <section className="mt-8">
            <h3 className="text-2xl">Estatísticas do Equipamento</h3>
            <div className="border rounded-lg mt-4 shadow-md">
              <table className="w-full text-center ">
                <thead>
                  <tr>
                    <th className="p-2">Estado</th>
                    <th className="p-2">Ganho do Equipamento</th>
                    <th className="p-2">Produtividade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">
                      <p className="flex items-center justify-center gap-2">
                        <span
                          className="w-2 h-2 rounded"
                          style={{
                            background: EquipmentsService.getEquipmentState(
                              equipment.id
                            )[0].color,
                          }}
                        ></span>
                        {
                          EquipmentsService.getEquipmentState(equipment.id)[0]
                            .name
                        }
                      </p>
                    </td>
                    <td className="p-2">
                      R${' '}
                      {EquipmentsService.getEquipmentEarn(
                        equipment.equipmentModelId,
                        equipment.id
                      )}
                    </td>
                    <td className="p-2">
                      {EquipmentsService.getEquipmentProductivity(equipment.id)}
                      %
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="mt-8 mb-12">
            <h3 className="text-2xl mb-8">Histórico de posições</h3>
            <div className="flex gap-2 md:flex-row flex-col border rounded-lg shadow-md">
              <table className="block overflow-auto max-h-[200px] md:max-h-[500px] ">
                <thead className="sticky top-0 bg-white ">
                  <tr>
                    <th className="p-2">Data</th>
                    <th className="p-2">Localização</th>
                  </tr>
                </thead>
                <tbody>
                  {equipmentHistoryPositions?.positions?.map(
                    (equipmentHistoryPosition) => (
                      <tr className="odd:bg-primary-100">
                        <td className="p-2">
                          {new Date(
                            equipmentHistoryPosition.date
                          ).toLocaleString('pt-br')}
                        </td>
                        <td className="p-2">
                          {equipmentHistoryPosition.lat}LAT&nbsp;
                          {equipmentHistoryPosition.lon}LON
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
              <MapLeaflet
                initialPosition={[-19.07, -46]}
                className="w-full md:flex-1 h-[500px]"
              >
                {equipmentHistoryPositions?.positions?.map(
                  (equipmentHistoryPosition) => (
                    <Marker
                      icon={getIcon(equipment!.equipmentModelId)}
                      position={[
                        equipmentHistoryPosition.lat,
                        equipmentHistoryPosition.lon,
                      ]}
                    >
                      <Popup closeButton={true}>
                        <h2 className="text-lg">Nome: {equipment.name}</h2>
                        <p>
                          Data:{' '}
                          {new Date(
                            equipmentHistoryPosition.date
                          ).toLocaleString('pt-br')}
                        </p>
                      </Popup>
                    </Marker>
                  )
                )}
              </MapLeaflet>
            </div>
          </section>
          <section>
            <h3 className="text-2xl mb-8">Histórico de estados</h3>
            <div className="block relative max-h-[200px] md:max-h-[500px] overflow-auto border rounded-lg shadow-md ">
              <table className="w-full text-left">
                <thead className="sticky top-0 bg-white ">
                  <tr>
                    <th className="p-2">Data</th>
                    <th className="p-2">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {EquipmentsService.getEquipmentState(equipment.id).map(
                    (stateHistory) => (
                      <tr className="odd:bg-primary-100">
                        <td className="p-2">
                          {new Date(stateHistory.date).toLocaleString('pt-br')}
                        </td>
                        <td className="p-2">
                          <p className="flex items-center justify-left gap-2">
                            <span
                              className="w-2 h-2 rounded"
                              style={{
                                background: stateHistory.color,
                              }}
                            ></span>
                            {stateHistory.name}
                          </p>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      )}
    </Layout>
  );
};
