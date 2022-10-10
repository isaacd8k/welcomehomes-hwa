import React from "react";
import SingleImageCarousel from "./utils/SingleImageCarousel";

export default function Hero() {
  return (
    <section className="p-2">
      <h3 className="text-xl font-bold">
        We make building a new home possible
      </h3>
      <p className="p-4 bg-amber-100">
        A new home is so much better than a used one. Welcome makes the process
        of building a home super-simple. We handle everything at & guaranteed,
        all-in-one price.
      </p>

      <button className="border px-6 bg-sky-600 rounded">Our models</button>
      <button className="border px-4">Explore towns</button>
      <SingleImageCarousel />
    </section>
  );
}
