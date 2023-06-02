import image from '../image/devasena-photo (1).jpg'
export default function About() {
    return (
      <>
       <div class="container">
      <hr class="text-light"/>
      </div>
     <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={image} class="d-block mx-lg-auto img-fluid rounded-circle" alt="Bootstrap Themes" width="250" height="300" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h2 class="display-5 fw-semibold text-body-emphasis text-light lh-1 mb-3">About Me ..</h2>
        <p class="fs-6 text-light ">I am Devasena, a recent graduate with a Bachelor's degree in Information Technology . With a solid academic record, including an impressive 8.3 GPA, I am driven to excel in the IT industry. I have a strong foundation in web development, with expertise in HTML, CSS, JavaScript, jQuery, Firebase, and React. Additionally, I have knowledge of Python and Java basics, allowing me to adapt to diverse project requirements.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-outline-light btn-sm px-4 me-md-2">Know more..</button>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
        </div>
      </div>
    </div>
  </div>
      </>
     );
  }