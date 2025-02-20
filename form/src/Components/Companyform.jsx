function Companyform({handleInvalidinput,data,setData}) {
  return (
    <div className="mb-3 me-3 ms-5 d-flex flex-column justify-content-start align-items-start organization" style={{width:"93%"}}>
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
            maxLength={100}
            onChange={(e)=>{
              handleInvalidinput(e);
              setData({...data,OrganizationName:e.target.value});
            }}
            value={data.OrganizationName}
            required
          />
          <p className=" mb-0 fs-5 mt-2" style={{color:"red",display:"none"}}>Enter a valid Organization Name</p>
        </div>
  )
}

export default Companyform