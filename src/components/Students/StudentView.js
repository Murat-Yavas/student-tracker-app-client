import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDelete, fetchStudents } from "../../redux/api/apiCall";
import { NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import "./StudentView.scss";

const StudentView = () => {
  const { studentList, isLoading, isError } = useSelector(
    (state) => state.student
  );
  const dispatch = useDispatch();
  useEffect(() => {
    fetchStudents(dispatch);
  }, [dispatch]);

  if (isError) {
    return <div>Error!!!</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {studentList.length === 0 ? (
        <div className="info-text">
          <h2>There are currently no students. You can add a student</h2>
        </div>
      ) : (
        <section>
          <Table striped bordered hover className="students-table">
            <thead>
              <tr className="text-center">
                <th className="table-id">Id</th>
                <th className="table-first-name">First Name</th>
                <th className="table-last-name">Last Name</th>
                <th className="table-email">Email</th>
                <th className="table-departments">Departments</th>
                <th className="table-actions" colSpan="3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {studentList.map((student) => (
                <tr key={student.id}>
                  <td className="table-id">{student.id}</td>
                  <td className="table-first-name">{student.firstName}</td>
                  <td className="table-last-name">{student.lastName}</td>
                  <td className="table-email">{student.email}</td>
                  <td className="table-departments">{student.departments}</td>
                  <td className="table-actions">
                    <NavLink
                      to={`/students/${student.id}`}
                      className="btn btn-info table-button"
                    >
                      <FaEye />
                    </NavLink>
                  </td>
                  <td className="table-actions">
                    <NavLink
                      to={`/students/update-student/${student.id}`}
                      className="btn btn-warning table-button"
                    >
                      <FaEdit />
                    </NavLink>
                  </td>
                  <td className="table-actions">
                    <NavLink
                      className="btn btn-danger table-button"
                      onClick={() => fetchDelete(dispatch, student.id)}
                    >
                      <MdDelete />
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      )}
    </>
  );
};

export default StudentView;
