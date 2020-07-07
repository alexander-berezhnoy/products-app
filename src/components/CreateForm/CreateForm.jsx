import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CreateForm = () => (
  <div>
    <h1>Create Product</h1>
    <Formik
      initialValues={{ name: '', picture: '', description: '', price: 0}}
      validate={ values => {
        const errors = {};
        if (!values.name){
          errors.name = 'Required';
        }
        if (!values.picture){
          errors.picture = 'Required';
        }
        if (!values.description){
          errors.description = 'Required';
        }
        if (!values.price){
          errors.price = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {
        ({ isSubmitting }) => (
          <Form>
            <Field type="text" name="name"/>
            <ErrorMessage name="name" component="div" />
            <Field type="text" name="picture"/>
            <ErrorMessage name="picture" component="div" />
            <Field as="textarea" name="description"/>
            <ErrorMessage name="description" component="div" />
            <Field type="number" name="price" min="0" step="0.01" />
            <ErrorMessage name="price" component="div" />
          </Form>
        )
      }
    </Formik>
  </div>
)
export default CreateForm;