const menu=({menu})=>{
    
    return (
        <div class="container">
            <div class="row">
        {menu.map((item)=>{
            const {id,img,title,price,desc}=item
            console.log(img)
            return(

                <div
                class="card mt-4 mb-3 d-flex justify-content-center border border-0 me-4 "
                style={{maxWidth: "540px"}} key={id}
              >
                <div class="row g-0">
                  <div class="col-md-4 ">
                    <img
                      src={img}
                      width="175"
                      height="175"
                      alt=""
                      class="border border-4 border-warning rounded-4 my-3" 
                    />
                  </div>
                  <div class="col-md-8 ">
                    <div class="card-body">
                     
                        <h5 class="card-title fs-6"  id="heading" style={{letterSpacing:" 3px", lineHeight: "2",borderBottom:"1px dotted"}}>
                         {title}<span class="fs-6  float-end"id="rupee"
                            >${price}</span>
                        </h5>
                  
                      <p class="card-text text-muted mt-4" id="description" style={{fontSize:"18px"}}>
                     {desc.slice(0,100)}
                      </p>
                    
                    </div>
                  </div>
                  </div>
                  </div>
               
)
})}
</div>
        </div>
      
    )
}
export default menu