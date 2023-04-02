
import {CChart} from "@coreui/react-chartjs";

function AreaChart() {
    return(
        <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
                {/*  Card Header - Dropdown  */}
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                    <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="#!" role="button" id="dropdownMenuLink"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">Dropdown Header:</div>
                            <a className="dropdown-item" href="#!">Action</a>
                            <a className="dropdown-item" href="#!">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#!">Something else here</a>
                        </div>
                    </div>
                </div>
                {/*  Card Body */}
                <div className="card-body">

                    {/* <Line options={options} data={data} /> */}
                    <CChart
                     type="line"
                        data={{
                        labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
                        datasets: [
                        {
                            label: "",
                            backgroundColor: "rgba(133, 135, 150, 0.2)",
                            borderColor: "rgba(133, 135, 150, 1)",
                            pointBackgroundColor: "rgba(133, 135, 150, 1)",
                            pointBorderColor: "#4e73df",
                            data: [0, 10000, 20000, 30000, 40000]
                        },
                        ],
                    }}
                    />
                </div>
            </div>
        </div>
    );
}


export default AreaChart;










