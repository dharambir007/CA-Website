import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef([]);
  const [pausedWorkMarquee, setPausedWorkMarquee] = useState(false);
  const marqueeTimeoutRef = useRef(null);

  const testimonials = [
    {
      text: "JSSAANDCO helped streamline our accounts and provided excellent guidance on tax planning. Their attention to detail and proactive approach saved us significant costs.",
      author: "Rohan Mehta",
      position: "Founder, Tech Solutions",
      rating: 5
    },
    {
      text: "Professional, trustworthy, and very responsive. Their advisory helped our business scale efficiently while maintaining full compliance.",
      author: "Sneha Kapoor",
      position: "CEO, FinGrow Pvt. Ltd.",
      rating: 5
    },
    {
      text: "From consultation to execution, their team ensured compliance and smooth financial operations. Truly reliable partners in our growth journey.",
      author: "Amit Sharma",
      position: "Entrepreneur, Creative Works",
      rating: 5
    }
  ];

  const services = [
    {
      title: "Taxation & Filing",
      description: "Comprehensive tax planning, filing, and end-to-end support for individuals and businesses.",
      icon: "📊",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Audit & Assurance",
      description: "Statutory, internal and compliance audits to strengthen controls and reporting.",
      icon: "🔍",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Company Registration",
      description: "Seamless incorporation, ROC filings and secretarial compliance for new businesses.",
      icon: "🏢",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Financial Advisory",
      description: "Strategic advice, cashflow planning and financial modelling for sustainable growth.",
      icon: "💼",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const workProcess = [
    {
      number: "01",
      title: "Understand",
      description: "We begin by understanding your financial goals and business needs through detailed consultation."
    },
    {
      number: "02",
      title: "Analyze",
      description: "Our experts analyze your records to design efficient tax and accounting strategies."
    },
    {
      number: "03",
      title: "Compliance",
      description: "We ensure complete compliance with the latest legal and regulatory standards."
    },
    {
      number: "04",
      title: "Transparency",
      description: "Every process is transparent, timely, and tailored for maximum benefit."
    },
    {
      number: "05",
      title: "Execution",
      description: "From consultation to execution, we deliver accuracy, trust, and sustained growth."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (marqueeTimeoutRef.current) clearTimeout(marqueeTimeoutRef.current);
    };
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="overflow-x-hidden font-sans text-gray-900 bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-indigo-400 rounded-full opacity-10 blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative px-4 pt-32 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-12">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeInLeft">
              <div className="inline-flex items-center px-4 py-2 space-x-2 text-sm font-semibold text-blue-700 bg-white rounded-full shadow-md">
                <Award className="w-4 h-4" />
                <span>Trusted Financial Partners Since 2018</span>
              </div>

              <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Chartered Accountancy &
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Financial Advisory
                </span>
              </h1>

              <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
                Practical, compliant and growth-focused accounting, taxation, and advisory services led by <span className="font-semibold text-gray-900">CA Jagpreet Singh</span> — helping businesses scale with confidence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="relative inline-flex items-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg shadow-lg group hover:bg-blue-700 hover:shadow-xl hover:scale-105">
                  Get a Consultation
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/services" className="inline-flex items-center px-8 py-4 text-base font-semibold text-blue-700 transition-all duration-300 bg-white border-2 border-blue-200 rounded-lg shadow hover:border-blue-400 hover:shadow-lg hover:scale-105">
                  View Services
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">100% Compliance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Trusted by 500+ Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm font-medium text-gray-700">7+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-fadeInRight lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative overflow-hidden shadow-2xl rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20"></div>
                <img
                  src="/ca_Image.jpg"
                  alt="Professional team"
                  className="object-cover w-full h-56 sm:h-72 md:h-96 lg:h-[480px] xl:h-[520px]"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute p-6 bg-white shadow-2xl -bottom-8 -left-8 rounded-2xl animate-float">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET OUR FOUNDER */}
      <section
        ref={(el) => (observerRefs.current[0] = el)}
        data-section="founder"
        className={`py-24 bg-white transition-all duration-1000 ${
          isVisible.founder ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-12">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Founder Image */}
            <div className="relative mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 overflow-hidden border-8 border-white shadow-2xl rounded-full sm:w-80 sm:h-80">
                <img
                  src="/owner%20image.jpg"
                  alt="CA Jagpreet Singh"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute w-24 h-24 bg-blue-200 rounded-full -top-8 -right-8 opacity-50 blur-xl"></div>
              <div className="absolute w-32 h-32 bg-indigo-200 rounded-full -bottom-8 -left-8 opacity-50 blur-xl"></div>
            </div>

            {/* Founder Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
                Leadership
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Meet Our Founder
              </h2>

              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                CA Jagpreet Singh
              </h3>

              <blockquote className="relative pl-6 italic text-gray-700 border-l-4 border-blue-500">
                <p className="text-lg">
                  "Our mission is to simplify complex financial processes with integrity, precision, and a commitment to your success."
                </p>
              </blockquote>

              <p className="text-lg leading-relaxed text-gray-600">
                With years of experience in auditing, taxation, and business consultancy,
                <span className="font-semibold text-gray-900"> CA Jagpreet Singh </span>
                founded <span className="font-semibold text-gray-900">JSSAANDCO</span> in 2018
                to empower individuals and businesses with reliable, transparent, and growth-oriented
                financial solutions.
              </p>

              <Link to="/about" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
                Know More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section
        ref={(el) => (observerRefs.current[1] = el)}
        data-section="services"
        className={`py-24 bg-gradient-to-br from-slate-50 to-blue-50 transition-all duration-1000 ${
          isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-12">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-700 bg-white rounded-full shadow-md">
              Our Services
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              How We Help Businesses
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 text-3xl bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg`}>
                    {service.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mb-6 text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section
        ref={(el) => (observerRefs.current[2] = el)}
        data-section="process"
        className={`py-24 bg-white transition-all duration-1000 ${
          isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-12">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
              Our Process
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              How We Work
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
              A transparent, efficient process designed for clarity and growth
            </p>
          </div>

          <div
            className="work-marquee"
            onMouseEnter={() => {
              setPausedWorkMarquee(true);
              if (marqueeTimeoutRef.current) clearTimeout(marqueeTimeoutRef.current);
            }}
            onMouseLeave={() => {
              marqueeTimeoutRef.current = setTimeout(() => setPausedWorkMarquee(false), 2000);
            }}
          >
            <div className={`work-marquee__track ${pausedWorkMarquee ? 'paused' : ''}`}>
              {workProcess.concat(workProcess).map((step, index) => (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setPausedWorkMarquee(true);
                    if (marqueeTimeoutRef.current) clearTimeout(marqueeTimeoutRef.current);
                    marqueeTimeoutRef.current = setTimeout(() => setPausedWorkMarquee(false), 5000);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setPausedWorkMarquee(true);
                      if (marqueeTimeoutRef.current) clearTimeout(marqueeTimeoutRef.current);
                      marqueeTimeoutRef.current = setTimeout(() => setPausedWorkMarquee(false), 5000);
                    }
                  }}
                  className="work-marquee__item relative p-8 mr-4 transition-all duration-500 bg-white border-2 border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2 w-64 flex-shrink-0"
                >
                  <div className="absolute w-24 h-24 bg-blue-400 rounded-full -top-4 -right-4 opacity-0 blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>

                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        ref={(el) => (observerRefs.current[3] = el)}
        data-section="testimonials"
        className={`py-24 bg-gradient-to-br from-blue-50 to-indigo-50 transition-all duration-1000 ${
          isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-12">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-700 bg-white rounded-full shadow-md">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
              Real feedback from businesses we've helped grow and succeed
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <div className="relative p-12 overflow-hidden bg-white shadow-2xl rounded-3xl">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-400 rounded-full opacity-10 blur-3xl"></div>

              <div className="relative">
                {/* Stars */}
                <div className="flex justify-center mb-6 space-x-1">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-8 text-xl leading-relaxed text-center text-gray-700 sm:text-2xl">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">
                    {testimonials[activeTestimonial].author}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[activeTestimonial].position}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="flex items-center justify-center w-12 h-12 text-blue-600 transition-all duration-300 bg-white rounded-full shadow-lg hover:bg-blue-600 hover:text-white hover:shadow-xl hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? 'bg-blue-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex items-center justify-center w-12 h-12 text-blue-600 transition-all duration-300 bg-white rounded-full shadow-lg hover:bg-blue-600 hover:text-white hover:shadow-xl hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl bottom-0 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative px-4 mx-auto text-center max-w-4xl sm:px-6 lg:px-12">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="mb-10 text-xl text-blue-100">
            Let's discuss how we can help your business achieve sustainable growth and complete compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-700 transition-all duration-300 bg-white rounded-lg shadow-xl hover:shadow-2xl hover:scale-105">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-white rounded-lg hover:bg-white hover:text-blue-700 hover:shadow-xl hover:scale-105">
              Call Us Now
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-gray-400 bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-12">
          <div className="pb-8 mb-8 text-center border-b border-gray-800">
            <h3 className="mb-3 text-3xl font-bold text-white">JSSAANDCO</h3>
            <p className="text-lg text-gray-400">Chartered Accountants | Trusted Since 2018</p>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} JSSAANDCO. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Animations and Styles */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Marquee styles for How We Work section */
        .work-marquee {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .work-marquee__track {
          display: flex;
          animation: marquee 20s linear infinite;
        }

        .work-marquee__track.paused {
          animation-play-state: paused;
        }

        .work-marquee__item {
          flex: 0 0 auto;
          width: 16rem; /* 64 * 4 (rem to px) or 256px */
          margin-right: 1rem;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
