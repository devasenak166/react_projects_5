import Tour from './Tour';
const Tours = ({ tours,removeTour}) => {
  return (
   <>
      <div style={{backgroundColor:"#ADDFFF"}}>
        <h2 class="text-center">our tours</h2>
       
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}  removeTour={removeTour}/>;
        })}
      </div>
    </>
  );
};

export default Tours;