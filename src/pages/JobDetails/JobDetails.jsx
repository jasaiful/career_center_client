import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const JobDetails = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { jobTitle, email, bidPrice, deadline } = data;


    const handleBidProject = async (e) => {
        try {
            e.preventDefault();
            const form = e.target;
            const jobTitle = form.jobTitle.value
            const bidPrice = form.bidPrice.value
            const bidDate = form.bidDate.value
            const deadline = form.deadline.value
            const email = user?.email
            const buyerEmail = form.buyerEmail.value

            const myBids = { jobTitle, bidPrice, bidDate, deadline, email, buyerEmail };
            console.log(myBids);

            if (user?.email === data?.email) {
                toast.error("You can not bid on your own job.");
                return;
            }

            await axios.post('http://localhost:5000/myBids', myBids);

            Swal.fire({
                title: 'Success',
                text: 'Congratulations, you successfully bid on this project!',
                icon: 'success',
                confirmButtonText: 'Done'
            });
            navigate('/myBids');

    } catch (error) {
        console.error("Error submitting bid.", error);
        toast.error('An error occurred');
    }
};


return (
    <div className="my-5 bg-base-200 rounded-xl max-w-5xl mx-auto">
        <div className="text-center py-3 px-auto">
            <h1 className="text-4xl mb-6 font-bold">Job Details</h1>
            <div className="space-y-2">
                <h3 className='text-3xl text-red-600 font-semibold '>{data?.jobTitle}</h3>
                <p>Deadline: <span className="text-red-600 font-semibold">{data?.deadline}</span> </p>
                <p>Price Range: <span className="font-semibold">${data?.minPrice} - ${data?.maxPrice}</span></p>
                <p>{data?.description}</p>
            </div>

        </div>
        <div className="hero-content flex-col">
            <div className="card flex-shrink-0 py-3 w-full shadow-2xl bg-base-100">
                <h1 className="text-2xl text-center font-bold">Bid on the project</h1>
                <form onSubmit={handleBidProject} className="px-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input
                            type="text"
                            name="jobTitle"
                            defaultValue={jobTitle}
                            readOnly
                            disabled={true}
                            // placeholder="Job Title"
                            className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Bid Price</span>
                        </label>
                        <input
                            type="number"
                            name="bidPrice"
                            value={bidPrice}
                            placeholder="Price"
                            className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Bid Date</span>
                        </label>
                        <input
                            type="date"
                            name="bidDate"
                            defaultValue={ new Date().toISOString().split('T')[0]}
                            // placeholder="Job Title"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input
                            type="date"
                            name="deadline"
                            readOnly
                            disabled={true}
                            defaultValue={deadline}
                            // placeholder="Job Title"
                            className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            readOnly
                            disabled={true}
                            placeholder="Email"
                            className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Buyer Email</span>
                        </label>
                        <input
                            type="email"
                            name="buyerEmail"
                            defaultValue={email}
                            readOnly
                            disabled={true}
                            placeholder="Email"
                            className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn text-white bg-red-600">Bid on the project</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

);
};

export default JobDetails;