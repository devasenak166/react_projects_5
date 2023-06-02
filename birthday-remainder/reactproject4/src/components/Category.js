
const cate=({category,filterdetails})=>{
    return (
        <>
          <div class="d-flex justify-content-center mt-4">
          {category.map((category, index) => {
        return (
          
            <button type="button" class="btn btn-outline-warning me-3 btn-sm" 
            key={index}
            onClick={() => filterdetails(category)}
          >
            {category}
            </button>
          
         
        );
      }
      )}
        </div>
        </>
    )
}
export default cate;