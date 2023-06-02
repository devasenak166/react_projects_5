
const Notours=({fetchTour})=>{

    return( 
        <div style={{backgroundColor:"#ADDFFF"}} class="vh-100">
        <h3 class="mx-auto text-center">No Tours Available</h3>
        <div class="d-grid gap-2 col-2 mx-auto mt-5">
              <button class="btn btn-outline-light btn-sm" type="button" onClick={() => fetchTour()}>Refresh</button>
            </div>
            </div>
    )
}
export default Notours;