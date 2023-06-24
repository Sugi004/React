import React from 'react'

function Projects({name,progress,bgColor}) {
  return <>
   <div className="row">
            <div className="card-body">
                <h4 className="small font-weight-bold">{name} <span
                        className="float-right">{progress}</span></h4>
                <div className="progress mb-4">
                    <div className= {`progress-bar ${bgColor?bgColor:""}`} role="progressbar" style={{width:progress,
                        ariaValueNow: progress ,ariaValueMin:"0", ariaValueMax:progress}}></div>
                </div>
            </div>
        
    </div>
  </>
}

export default Projects