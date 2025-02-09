import react from "react";
import { Card, CardContent } from "../ui/card";

const FeatureCard = ({ icon, title, description }) => (
    <Card>
        <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
            {icon}
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
            </div>
        </CardContent>
    </Card>
);

export default FeatureCard;