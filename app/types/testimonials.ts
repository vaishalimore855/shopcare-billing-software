// Based on testimonials.js
export interface Testimonial {
  customer_name: string;
  business_name?: string; // Optional
  review: string;
  rating: number;
  video_url?: string; // Optional
  image_url?: string; // Optional
}
