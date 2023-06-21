import React, {useState} from 'react'

function Card(props) {
    let [toggle, setToggleValue] = useState(true)
  return (
    <div className="col mb-5">
    <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>{props.data.isSale?"Sale":""}</div>
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">{props.data.item}</h5>
                <span class="text-muted text-decoration-line-through">{props.data.oldPrice?props.data.oldPrice:""}</span>
                {props.data.price}
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {
                toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                  props.setCartValue(prev=>prev+1)
                  setToggleValue(!toggle)
                }}>
                  Add to cart
                </button>
                :
                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                  props.setCartValue(prev=>prev-1)
                  setToggleValue(value=>!value)
                }}>
                  Remove
                </button>
              }
              </div>
        </div>
    </div>
  </div>
  )
}

export default Card

