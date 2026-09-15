import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Happy Traveller",
    role: "Regular traveller",
    message:
      "The booking process feels simple and smooth. Finding a bus and selecting seats is really easy.",
  },
  {
    name: "Bus Passenger",
    role: "Frequent traveller",
    message:
      "The AI assistant makes searching for buses much easier. I can simply describe where I want to go.",
  },
  {
    name: "Travel Customer",
    role: "Weekend traveller",
    message:
      "I like having the complete journey flow in one place, from choosing a bus to completing the booking.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="section-header">
        <span className="section-eyebrow">Traveller stories</span>

        <h2>
          Built for journeys
          <br />
          that matter.
        </h2>

        <p>
          A simple experience designed around comfortable and
          stress-free travel.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            className="testimonial-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.1,
            }}
            whileHover={{ y: -5 }}
          >
            <div className="testimonial-top">
              <div className="testimonial-quote">
                <Quote size={20} />
              </div>

              <div className="testimonial-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>

            <p className="testimonial-message">
              “{testimonial.message}”
            </p>

            <div className="testimonial-author">
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;