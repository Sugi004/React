import React from 'react'

function ColorSystem({colors,textValue}) {
  return <>
    <div className="col-lg-6 mb-4">
        <div className={`card ${colors} text-white shadow`}>
            <div className="card-body">
                {textValue}
                
            </div>
        </div>
    </div>
    
  </>
}

export default ColorSystem