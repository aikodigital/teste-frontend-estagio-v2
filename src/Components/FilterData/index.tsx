import { useFormik, validateYupSchema } from 'formik';
import * as S from './style'

const FilterData = () => {
    const formik = useFormik({
        initialValues: {
           nome:'',
           situation: ''
        },
        onSubmit(values, formikHelpers) {},
    })
    console.log(formik.values);
    
  return (
    <S.StyledContainer>
        <S.StyledForm name = 'nome'  onChange={formik.handleChange}>
            <option>Selecione a situação</option>
            <option value='1'>One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </S.StyledForm>
        <S.StyledForm name = 'situation'  onChange={formik.handleChange}>
            <option>Selecione a situação</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </S.StyledForm>
    </S.StyledContainer>

  )
}

export default FilterData;