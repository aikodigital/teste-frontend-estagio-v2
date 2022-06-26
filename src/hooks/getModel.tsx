import * as React from 'react';

function useGetModel(id:any, equipment:any, equipmentModel:any) {
    const equipmentModelId = equipment.filter((e:any) => e.id === id).map((e:any) => e.equipmentModelId).join('')
    const modelName = equipmentModel.filter((e:any) => e.id === equipmentModelId)

    return modelName
}

export default useGetModel