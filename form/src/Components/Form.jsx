import { useState } from "react";
import Buttons from "./Buttons";
import Companyform from "./Companyform";
import Eventform from "./Eventform";
import Heading from "./Heading";
import ManagerDetails from "./ManagerDetails";
import Userform from "./Userform";
function Form() {
  const [data, setData] = useState({
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
  });
  const emailValidator=(e)=>{
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(e.target.value)) {
      e.target.style.border = "2px solid red";
    } else {
      e.target.style.border = "none";
    }
  }
  const handleInvalidinput = (e) => {
    if (/\d/.test(e.target.value)) {
      e.target.style.border = "2px solid red";
    } else {
      e.target.style.border = "none";
    }
  };
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
      <form onSubmit={e=>{e.preventDefault();console.log(data)}}>
        <Heading />
        <Companyform handleInvalidinput={handleInvalidinput} data={data} setData={setData} />
        <Userform handleInvalidinput={handleInvalidinput} data={data} setData={setData} emailValidator={emailValidator} />
        <ManagerDetails handleInvalidinput={handleInvalidinput} data={data} setData={setData} emailValidator={emailValidator}/>
        <Eventform handleInvalidinput={handleInvalidinput} data={data} setData={setData} />
        <Buttons data={data} setData={setData}/>
      </form>
    </div>
  );
}

export default Form;
