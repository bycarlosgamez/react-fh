import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifCard from './components/GifCard';

function App() {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories((prevCategories) => {
      return [newCategory, ...prevCategories];
    });
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={handleAddCategory} />

      {categories.map((category) => (
        <GifCard category={category} key={category} />
      ))}
    </>
  );
}

export default App;
