import React from 'react'

function card({data}) {
    
  return (
    <>
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
                    <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
                    <hr/>
                    <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.user}</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.memory}</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.publicProject}</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.access}</li>
                    <li className= {data.isPrivateProject ? "" : "text-muted"}><span className="fa-li"><i className={data.isPrivateProject ?"fas fa-check":"fas fa-times"}></i></span>{data.privateProjects}</li>
                    <li className={data.isSupport? "" : "text-muted"}><span className="fa-li"><i className={data.isSupport ?"fas fa-check":"fas fa-times"}></i></span>{data.support}</li>
                    <li className={data.isDomain ? "" : "text-muted"}><span className="fa-li"><i className={data.isDomain ?"fas fa-check":"fas fa-times"}></i></span>{data.domain}</li>
                    <li className={data.isReport ? "" : "text-muted"}><span className="fa-li"><i className={data.isReport ?"fas fa-check":"fas fa-times"}></i></span>{data.report}</li>
                    </ul>
                    <div className="d-grid">
                        <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default card

