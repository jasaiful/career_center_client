import { useEffect, useState } from "react";


const useJobs = (path) => {
    const [jobs, setJobs] = useState([]);
    console.log(path, 'From Use Jobs');
    useEffect(() => {
        fetch(`https://a11-career-center-server.vercel.app/category/${path}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [path]);

    return jobs
};

export default useJobs;