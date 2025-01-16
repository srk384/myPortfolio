"use client"
import { useState } from 'react';
import SectionHeading from './Section-heading';
import { FaPaperPlane } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {

                toast.success('Email sent successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error('Failed to send email. Please try again later.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        } finally {
            setIsSubmitting(false); // Re-enable the submit button
        }
    };

    return (
        <section id="contact" className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">

            <SectionHeading>Contact Me</SectionHeading>

            <p className="text-gray-700 mt-6 text-sm sm:text-base">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:example@gmail.com">
                    khanshahrukh384@gmail.com
                </a>{" "}
                or through this form.
            </p>
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-2">

                <input
                    className="h-14 px-4 rounded-lg border p-4 transition-all shadow-md"
                    placeholder="Your Name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />

                <input
                    className="h-14 px-4 rounded-lg border p-4 transition-all shadow-md"
                    placeholder="Your email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />

                <textarea
                    className="h-52 rounded-lg border p-4 transition-all shadow-md"
                    name="message"
                    placeholder="Your message"
                    maxLength={5000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                ></textarea>
                <button
                    type="submit"
                    className="group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>) :
                        (
                            <>
                                Submit{" "}
                                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                            </>
                        )}
                </button>
            </form>
        </section>
    );
}
