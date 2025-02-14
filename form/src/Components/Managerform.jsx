import React from 'react'

function Managerform({handleInvalidinput}) {
  return (
    <div
          className="container d-flex justify-content-between flex-row align-items-start flex-wrap"
          id="managerCr"
          style={{ width: "100%", display: "None" }}
        >
          <div className="ms-5" style={{ width: "40%" }}>
            <label
              htmlFor="M-Name"
              className="form-label text-start w-100 mx-3"
            >
              Name*
            </label>
            <input
              type="Text"
              className="form-control cM-options"
              id="M-Name"
              onChange={handleInvalidinput}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="me-5" style={{ width: "40%" }}>
            <label
              htmlFor="M-Email"
              className="form-label text-start w-100 mx-3"
            >
              Email address*
            </label>
            <input
              type="email"
              className="form-control cM-options"
              id="M-Email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="ms-5 mt-2" style={{ width: "40%" }}>
            <label
              htmlFor="M-number"
              className="form-label text-start w-100 mx-3"
            >
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
  )
}

export default Managerform