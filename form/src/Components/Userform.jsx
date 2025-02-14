import React from 'react'

function Userform({handleInvalidinput}) {
  return (
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
              <label
                htmlFor="Name"
                className="form-label text-start w-100 mx-3"
              >
                Name*
              </label>
              <input
                type="Text"
                className="form-control"
                name="personName"
                id="Name"
                aria-describedby="emailHelp"
                onChange={handleInvalidinput}
                required
              />
            </div>
            <div className="me-5" style={{ width: "40%" }}>
              <label
                htmlFor="Email1"
                className="form-label text-start w-100 mx-3"
              >
                Email address*
              </label>
              <input
                type="email"
                name="person-Email"
                className="form-control"
                id="Email1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="ms-5 mt-2" style={{ width: "40%" }}>
              <label
                htmlFor="Phoneno."
                className="form-label text-start w-100 mx-3"
              >
                Phone Number*
              </label>
              <input
                type="Number"
                className="form-control"
                id="Phoneno."
                name="person-number"
                required
                aria-describedby="emailHelp"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            </div>
          </div>
        </div>
  )
}

export default Userform