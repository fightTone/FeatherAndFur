import React from 'react';
import ProductCard from '../components/shop/prodcard';

const ShopContent = () => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold">Our Rabbits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard
            title="Breeding Pairs"
            price="Contact for pricing"
            description="Healthy breeding pairs for starting your own farm"
        />
        <ProductCard
            title="Ready for Cooking"
            price="Contact for pricing"
            description="Fresh, professionally processed rabbit meat"
        />
        <ProductCard
            title="Live Rabbits"
            price="Contact for pricing"
            description="Various breeds available for your needs"
        />
        </div>
    </div>
);

export default ShopContent;