export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonialData: Testimonial[] = [
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

export default testimonialData;