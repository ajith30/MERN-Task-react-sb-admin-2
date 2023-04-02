
function ProjectCard() {
    const projects = [
      { title: "Server Migration", progress: "20%", color: "danger" },
      { title: "Sales Tracking", progress: "40%", color: "warning" },
      { title: "Customer Database", progress: "60%", color: "" },
      { title: "Payout Details", progress: "80%", color: "info" },
      { title: "Account Setup", progress: "100%", color: "success" },
    ];

  return (
    <div>
        {projects.map((project) => {
            return(
                <>
                    <h4 className="small font-weight-bold text-secondary">{project.title} <span className="float-right">{project.progress}</span></h4>
                    <div className="progress mb-4">
                        <div className={`progress-bar bg-${project.color}`} role="progressbar" style={{width: project.progress}} aria-valuenow={project.progress} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </>
            );
        })}

    </div>
  )
}

export default ProjectCard
