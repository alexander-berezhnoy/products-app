import { useField } from 'formik';
import React from 'react';
import classNames from 'classnames';
import '../ProductForm/style.scss';

const Input = ({label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name } className="label">{label}</label>
      <input className={classNames('field', { 'field-error': !!(meta.touched && meta.error)})} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
};

export default Input;