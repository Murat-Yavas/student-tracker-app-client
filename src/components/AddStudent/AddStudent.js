import { createStudent } from "../../redux/api/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./AddStudent.scss";
import { checkInputsAreEmpty } from "../../helpers/FormFunctions";

const AddStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [departments, setDepartments] = useState("");

  const dispatch = useDispatch();

  const handleCreateStudent = (e) => {
    e.preventDefault();
    const newStudent = {
      firstName,
      lastName,
      email,
      departments,
    };
    e.preventDefault();
    if (checkInputsAreEmpty(newStudent)) {
      toast.error("Inputs cannot be left blank!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else createStudent(dispatch, newStudent);
  };

  return (
    <Form className="input-form row">
      <Form.Group className="mb-3 col-md-6 col-4">
        <Form.Label className="label-text ">First Name</Form.Label>
        <Form.Control
          required
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
          className="user-input"
        />

        <Form.Label className="label-text">Last Name</Form.Label>
        <Form.Control
          required
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
          className="user-input"
        />

        <Form.Label className="label-text">Email</Form.Label>
        <Form.Control
          required
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          className="user-input"
        />

        <Form.Label className="label-text">Department</Form.Label>
        <Form.Control
          required
          onChange={(e) => setDepartments(e.target.value)}
          type="text"
          placeholder="Department"
          value={departments}
          className="user-input"
        />

        <div className="form-button-container">
          <Button
            variant="dark"
            className="form-button"
            onClick={handleCreateStudent}
          >
            Save
          </Button>
        </div>
      </Form.Group>
      <ToastContainer />
    </Form>
  );
};

export default AddStudent;
