import React from 'react'

function Heading() {
  return (
    <div className="mt-3">
    <div
      className="Heading d-flex justify-content-start flex-column align-items-centert"
      style={{ height: "auto" }}
    >
      <h2 className="fs-5">TECH HUB YOKOHAMA</h2>

      <ul className="mx-4" style={{ textAlign: "left" }}>
        <li>
          {" "}
          When using the event space at TECH HUB YOKOHAMA, you need to
          submit this application form.
        </li>
        <li>
          {" "}
          Please fill in the required fields and click the "Submit" button
          at the bottom of the page. You will receive an automatic email
          confirming receipt.
        </li>
        <li>
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