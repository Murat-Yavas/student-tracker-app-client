import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { fetchDelete, fetchOneStudent } from "../../redux/api/apiCall";
import "./Student.scss";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

let student;

const Student = () => {
  const { oneStudent, isLoading, isError, studentList } = useSelector(
    (state) => state.student
  );
  const dispatch = useDispatch();
  const idParam = useParams();

  useEffect(() => {
    fetchOneStudent(dispatch, idParam.id);
  }, [dispatch]);

  const singleStudent = studentList.find(
    (student) => student.id.toString() === idParam.id
  );

  if (singleStudent) {
    student = singleStudent;
  } else {
    student = oneStudent;
  }

  if (isError) {
    return <div>Error!!!</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Table striped bordered hover className="student-table">
      <thead>
        <tr className="text-center">
          <th className="table-id">Id</th>
          <th className="table-first-name">First Name</th>
          <th className="table-last-name">Last Name</th>
          <th className="table-email">Email</th>
          <th className="table-departments">Departments</th>
          <th className="table-actions" colSpan="6">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr key={student.id}>
          <td className="table-id">{student.id}</td>
          <td className="table-first-name">{student.firstName}</td>
          <td className="table-last-name">{student.lastName}</td>
          <td className="table-email">{student.email}</td>
          <td className="table-departments">{student.departments}</td>

          <td>
            <NavLink
              to={`/students/update-student/${student.id}`}
              className="btn btn-warning table-button"
            >
              <FaEdit />
            </NavLink>
          </td>
          <td>
            <NavLink
              to="/students"
              className="btn btn-danger table-button"
              onClick={() => fetchDelete(dispatch, idParam.id)}
            >
              <MdDelete />
            </NavLink>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Student;
