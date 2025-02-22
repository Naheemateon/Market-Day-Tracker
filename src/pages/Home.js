import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function Home() {
  const [markets, setMarkets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SPREADSHEET_ID}/values/Periodic Markets!A1:E?key=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
        if (data.values) {
          const headers = data.values[0];
          const rows = data.values.slice(1).map((row) =>
            headers.reduce((obj, header, index) => {
              obj[header] = row[index] || '';
              return obj;
            }, {})
          );
          setMarkets(rows);
        }
      } catch (error) {
        console.error('Error fetching markets:', error);
      }
    };
    fetchMarkets();
  }, []);

  const filteredMarkets = markets.filter((market) =>
    market['Market Name']?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddMarket = () => {
    history.push('/add-market');
  };

  return (
    <div className="home">
      <h1>Welcome to Ibadan Markets</h1>
      <SearchBar
        query={searchQuery}
        setQuery={setSearchQuery}
        suggestions={filteredMarkets}
        onAdd={handleAddMarket}
      />
    </div>
  );
}

export default Home;