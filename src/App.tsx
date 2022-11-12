import "./App.css";
import { Header, Card } from "./components";
import {data} from "./assets/data/recipe";

function App() {
  return (
    <div className="app">
      <div className="flex header justify-center">
        <Header />
      </div>
      <div className="flex justify-center">
        {data.recipies.map((row) => (
          <Card
            image={row.image}
            altText={row.altText}
            title={row.title}
            ingredients={row.ingredients}
            optionalIngredients={row.optionalIngredients}
            instructions={row.instructions}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
