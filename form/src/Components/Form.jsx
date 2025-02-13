import React from "react";
function Form() {
  const handlePersonNo = (e) => {
    e.preventDefault();
    const managerCr = document.getElementById("managerCr");
    const yes = document.getElementById("yes");
    const options=document.getElementsByClassName("cM-options");
    for(let option in options){
      if(options[option]===3)break;
      options[option].required=true;
    }
    e.target.style.backgroundColor = "#D3D3D3";
    managerCr.style.display = "flex";
    yes.style.backgroundColor = "transparent";
  };
  const handlePersonYes = (e) => {
    e.preventDefault();
    const No = document.getElementById("No");
    const managerCr = document.getElementById("managerCr");
    const options=document.getElementsByClassName("cM-options");
    for(let option in options){
      if(options[option]===3)break;
      options[option].required=false;
    }
    e.target.style.backgroundColor = "#D3D3D3";
    managerCr.style.display = "None";
    No.style.backgroundColor = "transparent";
  };
  const handleOther = (e) => {
    const OtherInput = document.getElementById("OtherInput");
    if (e.target.value === "Other") {
      OtherInput.style.display = "block";
    } else {
      OtherInput.style.display = "none";
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
        <div className="mt-3">
          <div
            className="Heading d-flex justify-content-start flex-column align-items-centert"
            style={{ height: "auto" }}
          >
            <h2 className="fs-5">TECH HUB YOKOHAMA</h2>
            
              <ul style={{textAlign:"left"}}>
                <li>
                  {" "}
                  When using the event space at TECH HUB YOKOHAMA, you need to
                  submit this application form.
                </li>
                <li>
                  {" "}
                  Please fill in the required fields and click the "Submit"
                  button at the bottom of the page. You will receive an
                  automatic email confirming receipt.
                </li>
                <li>
                  {" "}
                  Please note that your reservation is tentative at the time you
                  submit this application form, and will be confirmed only after
                  approval by Mitsubishi Estate Co.. Upon approval, you will
                  receive an e-mail confirming your reservation.
                </li>
              </ul>
            
          </div>
        </div>
        <div className="mb-3 me-3 ms-3 d-flex flex-column justify-content-start align-items-start">
          <label
            htmlFor="OrganizationName"
            className="form-label mx-3"
            style={{ fontSize: "1rem" }}
          >
            Company/Organization Name*
          </label>
          <input
            type="text"
            className="form-control mx-1"
            id="OrganizationName"
            aria-describedby="emailHelp"
            required
          />
        </div>

        <div className="mb-3">
          <div className="mt-4 mx-3 d-flex flex-column justify-content-start align-items-start">
            <p
              style={{
                fontSize: "1rem",
                borderBottom: "1px solid black",
                width: "100%",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Person responsible for application
            </p>
          </div>
          <div className="mb-3 d-flex justify-content-between flex-row align-items-start flex-wrap">
            <div className="ms-5" style={{ width: "40%" }}>
              <label htmlFor="Name" className="form-label text-start w-100 mx-3">
                Name*
              </label>
              <input
                type="Text"
                className="form-control"
                id="Name"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="me-5" style={{ width: "40%" }}>
              <label htmlFor="Email1" className="form-label text-start w-100 mx-3">
                Email address*
              </label>
              <input
                type="email"
                className="form-control"
                id="Email1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="ms-5 mt-2" style={{ width: "40%" }}>
              <label htmlFor="Phoneno." className="form-label text-start w-100 mx-3">
                Phone Number*
              </label>
              <input
                type="Number"
                className="form-control"
                id="Phoneno."
                required
                aria-describedby="emailHelp"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-5 mx-3 d-flex flex-column justify-content-start align-items-start">
          <p
            className="form-label"
            style={{ width: "100%", textAlign: "left", fontWeight: "bold" }}
          >
            On-site manager for the day of the event
          </p>
          <p
            className="form-label"
            style={{
              borderBottom: "1px solid black",
              width: "100%",
              textAlign: "left",
            }}
          >
            On-site manager for the day of the event must stay at the base until
            the end of use.
          </p>
        </div>
        <div className="mb-3 d-flex justify-content-between flex-row align-items-start flex-wrap">
          <div className="mt-3 d-flex justify-content-between flex-row align-items-start flex-wrap w-100">
            <ul>
              <li className="form-label text-start">
                Same as the person responsilble for the application
              </li>
            </ul>
            <div
              className="me-3 border w-25"
              role="group"
              aria-label="Basic example"
              style={{ borderRadius: "30px" }}
            >
              <button
                type="button"
                className="btn w-50"
                id="yes"
                style={{
                  borderRadius: "30px",
                  border: "none",
                  background: "#D3D3D3",
                }}
                onClick={handlePersonYes}
              >
                YES
              </button>
              <button
                type="button"
                className="btn w-50"
                id="No"
                style={{ borderRadius: "30px", border: "none" }}
                onClick={handlePersonNo}
              >
                NO
              </button>
            </div>
          </div>
          <div
            className="container  justify-content-between flex-row align-items-start flex-wrap"
            id="managerCr"
            style={{ width: "100%", display: "None" }}
          >
            <div className="ms-5" style={{ width: "40%" }}>
              <label htmlFor="M-Name" className="form-label text-start w-100 mx-3">
                Name*
              </label>
              <input
                type="Text"
                className="form-control cM-options"
                id="M-Name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="me-5" style={{ width: "40%" }}>
              <label htmlFor="M-Email" className="form-label text-start w-100 mx-3">
                Email address*
              </label>
              <input
                type="email"
                className="form-control cM-options"
                id="M-Email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="ms-5 mt-2" style={{ width: "40%" }} >
              <label htmlFor="M-number" className="form-label text-start w-100 mx-3">
                Phone Number*
              </label>
              <input
                type="Number"
                className="form-control cM-options"
                id="M-number"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="mt-4 mx-3 d-flex flex-column justify-content-start align-items-start">
            <p
              style={{
                fontSize: "1rem",
                borderBottom: "1px solid black",
                width: "100%",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Event Overview
            </p>
          </div>
          <div className="mb-3 d-flex justify-content-between flex-row align-items-start flex-wrap">
            <div className="ms-5" style={{ width: "40%" }}>
              <label htmlFor="E-Date" className="form-label text-start w-100 mx-3">
                Date of use*
              </label>
              <input
                type="Date"
                className="form-control"
                id="E-Date"
                aria-describedby="emailHelp"
                pattern="\d{4}-\d{2}-\d{2}"
                required
              />
            </div>
          </div>
          <div className="mb-3 d-flex justify-content-between flex-row align-items-start flex-wrap">
            <div className="ms-5" style={{ width: "40%" }}>
              <label htmlFor="Start-t" className="form-label text-start w-100 mx-3">
                Start Time*
              </label>
              <input
                type="time"
                className="form-control"
                id="Start-t"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="me-5" style={{ width: "40%" }}>
              <label htmlFor="E-Time" className="form-label text-start w-100 mx-3">
                End Time*
              </label>
              <input
                type="time"
                className="form-control"
                id="E-Time"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="ms-5 mt-2" style={{ width: "40%" }}>
              <label htmlFor="En-Time" className="form-label text-start w-100 mx-3">
                Entry Time*
              </label>
              <input type="time" className="form-control" id="En-Time" required />
            </div>
            <div className="me-5 mt-2" style={{ width: "40%" }}>
              <label htmlFor="Ex-Time" className="form-label text-start w-100 mx-3">
                Exit Time*
              </label>
              <input type="time" className="form-control" id="Ex-Time" required/>
            </div>
          </div>
          <ul className="mt-4" style={{ fontSize: "1rem", textAlign: "left" }}>
            <li>
              Please have attendees leave, remove any equipment brought in, and
              restore the layout by the time you leave.
            </li>
            <li>
              Fees will be charged from the time you enter the venue until the
              time you leave. For use outside of business hours (weekdays
              10:00-18:00), a separate after-hours fee (staff attendance fee)
              will be charged.
            </li>
            <li>
              If extra time is required on the day of the event, an additional
              fee will be charged. Please understand this in advance.
            </li>
          </ul>
          <div className="mb-3 d-flex justify-content-between flex-row align-items-start flex-wrap">
            <div className="ms-5" style={{ width: "40%" }}>
              <label htmlFor="Start-t" className="form-label text-start w-100 mx-3">
                Event Name*
              </label>
              <input
                type="Text"
                className="form-control"
                id="Start-t"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="me-5" style={{ width: "40%" }}>
              <label htmlFor="E-Name" className="form-label text-start w-100 mx-3">
                Name of Event Organizer*
              </label>
              <input
                type="Text"
                className="form-control"
                id="E-Name"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="ms-5 mt-2" style={{ width: "40%" }}>
              <label htmlFor="No-peoples" className="form-label text-start w-100 mx-3">
                Number of people expected to attend*
              </label>
              <input
                type="Text"
                className="form-control"
                id="No-peoples"
                required
              />
            </div>
            <div className="me-5 mt-2" style={{ width: "40%" }}>
              <label htmlFor="E-Details" className="form-label text-start w-100 mx-3">
                Event Details
              </label>
              <input type="file" className="form-control" id="E-Details" />
              <div id="emailHelp" className="form-text text-start w-100 mx-3">
                lf you have a proposal, upload here
              </div>
            </div>
          </div>
          <div className="mb-3 mx-5 d-flex justify-content-between flex-column align-items-start flex-wrap">
            <p className="form-label" style={{ fontWeight: "bold" }}>
              Form of Event*
            </p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Radios"
                id="Pitch"
                value="Pitch Event"
                required
                onClick={handleOther}
              />
              <label className="form-check-label form-label" htmlFor="Pitch">
                Pitch Event
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Radios"
                id="Workshop"
                value="Workshop"
                required
                onClick={handleOther}
              />
              <label className="form-check-label form-label" htmlFor="Workshop">
                Workshop
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Radios"
                id="Seminar"
                value="Seminar"
                required
                onClick={handleOther}
              />
              <label className="form-check-label form-label" htmlFor="Seminar">
                Seminar
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Radios"
                id="Other"
                value="Other"
                onClick={handleOther}
                required
              />
              <label className="form-check-label form-label" htmlFor="Other">
                Other
              </label>
            </div>
            <div
              className="ms-1 mt-2"
              id="OtherInput"
              style={{ width: "100%", height: "70px", display: "none" }}
            >
              <input
                type="Text"
                className="form-control h-100"
                id="No-peoples"
                required
              />
            </div>
            <div className="mb-3 d-flex flex-column justify-content-start align-items-start w-100 mt-3">
              <label
                htmlFor="/ Co-Organizer/Support"
                className="form-label mx-3"
                style={{ fontSize: "1rem" }}
              >
                Co-Organizer/Support*
              </label>
              <input
                type="text"
                className="form-control mx-1"
                id="/ Co-Organizer/Support"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-2 mt-4 d-flex justify-content-between flex-column align-items-start flex-wrap">
              <p className="form-label" style={{ fontWeight: "bold" }}>
                Form of Event*
              </p>
              <div
                className="form-check"
                onClick={(e) => {
                  const photoshoot =
                    document.querySelectorAll(".lower-options");
                   const lowerO= document.getElementsByName("l-options");
                  for(let ele in lowerO){
                    if(lowerO[ele]===2)break;
                    lowerO[ele].required=true;
                  }
                  photoshoot.forEach((ele) => {
                    ele.classList.remove("d-none");
                    ele.required=true;
                  });
                }}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="u-option"
                  id="E-yes"
                  value="yes"
                  required
                />
                <label className="form-check-label form-label" htmlFor="E-yes">
                  Yes
                </label>
              </div>
              <p
                className="form-label ms-5 lower-options d-none"
                style={{ fontWeight: "bold" }}
              >
                Photoshoot
              </p>
              <div className="form-check ms-4 lower-options d-none">
                <input
                  className="form-check-input"
                  type="radio"
                  name="l-options"
                  id="l-yes"
                  value="yes"
                />
                <label className="form-check-label form-label" htmlFor="l-yes">
                  yes
                </label>
              </div>
              <div
                id="emailHelp"
                className="form-text text-start w-100 mx-5 lower-options d-none"
              >
                We will inform facility users in advance of the possibility of
                being filmed.
              </div>
              <div className="form-check ms-4 lower-options d-none">
                <input
                  className="form-check-input"
                  type="radio"
                  name="l-options"
                  id="l-no"
                  value="No"
                />
                <label className="form-check-label form-label" htmlFor="l-no">
                  No
                </label>
              </div>
              <div
                className="form-check"
                onClick={(e) => {
                  const photoshoot =
                    document.querySelectorAll(".lower-options");
                  photoshoot.forEach((ele) => {
                    ele.classList.add("d-none");
                    const lowerO= document.getElementsByName("l-options");
                  for(let ele in lowerO){
                    if(lowerO[ele]===2)break;
                    lowerO[ele].required=true;
                  }
                    ele.required=false;
                  });
                }}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="u-option"
                  id="E-No"
                  value="Workshop"
                  required
                />
                <label className="form-check-label form-label" htmlFor="E-No">
                  No
                </label>
              </div>
            </div>
            <div className="form-check ms-0">
              <div className="mb-1 mt-3 ms-0 d-flex justify-content-between flex-column align-items-start flex-wrap">
                <p className="form-label" style={{ fontWeight: "bold" }}>
                  Food and beverage availability*
                </p>
              </div>
              <input
                className="form-check-input"
                type="radio"
                name="beverage"
                id="bev-custom"
                value="Catering order to be placed in the work lounge"
                required
                onClick={() => {
                  const beverages = document.getElementById("beverages");
                  const underOptions=document.getElementsByClassName("bev-U");
                  beverages.classList.remove("d-none");
                  beverages.classList.add("d-flex");
                  for(let ele in underOptions){
                    if(underOptions[ele]===2)break;
                    underOptions[ele].required=true;
                  }
                }}
              />
              <label
                className="form-check-label"
                htmlFor="bev-custom"
              >
                Catering order to be placed in the work lounge
              </label>
            </div>
            <div
              className="mb-3 d-none justify-content-between flex-row align-items-start flex-wrap w-100"
              id="beverages"
            >
              <div className="ms-5" style={{ width: "40%" }}>
                <label htmlFor="No-people" className="form-label text-start w-100 mx-3">
                  Number of people*
                </label>
                <input
                  type="Text"
                  className="form-control bev-U"
                  id="No-people"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="me-5" style={{ width: "40%" }}>
                <label htmlFor="Sta-Time" className="form-label text-start w-100 mx-3">
                  Scheduled Start Time*
                </label>
                <input
                  type="time"
                  className="form-control bev-U"
                  id="Sta-Time"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="beverage"
                id="yes-bev"
                value="Soft drinks in plastic bottles"
                required
                onClick={() => {
                  const beverages = document.getElementById("beverages");
                  const underOptions=document.getElementsByClassName("bev-U");
                  beverages.classList.add("d-none");
                  beverages.classList.remove("d-flex");
                  for(let ele in underOptions){
                    if(underOptions[ele]===2)break;
                    underOptions[ele].required=true;
                  }
                }}
              />
              <label
                className="form-check-label"
                htmlFor="yes-bev"
                onClick={() => {
                  const beverages = document.getElementById("beverages");
                  const underOptions=document.getElementsByClassName("bev-U");
                  beverages.classList.add("d-none");
                  beverages.classList.remove("d-flex");
                  for(let ele in underOptions){
                    if(underOptions[ele]===2)break;
                    underOptions[ele].required=true;
                  }
                }}
              >
                Soft drinks in plastic bottles
              </label>
            </div>
            <div
              className="form-check"
              onClick={() => {
                const beverages = document.getElementById("beverages");
                const underOptions=document.getElementsByClassName("bev-U");
                beverages.classList.add("d-none");
                beverages.classList.remove("d-flex");
                for(let ele in underOptions){
                  if(underOptions[ele]===2)break;
                  underOptions[ele].required=true;
                }
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="beverage"
                id="No-bev"
                required
                value="No food or drink"
              />
              <label className="form-check-label" htmlFor="No-bev">
                No food or drink
              </label>
            </div>
            <ul className="mt-3" style={{ textAlign: "left" }}>
              <li>
                Please note that catering may not be available if you apply
                immediately before the event date.
              </li>
              <li>Catering wil be provided by an adjacent restaurant.</li>
              <li>
                If you select "Catering order to be placed in the work lounge",
                the adjacent restaurant will contact you. Please communicate
                directly with the restaurant to place the order, as the order
                has not been completed at this time.
              </li>
              <li>Please note that food cannot be brought in from outside.</li>
              <li>
                Only soft drinks in plastic bottles are allowed to be brought to
                the event (no pots, pitchers, etc. provided).
              </li>
            </ul>

            <div className="mb-1 mt-3 ms-4 d-flex justify-content-between flex-column align-items-start flex-wrap">
              <p className="form-label" style={{ fontWeight: "bold" }}>
                Availability of product demonstrations, exhibitions, etc.
              </p>
            </div>

            <div
              className="form-check w-100"
              onClick={() => {
                const product = document.querySelectorAll(".product");
                const productOpt=document.getElementsByClassName("product-opt");
                let i=0;
                for(let opt in productOpt){
                  if(i===productOpt.length)break;
                  productOpt[opt].required=true;
                  i++;
                }
                product.forEach((ele) => {
                  ele.classList.remove("d-none");
                });
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="exhibitions"
                id="exhibitionsYes"
                value="option1"
                required
              />
              <label className="form-check-label d-flex" htmlFor="exhibitionsYes">
                Yes
              </label>

              <div className="form-group my-2 mx-2 w-100 text-left d-flex flex-column align-items-start product d-none">
                <label htmlFor="Product-S" className="mx-2">
                  If yes, please describe in detail the products you plan to
                  bring (product name, size, quantity, etc.)
                </label>
                <input
                  type="email"
                  className="form-control product-opt"
                  id="Product-S"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group my-2 mx-2 w-100 text-left d-flex flex-column align-items-start product d-none">
                <label htmlFor="Product-D" className="mx-2">
                  If yes, upload any documents that show the details of the
                  product(s) you plan to bring.
                </label>
                <input
                  type="file"
                  className="form-control w-50 product-opt"
                  id="Product-D"
                  placeholder="Password"
                />
              </div>
            </div>
            <div
              className="form-check my-2"
              onClick={() => {
                const product = document.querySelectorAll(".product");
                const productOpt=document.getElementsByClassName("product-opt");
                let i=0;
                for(let opt in productOpt){
                  if(i===productOpt.length)break;
                  productOpt[opt].required=false;
                  i++;
                }
                product.forEach((ele) => {
                  ele.classList.add("d-none");
                  ele.required=false;
                });
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="exhibitions"
                id="exhibitionsNo"
                value="option2"
                required
              />
              <label className="form-check-label" htmlFor="exhibitionsNo">
                No
              </label>
            </div>
            <div className="mb-1 mt-3 ms-4 d-flex justify-content-between flex-column align-items-start flex-wrap">
              <p className="form-label" style={{ fontWeight: "bold" }}>
                Would you like to be listed on TECH HUB YOKOHAMA HP?
              </p>
            </div>
            <div
              className="form-check my-2"
              onClick={() => {
                const product = document.querySelectorAll(".product");
                product.forEach((ele) => {
                  ele.classList.add("d-none");
                });
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="listed"
                id="listed-yes"
                value="option2"
                required
              />
              <label className="form-check-label" htmlFor="listed-yes">
                Yes
              </label>
            </div>
            <div
              className="form-check "
              onClick={() => {
                const product = document.querySelectorAll(".product");
                product.forEach((ele) => {
                  ele.classList.add("d-none");
                });
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="listed"
                id="listed-no"
                value="option2"
                required
              />
              <label className="form-check-label" htmlFor="listed-no">
                No
              </label>
            </div>
            <ul className="me-5 mt-1 ms-0" style={{ textAlign: "left" }}>
              <li>
                If you wish, we will post your event in the "EVENT" section of
                the TECH HUB YOKOHAMA HP. Please prepare a draft of the
                announcement text and send it to event_thy@mec.co.jp.
              </li>
            </ul>
            <ul>
              <li
                className="fs-3"
                style={{ listStyle: "square", textAlign: "left" }}
              >
                Precautions
              </li>
              <ul style={{ listStyle: "disc", textAlign: "left" }}>
                <li>
                  We do not permit the use of the space for profit-making
                  purposes, such as profit-making events, sales of goods,
                  parties for excessive profit, etc. (Food, beverages, etc. may
                  be charged separately.
                </li>
                <li>
                  We do not accept luggage (including items brought in or
                  mailed) in advance due to security reasons and the lack of a
                  safe place to store it. We appreciate your understanding and
                  cooperation.
                </li>
                <li>
                  This base is a support base for TECH startups to help them
                  grow. During business hours (10:00-12:00 on weekdays), this
                  space is available for use by members of TECH HUB YOKOHAMA. If
                  you wish to hold an event during business hours, we ask for
                  your cooperation in securing a space that is available for use
                  by our members.
                </li>
                <li>
                  The event organizer is responsible for event set-up and
                  restoration.
                </li>
                <li>
                  After the event, please clean up the equipment, fixtures, etc.
                  in the space to be used according to the Restoration Check
                  Sheet. Please fill out the sheet and submit it. Please note
                  that the operator may store, remove, or dispose of any
                  remaining items after the event, and any costs incurred for
                  disposal, etc. will be borne by the applicant.
                </li>
                <li>
                  Please note that the event organizer may be requested to pay
                  compensation for any damage, defacement, or loss of buildings,
                  equipment, fixtures, or other items in the event space.
                </li>
                <li>
                  In principle, TECH HUB YOKOHAMA is not available for use by
                  event participants before or after the event (e.g., working in
                  the work lounge). Event organizers are requested to inform
                  event participants of the start and end times of the event
                  reception.
                </li>
                <li>
                  Applicants may display their products in the facility at the
                  time of the event. However, the applicant is responsible for
                  and bears the burden of carrying in/out and displaying the
                  subject products (in particular, please take sufficient safety
                  measures to prevent damage to the operator, third parties, and
                  buildings, facilities, and equipment of the base). In
                  addition, please follow the instructions and guidance given by
                  the operator in the operation and management of the facility.
                  Please note that the Operator will not be held responsible for
                  any damage incurred to the subject products or the applicant
                  in connection with the carrying in/out or exhibition of the
                  subject products.
                </li>
                <li>
                  Please refer to separate document "TECH HUB YOKOHAMA Event
                  Usage Guide" for other precautions regarding the use of this
                  facility for events.
                </li>
                <li>
                  Reservation will be confirmed upon approval by Mitsubishi
                  Estate Co. Cancellations made after that date will be charged
                  50% of the total amount of the reservation up to 7 days prior
                  to the date of the reservation, and 100% of the total amount
                  of the reservation 6 days prior to the date of the
                  reservation. Please note that a cancellation fee will be
                  charged even if the reservation time is shortened (e.g., if
                  the reservation time is changed from 9:00-12:00 to
                  10:00-12:00, a cancellation fee of one hour will be charged).
                </li>
              </ul>
            </ul>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="prec" required/>
              <label className="form-check-label" htmlFor="prec">
                I have reviewed the above notes
              </label>
            </div>

            <ul className="mt-3" style={{ listStyle: "square", textAlign: "left" }}>
              <li
                className="fs-3"
                
              >
                Pledge
              </li>
              <ol style={{ listStyle: "numbers", textAlign: "left" }}>
                <li>Not be a member of organized crime groups, companies or organizations related to organized crime groups or their affiliates (including past members), general assemblymen, social activists, political activists, special intelligence groups, or other anti-social forces (hereinafter referred to as "anti-social forces").
                The applicant must not have any socially reprehensible relationship with antisocial forces.</li>
                <li>The organization to which the applicant belongs is not engaged in direct or indirect transactions with antisocial forces as described in the preceding paragraph.</li>
              </ol>
              </ul>
              <div className="form-check">
              <input type="checkbox" className="form-check-input" id="pled" required/>
              <label className="form-check-label" htmlFor="pled">
              Constrain the above contents.
              </label>
              </div>
            <ul className="mt-3" style={{ listStyle: "square", textAlign: "left" }}>
              <li
                className="fs-3"
                
              >
                Consent to handling of personal information
              </li>
              <ol style={{ listStyle: "numbers", textAlign: "left" }}>
                <li>Purpose of Use
                  <ul style={{listStyle:"none"}}>
                    <li>The personal information entered in this form will be used by the City of Yokohama, Mitsubishi Estate and Yokohama Future Organization Joint Venture(hereinafter referred to as the "Joint Venture"), which operates TECH HUB YOKOHAMA, and General Incorporated Association Venture Café Tokyo (hereinafter referred to as the
                      "Venture Café". The City of Yokohama, the Joint Venture, and the Venture Café are collectively referred to as the "Operator"), and Stockholm Roast Corporation, which operates the adjacent restaurant Tomt café bistro bar, will collect, use, and manage the information for the following purposes, after taking the necessary protective measures.</li>
                  </ul>
                </li>
                <li>Provision to third parties
                    <p className="mb-0">The Operator will not provide or disclose the entered personal information to any third party, except to third parties to whom the Operator has entrusted its operations or in any of the following cases</p>
                  <ol>
                    <li>With the consent of the applicant. The Operator plans to provide the applicant's information to other companies registered as TECH HUB YOKOHAMA Work Lounge members (startup members, partner members, and mentor companies) after obtaining the applicant's consent.</li>
                    <li>When it is necessary for the protection of a person's life, body, or property and it is difficult to obtain the applicant's consent</li>
                    <li>When disclosure or provision is required by other laws and regulations</li>
                    </ol>
                </li>
                <li>The Operator shall strictly manage the entered personal information, pay sufficient attention to the protection of privacy, and shall not use it for any purposes other than those stipulated in the preceding paragraph. However, the Operator may disclose such personal information to government agencies, etc., in accordance with laws, ordinances, etc. (including the Yokohama City Ordinance on Civic Collaboration), and such personal information may be used by the City of Yokohama in accordance with the preceding paragraph (1).</li>
                <li>This privacy policy is subject to change without notice to the applicant, except for changes that may materially affect the applicant.</li>
              </ol>
              </ul>
              <div className="form-check">
              <input type="checkbox" className="form-check-input" id="pled" required/>
              <label className="form-check-label" htmlFor="pled">
                      I agree to the above
              </label>
              </div>
              <div className="form-check">
              <input type="checkbox" className="form-check-input" id="pled" required/>
              <label className="form-check-label" htmlFor="pled">
              | confirm the above information and apply for use.
              </label>
              </div>
          </div>
        </div>
        <div className="container flex align-items-center justify-content-center my-3 w-75">
        <button type="reset" className="w-25 mx-2 btn btn-primary rounded-pill">Clear all</button>
        <button type="submit" className="w-25 mx-2 btn btn-primary rounded-pill">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
