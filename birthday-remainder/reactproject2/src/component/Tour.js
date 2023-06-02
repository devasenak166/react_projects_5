import{ useState } from 'react';

const Tour = ({ id, image, info, name, price ,removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
<div class="container mt-4">
      <div class="card border border-0 mx-auto" style={{maxWidth: "25rem"}}>
      <img src={image} alt={name} width="400px" height="300px"/>
        <div class="card-body">
          <h5 class="card-title fs-6 fw-bold" style={{letterSpacing:"3px"}}>
           {name}
            <span
              class="float-end text-primary card border border-0"
              style={{backgroundColor: "#effaf9"}}
              >${price}</span
            >
          </h5>
        
          <p class="card-text mt-3" style={{fontSize: "13px"}}>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button class="btn btn-sm " onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
           
          <p class="card-text mt-4">
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-outline-danger btn-sm" type="button" onClick={() => removeTour(id)}>Not Interested</button>
            </div>
          </p>
        </div>
      </div>
    </div>
    )
    }

export default Tour;