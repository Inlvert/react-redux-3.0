import { Form, Formik, Field } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as CarActionFinder from "../../redux/actions/carsActionCreators";

const initialValues = {
  cars: [],
};

const TakeAllCars = ({ findAllCarRequest }) => {
  const hendleSubmit = (values, formikBag) => {
    const cars = {
      ...values,
    };
    findAllCarRequest(cars);
    console.log(values)

  };

  // const carList = cars.map((car) => (
  //   <li>
  //     <h1 ></h1>
  //   </li>
  // ))

  return (
    <div>
      <h1>TakeAllCars</h1>
      <Formik initialValues={initialValues} onSubmit={hendleSubmit}>
        <Form>
          <button type="submit">all cars from DB</button>
        </Form>
      </Formik>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    cars: state.car.cars,
  };
}

function mDTp(dispatch) {
  return {
    findAllCarRequest: (cars) =>
      dispatch(CarActionFinder.findAllCarsRequest(cars)),
  };
}

export default connect(mapStateToProps, mDTp)(TakeAllCars);
