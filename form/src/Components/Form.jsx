import { useState } from "react";
import Buttons from "./Buttons";
import Companyform from "./Companyform";
import Eventform from "./Eventform";
import Heading from "./Heading";
import ManagerDetails from "./ManagerDetails";
import Userform from "./Userform";
import Alert from "./Alert";
import Firebase from "../Firebase"
import { getFirestore, addDoc,collection } from "firebase/firestore";
function Form() {
  const user={
    OrganizationName: "",
    PersonName: "",
    PersonEmail: "",
    PersonNumber: "",
    Same_person_as_Manager: "Yes",
    eventOverview: {
      date_of_use: "",
      start_time: "",
      end_time: "",
      entry_time: "",
      exit_time: "",
      event_name: "",
      name_of_event_organizer: "",
      number_of_attendees: "",
      event_details_file: "",
      form_of_event: "",
      co_organizer_support: "",
      Availability_of_interviews: "",
      food_beverage_availibilty: "",
      Availibilty_of_productDemonstrations_exhibition_etc: "",
      like_to_be_listed: "",
    },
  }
  const [data, setData] = useState(user);
  const [message,setMessage]=useState();
  const [Action,setAction]=useState();
  // eslint-disable-next-line
  const [err,setErr]=useState({});
  const invalidtrue=(e)=>{
    let name=e.target.name;
    const value=e.target.value;
    e.target.nextSibling.style.display="block";
    e.target.style.border = "2px solid red";
    setErr(prev=>({
      ...prev,
      [name]:value
    }));
  }
  const invalidFalse=(e)=>{
    let name=e.target.name;
    const value=e.target.value;
    e.target.nextSibling.style.display="none";
    e.target.style.border = "none";
    setErr(prev=>{
      const {[name]:value,...rest}=prev;
      return rest;
    });
  }
  const writeData=async()=>{
    try{
      const db=getFirestore(Firebase);
      await addDoc(collection(db, "formdata/"), data);
      setAlert("success","Form submitted");
      window.scrollTo({top:"0",behavior:"smooth"});
    }catch(err){
      setAlert("danger",err.message);
      window.scrollTo({top:"0",behavior:"smooth"});
    }
  }
  const handleReset = (action,message)=>{
    setData(user);
    window.scrollTo({top:"0",behavior:"smooth"});
    setAlert(action,message);
  }
  const setAlert=(action,Message)=>{
    setMessage(Message);
    setAction(action);
    setTimeout(() => {
      setAction();
      setMessage();
    }, 2000);
  }
  const emailValidator=(e)=>{
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let name=e.target.name;
    const value=e.target.value;
    if (!pattern.test(e.target.value)) {
      invalidtrue(e);
    } else {
      invalidFalse(e);
    }
  }
  const handleInvalidExitime=(e)=>{
    if(e.target.value<e.target.parentElement.previousElementSibling.childNodes[1].value){
     invalidtrue(e);
    }else{
      invalidFalse(e);
    }
  }
  const handleInvalidEntryime=(e)=>{
    if(!e.target.parentElement.nextElementSibling.childNodes[1].value)return;
    if(e.target.value>e.target.parentElement.nextElementSibling.childNodes[1].value){
     invalidtrue(e);
    }else{
      invalidFalse(e);
    }
  }
  const handleInvalidinput = (e) => {
    if (/\d/.test(e.target.value)) {
      invalidtrue(e);
    } else {
     invalidFalse(e);
    }
  };
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(Object.keys(err).length!==0){
      setAlert("danger","Some values are invalid");
      window.scrollTo({top:"0"});
      return;
    }
    writeData();
  }
  return (
    <div
      className="container mt-5 d-flex flex-direction-column justify-content-start align-items-start"
      style={{
        width: "80vw",
        height: "auto",
        borderRadius: "15px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Alert message={message} action={Action}/>
        <Heading />
        <Companyform handleInvalidinput={handleInvalidinput} data={data} setData={setData} />
        <Userform handleInvalidinput={handleInvalidinput} data={data} setData={setData} emailValidator={emailValidator} />
        <ManagerDetails handleInvalidinput={handleInvalidinput} data={data} setData={setData} emailValidator={emailValidator}/>
        <Eventform handleInvalidinput={handleInvalidinput} data={data} setData={setData} handleInvalidTime={handleInvalidExitime} handleInvalidEntryime={handleInvalidEntryime}/>
        <Buttons handleReset={handleReset}/>
      </form>
    </div>
  );
}

export default Form;
