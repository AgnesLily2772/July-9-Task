import './App.css';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Content from './Components/Content';
function App() {
  const dashboardData = {
    monthlyEarnings :40000,
    annualEarnings:215000,
    tasks:50,
    pendingRequests:18
  }
  const ProjectsData = {
    ServerMigration:20,
    SalesTracking:40,
    CustomerDatabase:60,
    PayoutDetails:80,
    AccountSetup:100
  }
  const colorData = {
    Primary:"#4e73df",
    Success:"#1cc88a",
    Info:"#36b9cc",
    Warning:"#f6c23e",
    Danger:"#e74a3b",
    Secondary:"#858796",
    Light:"#f8f9fc",
    Dark:"#5a5c69"
  }
  return (
    <div id='wrapper'>
      
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <Navbar/>
            <div className="container-fluid">
              <Dashboard data={dashboardData}/>
              <Content ProjectsData={ProjectsData}colorData={colorData}/>
            </div>
        </div>
        <Footer/>

      </div>
    </div>
  );
}

export default App;
