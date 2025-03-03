import React from "react";
import Container from "./Container";

type Testimonial = {
    id: number;
    name: string;
    text: string;
    image: string;
};

const testimonials = [
    {
        id: 1,
        name: "Lauren Martin",
        text: "Working with Like Officials was an absolute game-changer. Their expertise and efficiency made the entire development process seamless. If you need a reliable web development partner, look no further.",
        image: "https://gravatar.com/avatar/cb40febd1c589eab9ae2f8148349b531?s=400&d=robohash&r=x", // Dummy avatar
    },
    {
        id: 2,
        name: "Moe Rafson",
        text: "We're incredibly grateful for Like Officials. They took our online presence to the next level with a stunning website that truly reflects our brand. Their attention to detail is unmatched!",
        image: "https://gravatar.com/avatar/3eba1823d6c1a0e7ced4e809371a57d9?s=400&d=robohash&r=x", // Dummy avatar
    },
    {
        id: 3,
        name: "Garrett Carson",
        text: "Unparalleled skills in designing and developing websites! They understood our business needs instantly and executed everything with speed and precision.",
        image: "https://gravatar.com/avatar/ad5dcc939f25c6831f4d502d15e3a884?s=400&d=robohash&r=x", // Dummy avatar
    },
    {
        id: 4,
        name: "Claire Cottom",
        text: "Remarkable expertise in website and product development. They effortlessly captured our vision and turned it into a high-performing, user-friendly website.",
        image: "https://gravatar.com/avatar/99d754a7cc0b4d5cfd66ed307c3ba81c?s=400&d=robohash&r=x", // Dummy avatar
    },
];

const Testimonials: React.FC = () => {
    return (
        <section
            id="testimonials"
            aria-label="What our clients are saying about Like Officials"
            className="bg-slate-50 py-20 sm:py-32"
        >
            <div className="">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl md:text-center">
                        <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                            Trusted by businesses worldwide
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Hear what our clients are saying about our web development services.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2 lg:mt-20"
                    >
                        {testimonials.map((testimonial) => (
                            <li key={testimonial.id}>
                                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                    <blockquote className="relative">
                                        <p className="text-lg tracking-tight text-slate-900">
                                            {testimonial.text}
                                        </p>
                                    </blockquote>
                                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                        <div>
                                            <div className="font-display text-base font-bold text-slate-900">
                                                {testimonial.name}
                                            </div>
                                        </div>
                                        <div className="overflow-hidden rounded-full bg-slate-50">
                                            <img
                                                alt={testimonial.name}
                                                className="h-14 w-14 object-cover"
                                                style={{ color: "transparent" }}
                                                src={testimonial.image}
                                            />
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;