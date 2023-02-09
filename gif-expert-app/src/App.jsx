import { useState } from 'react';
import AddCategory from './components/AddCategory';

function App() {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCategory) => {
    setCategories((prevCategories) => {
      return [newCategory, ...prevCategories];
    });
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={handleAddCategory} />

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
