
import {useState} from 'react'
import List from './comonent/List'
import Data from './comonent/Data'
function App() {
  
  const [data,setData]=useState(Data)
  return (
    <div style={{backgroundColor:"pink"}}>
      <div class="container" >
        <div class="row">
        <h3 class="text-center mt-5">{data.length} birthdays today</h3>
        <List data={data}/>
       
        </div>
        </div>
        <div class="d-grid gap-2 col-2 mx-auto mt-5">
  <button class="btn btn-light" onClick={() => setData([])} type="button">Clear All</button>
  </div>
      
    </div>
  );
}

export default App;
