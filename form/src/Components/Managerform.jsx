import { useState } from "react";
function Managerform({handleInvalidinput,data,setData, emailValidator}) {
  const formatIndianPhoneNumber = (value) => {
      // Remove all non-numeric characters
      let cleaned = value.replace(/\D/g, "");
      if (cleaned.startsWith("91")) {
        cleaned = cleaned.slice(2);
    }
      // Apply formatting
      if (cleaned.length <= 5) return cleaned;
      if (cleaned.length < 10) return `${cleaned.slice(0, 5)}-${cleaned.slice(5)}`;
      return `+91 ${cleaned.slice(0, 5)}-${cleaned.slice(5, 10)}`;
    };
    const [phone, setPhone] = useState(data.managerDetails.managerNumber);
    const handleChange = (e) => {
      const rawValue = e.target.value;

      // Allow deletion by checking if last character was removed
      if (rawValue.length < phone.length) {
        setPhone(rawValue);
        return;
      }
  
      const formatted = formatIndianPhoneNumber(rawValue);
      setPhone(formatted);
    };
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
              maxLength={50}
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
            <p className=" mb-0 mt-0 ms-1 fs-5" style={{color:"red",display:"none",textAlign:"left"}}>Enter a valid Name</p>
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
              maxLength={50}
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
            <p className=" mb-0 mt-0 ms-1 fs-5" style={{color:"red",display:"none",textAlign:"left"}}>Enter a valid Email</p>
          </div>
          <div className="ms-5 mt-2" style={{ width: "40%" }}>
            <label
              htmlFor="M-number"
              className="form-label text-start w-100 mx-3"
            >
              Phone Number*
            </label>
            <input
              type="text"
              className="form-control cM-options"
              id="M-number"
              maxLength={15}
              onChange={e=>{
                handleChange(e);
              }}
              onBlur={(e)=> setData(prev=>({
                ...prev,
                managerDetails:{
                  ...prev.managerDetails,
                  managerNumber:e.target.value
                }
              }))}
              value={phone}
              aria-describedby="emailHelp"
            />
          </div>
        </div>
  )
}

export default Managerform