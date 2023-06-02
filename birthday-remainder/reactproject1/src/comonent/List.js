// import data from './Data'
const List =({data})=>{
 return(
<div >

     {data.map((item)=>{
    const {id,name,age,image}=item
    return (
        <div class="container" >
        <div class="row" >
       <div class="card mx-auto mt-2" style={{maxWidth: "25rem"}} key={id}>
            <div class="card-body">
              <div class="d-inline-flex">
                <img
                  src={image}
                  alt=""
                  width="75px"
                  height="75px"
                  class="rounded-circle"
                />
                <h3 class="ps-3 pt-3">
                 {name}
                  <p class="fs-6 fw-light">{age}Years</p>
                </h3>
              </div>
            </div>
          </div>
          </div>
</div>
       );

    })
}

</div>
    );
};
export default List;