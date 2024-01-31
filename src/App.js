import { useEffect, useState } from 'react';
import quotes from './resources/qoutes.json';
import logo from './images/logo.png';
import './styles/style.css';

function App() {

  console.log(quotes.length)
  const [filterCategory, setFilterCategory] = useState("All")
  const [filterAuthor, setFilterAuthor] = useState('All')



  const [result, setResult] = useState([])


  useEffect(() => {
    setResult(quotes.filter((quote) => {
      if (filterCategory !== 'All' && filterAuthor !== "All") {
        return quote.author === filterAuthor && quote.category === filterCategory
      } else if (filterCategory !== "All" && filterAuthor === "All") {
        return quote.category === filterCategory
      } else if (filterCategory === 'All' && filterAuthor !== "All") {
        return quote.author === filterAuthor
      } else {
        return quote
      }
    }))
  }, [filterAuthor, filterCategory])


  // console.log(result)

  return (
    <div className="App">

      <div className="logoContainer">
        <img className='logo' src={logo} alt="" />
      </div>
      
      <div className="filterContainer">
        <div className="categoryFilter">
          <label htmlFor="category">choose a category:</label>
          <select value={filterCategory} onInput={(e) => setFilterCategory(e.target.value)} name="category" id="category">
            <option value="All">All</option>
            {quotes.map((item, index) => {
              return <option key={index}>{item.category}</option>
            })}
          </select>
        </div>

        <div className="authorFilter">
          <label htmlFor="authorFilter">choose an author:</label>
          <select value={filterAuthor} onInput={(e) => setFilterAuthor(e.target.value)} name="authorFilter" id="authorFilter">
            <option value="All">All</option>
            {quotes.map((item, index) => {
              return <option key={index}>{item.author}</option>
            })}
          </select>
        </div>
      </div>


      <div className="quotesContainer">
        {result.map((item, index) => {
          return <div key={index} className="quote">
            <p className="text">{item.text}</p>
            <p className="author">{item.author}</p>
          </div>
        })}
      </div>

      <footer>Created with ❤ by <a href="https://github.com/ehsanqasimi">Ehsan Qasimi</a></footer>
    </div>

  );
}

export default App;
