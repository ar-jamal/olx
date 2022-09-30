import logo from './logo.svg';
import './App.css';
import Layout from './utils/components/cusHeader';


function App() {
  let cars= [
    {Name: 'Car',
    Model: 'Suzuki Cultus',
    Color: 'Blue',
    PriceRange: 'PKR 27-32 lacs'
  },
    {Name: 'Car',
    Model: 'United Bravo',
    Color: 'Ash grey',
    PriceRange: 'PKR 15.9-16 lacs'
  },
    {Name: 'Car',
    Model: 'Suzuki Alto',
    Color: 'Dark Maroon',
    PriceRange: 'PKR 17-22 lacs'
  },
    {Name: 'Car',
    Model: 'Proton Saga',
    Color: 'Black',
    PriceRange: 'PKR 28-31.5 lacs'
  },
  {

  },
    
  ]
  return (
    
      <Layout onClick= {"onClickHandler"}>
        <div className='Item-list'>
           <input></input>
        </div>
        
      </Layout>
  );
}

export default App;
