import React from "react";
import { Formik, Form, Field } from "formik";

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  gender: '',
  birthday: ''
}



const UserCreationForm = (props) => {

  const handlerSubmit = (values, formikBag) => {
    const userData = {
      ...values,
      isMale: values.gender === 'male',
      gender: undefined,
    }
    console.log(userData);
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handlerSubmit}>
      <Form>
        <Field name='fullName' placeholder='fullName' />
        <Field name='email' placeholder='email' type='email'/>
        <Field name='password' placeholder='password' />
        <fieldset>
          <legend>Choose you gender </legend>
          <label>
            <Field name='gender' type='radio' value='male' /> Male
          </label>
          <label>
            <Field name='gender' type='radio' value='female'/> Female
          </label>
        </fieldset>
        <label>Enter your birthday</label><Field name='birthday' type='date'/>
        <button type="submit">Create User</button>
      </Form>
    </Formik>
  );
};

export default UserCreationForm;
