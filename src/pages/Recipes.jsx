import React from "react";
import RecipeCard from "../components/recipes/recipecard";

const RecipesContent = () => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold">Rabbit Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecipeCard
            title="Rabbit Adobo"
            difficulty="Medium"
            time="1 hour"
            description="Traditional Filipino adobo style rabbit"
        />
        <RecipeCard
            title="Grilled Rabbit"
            difficulty="Easy"
            time="45 minutes"
            description="Simple grilled rabbit with herbs"
        />
        <RecipeCard
            title="Rabbit Curry"
            difficulty="Medium"
            time="1.5 hours"
            description="Spicy curry with tender rabbit meat"
        />
        <RecipeCard
            title="Rabbit Soup"
            difficulty="Easy"
            time="2 hours"
            description="Nutritious and comforting rabbit soup"
        />
        </div>
    </div>
);

export default RecipesContent;