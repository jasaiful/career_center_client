import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddJobs from "../pages/Add Jobs/AddJobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyBids from "../pages/MyBids/MyBids";


const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addJobs',
                element: <AddJobs></AddJobs>
            },
            {
                path: '/myBids',
                element: <MyBids></MyBids>
            },
            {
                path: '/jobs/:id',
                element: <JobDetails></JobDetails>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/jobs/${params.id}`);
                },
            },
        ]
    }
])

export default MainRoute;