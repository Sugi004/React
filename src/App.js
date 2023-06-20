import Card from "./card";

function App() {
  let data = [
    {
      plan:"Free",
      price:"0",
      user:"Single User",
      memory:"5GB Storage",
      publicProject:"Unlimited Pubic Projects",
      access:"Community Access",
      privateProjects:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      domain:"Free Subdomain",
      report:"Monthly Status Report",
      isPrivateProject:false,
      isSupport:false,
      isDomain:false,
      isReport:false
    },
    {
      plan:"Plus",
      price:"9",
      user:"5 Users",
      memory:"50GB Storage",
      publicProject:"Unlimited Pubic Projects",
      access:"Community Access",
      privateProjects:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      domain:"Free Subdomain",
      report:"Monthly Status Report",
      isPrivateProject:true,
      isSupport:true,
      isDomain:true,
      isReport:false
    },
    {
      plan:"Pro",
      price:"49",
      user:"Unlimited Users",
      memory:"150GB Storage",
      publicProject:"Unlimited Pubic Projects",
      access:"Community Access", 
      privateProjects:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      domain:"Unlimited Free Subdomain",
      report:"Monthly Status Report",
      isPrivateProject:true,
      isSupport:true,
      isDomain:true,
      isReport:true
    }



  ]
  return (
    <>
      <section className="pricing py-5">
            <div className="container">
                <div className="row">
                <Card data={data[0]}/>
                <Card data={data[1]}/>
                <Card data={data[2]}/>    
                </div>
            </div>
        </section>
    </>
  );
}

export default App;
