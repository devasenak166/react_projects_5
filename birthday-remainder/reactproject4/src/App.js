import menu from './components/data'
import {useState} from 'react'
import Menu from './components/Menu'
import Category from './components/Category'
const allCategories = ['all', ...new Set(menu.map((item) => item.category))];
function App() {

  const [MenuItems,setMenu]=useState(menu)
  const [category, setCategory] = useState(allCategories);

  const filterdetails = (category) => {
    if (category === 'all') {
      setMenu(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenu(newItems);
  };
  return (
   
<div>
  <h2 class="text-center mt-5">Our Menu</h2>
  <Category category={category} filterdetails={filterdetails}/>
<Menu menu={MenuItems}/>
</div>
   
  );
}

export default App;
