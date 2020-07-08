import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
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

const ProductForm = ({ product, handleRequest }) => {
  const formik = useFormik({
    initialValues: {
      name: product.name,
      picture: product.picture,
      description: product.description,
      price: product.price
    },
    validate,
    onSubmit: values => { // handleRequest
      alert(JSON.stringify(values, null, 2));
      handleRequest();
    }
  });

  return(
    <form onSubmit={formik.handleSubmit} className="form">
      <label htmlFor="name">Name</label>
      <input name="name" type="text" {...formik.getFieldProps('name')} />
      { formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}

      <label htmlFor="picture">Picture</label>
      <input name="picture" type="text" {...formik.getFieldProps('picture')} />
      { formik.touched.picture && formik.errors.picture ? <div className="error">{formik.errors.picture}</div> : null}

      <label htmlFor="description">Description</label>
      <textarea name="description" {...formik.getFieldProps('description')} rows="5" cols="33" />
      { formik.touched.description && formik.errors.description ? <div className="error">{formik.errors.description}</div> : null}

      <label htmlFor="price">Price</label>
      <input name="price" type="number" min="0" step="0.01" className="number" {...formik.getFieldProps('price')} />
      { formik.touched.price && formik.errors.price ? <div className="error">{formik.errors.price}</div> : null}

      <input type="submit" value="Submit" />
    </form>
  )
}

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

      {/*  <Formik*/}
      {/*    initialValues={{ name: '', picture: '', description: '', price: 0}}*/}
      {/*    validate={ values => {*/}
      {/*      const errors = {};*/}
      {/*      if (!values.name){*/}
      {/*        errors.name = 'Required';*/}
      {/*      }*/}
      {/*      if (!values.picture){*/}
      {/*        errors.picture = 'Required';*/}
      {/*      }*/}
      {/*      if (!values.description){*/}
      {/*        errors.description = 'Required';*/}
      {/*      }*/}
      {/*      if (!values.price){*/}
      {/*        errors.price = 'Required';*/}
      {/*      }*/}
      {/*      return errors;*/}
      {/*    }}*/}
      {/*    onSubmit={(values, { setSubmitting }) => {*/}
      {/*      setTimeout(() => {*/}
      {/*        alert(JSON.stringify(values, null, 2));*/}
      {/*        setSubmitting(false);*/}
      {/*      }, 400);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {*/}
      {/*      ({ isSubmitting }) => (*/}
      {/*        <Form>*/}
      {/*          <Field type="text" name="name"/>*/}
      {/*          <ErrorMessage name="name" component="div" />*/}
      {/*          <Field type="text" name="picture"/>*/}
      {/*          <ErrorMessage name="picture" component="div" />*/}
      {/*          <Field as="textarea" name="description"/>*/}
      {/*          <ErrorMessage name="description" component="div" />*/}
      {/*          <Field type="number" name="price" min="0" step="0.01" />*/}
      {/*          <ErrorMessage name="price" component="div" />*/}
      {/*        </Form>*/}
      {/*      )*/}
      {/*    }*/}
      {/*  </Formik>*/}
      {/*</div>*/}