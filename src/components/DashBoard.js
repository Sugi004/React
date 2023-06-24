import React from 'react'
import Card from './Card'
import PieChart from './PieChart'
import AreaChart from './AreaChart'
import Projects from './Project'
import ColorSystem from './ColorSystem'

function DashBoard() {

    let data=[
        {
            title:"Earnings (Monthly)",
            value:"$40,000",
            color:"primary",
            icon:"fa-calendar",
            isProgress:false

        },
        {
            title:"Earnings (Annual)",
            value:"$215,000",
            color:"success",
            icon:"fa-dollar-sign",
            isProgress:false

        },
        {
            title:"Tasks",
            value:"57%",
            color:"info",
            icon:"fa-clipboard-list",
            isProgress:true

        },
        {
            title:"Pending Requests",
            value:"18",
            color:"warning",
            icon:"fa-comments",
            isProgress:false

        }
    ]

    let projectData = [
        {
            name:"Server Migration",
            progress:"20%",
            bgColor:"bg-danger"
        },
        {
            name:"Sales Tracking",
            progress:"50%",
            bgColor:"bg-warning"
        },
        {
            name:"Customer Database",
            progress:"60%",
            bgColor:"bg-danger"
        },
        {
            name:"Payout Details",
            progress:"80%",
            bgColor:"bg-info"
        },
        {
            name:"Account Setup",
            progress:"100%",
            bgColor:"bg-success"
        }
    ]

    let colorSys = 
    [
        {
            colors:"bg-primary",
            textValue:"Primary"
        },
        {
            colors:"bg-success",
            textValue:"Success"
        },
        {
            colors:"bg-info",
            textValue:"Info"
        },
        {
            colors:"bg-warning",
            textValue:"Warning"
        },

        {
            colors:"bg-danger",
            textValue:"Danger"
        },
        {
            colors:"bg-secondary",
            textValue:"Secondary"
        },
        {
            colors:"bg-light",
            textValue:"Light"
        },
        {
            colors:"bg-dark",
            textValue:"Dark"
        },
        
    ]

  return <>

    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                  <a href="void" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                          className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>

        <div className="row">
            {
               data.map((e,i)=>{
                    return <Card key={i}
                    title={e.title}
                    value={e.value}
                    color={e.color}
                    icon={e.icon}
                    isProgress={e.isProgress}
                    />
               })
            }   
        </div>

        <div className="row">
            <AreaChart/>
            <PieChart/>
        </div>

        <div className="row">
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                    </div>
                    {
                        projectData.map((e,i)=>{
                            return <Projects key={i}
                            name={e.name}
                            progress={e.progress}
                            bgColor = {e.bgColor}
                            />
                        })
                    }
                
                </div>
                <div className="row">
                    {
                        colorSys.map((e,i)=>{
                            return <ColorSystem key={i}
                                colors={e.colors}
                                textValue={e.textValue}
                            />
                        })
                    }
                </div>
            
            </div>
        <div className="col-lg-6 mb-4">

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}}
                            src="../../public/logo192.png" alt="..."/>
                    </div>
                    <p>Add some quality, svg illustrations to your project courtesy of <a rel="nofollow" href=" ">unDraw</a>, a
                        constantly updated collection of beautiful svg images that you can use
                        completely free and without attribution!</p>
                    <a  rel="nofollow" href=" ">Browse Illustrations on
                        unDraw &rarr;</a>
                </div>
            </div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                </div>
                <div className="card-body">
                    <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                        CSS bloat and poor page performance. Custom CSS classes are used to create
                        custom components and custom utility classes.</p>
                    <p className="mb-0">Before working with this theme, you should become familiar with the
                        Bootstrap framework, especially the utility classes.</p>
                </div>
            </div>

        </div>
    </div>

        
  </>
  
}

export default DashBoard

