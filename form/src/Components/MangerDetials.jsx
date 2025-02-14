import React from 'react'
import Managerform from './Managerform';

function MangerDetials({handleInvalidinput}) {
    const handlePersonNo = (e) => {
        e.preventDefault();
        const managerCr = document.getElementById("managerCr");
        const yes = document.getElementById("yes");
        const options = document.getElementsByClassName("cM-options");
        options[0].setAttribute("name","Manager Name");
        options[1].setAttribute("name","Manager Email");
        options[2].setAttribute("name","Manager Email");
        for (let option in options) {
          if (options[option] === 3) break;
          options[option].required = true;
        }
        e.target.style.backgroundColor = "#D3D3D3";
        managerCr.style.display = "flex";
        yes.style.backgroundColor = "transparent";
      };
      const handlePersonYes = (e) => {
        e.preventDefault();
        const No = document.getElementById("No");
        const managerCr = document.getElementById("managerCr");
        const options = document.getElementsByClassName("cM-options");
        
        for (let option in options) {
          if (options[option] === 3) break;
          options[option].required = false;
          options[option].removeAttribute("name");
          
        }
        e.target.style.backgroundColor = "#D3D3D3";
        managerCr.style.display = "None";
        No.style.backgroundColor = "transparent";
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
            className="me-3 border w-25"
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
              name="Same person responsible as manager"
              value="No"
              style={{ borderRadius: "30px", border: "none" }}
              onClick={handlePersonNo}
            >
              NO
            </button>
          </div>
        </div>
        <Managerform handleInvalidinput={handleInvalidinput}/>
      </div>
      </>
  )
}

export default MangerDetials