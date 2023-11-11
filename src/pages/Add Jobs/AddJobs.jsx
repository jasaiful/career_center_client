import axios from 'axios';
import { useContext, useState } from 'react';
// import {useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddJobs = () => {

    const navigate = useNavigate();

    // const history = useHistory();
    const { user } = useContext(AuthContext);
    const [job, setJob] = useState({
        jobTitle: '',
        deadline: '',
        description: '',
        category: 'Web Development',
        minPrice: '',
        maxPrice: '',
        email: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = name === 'email' ? user?.email : value;
        setJob({ ...job, [name]: updatedValue });
    };

    const handleAddJob = async (event) => {
        try {
            event.preventDefault();
            await axios.post('https://a11-career-center-server.vercel.app/jobs', job);
            Swal.fire({
                title: 'Success',
                text: 'Job added successfully!',
                icon: 'success',
                confirmButtonText: 'Done'
            })
            navigate('/postedJob');
            // history.push('/my-posted-jobs');
        } catch (error) {
            toast.error('An error occurred');
        }
    };

    return (
        <div className="hero my-5 bg-base-200 rounded-xl max-w-5xl mx-auto">
            <div className="hero-content py-5 flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Add Jobs</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleAddJob} className="p-10 space-y-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={job.email || user?.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    value={job.jobTitle}
                                    onChange={handleInputChange}
                                    placeholder="Job Title"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Category</span>
                                </label>
                                <select
                                    // type="date"
                                    name="category"
                                    value={job.category}
                                    onChange={handleInputChange}
                                    // placeholder="Description"
                                    className="input input-bordered"
                                    required>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Graphics Design">Graphics Design</option>
                                    <option value="Systems Analyst">Systems Analyst</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label>
                                <input
                                    type="date"
                                    name="deadline"
                                    value={job.deadline}
                                    onChange={handleInputChange}
                                    // placeholder="Job Title"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea
                                    // type="date"
                                    name="description"
                                    value={job.description}
                                    onChange={handleInputChange}
                                    placeholder="Description"
                                    className="input input-bordered"
                                    required />
                            </div>
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Minimum Price</span>
                                </label>
                                <input
                                    type="number"
                                    name="minPrice"
                                    value={job.minPrice}
                                    onChange={handleInputChange}
                                    placeholder="Minimum Price"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Maximum Price</span>
                                </label>
                                <input
                                    type="number"
                                    name="maxPrice"
                                    value={job.maxPrice}
                                    onChange={handleInputChange}
                                    placeholder="Maximum Price"
                                    className="input input-bordered"
                                    required />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn text-white bg-red-600">Add Job</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJobs;