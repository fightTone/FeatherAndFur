import react from 'react';
import ResourceCard from '../components/education/resource_card';

const EducationContent = () => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold">Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ResourceCard
            title="Rabbit Care Basics"
            type="Video Guide"
            description="Learn the fundamentals of rabbit care and maintenance"
        />
        <ResourceCard
            title="Breeding Guide"
            type="Article"
            description="Complete guide to successful rabbit breeding"
        />
        <ResourceCard
            title="Health Management"
            type="Video Series"
            description="How to keep your rabbits healthy and prevent common issues"
        />
        <ResourceCard
            title="Farm Setup"
            type="Tutorial"
            description="Step-by-step guide to setting up your rabbit farm"
        />
        </div>
    </div>
);

export default EducationContent;