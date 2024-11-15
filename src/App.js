import React from 'react';
import GroceryItem from './GroceryItem';

function App() {
  const items = ['Eggs', 'Banana', 'Strawberry', 'Bread'];
  return (
    <div style={{
      display: 'grid',
      placeItems: 'center',      // Centers both horizontally and vertically
      height: '100vh',           // Full viewport height
    }}>
      <GroceryItem items={items} />
    </div>
  )
}

export default App;
