import React from 'react'
import Imagepreview from './Imagepreview';

function Exhibition_component({handleInvalidinput,data,setData,imagePreview}) {
  return (
   <>
     <div className="form-group my-2 mx-2 me-4 text-left d-flex flex-column align-items-start">
          <label htmlFor="Product-S" className="mx-2">
            If yes, please describe in detail the products you plan to
            bring (product name, size, quantity, etc.)
          </label>
          <input
            type="text"
            className="form-control product-opt"
            maxLength={140}
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
          <p className=" ms-1 fs-5" style={{color:"red",display:"none",textAlign:"left"}}>Enter valid product details</p>
        </div>
        <div className="form-group my-2 mx-2 w-100 text-left d-flex flex-column align-items-start">
          <label htmlFor="Product-D" className="mx-2">
            If yes, upload any documents that show the details of the
            product(s) you plan to bring.
          </label>
          <input
            type="file"
            accept='image/*'
            className="form-control w-50 product-opt"
            id="Product-D"
            onChange={e=>{
               imagePreview(e);
            }}
            required
          />
          <Imagepreview/>
        </div>
   </>
  )
}

export default Exhibition_component