import React from 'react';
import Axios from 'axios';

function App() {
  const getNews = () => {
    Axios.get("https://hn.algolia.com/api/v1/search?&tags=story&page=1&hitsPerPage=15&query=")
  }
}

export default App;
