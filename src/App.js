import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import SearchBar from './components/searchbar/searchBar'
import Categories from './components/categories/topicSlice';
import Content from './components/content/content';


export default function App() {
  return (
    <App className="App">
      <Header />
      <SearchBar />
      <Categories />
      <Content />
      <Footer />
    </App>
  );
}
