import Rocket from "../images/undraw_rocket.svg";
import {useState} from "react";

function Sidebar() {
    const [showComponent, setShowComponent] = useState(false);
    const [showUtilities, setUtilities] = useState(false);
    const [showPages, setShowpages] = useState(false);

    return(
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordian" id="accordionSidebar">
                {/* Sidebar  Brand */}
                <a href="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>

                {/* Divider */}
                <hr className="sidebar-driver my-0" />

                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <a href="/" className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                {/* Divider */}
                <hr className="sidebar-driver" />

                {/* Heading */}
                <div className="sidebar-heading">
                    Interface
                </div>

                {/* Nav Item - Pages Collapse Menu */}
                <li class="nav-item">
                  
                    <a class="nav-link collapsed" href="#/" data-bs-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo" onClick={()=>{setShowComponent(!showComponent)}}>
                        
                        <div className="d-flex justify-content-between align-items-baseline">
                            <span><i class="fas fa-fw fa-cog"></i>Components</span><p className="fw-bold opacity-80">{">"}</p>
                        </div>
                         
                    </a>

                    <div id="collapseTwo" class={(showComponent)? "collapse show": "collapse"} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Custom Components:</h6>
                            <a class="collapse-item" href="/">Buttons</a>
                            <a class="collapse-item" href="/">Cards</a>
                        </div>
                    </div>
                </li>

                {/* Nav Item - Utilities Collapse Menu  */}
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#/" data-bs-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities" onClick={()=>{setUtilities(!showUtilities)}}>
                        
                        <div className="d-flex justify-content-between align-items-baseline">
                            <span><i class="fas fa-fw fa-wrench"></i>Utilities</span><p className="fw-bold opacity-80">{">"}</p>
                        </div>
                        
                    </a>
                    <div id="collapseUtilities" class={(showUtilities)? "collapse show": "collapse"} aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Custom Utilities:</h6>
                            <a class="collapse-item" href="/">Colors</a>
                            <a class="collapse-item" href="/">Borders</a>
                            <a class="collapse-item" href="/">Animations</a>
                            <a class="collapse-item" href="/">Other</a>
                        </div>
                    </div>
                </li>
                    
                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Heading */}
                <div className="sidebar-heading">
                    Addons
                </div>
                
                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <a href="#!" className="nav-link collapsed" data-bs-toggle="collapse" data-target="#collapsePages" 
                    aria-expanded="true" aria-controls="collapsePages" onClick={() => {setShowpages(!setShowpages)}}>
                        
                        <div className="d-flex justify-content-between align-items-baseline">
                            <span><i className="fas fa-fw fa-folder"></i>Pages</span><p className="fw-bold opacity-80">{">"}</p>
                        </div>
                        
                    </a>
                    <div id="collapsePages" className={(showPages)? "collapse show" : "collapse"} aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <a class="collapse-item" href="login.html">Login</a>
                        <a class="collapse-item" href="register.html">Register</a>
                        <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Other Pages:</h6>
                        <a class="collapse-item" href="404.html">404 Page</a>
                        <a class="collapse-item" href="blank.html">Blank Page</a>
                        </div>
                    </div>
                </li>
                
                {/* Nav Item - Charts */}
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span>
                    </a>
                </li>

                {/* Nav Item - Tables */}
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span>
                    </a>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

                {/* Sidebar Message */}
                <div className="sidebar-card d-none d-lg-flex">
                    <img src={Rocket} alt="" className="sidebar-card-illustration mb-2" />
                    <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                    <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                </div>
            </ul>
        </>
    );
}

export default Sidebar;