import { useState } from 'react';
import AddCategory from './components/AddCategory';

function App() {
  const [categories, setCategories] = useState(['Hades', 'Zelda']);

  const onAddCategory = () => {
    setCategories((prevCategories) => {
      return [...prevCategories, 'Hollow Knight'];
    });
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory />

      <button onClick={onAddCategory}>Add</button>

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
