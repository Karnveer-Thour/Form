import React from 'react'
function Custombev({setData,data}) {
  return (
    <div
        className="mb-3 d-flex justify-content-between flex-row align-items-start flex-wrap w-100"
        id="beverages"
      >
        <div className="ms-5" style={{ width: "40%" }}>
          <label
            htmlFor="No-people"
            className="form-label text-start w-100 mx-3"
          >
            Number of people*
          </label>
          <input
            type="number"
            className="form-control bev-U"
            id="No-people"
            aria-describedby="emailHelp"
            onChange={e=>{
                setData(prev=>({
                    ...prev,
                    eventOverview:{
                        ...prev.eventOverview,
                        beverage_order_in_work_lounge:{
                            ...prev.eventOverview.beverage_order_in_work_lounge,
                            number_of_people:e.target.value
                        }
                    }
                }))
            }}
            value={data.eventOverview.beverage_order_in_work_lounge.number_of_people}
            required
          />
        </div>
        <div className="me-5" style={{ width: "40%" }}>
          <label
            htmlFor="Sta-Time"
            className="form-label text-start w-100 mx-3"
          >
            Scheduled Start Time*
          </label>
          <input
            type="time"
            className="form-control bev-U"
            id="Sta-Time"
            aria-describedby="emailHelp"
            onChange={e=>{
                setData(prev=>({
                    ...prev,
                    eventOverview:{
                        ...prev.eventOverview,
                        beverage_order_in_work_lounge:{
                            ...prev.eventOverview.beverage_order_in_work_lounge,
                            beverage_start_time:e.target.value
                        }
                    }
                }))
            }}
            required
          />
        </div>
      </div>
  )
}

export default Custombev