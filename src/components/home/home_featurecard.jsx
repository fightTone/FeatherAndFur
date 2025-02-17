import react from "react";
import { Card, CardContent } from "../ui/card";
import { theme } from "../../styles/theme";


const FeatureCard = ({ icon, title, description }) => (
    <div className={`${theme.card.base} ${theme.card.hover} p-6`}>
        <div className="flex flex-col items-center text-center">
            {icon}
            <h3 className={`mt-4 text-lg font-semibold ${theme.colors.text.primary}`}>
                {title}
            </h3>
            <p className={`mt-2 ${theme.colors.text.secondary}`}>
                {description}
            </p>
        </div>
    </div>
);

export default FeatureCard;