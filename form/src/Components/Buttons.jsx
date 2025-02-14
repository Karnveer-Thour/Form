import React from 'react'

function Buttons() {
  return (
    <div className="container flex align-items-center justify-content-center my-3 w-75">
          <button
            type="reset"
            className="w-25 mx-2 btn btn-primary rounded-pill"
          >
            Clear all
          </button>
          <button
            type="submit"
            className="w-25 mx-2 btn btn-primary rounded-pill"
          >
            Submit
          </button>
        </div>
  )
}

export default Buttons