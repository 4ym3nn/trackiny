import React from "react";
import { Figma, X, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
    const socialIcons = [
        { Icon: X, label: "X" },
        { Icon: Instagram, label: "Instagram" },
        { Icon: Youtube, label: "YouTube" },
        { Icon: Linkedin, label: "LinkedIn" },
    ];

    const contactInfo = [
        { label: "Phone number", value: "+213 12345678" },
        { label: "Email", value: "name@mail.com" },
    ];

    const useCases = ["UI design", "UX design", "Wireframing", "Diagramming"];

    return (
        <footer className="bg-gradient-to-b from-gray-200 to-gray-300 py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
                {/* Left Section: Logo and Social Icons */}
                <div className="flex flex-col space-y-4">
                    {/* Logo */}
                    <Figma className="w-10 h-10 text-black" />

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        {socialIcons.map(({ Icon }, index) => (
                            <Icon
                                key={index}
                                className="w-6 h-6 text-black hover:text-gray-600 transition-colors cursor-pointer"
                                
                            />
                        ))}
                    </div>
                </div>

                {/* Middle Section: Contact Information */}
                <div className="text-gray-800 text-sm space-y-2">
                    <h3 className="font-bold text-base">Contact us</h3>
                    {contactInfo.map((info, index) => (
                        <p key={index}>
                            {info.label}: <span className="font-medium">{info.value}</span>
                        </p>
                    ))}
                </div>

                {/* Right Section: Use Cases */}
                <div className="text-gray-800 text-sm space-y-2">
                    <h3 className="font-bold text-base">Use cases</h3>
                    {useCases.map((useCase, index) => (
                        <p key={index}>{useCase}</p>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
