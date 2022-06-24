import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'
import { setFilter } from '../store/datafilter';
import equipmentModel from '../assets/data/equipmentModel.json'
import equipmentState from '../assets/data/equipmentState.json'
import * as S from './style'

const FilterData = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
           nome:'todos',
           situation: 'todos'
        },
        onSubmit() {},
    })
    dispatch(setFilter(formik.values))
    
    return (
        <S.StyledContainer>
            <S.StyledForm name = 'nome'  onChange={formik.handleChange}>
                <option value='todos'>Selecione nome do equipamento (todos)</option>
                {equipmentModel.map((item, index)=>(
                    <option key={index} value={item.name}>{item.name}</option>
                ))}

            </S.StyledForm>
            <S.StyledForm name = 'situation'  onChange={formik.handleChange}>
                <option value='todos'>Selecione a situação do equipamento (todos)</option>
                {equipmentState.map((item, index)=>(
                    <option key={index} value={item.name}>{item.name}</option>
                ))}
                
            </S.StyledForm>
        </S.StyledContainer>

    )
}

export default FilterData;