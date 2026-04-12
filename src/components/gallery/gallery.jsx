import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ModernTestimonialsUI() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      text: "Dr. Patel transformed my skin completely. After years of struggling with acne, I finally found a solution that works. The personalized treatment plan made all the difference.",
    },
    {
      id: 2,
      name: "James Chen",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      text: "Professional, knowledgeable, and genuinely caring. The anti-aging treatment exceeded my expectations. I'm already seeing remarkable results and feeling more confident.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      text: "The laser treatment was painless and incredibly effective. My skin tone is now even and radiant. I can't recommend this clinic enough to anyone.",
    },
    {
      id: 4,
      name: "Marcus Johnson",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      text: "After a serious accident, I was insecure about my scars. The scar revision treatment has given me my confidence back. The team here is exceptional.",
    },
    {
      id: 5,
      name: "Victoria Thompson",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1507213526985-cfc49ae92da8?w=400&h=400&fit=crop",
      text: "Years of dealing with eczema, finally found relief. The holistic approach to treatment has changed my quality of life dramatically. Thank you!",
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleCards = () => {
    const cardsToShow = 3;
    const cards = [];
    for (let i = 0; i < cardsToShow; i++) {
      cards.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return cards;
  };

  const styles = `
    .modern-testimonials-section {
      background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
      padding: 80px 20px;
      position: relative;
      overflow: hidden;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
    }

    .testimonials-content {
      background: white;
      border-radius: 24px;
      padding: 70px 50px;
      max-width: 1400px;
      margin: 0 auto;
      width: 100%;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    }

    .section-label {
      color: #10b981;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 12px;
      display: block;
    }

    .section-heading {
      font-size: 52px;
      font-weight: 800;
      color: #1f2937;
      margin-bottom: 50px;
      letter-spacing: -1.5px;
    }

    .cards-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
      margin-bottom: 40px;
    }

    .testimonial-card {
      background: #f9fafb;
      border-radius: 16px;
      padding: 40px;
      position: relative;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      border: 1px solid #e5e7eb;
      animation: cardFadeIn 0.8s ease-out forwards;
    }

    .testimonial-card:nth-child(1) { animation-delay: 0s; }
    .testimonial-card:nth-child(2) { animation-delay: 0.15s; }
    .testimonial-card:nth-child(3) { animation-delay: 0.3s; }

    .testimonial-card:hover {
      transform: translateY(-12px);
      box-shadow: 0 20px 40px rgba(16, 185, 129, 0.15);
      border-color: #10b981;
    }

    .quote-mark {
      font-size: 80px;
      color: #10b981;
      font-weight: 700;
      line-height: 0.8;
      margin-bottom: 20px;
      display: block;
    }

    .testimonial-text {
      font-size: 15px;
      line-height: 1.8;
      color: #4b5563;
      margin-bottom: 30px;
      font-weight: 500;
    }

    .author-section {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .author-image {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;
      border: 3px solid #10b981;
    }

    .author-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .author-info {
      flex: 1;
    }

    .author-name {
      font-size: 15px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 3px;
      display: block;
    }

    .author-role {
      font-size: 13px;
      color: #10b981;
      font-weight: 600;
    }

    .navigation-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-arrows {
      display: flex;
      gap: 12px;
    }

    .nav-button {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 2px solid #e5e7eb;
      background: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1f2937;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      font-weight: 600;
    }

    .nav-button:hover {
      background: #10b981;
      color: white;
      border-color: #10b981;
      transform: scale(1.08);
      box-shadow: 0 8px 16px rgba(16, 185, 129, 0.2);
    }

    .nav-button:active {
      transform: scale(0.96);
    }

    .dots-container {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid #e5e7eb;
      background: white;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .dot:hover {
      border-color: #10b981;
    }

    .dot.active {
      background: #10b981;
      border-color: #10b981;
      transform: scale(1.3);
    }

    @keyframes cardFadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .section-heading {
      animation: slideInLeft 0.8s ease-out;
    }

    @media (max-width: 1200px) {
      .testimonials-content {
        padding: 60px 40px;
      }

      .cards-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }

      .section-heading {
        font-size: 44px;
      }
    }

    @media (max-width: 768px) {
      .modern-testimonials-section {
        padding: 60px 16px;
        min-height: auto;
      }

      .testimonials-content {
        padding: 40px 24px;
        border-radius: 16px;
      }

      .cards-container {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-bottom: 30px;
      }

      .section-heading {
        font-size: 36px;
        margin-bottom: 35px;
      }

      .testimonial-card {
        padding: 30px;
      }

      .quote-mark {
        font-size: 60px;
        margin-bottom: 15px;
      }

      .testimonial-text {
        font-size: 14px;
        margin-bottom: 24px;
      }

      .navigation-section {
        flex-direction: column;
        gap: 20px;
      }

      .nav-arrows {
        order: 2;
        width: 100%;
        justify-content: center;
      }

      .dots-container {
        order: 1;
        justify-content: center;
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      .modern-testimonials-section {
        padding: 40px 12px;
      }

      .testimonials-content {
        padding: 30px 18px;
      }

      .section-heading {
        font-size: 28px;
        margin-bottom: 30px;
      }

      .testimonial-card {
        padding: 24px;
      }

      .quote-mark {
        font-size: 50px;
      }

      .testimonial-text {
        font-size: 13px;
      }

      .nav-button {
        width: 42px;
        height: 42px;
      }
    }
  `;

  const visibleCards = getVisibleCards();
  const totalPages = Math.ceil(testimonials.length / 3);
  const currentPage = Math.floor(currentIndex / 3);

  return (
    <>
      <style>{styles}</style>
      <section className="modern-testimonials-section">
        <div className="testimonials-content">
          <span className="section-label">Testimonials</span>
          <h2 className="section-heading">Hear From Happy Clients</h2>

          <div className="cards-container">
            {visibleCards.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <span className="quote-mark">"</span>
                <p className="testimonial-text">{testimonial.text}</p>

                <div className="author-section">
                  <div className="author-image">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="navigation-section">
            <div className="dots-container">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentPage === index ? 'active' : ''}`}
                  onClick={() => {
                    setIsAutoPlay(false);
                    setCurrentIndex(index * 3);
                  }}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <div className="nav-arrows">
              <button 
                className="nav-button" 
                onClick={handlePrev}
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="nav-button" 
                onClick={handleNext}
                aria-label="Next testimonials"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}