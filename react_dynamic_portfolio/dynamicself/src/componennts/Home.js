import image from './image/photo-1555066931-4365d14bab8c.avif'

const Home = ()=>{
  const styles={ 
    header:{ 
    background: 'rgba(0, 0, 0, 0.5)', 
    backgroundImage:`url(${image})`,
    height: '100vh', 
    backgroundPosition:'center', 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' 
    },
    overlayView: {
      height: "100%",
      width: "100%",
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',

  }
   }
    return (
        <div style={styles.header}>
          <div style={styles.overlayView}>
            
    <div class="py-5">
      {/* <h1 class="display-5 fw-bold text-white">Dark color hero</h1> */}
      <div class=" px-4 py-5 text-center">
      <div class="col-lg-6 mx-auto mt-4">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCeZH7Y1UdpKBd0nfN3P1bWG3NVLKjsS5pdtQa9u0QQ&usqp=CAU&ec=48665701' class='rounded-pill' width="200" height="200" alt=''></img>
        {/* <p class="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p> */}
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          {/* <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
          <button type="button" class="btn btn-outline-light btn-lg px-4">Secondary</button>*/}
            <p class="fs-5 mb-4 text-muted text-center mt-3">I'm a developer</p>
        </div> 
      
      </div>
    </div>
  </div>
        </div>
        </div>
    
    )
};
export default Home;