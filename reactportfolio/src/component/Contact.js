const Contact=()=>{
    return (
        <>
        <div class="container">
      <hr class="text-light"/>
      </div>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <h2 class="display-5 fw-semibold lh-1 text-center text-body-emphasis text-light ">Contact Form</h2>
  
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
      <p class="text-light fs-6 mt-3"> I'm excited to connect with like-minded professionals...</p>
        <p class="col-lg-10 fs-4"><img src="https://images.pexels.com/photos/4831/hands-coffee-smartphone-technology.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="800" height="600" loading="lazy"/></p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary text-light">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput" class="text-dark">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword"class="text-dark">Password</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox"  value="remember-me"/> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
          <hr class="my-4"/>
          <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>


        </>
    )
}
export default Contact