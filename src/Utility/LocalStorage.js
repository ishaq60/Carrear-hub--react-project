// const getStoreAplication =()=>{
//     const storagesAplication=localStorage.getItem('job-aplication')
//     if(storagesAplication){
//         return JSON.parse(storagesAplication)
//     }
// } 
// const saveapplycation =id=>{
// const storagesAplication=getStoreAplication()
// const exists =storagesAplication.find(jobId =>jobId==id);
// if(!exists){
//     storagesAplication.push(id)
//     localStorage.setItem('job-application',JSON.stringify(storagesAplication))
// }
// }
// export {saveapplycation}

const getStoredJobAplication=()=>{
    const StoredJobAplication=localStorage.getItem('job-application');
    if(StoredJobAplication){
        return JSON.parse(StoredJobAplication)
    }
    return[];
}


const savejobAplication=id=>{
const storeJobapplications=getStoredJobAplication();
const exist=storeJobapplications.find(jobId=>jobId===id);
if(!exist){
    storeJobapplications.push(id);
    localStorage.setItem('job-applications',JSON.stringify(storeJobapplications))
}
}
export{savejobAplication}
export{getStoredJobAplication}