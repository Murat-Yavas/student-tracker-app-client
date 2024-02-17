import { toast } from "react-toastify";
import { studentActions } from "../student-slice";

export const fetchStudents = async (dispatch) => {
  dispatch(studentActions.toggleIsLoading(true));
  try {
    const response = await fetch("http://localhost:8080/students");
    const result = await response.json();
    dispatch(studentActions.getStudents(result));
    dispatch(studentActions.toggleIsLoading(false));
    dispatch(studentActions.toggleIsError(false));
  } catch (error) {
    dispatch(studentActions.toggleIsLoading(false));
    dispatch(studentActions.toggleIsError(true));
  }
};

export const fetchOneStudent = async (dispatch, id) => {
  dispatch(studentActions.toggleIsLoading(true));

  try {
    const response = await fetch("http://localhost:8080/students/" + id);
    const result = await response.json();

    dispatch(studentActions.getOneStudent(result));
    dispatch(studentActions.toggleIsLoading(false));
    dispatch(studentActions.toggleIsError(false));
  } catch (error) {
    dispatch(studentActions.toggleIsLoading(false));
    dispatch(studentActions.toggleIsError(true));
  }
};

export const createStudent = async (dispatch, newStudent) => {
  dispatch(studentActions.toggleIsLoading(true));

  try {
    const response = await fetch("http://localhost:8080/students", {
      method: "POST",
      body: JSON.stringify(newStudent),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) throw new Error("something went wrong");
    const result = await response.json();

    toast.success("Added successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    dispatch(studentActions.addStudent(newStudent));
    dispatch(studentActions.toggleIsLoading(false));
    dispatch(studentActions.toggleIsError(false));
  } catch (error) {
    toast.error("An error occured! Please try again", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    dispatch(studentActions.toggleIsLoading(false));
    dispatch(studentActions.toggleIsError(true));
  }
};

export const updateStudent = async (dispatch, newStudent, id) => {
  dispatch(studentActions.toggleIsLoading(true));

  try {
    const response = await fetch("http://localhost:8080/students/" + id, {
      method: "PUT",
      body: JSON.stringify(newStudent),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    toast.success("Updated successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const result = await response.json();
    dispatch(studentActions.editStudent(newStudent));
    dispatch(studentActions.toggleIsLoading(false));
    dispatch(studentActions.toggleIsError(false));
  } catch (error) {
    toast.error("An error occured! Please try again", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch(studentActions.toggleIsLoading(false));
    dispatch(studentActions.toggleIsError(true));
  }
};

export const fetchDelete = async (dispatch, id) => {
  try {
    const response = await fetch("http://localhost:8080/students/" + id, {
      method: "DELETE",
    });
    dispatch(studentActions.deleteStudent(id));
    dispatch(studentActions.toggleIsError(false));
  } catch (error) {
    dispatch(studentActions.toggleIsError(true));
  }
};
