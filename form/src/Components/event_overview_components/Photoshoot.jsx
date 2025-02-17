import React from 'react'

function Photoshoot({setData}) {
  return (
   <>
    <p
          className="form-label ms-0 lower-options"
          style={{ fontWeight: "bold" }}
        >
          Photoshoot
        </p>
        <div className="form-check ms-4 lower-options">
          <input
            className="form-check-input l-options"
            type="radio"
            name="Photoshoot"
            id="l-yes"
            value="Yes"
            onChange={e=>{
              setData(prev=>({
                ...prev,
                eventOverview:{
                  ...prev.eventOverview,
                  Photoshoot:e.target.value
                }
              }))
            }}
            required
            defaultChecked
          />
          <label className="form-check-label form-label" htmlFor="l-yes">
            yes
          </label>
        </div>
        <div
          id="emailHelp"
          className="form-text text-start w-100 mx-5 lower-options"
        >
          We will inform facility users in advance of the possibility of
          being filmed.
        </div>
        <div className="form-check ms-4 lower-options">
          <input
            className="form-check-input l-options"
            type="radio"
            name="Photoshoot"
            id="l-no"
            value="No"
            onChange={e=>{
              setData(prev=>({
                ...prev,
                eventOverview:{
                  ...prev.eventOverview,
                  Photoshoot:e.target.value
                }
              }))
            }}
            required
          />
          <label className="form-check-label form-label" htmlFor="l-no">
            No
          </label>
        </div>
   </>
  )
}

export default Photoshoot