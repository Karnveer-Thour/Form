import React, { useState } from "react";
function Form() {
  const handlePersonNo = (e) => {
    e.preventDefault();
    const managerCr = document.getElementById("managerCr");
    const yes = document.getElementById("yes");
    e.target.style.backgroundColor = "#D3D3D3";
    managerCr.style.display = "flex";
    yes.style.backgroundColor = "transparent";
  };
  const handlePersonYes = (e) => {
    e.preventDefault();
    const No = document.getElementById("No");
    const managerCr = document.getElementById("managerCr");
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
        <div class="mt-3">
          <div
            className="Heading d-flex justify-content-start flex-column align-items-centert"
            style={{ height: "auto" }}
          >
            <h2 className="fs-5">TECH HUB YOKOHAMA</h2>
            <p style={{ textAlign: "left", fontSize: "1rem" }}>
              <ul>
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
            </p>
          </div>
        </div>
        <div class="mb-3 me-3 ms-3 d-flex flex-column justify-content-start align-items-start">
          <label
            for="OrganizationName"
            class="form-label mx-3"
            style={{ fontSize: "1rem" }}
          >
            Company/Organization Name*
          </label>
          <input
            type="text"
            class="form-control mx-1"
            id="OrganizationName"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="mb-3">
          <div class="mt-4 mx-3 d-flex flex-column justify-content-start align-items-start">
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
          <div class="mb-3 d-flex justify-content-between flex-row align-items-start flex-wrap">
            <div class="ms-5" style={{ width: "40%" }}>
              <label for="Name" class="form-label text-start w-100 mx-3">
                Name*
              </label>
              <input
                type="Text"
                class="form-control"
                id="Name"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="me-5" style={{ width: "40%" }}>
              <label for="Email1" class="form-label text-start w-100 mx-3">
                Email address*
              </label>
              <input
                type="email"
                class="form-control"
                id="Email1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="ms-5 mt-2" style={{ width: "40%" }}>
              <label for="Phoneno." class="form-label text-start w-100 mx-3">
                Phone Number*
              </label>
              <input
                type="Number"
                class="form-control"
                id="Phoneno."
                aria-describedby="emailHelp"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            </div>
          </div>
        </div>
        <div class="mt-5 mx-3 d-flex flex-column justify-content-start align-items-start">
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
              class="me-3 border w-25"
              role="group"
              aria-label="Basic example"
              style={{ borderRadius: "30px" }}
            >
              <button
                type="button"
                class="btn w-50"
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
                class="btn w-50"
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
            <div class="ms-5" style={{ width: "40%" }}>
              <label for="Name" class="form-label text-start w-100 mx-3">
                Name*
              </label>
              <input
                type="Text"
                class="form-control"
                id="Name"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="me-5" style={{ width: "40%" }}>
              <label for="Email1" class="form-label text-start w-100 mx-3">
                Email address*
              </label>
              <input
                type="email"
                class="form-control"
                id="Email1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="ms-5 mt-2" style={{ width: "40%" }}>
              <label for="Phoneno." class="form-label text-start w-100 mx-3">
                Phone Number*
              </label>
              <input
                type="Number"
                class="form-control"
                id="Phoneno."
                aria-describedby="emailHelp"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="mt-4 mx-3 d-flex flex-column justify-content-start align-items-start">
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
          <div class="mb-3 d-flex justify-content-between flex-row align-items-start flex-wrap">
            <div class="ms-5" style={{ width: "40%" }}>
              <label for="E-Date" class="form-label text-start w-100 mx-3">
                Date of use*
              </label>
              <input
                type="Date"
                class="form-control"
                id="E-Date"
                aria-describedby="emailHelp"
                pattern="\d{4}-\d{2}-\d{2}"
              />
            </div>
          </div>
          <div class="mb-3 d-flex justify-content-between flex-row align-items-start flex-wrap">
            <div class="ms-5" style={{ width: "40%" }}>
              <label for="Start-t" class="form-label text-start w-100 mx-3">
                Start Time*
              </label>
              <input
                type="time"
                class="form-control"
                id="Start-t"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="me-5" style={{ width: "40%" }}>
              <label for="E-Time" class="form-label text-start w-100 mx-3">
                End Time*
              </label>
              <input
                type="time"
                class="form-control"
                id="E-Time"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="ms-5 mt-2" style={{ width: "40%" }}>
              <label for="En-Time" class="form-label text-start w-100 mx-3">
                Entry Time*
              </label>
              <input type="time" class="form-control" id="En-Time" />
            </div>
            <div class="me-5 mt-2" style={{ width: "40%" }}>
              <label for="Ex-Time" class="form-label text-start w-100 mx-3">
                Exit Time*
              </label>
              <input type="time" class="form-control" id="Ex-Time" />
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
          <div class="mb-3 d-flex justify-content-between flex-row align-items-start flex-wrap">
            <div class="ms-5" style={{ width: "40%" }}>
              <label for="Start-t" class="form-label text-start w-100 mx-3">
                Event Name*
              </label>
              <input
                type="Text"
                class="form-control"
                id="Start-t"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="me-5" style={{ width: "40%" }}>
              <label for="E-Name" class="form-label text-start w-100 mx-3">
                Name of Event Organizer*
              </label>
              <input
                type="Text"
                class="form-control"
                id="E-Name"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="ms-5 mt-2" style={{ width: "40%" }}>
              <label for="No-peoples" class="form-label text-start w-100 mx-3">
                Number of people expected to attend*
              </label>
              <input
                type="Text"
                class="form-control"
                id="No-peoples"
                required
              />
            </div>
            <div class="me-5 mt-2" style={{ width: "40%" }}>
              <label for="E-Details" class="form-label text-start w-100 mx-3">
                Event Details
              </label>
              <input type="file" class="form-control" id="E-Details" />
              <div id="emailHelp" class="form-text text-start w-100 mx-3">
                lf you have a proposal, upload here
              </div>
            </div>
          </div>
          <div class="mb-3 mx-5 d-flex justify-content-between flex-column align-items-start flex-wrap">
            <p className="form-label" style={{ fontWeight: "bold" }}>
              Form of Event*
            </p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="Radios"
                id="Pitch"
                value="Pitch Event"
                onClick={handleOther}
              />
              <label class="form-check-label form-label" for="Pitch">
                Pitch Event
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="Radios"
                id="Workshop"
                value="Workshop"
                onClick={handleOther}
              />
              <label class="form-check-label form-label" for="Workshop">
                Workshop
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="Radios"
                id="Seminar"
                value="Seminar"
                onClick={handleOther}
              />
              <label class="form-check-label form-label" for="Seminar">
                Seminar
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="Radios"
                id="Other"
                value="Other"
                onClick={handleOther}
              />
              <label class="form-check-label form-label" for="Other">
                Other
              </label>
            </div>
            <div
              class="ms-1 mt-2"
              id="OtherInput"
              style={{ width: "100%", height: "70px", display: "none" }}
            >
              <input
                type="Text"
                class="form-control h-100"
                id="No-peoples"
                required
              />
            </div>
            <div class="mb-3 d-flex flex-column justify-content-start align-items-start w-100 mt-3">
              <label
                for="/ Co-Organizer/Support"
                class="form-label mx-3"
                style={{ fontSize: "1rem" }}
              >
                Co-Organizer/Support*
              </label>
              <input
                type="text"
                class="form-control mx-1"
                id="/ Co-Organizer/Support"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-2 mt-4 d-flex justify-content-between flex-column align-items-start flex-wrap">
              <p className="form-label" style={{ fontWeight: "bold" }}>
                Form of Event*
              </p>
              <div
                class="form-check"
                onClick={(e) => {
                  const photoshoot = document.querySelectorAll(".lower-options");
                  photoshoot.forEach((ele)=>{
                    ele.classList.remove("d-none");
                  })
                }}
              >
                <input
                  class="form-check-input"
                  type="radio"
                  name="u-option"
                  id="E-yes"
                  value="Pitch Event"
                />
                <label class="form-check-label form-label" for="E-yes">
                  Yes
                </label>
              </div>
              <p className="form-label ms-5 lower-options d-none" style={{ fontWeight: "bold" }}>
                Photoshoot
              </p>
              <div class="form-check ms-4 lower-options d-none">
                <input
                  class="form-check-input"
                  type="radio"
                  name="l-options"
                  id="l-yes"
                  value="yes"
                />
                <label class="form-check-label form-label" for="l-yes">
                  yes
                </label>
              </div>
              <div id="emailHelp" class="form-text text-start w-100 mx-5 lower-options d-none">
              We will inform facility users in advance of the possibility of being filmed.
              </div>
              <div class="form-check ms-4 lower-options d-none">
                <input
                  class="form-check-input"
                  type="radio"
                  name="l-options"
                  id="l-no"
                  value="No"
                />
                <label class="form-check-label form-label" for="l-no">
                  No
                </label>
              </div>
              <div
                class="form-check"
                onClick={(e) => {
                    const photoshoot = document.querySelectorAll(".lower-options");
                    photoshoot.forEach((ele)=>{
                      ele.classList.add("d-none");
                    })
                  }}
              >
                <input
                  class="form-check-input"
                  type="radio"
                  name="u-option"
                  id="E-No"
                  value="Workshop"
                  
                  check
                />
                <label class="form-check-label form-label" for="E-No">
                  No
                </label>
              </div>
            </div>
            <div class="form-check ms-0">
            <div class="mb-3 mt-2 ms-0 d-flex justify-content-between flex-column align-items-start flex-wrap" >
              <p className="form-label" style={{ fontWeight: "bold" }} >
              Food and beverage availability*
              </p>
              </div>
  <input class="form-check-input" type="radio" name="beverage" id="bev-custom" value="Catering order to be placed in the work lounge" onClick={()=>{
                const beverages=document.getElementById("beverages");
                beverages.classList.remove("d-none");
                beverages.classList.add("d-flex");
            }}/>
  <label class="form-check-label" for="bev-custom" onClick={()=>{
                const beverages=document.getElementById("beverages");
                beverages.classList.remove("d-none");
                beverages.classList.add("d-flex");
            }}>
  Catering order to be placed in the work lounge
  </label>
</div>
<div class="mb-3 d-none justify-content-between flex-row align-items-start flex-wrap w-100" id="beverages" >
            <div class="ms-5" style={{ width: "40%" }} >
              <label for="No-people" class="form-label text-start w-100 mx-3">
                Number of people*
              </label>
              <input
                type="Text"
                class="form-control"
                id="No-people"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="me-5" style={{ width: "40%" }} >
              <label for="Sta-Time" class="form-label text-start w-100 mx-3">
                Scheduled Start Time*
              </label>
              <input
                type="time"
                class="form-control"
                id="Sta-Time"
                aria-describedby="emailHelp"
              />
            </div>
            </div>              
<div class="form-check">
  <input class="form-check-input" type="radio" name="beverage" id="yes-bev" value="Soft drinks in plastic bottles"/>
  <label class="form-check-label" for="yes-bev" onClick={()=>{
                const beverages=document.getElementById("beverages");
                beverages.classList.add("d-none");
                beverages.classList.remove("d-flex");
            }}>
  Soft drinks in plastic bottles
  </label>
</div>
<div class="form-check" onClick={()=>{
                const beverages=document.getElementById("beverages");
                beverages.classList.add("d-none");
                beverages.classList.remove("d-flex");
            }}>
  <input class="form-check-input" type="radio" name="beverage" id="No-bev" value="No food or drink"/>
<label class="form-check-label" for="No-bev">
  No food or drink
  </label>
</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
