import React from "react";
import { TrendingUp, Target, Lightbulb, Shield, CheckCircle, Users, Award, BarChart3, Calculator, FileText, Briefcase, Building2, PieChart, DollarSign } from "lucide-react";

const About = () => {
  const services = [
    { name: "Auditing & Assurance", icon: Shield, color: "from-blue-500 to-blue-600" },
    { name: "Direct Taxation", icon: Calculator, color: "from-purple-500 to-purple-600" },
    { name: "GST & Indirect Taxation", icon: FileText, color: "from-green-500 to-green-600" },
    { name: "Accounting & Payroll", icon: DollarSign, color: "from-orange-500 to-orange-600" },
    { name: "Corporate Advisory Services", icon: Briefcase, color: "from-indigo-500 to-indigo-600" },
    { name: "Financial Planning & Consulting", icon: PieChart, color: "from-pink-500 to-pink-600" },
  ];

  const team = [
    { name: "CA Jagpreet Singh", role: "Founder & Managing Partner", icon: Award },
    { name: "Chartered Accountants", role: "Tax & Audit Specialists", icon: Calculator },
    { name: "Company Secretaries", role: "Compliance Experts", icon: FileText },
    { name: "Finance Professionals", role: "Advisory Team", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen px-4 py-20 pt-28 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Banner */}
      <div className="relative overflow-hidden text-white bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-64 h-64 bg-white rounded-full top-10 left-10 blur-3xl"></div>
          <div className="absolute bg-blue-300 rounded-full bottom-10 right-10 w-96 h-96 blur-3xl"></div>
        </div>
        
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-32">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-white border-4 border-white rounded-full bg-opacity-10 backdrop-blur-lg border-opacity-20">
              <Building2 className="w-12 h-12 text-white" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
              JSSA & Co.
            </h1>
            <p className="max-w-3xl mx-auto text-xl font-light text-blue-100 sm:text-2xl">
              Chartered Accountancy Solutions by CA Jagpreet Singh
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center px-6 py-3 space-x-2 bg-white border border-white rounded-full bg-opacity-10 backdrop-blur-lg border-opacity-20">
                <CheckCircle className="w-5 h-5" />
                <span>Trusted Since 2018</span>
              </div>
              <div className="flex items-center px-6 py-3 space-x-2 bg-white border border-white rounded-full bg-opacity-10 backdrop-blur-lg border-opacity-20">
                <Award className="w-5 h-5" />
                <span>Professional Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <p className="text-xl leading-relaxed text-gray-700">
            Founded in 2018 by <span className="font-semibold text-blue-900">CA Jagpreet Singh</span>, JSSA and Co. delivers comprehensive Chartered Accountancy services including audit, taxation, corporate advisory, and accounting solutions with professionalism and precision.
          </p>
        </div>

        {/* History & Evolution */}
        <div className="grid gap-10 mb-20 md:grid-cols-2">
          <div className="p-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-2xl rounded-3xl hover:scale-105">
            <div className="flex items-center mb-6 space-x-4">
              <div className="p-4 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-blue-900">Our History</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-600">
              Since its establishment by CA Jagpreet Singh in 2018, JSSA and Co. has grown into a trusted name for audit, tax, corporate advisory, and other CA services. We focus on delivering cost-effective and professional solutions tailored to individual and business needs.
            </p>
            <div className="flex items-center mt-6 space-x-2 text-blue-600">
              <BarChart3 className="w-5 h-5" />
              <span className="font-semibold">Growing Since 2018</span>
            </div>
          </div>

          <div className="p-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-2xl rounded-3xl hover:scale-105">
            <div className="flex items-center mb-6 space-x-4">
              <div className="p-4 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-blue-900">Our Evolution</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-600">
              From assisting startups to supporting established businesses, we have expanded our expertise across auditing, GST compliance, payroll management, taxation, and corporate advisory. Our evolution mirrors the dynamic financial landscape and our commitment to excellence.
            </p>
            <div className="flex items-center mt-6 space-x-2 text-purple-600">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Continuous Innovation</span>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid gap-10 mb-20 md:grid-cols-2">
          <div className="relative p-10 overflow-hidden text-white shadow-2xl bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl">
            <div className="absolute top-0 right-0 w-64 h-64 -mt-32 -mr-32 bg-white rounded-full opacity-5"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4 text-3xl font-bold">Our Vision</h3>
              <p className="text-lg leading-relaxed text-blue-50">
                To be a premier CA firm empowering businesses and individuals with transparent, innovative, and impactful financial solutions.
              </p>
            </div>
          </div>

          <div className="relative p-10 overflow-hidden text-white shadow-2xl bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl">
            <div className="absolute top-0 right-0 w-64 h-64 -mt-32 -mr-32 bg-white rounded-full opacity-5"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4 text-3xl font-bold">Our Mission</h3>
              <p className="text-lg leading-relaxed text-indigo-50">
                To deliver exceptional Chartered Accountancy services that ensure compliance, foster growth, and create long-term value for our clients.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-blue-900 sm:text-5xl">Our Services</h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-xl rounded-2xl hover:shadow-2xl hover:scale-105 group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{service.name}</h3>
                  <div className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-blue-900 sm:text-5xl">Our Team</h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Our experienced team includes Chartered Accountants, Company Secretaries, and finance professionals, offering a holistic approach to business and financial solutions.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <div
                  key={index}
                  className="p-6 text-center transition-all duration-300 transform bg-white border border-gray-100 shadow-xl rounded-2xl hover:shadow-2xl hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="relative p-12 overflow-hidden text-white shadow-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl sm:p-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bg-white rounded-full top-10 left-10 w-96 h-96 blur-3xl"></div>
            <div className="absolute bg-blue-300 rounded-full bottom-10 right-10 w-96 h-96 blur-3xl"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-white rounded-full bg-opacity-20 backdrop-blur-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">Our Commitment</h2>
            <p className="mb-10 text-xl leading-relaxed text-blue-50">
              At JSSA and Co., we focus on building long-term client relationships, delivering strategic insights, ensuring compliance, and creating measurable value. Excellence, transparency, and innovation guide every service we provide.
            </p>
            
            <div className="grid gap-6 mt-12 sm:grid-cols-3">
              <div className="p-6 bg-white border border-white bg-opacity-10 backdrop-blur-lg rounded-2xl border-opacity-20">
                <CheckCircle className="w-8 h-8 mx-auto mb-3 text-green-300" />
                <h4 className="mb-2 text-lg font-bold">Excellence</h4>
                <p className="text-sm text-blue-100">Committed to the highest standards</p>
              </div>
              <div className="p-6 bg-white border border-white bg-opacity-10 backdrop-blur-lg rounded-2xl border-opacity-20">
                <Shield className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                <h4 className="mb-2 text-lg font-bold">Transparency</h4>
                <p className="text-sm text-blue-100">Clear and honest communication</p>
              </div>
              <div className="p-6 bg-white border border-white bg-opacity-10 backdrop-blur-lg rounded-2xl border-opacity-20">
                <Lightbulb className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                <h4 className="mb-2 text-lg font-bold">Innovation</h4>
                <p className="text-sm text-blue-100">Modern solutions for modern challenges</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid gap-8 mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-8 text-center transition-all duration-300 transform bg-white border border-gray-100 shadow-xl rounded-2xl hover:scale-105">
            <div className="mb-2 text-5xl font-bold text-blue-600">2018</div>
            <p className="font-semibold text-gray-600">Year Established</p>
          </div>
          <div className="p-8 text-center transition-all duration-300 transform bg-white border border-gray-100 shadow-xl rounded-2xl hover:scale-105">
            <div className="mb-2 text-5xl font-bold text-purple-600">500+</div>
            <p className="font-semibold text-gray-600">Happy Clients</p>
          </div>
          <div className="p-8 text-center transition-all duration-300 transform bg-white border border-gray-100 shadow-xl rounded-2xl hover:scale-105">
            <div className="mb-2 text-5xl font-bold text-green-600">100%</div>
            <p className="font-semibold text-gray-600">Client Satisfaction</p>
          </div>
          <div className="p-8 text-center transition-all duration-300 transform bg-white border border-gray-100 shadow-xl rounded-2xl hover:scale-105">
            <div className="mb-2 text-5xl font-bold text-orange-600">24/7</div>
            <p className="font-semibold text-gray-600">Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;