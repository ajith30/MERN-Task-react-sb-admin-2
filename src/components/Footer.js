function Footer() {
    return (
      <footer className="sticky-footer bg-white position-relative">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; AK 2023</span>
          </div>
          <a
            className="position-absolute bottom-0 end-0 rounded h1 secondary"
            href="#page-top"
          >
            <i className="bi bi-arrow-up-square"></i>
          </a>
        </div>
      </footer>
    );
}

export default Footer;