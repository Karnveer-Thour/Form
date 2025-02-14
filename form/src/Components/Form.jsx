import Buttons from "./Buttons";
import Companyform from "./Companyform";
import Eventform from "./Eventform";
import Heading from "./Heading";
import MangerDetials from "./MangerDetials";
import Userform from "./Userform";

function Form() {
  const handleInvalidinput = (e) => {
    if (/\d/.test(e.target.value)) {
      e.target.style.border = "2px solid red";
    } else {
      e.target.style.border = "none";
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
        <Heading />
        <Companyform handleInvalidinput={handleInvalidinput} />
        <Userform handleInvalidinput={handleInvalidinput} />
        <MangerDetials handleInvalidinput={handleInvalidinput} />
        <Eventform handleInvalidinput={handleInvalidinput} />
        <Buttons />
      </form>
      </div>
  );
}

export default Form;
