import { Elixir, Ingredient, Inventor } from "../../types";

interface ElixirCardProps {
  elixir: Elixir;
}

const ElixirCard: React.FC<ElixirCardProps> = ({ elixir }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-2">{elixir.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-lg">
            <strong>Effect:</strong> {elixir.effect || "N/A"}
          </p>
          <p className="text-lg">
            <strong>Side Effects:</strong> {elixir.sideEffects || "N/A"}
          </p>
          <p className="text-lg">
            <strong>Characteristics:</strong> {elixir.characteristics || "N/A"}
          </p>
          <p className="text-lg">
            <strong>Time:</strong> {elixir.time || "N/A"}
          </p>
          <p className="text-lg">
            <strong>Difficulty:</strong> {elixir.difficulty || "N/A"}
          </p>
        </div>
        <div>
          <p className="text-lg">
            <strong>Ingredients:</strong>
          </p>
          <ul className="list-disc pl-6">
            {elixir.ingredients.map((ingredient: Ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
          <p className="text-lg">
            <strong>Inventors:</strong>
          </p>
          <ul className="list-disc pl-6">
            {elixir.inventors.map((inventor: Inventor) => (
              <li key={inventor.id}>
                {inventor.firstName} {inventor.lastName}
              </li>
            ))}
          </ul>
          <p className="text-lg">
            <strong>Manufacturer:</strong> {elixir.manufacturer || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElixirCard;
