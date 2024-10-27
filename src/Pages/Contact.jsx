import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
       
        alert("Form submitted!");
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md ">
            <h1 className="text-2xl font-bold mb-4">Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">name</label>
                    <Input type="text" id="name" placeholder="Your Name" required className="w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">email</label>
                    <Input type="email" id="email" placeholder="Your Email" required className="w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message"  className="block mb-2">message</label>
                    <Textarea id="message"  placeholder="Your Message" required className="w-full h-32" />
                </div>
                <Button type="submit"  className="w-full bg-red-500 text-white hover:bg-black-600">
                    Send
                </Button>
            </form>
        </div>
    );
};

export default Contact;
