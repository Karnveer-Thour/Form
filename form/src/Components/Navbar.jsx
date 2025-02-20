
function Navbar() {
  return (
    <>
      <nav
        className="navbar bg-body-tertiary d-flex flex-column h-auto"
        style={{
          width: "98vw",
          position: "sticky",
          top: "0",
          zIndex: "1000",
          borderBottom: "1px solid #000",
          borderRadius: "15px",
        }}
      >
        <div className="container-fluid " style={{ width: "100%",marginBottom:"-10px" }}>
          <h5 className="fs-3 mt-1" style={{ textAlign: "center", width: "100%" }}>
            TECH HUB YOKOHAMA
          </h5>
          <div
            className="d-flex justify-content-center mt-1 mb-0 nav"
            style={{ width: "100%",marginBottom:"-10px" }}
          >
            <h5 className="fs-5 mt-1">TECH HUB YOKOHAMA</h5>
            &nbsp;&nbsp;
            <p className="fs-5 ms-3" >
              Event Space Use Application Form
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
