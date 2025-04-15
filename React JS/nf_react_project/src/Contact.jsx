import './App.css'





// ini adalah bagian header

function Contact() {


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
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero Contact form</h1>
        <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="Name" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Name</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Contact Us</button>
          <hr class="my-4"/>
          <small class="text-body-secondary">By clicking Contact Us, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>

      </div>



  
    </>
  )
}

export default Contact
