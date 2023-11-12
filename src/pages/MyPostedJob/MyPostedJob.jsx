import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyPostedJob = () => {
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedJobId, setSelectedJobId] = useState(null);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [myJobs, setMyJobs] = useState([]);

    useEffect(() => {
        const fetchMyJobs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/jobs', {
                    params: { email: user?.email }
                });
                setMyJobs(response.data);

            } catch (error) {
                console.error('Error fetching my jobs:', error);
            }
        };
        fetchMyJobs();
    }, [user]);

    // const handleUpdateJob = async (jobId) => {
    //     // Navigate to the update job page/modal
    //     navigate(`/updateJob/${jobId}`);
    // };

    const handleDeleteJob = async (jobId) => {
        const isUserJob = myJobs.some((job) => job._id === jobId && job.email === user?.email);

        if (!isUserJob) {
            toast.error("You can only delete your own job posts.");
            return;
        }

        // Confirm deletion with a sweet alert
        const confirmDelete = await Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        });

        if (confirmDelete.isConfirmed) {
            try {
                // Delete the job from the database
                await axios.delete(`http://localhost:5000/jobs/${jobId}`);

                // Remove the deleted job from the local state
                setMyJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));

                // Show success message
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your job has been deleted.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            } catch (error) {
                console.error('Error deleting job:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'An error occurred while deleting the job.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        }
    };


    return (
        <div className="px-10 py-6 rounded bg-base-200">
            <h2 className="text-4xl mb-6 text-center font-bold">My Posted Jobs</h2>
            <div className="grid md:grid-cols-2 space-y-2 gap-5 justify-center mt-5 outline-1 p-2">
                {
                    myJobs.map(job => (<div key={job._id} className="job-card space-y-2 border border-slate-900 shadow-lg p-5 rounded-2xl bg-white">
                        <h3 className='text-xl font-semibold'>{job.jobTitle}</h3>
                        <p>Deadline: {job.deadline}</p>
                        <p>Category: {job.category}</p>
                        <p>Description: {job.description}</p>
                        <p>Price Range: ${job.minPrice} - ${job.maxPrice}</p>

                        <Link to={`/jobs/${job._id}`}><button className="btn btn-sm btn-primary">Update</button></Link>
                        <button className=" btn btn-sm btn-secondary ml-20" onClick={() => handleDeleteJob(job._id)}>Delete</button>

                    </div>

                    ))
                }
            </div>
        </div>
    );
};

export default MyPostedJob;