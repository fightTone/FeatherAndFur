import React from 'react';
import { ChefHat } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const RecipeCard = ({ title, difficulty, time, description }) => (
    <Card>
        <CardContent className="p-6">
            <div className="h-48 bg-gray-200 mb-4 rounded-md flex items-center justify-center">
                <ChefHat className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="flex space-x-4 mt-2 text-sm text-gray-600">
                <span>Difficulty: {difficulty}</span>
                <span>Time: {time}</span>
            </div>
            <p className="mt-2 text-gray-600">{description}</p>
        </CardContent>
    </Card>
);

export default RecipeCard;