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
    personNumber: "",
    Same_person_as_Manager: "Yes",
    managerDetails: {
      managerName: "",
      managerEmail: "",
      managerNumber: "",
    },
    eventOverview: {
      date_of_use: "",
      start_time: "",
      end_time: "",
      entry_time: "",
      exit_time: "",
      event_name: "",
      name_of_event_organizer: "",
      number_of_attendees: "",
      event_details: "",
      form_of_event: "",
      other_form_of_event: "",
      co_organizer_support: "",
      Availability_of_interviews: "",
      photoshoot: "",
      food_beverage_availibilty: "",
      beverage_order_in_work_lounge: {
        number_of_people: "",
        start_time: "",
      },
      Availibilty_of_productDemonstrations_exhibition_etc: "",
      about_product: {
        product_detial: "",
        product_file: "",
      },
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
      <form>
        <Heading />
        <Companyform handleInvalidinput={handleInvalidinput} data={data} setData={setData} />
        <Userform handleInvalidinput={handleInvalidinput} data={data} setData={setData} emailValidator={emailValidator} />
        <ManagerDetails handleInvalidinput={handleInvalidinput} data={data} setData={setData}/>
        <Eventform handleInvalidinput={handleInvalidinput} />
        <Buttons />
      </form>
    </div>
  );
}

export default Form;
