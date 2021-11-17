import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { InputParent } from './InputFormEl';

const InputForm = ({ type, name, id, placeholder, errorMessage, labelText, parantClassName }) => {
  return (
    <>
      <InputParent className={parantClassName ? parantClassName : 'input-parent'}>
        {parantClassName ? (
          <>
            <Field type={type} name={name} id={id} placeholder={placeholder} />
            <label htmlFor={id}>{labelText}</label>
          </>
        ) : (
          <>
            <label htmlFor={id}>{labelText}</label>
            <Field type={type} name={name} id={id} placeholder={placeholder} />
          </>
        )}
        <ErrorMessage name={name}>{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>
      </InputParent>
    </>
  );
};

export default InputForm;
