import react from "react";
import { Book } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const ResourceCard = ({ title, type, description }) => (
    <Card>
        <CardContent className="p-6">
        <div className="h-48 bg-gray-200 mb-4 rounded-md flex items-center justify-center">
            <Book className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mt-2">
            {type}
        </span>
        <p className="mt-2 text-gray-600">{description}</p>
        </CardContent>
    </Card>
);

export default ResourceCard;