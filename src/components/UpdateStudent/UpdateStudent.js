import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneStudent, updateStudent } from "../../redux/api/apiCall";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkInputsAreEmpty } from "../../helpers/FormFunctions";

const UpdateStudent = () => {
  const idParam = useParams();
  const { oneStudent, isError } = useSelector((state) => state.student);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [departments, setDepartments] = useState("");

  useEffect(() => {
    if (Object.keys(oneStudent).length === 0) {
      fetchOneStudent(dispatch, idParam.id);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(oneStudent).length !== 0) {
      setFirstName(oneStudent.firstName);
      setLastName(oneStudent.lastName);
      setEmail(oneStudent.email);
      setDepartments(oneStudent.departments);
    }
  }, [oneStudent]);

  const handleSubmit = (e) => {
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
    } else updateStudent(dispatch, newStudent, idParam.id);
  };

  return (
    <Form className="input-form row">
      <Form.Group className="mb-3 col-md-6 col-4 user-input-group">
        <Form.Label className="label-text">First Name</Form.Label>
        <Form.Control
          required
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
          value={firstName}
          className="user-input"
        />

        <Form.Label className="label-text">Last Name</Form.Label>
        <Form.Control
          required
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
          value={lastName}
          className="user-input"
        />

        <Form.Label className="label-text">Email</Form.Label>
        <Form.Control
          required
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          value={email}
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

        <Button variant="dark" onClick={handleSubmit}>
          Update
        </Button>
      </Form.Group>

      <ToastContainer />
    </Form>
  );
};

export default UpdateStudent;
