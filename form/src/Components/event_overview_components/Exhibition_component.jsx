import React from 'react'

function Exhibition_component({handleInvalidinput,data,setData}) {
  return (
   <>
     <div className="form-group my-2 mx-2 w-100 text-left d-flex flex-column align-items-start">
          <label htmlFor="Product-S" className="mx-2">
            If yes, please describe in detail the products you plan to
            bring (product name, size, quantity, etc.)
          </label>
          <input
            type="text"
            className="form-control product-opt"
            id="Product-S"
            aria-describedby="emailHelp"
            onChange={e=>{
                handleInvalidinput(e);
                setData(prev=>({
                    ...prev,
                    eventOverview:{
                        ...prev.eventOverview,
                        about_product:{
                            ...prev.eventOverview.about_product,
                            product_detail:e.target.value
                        }
                    }
                }))
            }}
            value={data.eventOverview.about_product.product_detail}
            required
          />
        </div>
        <div className="form-group my-2 mx-2 w-100 text-left d-flex flex-column align-items-start">
          <label htmlFor="Product-D" className="mx-2">
            If yes, upload any documents that show the details of the
            product(s) you plan to bring.
          </label>
          <input
            type="file"
            className="form-control w-50 product-opt"
            id="Product-D"
            onChange={e=>{
                setData(prev=>({
                    ...prev,
                    eventOverview:{
                        ...prev.eventOverview,
                        about_product:{
                            ...prev.eventOverview.about_product,
                            product_file:e.target.value
                        }
                    }
                }))
            }}
            required
          />
        </div>
   </>
  )
}

export default Exhibition_component