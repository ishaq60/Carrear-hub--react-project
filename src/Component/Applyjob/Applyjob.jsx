import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobAplication } from '../../Utility/LocalStorage';

const Applyjob = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobId = getStoredJobAplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobId.includes(job.id));
            setAppliedJobs(jobsApplied);
        }
    }, [jobs]);

    return (
       
     <div>
        <h2>Job I applied :{appliedJobs.length}</h2>
        <h2>eeee</h2>
        <ul>
            {
                appliedJobs.map(job=> <li>job title:<span>{job.job_title}</span></li>)
            }
        </ul>
     </div>
    );
};

export default Applyjob;
