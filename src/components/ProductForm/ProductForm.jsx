import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import Input from '../Input';
import TextArea from '../TextArea'
import { submitRequest } from '../../utils/submit';

import './style.scss';

const validate = values => {
  const errors = {};
  [name, picture, description, price].forEach(
    field => {
      if (!values[field]) errors[field] = 'Required';
    }
  );
  return errors;
};

const ProductForm = ({ product, match, history }) => {

  const handleSubmit = useCallback(async (values, { setErrors }) => {
    const errors = await submitRequest(
      { ...values, price: Number(values.price) }, 
      { match, history }
    );
    if (errors) {
      console.log(errors)
      setErrors(errors);
    }
  });

  return (
    <Formik
      initialValues={{...product}}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <Form className="form">
        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="Enter product name"
        />

        <Input
          label="Image"
          name="picture"
          type="text"
          placeholder="Insert image URL"
        />

        <TextArea
          label="Description"
          name="description"
          rows="5"
          cols="33"
        />

        <Input
          label="Price"
          name="price"
          type="number"
          min="0"
          step="0.01"
        />

        <button className="button" value="Submit" />
      </Form>
    </Formik>
  );
};

ProductForm.propTypes = {
  product: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
  action: PropTypes.string.isRequired
}

ProductForm.defaultProps = {
  product: {
    name: '',
    description: '',
    picture: '',
    price: 0
  }
}

export default ProductForm;
