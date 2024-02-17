import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import StudentViewPage from "./pages/Students";
import StudentPage from "./pages/Student";
import AddStudentPage from "./pages/AddStudent";
import UpdateStudentPage from "./pages/UpdateStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/students",
        element: <StudentViewPage />,
      },
      { path: "/students/:id", element: <StudentPage /> },
      { path: "/add-student", element: <AddStudentPage /> },
      { path: "/students/update-student/:id", element: <UpdateStudentPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
