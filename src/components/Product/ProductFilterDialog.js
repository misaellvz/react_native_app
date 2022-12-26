
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import initialValues from '../../utils/filterInitialValues';
import validationSchema from '../../utils/filterValidationSchema';
import ProductFilterDialogView from './ProductFilterDialogView';


const ProductFilterDialog = ({ open, onClose }) => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (values) => onClose(values),
  });

    return (
      <>
        {open && <ProductFilterDialogView formik={formik}/>}
      </>
    );
};

export default ProductFilterDialog;
