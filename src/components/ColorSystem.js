

function ColorSystem() {
    const colors = [
        { title: "Primary", color: "primary", code: "#4e73df"},
        { title: "Success", color: "success", code: "#1cc88a"},
        { title: "Info", color: "info", code: "#36b9cc"},
        { title: "Warning", color: "warning", code: "#f6c23e"},
        { title: "Danger", color: "danger", code: "#e74a3b"},
        { title: "Secondary", color: "secondary", code: "#858796"},
        { title: "Light", color: "light", code: "#f8f9fc"},
        { title: "Dark", color: "dark", code: "#5a5c69"},
    ]

  return (
    <div className="row">
        {colors.map((clr) => {
            return(

                <>
                {console.log(clr.color)}
                {console.log(clr.code)}
                   <div className="col-lg-6 mb-4">
                        <div className={`card bg-${clr.color} ${(clr.color === "light") ? "text-balck" : "text-white"} shadow`}>
                            <div className="card-body">
                                {clr.title}
                                <div className={`text-${(clr.color === "light") ? "text-balck" : "text-white"}-50 small`}>{clr.code}</div>
                            </div>
                        </div>
                    </div>
                </>
            );
        })}

    </div>
  )
}

export default ColorSystem;
