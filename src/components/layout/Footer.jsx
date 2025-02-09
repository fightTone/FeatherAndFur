import React from "react";
import { Facebook, Youtube, MessageCircle } from "lucide-react";

const Footer = () => (
    <footer className="bg-white shadow-lg mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
            <div className="text-sm">© 2025 Your Farm Name. All rights reserved.</div>
            <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-blue-600 cursor-pointer" />
                <Youtube className="w-6 h-6 text-red-600 cursor-pointer" />
                <MessageCircle className="w-6 h-6 text-green-600 cursor-pointer" />
            </div>
            </div>
        </div>
    </footer>
);

export default Footer;