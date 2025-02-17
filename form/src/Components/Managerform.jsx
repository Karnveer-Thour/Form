function Managerform({handleInvalidinput,data,setData, emailValidator}) {
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
              onChange={e=>{handleInvalidinput(e);setData(prev=>({
                ...prev,
                managerDetails:{
                  ...prev.managerDetails,
                  managerName:e.target.value
                }
              }));}}
              value={data.managerDetails.managerName}
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
              onBlur={emailValidator}
              onChange={e=>{
                setData(prev=>({
                  ...prev,
                  managerDetails:{
                    ...prev.managerDetails,
                    managerEmail:e.target.value
                  }
                }))
              }}
              value={data.managerDetails.managerEmail}
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
              onChange={e=>{
                setData(prev=>({
                  ...prev,
                  managerDetails:{
                    ...prev.managerDetails,
                    managerNumber:e.target.value
                  }
                }));
              }}
              value={data.managerDetails.managerNumber}
              aria-describedby="emailHelp"
            />
          </div>
        </div>
  )
}

export default Managerform