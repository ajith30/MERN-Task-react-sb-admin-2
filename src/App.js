import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Heading from "./components/Heading";
import Card from "./components/Card";
import AreaChart from "./components/AreaChart";
import PieChart from "./components/PieChart";
import CardLayout from "./components/shared/CardLayout";
import ProjectCard from "./components/ProjectCard";
import ColorSystem from "./components/ColorSystem";
import Illustrations from "./components/Illustrations";
import Development from "./components/Development";
import Footer from "./components/Footer";


function App() {
  return (
    <div id="page-top">
      <div id="wrapper">
      
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />

            <div className="container-fluid">
              <Heading />
              <Card />
              <div className="row">
                <AreaChart />
                <PieChart />

                <div className="col-lg-6 mb-4">
                  <CardLayout title={"Projects"}>
                    <ProjectCard />
                  </CardLayout>
                  <ColorSystem />
                </div>

                <div className="col-lg-6 mb-4">
                  <CardLayout title={"Illustrations"}>
                    <Illustrations />
                  </CardLayout>
                  <CardLayout title={"Development Approach"}>
                    <Development />
                  </CardLayout>
                </div>

              </div>
              <Footer />
              
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
