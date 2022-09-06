import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import TagRow from './components/tag-row/TagRow';
import ProductList from './components/product-lists/bottled-water-list/BottledWaterList';

function App() {
  return (
    <div className="App">
      
      <Header />

      <TagRow />

      <ProductList />


    
    </div>
  );
}

export default App;
