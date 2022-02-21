import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import { DisplayingErrorMessagesSchema } from "./ValidationsForm";
import InputSearchVisitor from "./InputSearchVisitor";
import "../../pages/Register/Register.css";
import { brands_car } from "./Car_brands";
import { useSelector } from "react-redux";
import { boolean } from "yup";

const RegisterForm = () => {
  const image = useSelector((state) => state.visitor.image);
  const refdpbutton = useRef(null);
  const refcbComputer = useRef(null);
  const reftransportpbtn = useRef(null);
  const [viewPD, setViewPD] = useState(true);
  const [isComputer, setIsComputer] = useState(false);
  const onChangeDataPersonal = () => {
    setViewPD(true);
    refdpbutton.current.parentElement.classList.add("tab-active");
    reftransportpbtn.current.parentElement.classList.remove("tab-active");
  };
  const onChangeTransport = () => {
    setViewPD(false);
    refdpbutton.current.parentElement.classList.remove("tab-active");
    reftransportpbtn.current.parentElement.classList.add("tab-active");
  };
  const onChangecbComputer = (event) => {
    debugger;
    let val = event.currentTarget.checked;
    setIsComputer(val);
  };
  const [brands] = useState(brands_car);
  return (
    <div>
      <p className="text-2xl font-semibold text-left mt-10 ml-6">
        Registro de visitantes
      </p>
      <div className="float-right py-4">
        <InputSearchVisitor />
      </div>
      <div class=" mx-auto mt-4  rounded">
        <ul id="tabs" class="inline-flex w-full px-1 pt-2 ">
          <li class="px-4 py-2 -mb-px font-semibold tab-active">
            <a
              onClick={onChangeDataPersonal}
              ref={refdpbutton}
              id="default-tab"
              href="#first"
            >
              Datos Perosnales
            </a>
          </li>
          <li class="px-4 py-2 font-semibold">
            <a
              onClick={onChangeTransport}
              ref={reftransportpbtn}
              href="#transort"
            >
              Transporte
            </a>
          </li>
        </ul>
        <Formik
          initialValues={{
            completeName: "",
            company: "",
            floor: "",
            gaffete: "",
            affair: "",
            visited: "",
            transport: {
              color: "",
            },
            imageData: "",
            computer: false,
          }}
          validationSchema={DisplayingErrorMessagesSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div id="tab-contents">
                {viewPD ? (
                  <div id="first" class="p-4">
                    <div className="wrapper-form">
                      <div className="wrapper-input">
                        <Field
                          type="text"
                          className="Input-text"
                          placeholder="Nombre Completo"
                          name="completeName"
                        />
                        <label className="Input-label">Nombre Completo</label>
                        {/* If this field has been touched, and it contains an error, display it*/}
                        {touched.completeName && errors.completeName && (
                          <div className="error-input">
                            {errors.completeName}
                          </div>
                        )}
                      </div>
                      <div className="wrapper-input">
                        <Field
                          name="company"
                          type="text"
                          className="Input-text"
                          placeholder="Compañia"
                        />
                        <label className="Input-label">Compañia</label>
                        {touched.company && errors.company && (
                          <div className="error-input">{errors.company}</div>
                        )}
                      </div>
                      <div className="wrapper-input">
                        <Field as="select" name="floor" className="Input-text">
                          <option value="">piso</option>
                          <option value="1">1</option>
                          <option value="3">3</option>
                          <option value="6">6</option>
                        </Field>
                        <label className="Input-label">piso</label>
                        {touched.floor && errors.floor && (
                          <div className="error-input">{errors.floor}</div>
                        )}
                      </div>
                      <div className="wrapper-input">
                        <Field
                          name="gaffete"
                          type="text"
                          className="Input-text"
                          placeholder="gafete"
                        />
                        <label className="Input-label">gafete</label>
                        {touched.gaffete && errors.gaffete && (
                          <div className="error-input">{errors.gaffete}</div>
                        )}
                      </div>
                      <div className="wrapper-input">
                        <Field
                          name="affair"
                          type="text"
                          className="Input-text w-36"
                          placeholder="Asunto"
                        />
                        <label className="Input-label">Asunto</label>
                        {touched.affair && errors.affair && (
                          <div className="error-input">{errors.affair}</div>
                        )}
                      </div>
                      <div className="wrapper-input">
                        <Field
                          name="visited"
                          type="text"
                          className="Input-text"
                          placeholder="Visita a"
                        />
                        <label className="Input-label">Visita a</label>
                        {touched.visited && errors.visited && (
                          <div className="error-input">{errors.visited}</div>
                        )}
                      </div>
                      <div className="wrapper-input">
                        <div className="flex">
                          <div class="content-rb w-8 flex items-center justify-center bg-blue-lighter border-t border-l border-b border-blue-lighter rounded-l text-blue-dark">
                            <Field
                              type="checkbox"
                              name="computer"
                              onClick={onChangecbComputer}
                            />
                          </div>
                          <Field
                            name="serial"
                            type="text"
                            className="Input-text"
                            Style="border-bottom-left-radius: 0;border-top-left-radius: 0;"
                            placeholder="Serie computadora"
                            disabled={!isComputer}
                          />
                        </div>
                        <label className="Input-label">Serie computadora</label>
                        {touched.serial && errors.serial && (
                          <div className="error-input">{errors.serial}</div>
                        )}
                      </div>
                      <div className="wrapper-input textarea-content">
                        <Field
                          as="textarea"
                          name="comments"
                          type="text"
                          className="Input-text "
                          placeholder="Comentarios"
                        />
                        {/* <label className="Input-label">Comentarios</label> */}
                        {touched.comments && errors.comments && (
                          <div className="error-input">{errors.comments}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div id="transort" class="p-4">
                    <div className="wrapper-form">
                      <div className="wrapper-input">
                        <Field
                          as="select"
                          name="transport.brand"
                          className="Input-text"
                        >
                          <option value="">selecciona una marca</option>
                          {brands.map((brand) => {
                            return (
                              <option id={brand.id} value={brand.name}>
                                {brand.name}
                              </option>
                            );
                          })}
                        </Field>
                        <label className="Input-label">marca</label>
                      </div>
                      <div className="wrapper-input">
                        <Field
                          name="transport.model"
                          type="text"
                          className="Input-text"
                          placeholder="modelo"
                        />
                        <label className="Input-label">modelo</label>
                      </div>
                      <div className="wrapper-input">
                        <Field
                          name="transport.model"
                          type="text"
                          className="Input-text"
                          placeholder="color"
                        />
                        <label className="Input-label">color</label>
                      </div>
                      <div className="wrapper-input">
                        <Field
                          name="transport.identifier"
                          type="text"
                          className="Input-text"
                          placeholder="placas"
                        />
                        <label className="Input-label">placas</label>
                      </div>
                      <div className="wrapper-input">
                        <Field
                          as="select"
                          name="transport.type"
                          className="Input-text"
                        >
                          <option value="">tipo</option>
                          <option value="1">auto</option>
                          <option value="2">camioneta</option>
                          <option value="3">camion</option>
                          <option value="4">motocicleta</option>
                        </Field>
                        <label className="Input-label">tipo</label>
                      </div>
                      <Field name="imageData" type="hidden" value={image} />
                    </div>
                  </div>
                )}
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <script></script>
    </div>
  );
};
export default RegisterForm;
