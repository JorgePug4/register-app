import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import "../../pages/Register/Register.css";
import { Formik, Form, Field } from "formik";

export default function InputSearchVisitor(props) {
  return (
    <div>
      <Formik
        initialValues={{
          search: "",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        <Form>
          <span className="iconW">
            <FiSearch />
          </span>
          <Field
            name="search"
            type="text"
            className="w-72"
            placeholder="Buscar Visitante..."
          />
          <label className="Input-label">Buscar Visitante...</label>
        </Form>
      </Formik>
    </div>
  );
}
