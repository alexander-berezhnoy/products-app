import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, useField } from 'formik';
import './style.scss';

import { createProduct, updateProduct } from '../../utils/fetch'

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

const Input = ({label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name } className="label">{label}</label>
      <input className="field" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
};

const TextArea = ({label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name } className="label">{label}</label>
      <textarea className="field" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
};

const ProductForm = ({ product, action, match, history }) => {

  const submitRequest = useCallback( async (submitted) => {
    try {
      let result;
      if (action === 'create'){
        result = await createProduct(submitted);
      }
      if (action === 'update'){
        const  { id } = match.params;
        result = await updateProduct(id, submitted);
      }
      if (result?.data?.message) {
        history.push("/");
      }
    } catch (err) {
      console.error(err)
    }
  }, [createProduct, updateProduct ]);

  return (
    <Formik
      initialValues={{...product}}
      validate={validate}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          const submitted = {
            name: values.name,
            picture: values.picture,
            description: values.description,
            price: Number(values.price)
          }
          setSubmitting(false);
          submitRequest(submitted);
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

export default withRouter(ProductForm);