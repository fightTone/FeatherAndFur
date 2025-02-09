import React from "react";
import { Camera } from "lucide-react";
import { Card, CardContent } from '../ui/card';

const ProductCard = ({ title, price, description }) => (
    <Card>
        <CardContent className="p-6">
        <div className="h-48 bg-gray-200 mb-4 rounded-md flex items-center justify-center">
            <Camera className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-lg font-bold mt-4">{price}</p>
        </CardContent>
    </Card>
);

export default ProductCard;