import { useField } from 'formik';
import React from 'react';
import '../ProductForm/style.scss';

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

export default TextArea;