import React from 'react'

function Otherinput({handleInvalidinput,data,setData}) {
  return (
    <div
        className="ms-1 mt-2"
        id="OtherInput"
        style={{ width: "100%", height: "70px"}}
      >
        <input
          type="Text"
          className="form-control h-100"
          id="other-event"
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
      </div>
  )
}

export default Otherinput