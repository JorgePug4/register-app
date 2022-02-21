import * as Yup from "yup";
export const DisplayingErrorMessagesSchema = Yup.object().shape({
  completeName: Yup.string().required("Este campo es requerido"),
  company: Yup.string().required("Este campo es requerido"),
  floor: Yup.string().required("requerido"),
  gaffete: Yup.string().required("requerido"),
  affair: Yup.string().required("requerido"),
  visited: Yup.string().required("requerido"),
});
