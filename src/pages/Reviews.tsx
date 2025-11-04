import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Sandeep Chary",
    rating: 5,
    date: "2 weeks ago",
    review: "Excellent gym and supportive trainers best place to workout. The equipment is top-notch and well-maintained. I've been a member for 6 months and have seen amazing results!",
  },
  {
    name: "Vishal Biradar",
    rating: 5,
    date: "1 month ago",
    review: "Amazing facility, top equipment and great environment. The trainers are knowledgeable and always ready to help. Highly recommend for anyone serious about fitness.",
  },
  {
    name: "Roja Varkala",
    rating: 5,
    date: "3 weeks ago",
    review: "The first thing that I got attracted is the ambience and training equipment. Very clean and hygienic. The sauna facility is a great bonus after intense workouts.",
  },
  {
    name: "Karthik Reddy",
    rating: 5,
    date: "1 week ago",
    review: "Best gym in the area! Great atmosphere, professional trainers, and excellent equipment. The monthly membership is totally worth it.",
  },
  {
    name: "Priyanka Sharma",
    rating: 5,
    date: "2 months ago",
    review: "Love the energy at Actinn Fitness! The group classes are fantastic and the trainers really motivate you to push your limits. Great community feel.",
  },
  {
    name: "Rahul Kumar",
    rating: 5,
    date: "3 weeks ago",
    review: "Joined this gym 3 months ago and it's been a game changer. Lost 12 kg with the help of their amazing trainers and nutrition guidance. Highly recommended!",
  },
  {
    name: "Sneha Patel",
    rating: 5,
    date: "1 month ago",
    review: "Clean, spacious, and well-equipped gym. The trainers are very professional and create personalized workout plans. The sauna is a great addition!",
  },
  {
    name: "Arun Varma",
    rating: 5,
    date: "2 weeks ago",
    review: "Best decision to join Actinn Fitness. The equipment is modern, the place is always clean, and the staff is super friendly. Great value for money!",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + reviewsPerPage) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const visibleReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-pirata">
              <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Member Reviews
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.9</span>
              <span className="text-muted-foreground">out of 5</span>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our members have to say about their experience at Actinn Fitness
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto min-h-[400px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleReviews.map((review, index) => (
                  <Card key={currentIndex + index} className="border-border hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg">{review.name}</h3>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{review.review}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * reviewsPerPage)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    Math.floor(currentIndex / reviewsPerPage) === i
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="https://share.google/S3do7YNtNTOzPjOpA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
            >
              View all reviews on Google
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
