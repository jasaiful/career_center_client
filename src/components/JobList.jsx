import JobCard from "./JobCard";


const JobList = ({ category }) => {


    return (
        <div className="flex gap-5 justify-center mt-5 outline-1 p-2 flex-wrap">
            {
                category.map(job => <JobCard key={job._id} job={job}>

                </JobCard>
                )
            }
        </div>
    );
};

export default JobList;