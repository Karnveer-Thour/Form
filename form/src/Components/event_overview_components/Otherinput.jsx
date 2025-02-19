import React from 'react'

function Otherinput({handleInvalidinput,data,setData}) {
  return (
    <div
        className="ms-1 mt-2"
        id="OtherInput"
        style={{ width: "100%", height: "auto"}}
      >
        <textarea
          type="Text"
          className="form-control mx-1"
          id="other-event"
          style={{resize:"none",height:"auto"}}
          rows={3}
          maxLength={400}
          onChange={e=>{
            handleInvalidinput(e);
            setData(prev=>({
            ...prev,
            eventOverview:{
              ...prev.eventOverview,
              other_form_of_event:e.target.value
            }
          }))}}
          value={data.eventOverview.other_form_of_event}
          required
        />
        <p className=" ms-1 fs-5" style={{color:"red",display:"none",textAlign:"left"}}>Enter a valid form of event</p>
      </div>
  )
}

export default Otherinput