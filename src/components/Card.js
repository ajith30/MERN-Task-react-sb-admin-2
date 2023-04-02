
function Card() {
  const cardData = [
    {title: "EARNINGS (MONTHLY)", earning: "$40,000", symbol: "calendar"},
    {title: "EARNINGS (ANNUAL)", earning: "$215,000", symbol: "dollar-sign"},
    {title: "TASKS", percentage: "50%" , symbol: "clipboard-list"},
    {title: "PENDING REQUESTS", request: 18, symbol: "comments"},
];

  return (
    <div className="row">
        
        {cardData.map((card) => {
            return (
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className={`card border-left-${(card.title==="EARNINGS (MONTHLY)") ? "primary" : (card.title==="EARNINGS (ANNUAL)") ? "success" : (card.title==="TASKS") ? "info" : "warning"} shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">{card.title}
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{(card.title==="TASKS") ? card.percentage : (card.title==="PENDING REQUESTS")? card.request : card.earning }</div>
                                        </div>
                                        {((card.title==="TASKS")?
                                        <div className="col">
                                            <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-info" role="progressbar"style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        : null)}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className={`fas fa-${card.symbol} fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            )})
        }
    </div>
  )
}

export default Card
