import * as Yup from 'yup';
const validationSchema = () => {
  return {
    title: Yup.string(),
    men_clothes: Yup.boolean(),
    women_clothes: Yup.boolean(),
    electronics: Yup.boolean(),
    jewelery: Yup.boolean(),
    minPrice: Yup.number(),
    maxPrice: Yup.number(),
  }
}
export default validationSchema;
