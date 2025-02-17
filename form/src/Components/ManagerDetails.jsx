import React from "react";
import Managerform from "./Managerform";

function ManagerDetails({ handleInvalidinput, data, setData, emailValidator }) {
  const handlePersonNo = (e) => {
    setData((prev) => {
      const managerDetails = {
        managerName: "",
        managerEmail: "",
        managerNumber: "",
      };
      return {...prev,managerDetails,Same_person_as_Manager:e.target.value};
    });
  };
  const handlePersonYes = (e) => {
    setData(prev=>{
      const {managerDetails,...prevdata}=prev;
      let newdata={...prevdata,Same_person_as_Manager:"yes"};
      return newdata;
    });
  };
  return (
    <>
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
            className="me-3 d-flex  border w-25"
            role="group"
            aria-label="Basic example"
            style={{ borderRadius: "30px" }}
          >
            <button
              type="button"
              className="btn w-50"
              id="yes"
              name="Same person responsible as manager"
              value="yes"
              style={{
                borderRadius: "30px",
                border: "none",
                background: `${data.Same_person_as_Manager!=="No"?"#D3D3D3":"transparent"}`,
              }}
              onClick={handlePersonYes}
            >
              YES
            </button>
            <button
              type="button"
              className="btn w-50"
              id="No"
              name="Same person responsible as manager"
              value="No"
              style={{ borderRadius: "30px", border: "none",background:`${data.Same_person_as_Manager==="No"?"#D3D3D3":"transparent"}`}}
              onClick={handlePersonNo}
            >
              NO
            </button>
          </div>
        </div>
        {data.Same_person_as_Manager==="No"&&<Managerform handleInvalidinput={handleInvalidinput} data={data} setData={setData} emailValidator={emailValidator} />}
      </div>
    </>
  );
}

export default ManagerDetails;
