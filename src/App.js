import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import TagRow from './components/tag-row/TagRow';
import BottledWaterList from './components/product-lists/bottled-water-list/BottledWaterList';

function App() {
  return (
    <div className="App">
      
      <Header />

      <TagRow />

      <BottledWaterList />


    
    </div>
  );
}

export default App;
