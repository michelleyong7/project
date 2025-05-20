import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechGrowth Solutions",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Working with this data analyst transformed our marketing strategy completely. The customer segmentation analysis provided insights we had never seen before, helping us target our campaigns with precision and improve our ROI by over 40%.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Operations Manager",
    company: "HealthMetrics Inc",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "The operational dashboard developed for our hospital network has been revolutionary. We've identified efficiency opportunities we were completely blind to before, resulting in significant cost savings while improving patient care quality.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Patel",
    position: "CFO",
    company: "RetailInsight Partners",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "The financial analysis and forecasting models have been instrumental in our strategic planning. We now have confidence in our projections and a much clearer understanding of the factors driving our business performance.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Rodriguez",
    position: "Product Manager",
    company: "SaaS Innovations",
    image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "The data-driven insights provided helped us prioritize our product roadmap based on actual user behavior rather than assumptions. This has dramatically improved our feature adoption rates and overall user satisfaction.",
    rating: 4,
  },
  {
    id: 5,
    name: "Emma Wilson",
    position: "HR Director",
    company: "Global Talent Solutions",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "The workforce analytics project delivered exceptional value, helping us identify patterns in employee engagement and retention we couldn't see before. This has directly contributed to a 25% reduction in turnover among our key talent segments.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Client <span className="text-primary-500">Testimonials</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients and colleagues have to say about
            my data analysis work and the results we've achieved together.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-primary-300/20">
            <Quote size={120} strokeWidth={1} />
          </div>

          <motion.div 
            key={currentIndex}
            initial={{ 
              opacity: 0, 
              x: direction * 100
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-100">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-8 italic">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="mb-2 text-lg font-semibold text-dark-900">
              {testimonials[currentIndex].name}
            </div>
            <div className="text-gray-600">
              {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
            </div>
          </motion.div>

          <div className="flex justify-center mt-10 space-x-3">
            <button 
              onClick={prevTestimonial} 
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full mx-1 transition-colors ${
                  index === currentIndex ? 'bg-primary-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;