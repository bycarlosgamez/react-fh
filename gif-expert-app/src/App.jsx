import { useState } from 'react';
import AddCategory from './components/AddCategory';

function App() {
  const [categories, setCategories] = useState([]);

  const onAddCategory = () => {
    setCategories((prevCategories) => {
      return [...prevCategories, 'Hollow Knight'];
    });
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
