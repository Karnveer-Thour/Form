import { useState } from "react";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";

function App() {
  let userData={
    OrganizationName:"",
    PersonName:"",
    PersonEmail:"",
    personNumber:"",
  };
  let managerDetails={
    Same_person_as_Manager:false,
    managerName: "",
    managerEmail: "",
    managerNumber: "",
  };
  let eventOverview={
    date_of_use:"",
    start_time:"",
    end_time:"",
    entry_time:"",
    exit_time:"",
    event_name:"",
    name_of_event_organizer:"",
    number_of_attendees:"",
    event_details:"",
    form_of_event:"",
    other_form_of_event:"",
    co_organizer_support:"",
    Availability_of_interviews:"",
    photoshoot:"",
    food_beverage_availibilty:"",
  beverage_order_in_work_lounge:{
    number_of_people:"",
    start_time:""
  },
  Availibilty_of_productDemonstrations_exhibition_etc:"",
  about_product:{
    product_detial:"",
    product_file:"",
  },
  like_to_be_listed:"",
  };
  const [data,setData]=useState({userData,managerDetails,eventOverview});
  return (
    <div className="App btn fs-5">
      <Navbar/>
      <Form/>
    </div>
  );
}

export default App;
