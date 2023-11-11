import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const UpdateJobModal = ({ jobId, onClose, onUpdate }) => {
    const [updatedData, setUpdatedData] = useState({
        email: '',
        jobTitle: ''
    });

    useEffect(() => {
        const fetchJobData = async () => {
            try {
                const response = await axios.get(`https://a11-career-center-server.vercel.app/jobs/${jobId}`);
                setUpdatedData(response.data);
            } catch (error) {
                console.error('Error fetching job data:', error);
            }
        };

        fetchJobData();
    }, [jobId]);

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setUpdatedData({ ...updatedData, [name]: value });
    // };

    const handleUpdate = async (e) => {
        e.preventDefault();
        // const form = e.target;
        // const email = user?.email
        // const jobTitle = form.jobTitle.value
        // const bidPrice = form.bidPrice.value
        // const category = form.category.value
        // const bidDate = form.bidDate.value
        // const deadline = form.deadline.value
        // const buyerEmail = form.buyerEmail.value
        try {

            await axios.patch(`https://a11-career-center-server.vercel.app/jobs/${jobId}`, updatedData);
            toast.success('Job updated successfully!');
            onUpdate();
            onClose();
        } catch (error) {
            console.error('Error updating job:', error);
            toast.error('An error occurred while updating the job.');
        }
        console.log(updatedData);
    };

    return (
        <div className="hero my-5 bg-base-200 rounded-xl max-w-5xl mx-auto">
            <div className="hero-content py-5 flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Update Job</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdate} className="p-10 space-y-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={updatedData?.email || ''}
                                readOnly
                                placeholder="Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    value={updatedData?.jobTitle || ''}
                                    onChange={(e) => setUpdatedData({ ...updatedData, jobTitle: e.target.value })}
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
                                    value={updatedData?.category || ''}
                                    onChange={(e) => setUpdatedData({ ...updatedData, category: e.target.value })}
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
                                    value={updatedData?.deadline || ''}
                                    onChange={(e) => setUpdatedData({ ...updatedData, deadline: e.target.value })}
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
                                    value={updatedData?.description || ''}
                                    onChange={(e) => setUpdatedData({ ...updatedData, description: e.target.value })}
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
                                    value={updatedData?.minPrice || ''}
                                    onChange={(e) => setUpdatedData({ ...updatedData, minPrice: e.target.value })}
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
                                    value={updatedData?.maxPrice || ''}
                                    onChange={(e) => setUpdatedData({ ...updatedData, maxPrice: e.target.value })}
                                    placeholder="Maximum Price"
                                    className="input input-bordered"
                                    required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn text-white bg-red-600">
                                Update Job
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateJobModal;