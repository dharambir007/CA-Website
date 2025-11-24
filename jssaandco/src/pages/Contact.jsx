import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const location = useLocation();
  // allow prefill from router state or query param
  const urlParams = new URLSearchParams(location.search);
  const serviceFromQuery = urlParams.get('service');
  const serviceFromState = location.state && location.state.service;
  const prefillMessage = serviceFromState || serviceFromQuery || '';

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: prefillMessage ? `Inquiry about: ${prefillMessage}\n\n` : '' });
  const [status, setStatus] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const CA_PHONE = '+919888633556';
  // Owner email to receive messages (no backend required)
  const CA_EMAIL = 'dharambir00027@gmail.com';
  const OFFICE_ADDRESS = 'JSSA And Co., BECO Complex, G.T. Road, Batala, Punjab 143505';

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
  e.preventDefault();

  // simple validation
  if (!form.name || !form.email || !form.phone || !form.message) {
    setStatus('error');
    return;
  }

  const subject = `Message from ${form.name}`;
  const body = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}
`;

  // Replace this with your CA email
  const mailtoLink = `mailto:${CA_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // open user's mail app
  window.location.href = mailtoLink;

  // show confirmation UI
  setStatus('success');
  setShowSuccess(true);
  setForm({ name: '', email: '', phone: '', message: '' });

  setTimeout(() => {
    setShowSuccess(false);
    setStatus(null);
  }, 4000);
};

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 pt-28">
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="relative">
            <div className="relative max-w-md p-8 mx-4 overflow-hidden bg-white shadow-2xl rounded-3xl" style={{animation: 'scale-in 0.5s ease-out'}}>
              <div className="absolute top-0 left-0 right-0 flex h-2">
                <div className="flex-1 bg-orange-500" style={{animation: 'slide-right 0.6s ease-out'}}></div>
                <div className="flex-1 bg-white" style={{animation: 'slide-right 0.7s ease-out'}}></div>
                <div className="flex-1 bg-green-600" style={{animation: 'slide-right 0.8s ease-out'}}></div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-orange-500 via-white to-green-600" style={{animation: 'bounce-in 0.6s ease-out'}}>
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                    <CheckCircle className="w-10 h-10 text-green-600" style={{animation: 'check-mark 0.8s ease-out'}} />
                  </div>
                </div>
                
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Message Sent Successfully!</h3>
                <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                
                <div className="flex h-1 mt-6 overflow-hidden rounded-full">
                  <div className="flex-1 bg-orange-500"></div>
                  <div className="flex-1 bg-white border-gray-200 border-y"></div>
                  <div className="flex-1 bg-green-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="py-16 text-white shadow-xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
            <p className="max-w-2xl mx-auto text-xl text-blue-100">
              Expert financial guidance for your business success. Schedule your consultation today.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="p-6 mb-12 transition-all duration-300 transform shadow-xl bg-gradient-to-r from-green-600 to-green-700 rounded-2xl sm:p-8 hover:scale-105">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center text-white sm:text-left">
              <h2 className="mb-2 text-2xl font-bold">Need Immediate Assistance?</h2>
              <p className="text-green-50">Connect with our CA experts right away</p>
            </div>
            <a
              href={`tel:${CA_PHONE}`}
              className="inline-flex items-center px-8 py-4 font-semibold text-green-700 transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:bg-green-50 hover:scale-105"
            >
              <Phone className="w-6 h-6 mr-3" style={{animation: 'pulse 2s infinite'}} />
              <span className="text-lg">Call Now</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="p-8 bg-white border border-gray-100 shadow-2xl rounded-3xl sm:p-10">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">Send Us a Message</h2>
            <p className="mb-8 text-gray-600">Fill out the form and we'll respond within 24 hours</p>
            
            <div className="space-y-6">
              <div className="group">
                <label className="block mb-2 text-sm font-semibold text-gray-700">Full Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 transition-all duration-300 border-2 border-gray-200 outline-none rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="group">
                <label className="block mb-2 text-sm font-semibold text-gray-700">Email Address *</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 transition-all duration-300 border-2 border-gray-200 outline-none rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="group">
                <label className="block mb-2 text-sm font-semibold text-gray-700">Phone Number *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 transition-all duration-300 border-2 border-gray-200 outline-none rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="group">
                <label className="block mb-2 text-sm font-semibold text-gray-700">Your Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 transition-all duration-300 border-2 border-gray-200 outline-none resize-none rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="flex items-center justify-center w-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:shadow-xl hover:from-blue-700 hover:to-blue-800 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 mr-3 border-white rounded-full border-3 border-t-transparent animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="font-medium text-center text-red-600">Please fill all fields correctly.</p>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div className="p-6 transition-all duration-300 transform bg-white border border-gray-100 shadow-xl rounded-2xl hover:shadow-2xl hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="p-3 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">Office Address</h3>
                    <p className="leading-relaxed text-gray-600">{OFFICE_ADDRESS}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 transition-all duration-300 transform bg-white border border-gray-100 shadow-xl rounded-2xl hover:shadow-2xl hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="p-3 shadow-lg bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">Phone Number</h3>
                    <a href={`tel:${CA_PHONE}`} className="text-gray-600 transition-colors hover:text-blue-600">
                      +91 98886 33556
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 transition-all duration-300 transform bg-white border border-gray-100 shadow-xl rounded-2xl hover:shadow-2xl hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="p-3 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">Email Address</h3>
                    <a href={`mailto:${CA_EMAIL}`} className="text-gray-600 break-all transition-colors hover:text-blue-600">
                      {CA_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 transition-all duration-300 transform bg-white border border-gray-100 shadow-xl rounded-2xl hover:shadow-2xl hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="p-3 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-100 shadow-2xl rounded-2xl">
              <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700">
                <h3 className="flex items-center text-lg font-bold text-white">
                  <MapPin className="w-5 h-5 mr-2" />
                  Find Us On Map
                </h3>
              </div>
              <iframe
                title="JSSA & Co. Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d75.1962931!3d31.817622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391bc311ead2fb9f%3A0x2fa06099641539c5!2sBECO%20Complex%2C%20GT%20Rd%2C%20Batala%2C%20Punjab%20143505!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full border-0 h-80"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="p-8 mt-16 shadow-2xl bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl sm:p-12">
          <div className="text-center text-white">
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">Why Choose JSSA & Co.?</h3>
            <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-3">
              <div>
                <div className="mb-2 text-4xl font-bold text-blue-300">15+</div>
                <p className="text-blue-100">Years of Excellence</p>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold text-blue-300">500+</div>
                <p className="text-blue-100">Happy Clients</p>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold text-blue-300">24/7</div>
                <p className="text-blue-100">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes slide-right {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes bounce-in {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes check-mark {
          0% {
            transform: scale(0) rotate(-45deg);
          }
          50% {
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;