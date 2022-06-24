import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'
import { setFilter } from '../store/datafilter';
import * as S from './style'

const FilterData = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
           nome:'todos',
           situation: 'todos'
        },
        onSubmit(values, formikHelpers) {},
    })
    dispatch(setFilter(formik.values))
    
  return (
    <S.StyledContainer>
        <S.StyledForm name = 'nome'  onChange={formik.handleChange}>
            <option value='todos'>Selecione nome (todos)</option>
            <option value='Caminhão de carga'>Caminhão de carga</option>
            <option value="Garra traçadora">Garra traçadora</option>
            <option value="Harvester">Harvester</option>
        </S.StyledForm>
        <S.StyledForm name = 'situation'  onChange={formik.handleChange}>
            <option value='todos'>Selecione a situação (todos)</option>
            <option value="Operando">Operando</option>
            <option value="Manutenção">Manutenção</option>
            <option value="Parado">Parado</option>
        </S.StyledForm>
    </S.StyledContainer>

  )
}

export default FilterData;