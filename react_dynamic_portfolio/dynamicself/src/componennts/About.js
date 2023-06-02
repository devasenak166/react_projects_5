// mport image from './image/images (1).jpeg'i;
import './About.css'
const About = ()=>{
    const styles={ 
        header:{ 
        background: 'rgba(0, 0, 0, 0.5)', 
        backgroundImage:`url('https://c1.wallpaperflare.com/preview/414/533/69/nature-royal-enfield-man-season.jpg')`,
        height: '130vh', 
        backgroundPosition:'center', 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover' 
        }
        ,
        overlayView: {
            height: "130vh",
            width: "100%",
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
      
        },
        font:{
         fontSize:"50px"
        }
      
      
    }
   
    return (
        <div style={styles.header}>
<div style={styles.overlayView} >
<div class="container mt-5 p-5">
<div class="d-flex justify-content-evenly ">
          <div class="card px-5 py-3 ">
            <i class="bi bi-camera-fill mb-2" style={styles.font}></i>
          </div>
          <div class="card px-5 py-3 ">
            <i class="bi bi-laptop-fill mb-2" style={styles.font} ></i>
          </div>
          <div class="card px-5 py-3">
            <i class="bi bi-cup-fill mb-2" style={styles.font}></i>
          </div>
          <div class="card px-5 py-3">
            <i class="bi bi-book-fill mb-2" style={styles.font}></i>
          </div>
        </div>
    </div>
    <div class="container mt-5">
    <div class="card float-end " style={{width:"35rem"}}>
      <div class="card-body text-center ">
        <h5 class="card-title">About Me</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">History</h6>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          adipisci ipsa similique rerum impedit facere? Libero voluptates
          reiciendis velit architecto delectus aliquid inventore maxime facere
          optio dicta quasi rerum dolor suscipit quas eos beatae ab, saepe
          corporis nesciunt accusantium tempore.
        </p>
        <a href="#card" class="card-link">Card link</a>
        <a href="#card" class="card-link">Another link</a>
      </div>
    </div>
    </div>
    
    <div class="container float-end mt-5 me-5">
    <div class="card float-end me-5" style={{width: "9rem"}}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktMBbiyiNP9fyK-MfUOacGKHLpStiovbj2pBC5gEHng&usqp=CAU&ec=48665701"
        alt=""
        width="150"
        height="150"
        class="img-thumbnail "
      />
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card .</p>
      </div>
    </div>
    <div class="card float-end me-5 " style={{width: "9rem"}}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktMBbiyiNP9fyK-MfUOacGKHLpStiovbj2pBC5gEHng&usqp=CAU&ec=48665701"
        alt=""
        width="150"
        height="150"
        class="img-thumbnail"
      />
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card .</p>
      </div>
    </div>
    <div class="card float-end me-5 " style={{width: "9rem"}}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktMBbiyiNP9fyK-MfUOacGKHLpStiovbj2pBC5gEHng&usqp=CAU&ec=48665701"
        alt=""
        width="150"
        height="150"
        class="img-thumbnail"
      />
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card .</p>
      </div>
    </div>
    </div>
        </div>
        </div>
    )
};
export default About;