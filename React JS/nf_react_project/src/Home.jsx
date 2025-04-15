
// ini adalah bagian header

function Home() {


  return ( 
    <>
      
      <div className="container">
        {/* ini adalah bagian header */}
        {/* <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
            <i className="fa-solid fa-book-open-reader" style={{color:"#74C0FC", fontSize:"30px"}}></i>
            <span className="ms-2 fs-4">Mari Membaca</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" onClick={(e) => handleNavigation(e, "home")} className="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" onClick={(e) => handleNavigation(e, "book")} className="nav-link px-2">Book</a></li>
            <li><a href="#" onClick={(e) => handleNavigation(e, "team")} className="nav-link px-2">Team</a></li>
            <li><a href="#" onClick={(e) => handleNavigation(e, "contact")} className="nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Sign-up</button>
          </div>
        </header> */}
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Border hero with cropped image and shadows</h1>
              <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3" src="https://picsum.photos/710/600/" alt="" width="720"/>
            </div>
        </div>
      </div>

      </div>

  
    </>
  )
}

export default Home
