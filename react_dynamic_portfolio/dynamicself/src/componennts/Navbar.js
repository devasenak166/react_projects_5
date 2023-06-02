import {  Link } from "react-router-dom";
const Navbar = ()=>{
    return (
        <div>
          <header class="">
  <nav class="navbar navbar-expand-md fixed-top opacity-25"  style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
    <div class="container-fluid ">
      {/* <a class="navbar-brand" href="#">Carousel</a> */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
          <Link class="nav-link text-light" to='/'>Home</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to='/about'>About</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to='/projects'>Projects</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to='/skills'>Skills</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to='/testimonial'>Testimonial</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to='/contact'>Contact</Link>
          </li>
        </ul>
        {/* <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
</header>
         
        </div>
    )
};
export default Navbar;