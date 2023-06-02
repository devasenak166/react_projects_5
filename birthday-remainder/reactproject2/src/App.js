import Loading from './component/Loding'
import {useState , useEffect} from 'react'
import Tours from './component/Tours'
import Notours from './component/Notours';
import './App.css';
function App() {
  const [Load,setLoad]=useState(true)
  const[tours,setTours]=useState([])
  const fetchTour=async ()=>{
    const response = await fetch('https://course-api.com/react-tours-project')
    const data = await response.json()
    setLoad(false)
    setTours(data)
  }
  useEffect(() => {
    fetchTour()
  }, [])
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  if (Load) {
    return (
      <main>
       <Loading />
      </main>
    )
  }
   if (tours.length === 0) {
    return (
     <main>
      <Notours fetchTour={fetchTour}/>
     </main>
     
    )
  }
  return (
   <div style={{backgroundColor:"#ADDFFF"}}>
    <Tours tours={tours} removeTour={removeTour}/>
   </div>
  );
}

export default App;
