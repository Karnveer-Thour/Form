import React from 'react'

function Companyform({handleInvalidinput}) {
  return (
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
            name="OrganizationName"
            aria-describedby="organizationName"
            onChange={handleInvalidinput}
            required
          />
        </div>
  )
}

export default Companyform