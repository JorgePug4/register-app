import React from "react";
import ProfileInfo from "../../components/Employee/ProfileInfo";
import RegisterForm from "../../components/Register/RegisterForm";
import VisitorList from "../../components/Register/VisitorsList";
import "../../pages/Register/Register.css";
import WebcamCapture from "./../../components/Register/WebcamCapture";
export default function Register() {
  return (
    <div className="content-register">
      <div className="content-form">
        <RegisterForm></RegisterForm>
      </div>
      <div className="content-image">
        <WebcamCapture />
      </div>
      <div className="content-data">
        <ProfileInfo />
        <VisitorList />
      </div>
    </div>
  );
}
