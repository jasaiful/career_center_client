import { useEffect, useState } from "react";
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import JobList from "./JobList";


const BrowseJobs = () => {

    const [category, setCategory] = useState("Web Development");
    const categories = [
        {
            name: 'Web Development',
            path: '/Web Development'
        },
        {
            name: 'Digital Marketing',
            path: '/Digital Marketing'
        },
        {
            name: 'Graphics Design',
            path: '/Graphics Design'
        },
        {
            name: 'Systems Analyst',
            path: '/Systems Analyst'
        }
    ];

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const encodedCategory = encodeURIComponent(category);
        const apiUrl = `http://localhost:5000/category/${encodedCategory}`;
        console.log(apiUrl);
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [category]);

    return (
        <div>
            <h2 className="text-center text-2xl mt-5">Browse Jobs by Category</h2>
            <Tabs>
                <TabList>
                    {
                        categories.map(categoryItem => (
                        <Tab key={categoryItem.name} onClick={() => setCategory(categoryItem.name)}>
                            {categoryItem.name}
                            </Tab>)
                        )
                    }
                </TabList>
                <div className="flex text-center mx-auto gap-10 justify-center mt-5">

                    {/* <TabPanel>
                        <JobList key={category} category={jobs}>

                        </JobList>
                    </TabPanel> */}

                    {
                        jobs.map(job =>
                            <TabPanel>
                                <JobList key={job._id} category={jobs}>

                                </JobList>
                            </TabPanel>
                        )
                    }
                </div>
            </Tabs>

        </div >
    );
};

export default BrowseJobs;