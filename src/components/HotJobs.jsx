import { useEffect, useState } from "react";

const HotJobs = () => {
    const [hotJobs, setHotJobs] = useState([]);

    useEffect(() => {
        fetch('hotJobs.json')
            .then(res => res.json())
            .then(data => setHotJobs(data))
    }, [])

    return (
        <div className="p-8">
            <h2 className="text-pink-600 pt-2 text-center mx-auto font-bold text-4xl pb-5">Hot Jobs</h2>

            <div className="grid grid-cols-3 gap-5">
                {
                    hotJobs.map(hotJob => <div key={hotJob.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={hotJob.companyLogo} alt="logo" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{hotJob.jobTitle}</h2>
                      <p>{hotJob.company}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Apply Now</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>

        </div>
    );
};

export default HotJobs;