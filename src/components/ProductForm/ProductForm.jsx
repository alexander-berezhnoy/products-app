import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import Input from '../Input';
import TextArea from '../TextArea'
import { createProduct, updateProduct } from '../../utils/fetch';

import './style.scss';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.picture) {
    errors.picture = 'Required';
  }

  if (!values.description) {
    errors.description = 'Required';
  }

  if (!values.price) {
    errors.price = 'Required';
  }

  return errors;
};

const ProductForm = ({ product, action, match, history }) => {

  let fetchedErrors = {}

  const submitRequest = useCallback( async (submitted) => {
    try {
      let result;
      if (action === 'create'){
        result = await createProduct(submitted);
      } else
      if (action === 'update'){
        const  { id } = match.params;
        result = await updateProduct(id, submitted);
      } else {
        throw Error("Unknown action was given as prop");
      }

      if (result?.data?.message) {
        history.push("/products");
      }
      else {
        fetchedErrors = {...result};
      }
    } catch (err) {
      console.error(err)
    }
  }, [createProduct, updateProduct ]);

  return (
    <Formik
      initialValues={{...product}}
      validate={validate}
      onSubmit={(values, {setSubmitting, setErrors}) => {
        setTimeout(() => {
          const submitted = {
            name: values.name,
            picture: values.picture,
            description: values.description,
            price: Number(values.price)
          }
          setSubmitting(false);
          submitRequest(submitted);
          if (fetchedErrors) {
            console.log(fetchedErrors)
            setErrors(fetchedErrors);
          }
        }, 400);
      }}
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

        <input type="submit" className="button" value="Submit" />
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