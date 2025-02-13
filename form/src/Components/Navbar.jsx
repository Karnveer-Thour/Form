import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar bg-body-tertiary d-flex flex-column" style={{width: "98vw",height:"60px",position:"sticky",top:"0",zIndex:"1000,borderBottom:1px solid #000",borderRadius:"15px"}}>
  <div className="container-fluid">
    <h5 style={{textAlign:"center",width:"100%"}}>TECH HUB YOKOHAMA</h5>
    <div className='d-flex justify-content-center' style={{width:"100%",marginTop:"-10px"}}>
        <h5>TECH HUB YOKOHAMA</h5>
        &nbsp;&nbsp;
        <p style={{marginTop:"-3px"}}>Event Space Use Application Form</p>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar