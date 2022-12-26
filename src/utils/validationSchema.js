import * as Yup from 'yup';
const validationSchema = () => {
  return {
    username: Yup.string().required('The user is required'),
    password: Yup.string().required('The password is required')
  }
}
export default validationSchema;
