import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, useField } from 'formik';
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

const ProductForm = ({ product, handleRequest }) => {
  return (
    <Formik
      initialValues={{
        name: product.name,
        picture: product.picture,
        description: product.description,
        price: product.price
      }}
      validate={validate}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          handleRequest();
          setSubmitting(false);
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
  handleRequest: PropTypes.func.isRequired
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