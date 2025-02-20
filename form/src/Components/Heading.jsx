import React from 'react'

function Heading() {
  return (
    <div >
    <div
      className="Heading d-flex justify-content-start flex-column align-items-center"
      style={{ height: "auto" }}
    >
      <h2 className="fs-3 text-center">TECH HUB YOKOHAMA</h2>

      <ul className="mx-4 my-3 list" style={{ textAlign: "justify" }}>
        <li className='fs-5'>
          {" "}
          When using the event space at TECH HUB YOKOHAMA, you need to
          submit this application form.
        </li>
        <li className='fs-5'>
          {" "}
          Please fill in the required fields and click the "Submit" button
          at the bottom of the page. You will receive an automatic email
          confirming receipt.
        </li>
        <li className='fs-5'>
          {" "}
          Please note that your reservation is tentative at the time you
          submit this application form, and will be confirmed only after
          approval by Mitsubishi Estate Co.. Upon approval, you will
          receive an e-mail confirming your reservation.
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Heading