import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddJobs from "../pages/Add Jobs/AddJobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyBids from "../pages/MyBids/MyBids";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import PrivateRoute from "./PrivateRoute";
import BidRequest from "../pages/BidRequest/BidRequest";
import UpdateJobModal from "../components/UpdateJobModal";


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
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            },
            {
                path: '/postedJob',
                element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
            },
            {
                path: '/myBids',
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
            },
            {
                path: '/bidRequest',
                element: <PrivateRoute><BidRequest></BidRequest></PrivateRoute>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: async ({ params }) => {
                    return fetch(`https://a11-career-center-server.vercel.app/jobs/${params.id}`);
                },
            },
            {
                path: '/updateJob/:jobId',
                element: <PrivateRoute> <UpdateJobModal></UpdateJobModal> </PrivateRoute>,
                loader: async ({ params }) => {
                    return fetch(`https://a11-career-center-server.vercel.app/jobs/${params.jobId}`);
                },
            },
        ]
    }
])

export default MainRoute;