import { useEffect, useState } from "react";
import Job from "../../Job/Job";

const Featurejob = () => {
    const [jobs, setJobs] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    const handleShowAllJobs = () => {
        setShowAllJobs(true);
    };

    return (
        <div className="text-center">
            <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
            <p className="mt-3">Explore thousands of job opportunities with all the information you need. It's your future.</p>
            <div className="grid grid-cols-2 gap-5">
                {showAllJobs ? (
                    jobs.map(job => <Job key={job.id} job={job} />)
                ) : (
                    jobs.slice(0, 4).map(job => <Job key={job.id} job={job} />)
                )}
            </div>
            {!showAllJobs && (
                <div>
                    <button onClick={handleShowAllJobs} className="btn btn-primary">Show All Jobs</button>
                </div>
            )}
        </div>
    );
};

export default Featurejob;
