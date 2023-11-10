import { Link } from "react-router-dom";


const JobCard = ({ job }) => {
    return (
        <div className="w-[350px] border text-left py-3 px-5 border-slate-900 rounded-lg">
            <h3 className='text-xl '>{job.jobTitle}</h3>
            <p>Deadline: {job.deadline}</p>
            <p>Price Range: ${job.minPrice} - ${job.maxPrice}</p>
            <p className="text-left">{job.description}</p>
            <Link to={`/jobs/${job._id}`} className="block text-center btn text-white bg-red-600 mt-2 font-bold p-4 rounded-xl">
                Bid Now
            </Link>
        </div>
    );
};

export default JobCard;



