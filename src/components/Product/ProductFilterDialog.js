import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import initialValues from '../../utils/filterInitialValues';
import validationSchema from '../../utils/filterValidationSchema';
import ProductFilterDialogView from './ProductFilterDialogView';

const initial = initialValues();

const ProductFilterDialog = ({ filter, open, onClose }) => {
  const formik = useFormik({
    initialValues: initial,
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (values) => onClose(values),
  });
  useEffect(() => {
    formik.setValues({ ...initial, ...filter });
  }, [filter]);

  return <>{open && <ProductFilterDialogView formik={formik} />}</>;
};

export default ProductFilterDialog;
