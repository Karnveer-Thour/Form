import { useState } from "react";
function Userform({handleInvalidinput,data,setData,emailValidator}) {
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
  const [phone, setPhone] = useState(data.PersonNumber);
  const handleChange = (e) => {
    const rawValue = e.target.value;

      // Allow deletion by checking if last character was removed
      if (rawValue.length < phone.length) {
        setPhone(rawValue);
        return;
      }else{
            const formatted = formatIndianPhoneNumber(rawValue);
            setPhone(formatted);
      }
  };
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
                maxLength={50}
                id="Name"
                aria-describedby="emailHelp"
                onChange={(e)=>{
                  handleInvalidinput(e);
                  setData({...data,PersonName:e.target.value});
                }}
                value={data.PersonName}
                required
              />
              <p className=" mb-0 mt-0 fs-5" style={{color:"red",display:"none",textAlign:"left"}}>Enter a valid Name</p>
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
                maxLength={50}
                aria-describedby="emailHelp"
                onChange={(e)=>{
                  setData({...data,PersonEmail:e.target.value});
                }}
                onBlur={emailValidator}
                value={data.PersonEmail}
                required
              />
              <p className=" mb-0 mt-0 ms-1 fs-5" style={{color:"red",display:"none",textAlign:"left"}}>Enter a valid Email</p>
            </div>
            <div className="ms-5 mt-2" style={{ width: "40%" }}>
              <label
                htmlFor="Phoneno."
                className="form-label text-start w-100 mx-3"
              >
                Phone Number*
              </label>
              <input
                type="text"
                className="form-control"
                id="Phoneno."
                name="person-number"
                maxLength={15}
                onChange={(e) => {
                  handleChange(e);
                  setData({...data,PersonNumber:e.target.value})
                }}
                value={data.PersonNumber}
                required
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
  )
}

export default Userform