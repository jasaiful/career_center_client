import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


const JobDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [jobTitle, setJobTitle] = useState('');
    const [email, setEmail] = useState('');
    const [bidPrice, setBidPrice] = useState('');
    const [deadline, setDeadline] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');

    // const [bids, setBids] = useState({
    //     jobTitle: '',
    //     email: '',
    //     bidPrice: '',
    //     deadline: '',
    //     buyerEmail: '',
    // });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBids({ ...bids, [name]: value });
    };

    const handleBidProject = async (event) => {
        try {
            event.preventDefault();

            const myBids = {jobTitle, email, bidPrice, deadline, buyerEmail};
            console.log(myBids);

            await axios.post('http://localhost:5000/myBids');
            Swal.fire({
                title: 'Success',
                text: 'Congratulations, you successfully bid on this project!',
                icon: 'success',
                confirmButtonText: 'Done'
            })
            navigate('/myBids');
        } catch (error) {
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
                                value={data?.jobTitle}
                                readOnly
                                disabled={true}
                                onChange={handleInputChange}
                                placeholder="Job Title"
                                className="input input-bordered"
                                required />
                        </div>

                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                name="bidPrice"
                                value={bidPrice}
                                onChange={handleInputChange}
                                placeholder="Price"
                                className="input input-bordered"
                                required />
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input
                                type="date"
                                name="deadline"
                                value={data?.deadline}
                                onChange={handleInputChange}
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
                                value={user?.email}
                                readOnly
                                disabled={true}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Buyer Email</span>
                            </label>
                            <input
                                type="email"
                                name="buyerEmail"
                                value={data?.email}
                                readOnly
                                disabled={true}
                                onChange={handleInputChange}
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