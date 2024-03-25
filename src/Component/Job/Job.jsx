import { CiLocationOn } from "react-icons/ci";
import { TbCurrencyDollar } from "react-icons/tb";
import { Link } from "react-router-dom";

const Job = ({job}) => {
 const {logo,job_title,company_name,remote_or_onsite,id,
    location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences}=job;
    return (
        <div className=" justify-around">
        <div className="card card-compact h-[300px] bg-base-100 shadow-xl">
 <img className="w-[100px] mt-3 mx-2" src={logo} alt="" />
  <div className="card-body">
    <h5 className="card-title text-">{job_title}</h5>
    <p className="text-start text-[20px]">{company_name}</p>
    <div className="text-start flex gap-x-4">
        <button className="border 2px solid text-[#9873FF] border-[#7E90FE] font-extrabold py-2 px-3 ">{remote_or_onsite}</button>
        <button className="border 2px solid text-[#9873FF] border-[#7E90FE] font-extrabold py-2 px-3">{job_type}</button>
        
    </div>
    <div>
        <div className="text-start flex justify-evenly">
            <div className=" text-2xl">
            <CiLocationOn />
            </div>
          <p>{location}</p>
          <div className="text-2xl">
<TbCurrencyDollar></TbCurrencyDollar>
          </div>
          <p>{salary}</p>
        </div>
        
    </div>
    <Link to={`/job/${id}`}> <button className="btn btn-primary">View Details</button></Link>
    
  </div>
</div>
        </div>
    );
};

export default Job;