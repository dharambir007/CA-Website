// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FileText, Calculator, FileCheck, BookOpen, Building2, TrendingUp, Rocket, Shield, Globe, BarChart3, X } from 'lucide-react';

// const servicesData = [
//   {
//     id: 1,
//     icon: FileText,
//     title: "Auditing & Assurance",
//     description: "Comprehensive audit services ensuring accuracy, compliance, and transparency in financial reporting.",
//     fullDescription: "Our auditing and assurance services provide independent examination of your financial statements, internal controls, and compliance frameworks. We conduct statutory audits, tax audits, internal audits, stock audits, and due diligence assessments. Our team ensures your business meets all regulatory requirements while identifying opportunities for operational improvements and risk mitigation.",
//     services: ["Statutory Audit", "Tax Audit", "Internal Audit", "Due Diligence", "Risk Assessment"]
//   },
//   {
//     id: 2,
//     icon: Calculator,
//     title: "Direct Taxation",
//     description: "Expert tax planning, compliance, and representation services for individuals and businesses.",
//     fullDescription: "Navigate the complex landscape of direct taxation with our specialized services. We handle income tax return filing for individuals, firms, and companies, provide strategic tax planning to optimize your tax liability, and represent you before tax authorities. Our services include TDS/TCS compliance, capital gains computation, tax assessments, and appeals to ensure you remain compliant while maximizing tax efficiency.",
//     services: ["ITR Filing", "Tax Planning", "TDS/TCS", "Capital Gains", "Tax Representation"]
//   },
//   {
//     id: 3,
//     icon: FileCheck,
//     title: "GST & Indirect Taxation",
//     description: "Complete GST solutions from registration to filing, refunds, and litigation support.",
//     fullDescription: "Our GST and indirect taxation services cover the entire spectrum of goods and services tax compliance. We assist with GST registration, monthly/quarterly return filing, GST audits, reconciliation, refund claims, and input tax credit optimization. Our team provides expert representation before GST authorities and handles assessments, appeals, and litigation to protect your business interests.",
//     services: ["GST Registration", "Return Filing", "GST Audit", "ITC Review", "Refund Claims"]
//   },
//   {
//     id: 4,
//     icon: BookOpen,
//     title: "Accounting & Bookkeeping",
//     description: "Professional accounting services to maintain accurate financial records and reporting.",
//     fullDescription: "Maintain pristine financial records with our comprehensive accounting and bookkeeping services. We handle day-to-day bookkeeping, preparation of financial statements, payroll management, budgeting, and cash flow analysis. Our virtual CFO services provide strategic financial guidance, helping you make informed business decisions. We use modern accounting software to ensure real-time visibility into your financial health.",
//     services: ["Books Maintenance", "Financial Statements", "Payroll", "Virtual CFO", "Cash Flow Analysis"]
//   },
//   {
//     id: 5,
//     icon: Building2,
//     title: "Company Incorporation & ROC Compliance",
//     description: "End-to-end company registration and ongoing MCA compliance services.",
//     fullDescription: "Start and maintain your business with confidence through our incorporation and compliance services. We handle company registration for Private Limited, Public Limited, and LLP entities, manage annual ROC filings, prepare board resolutions and minutes, conduct secretarial audits, and ensure complete MCA compliance. Our corporate governance advisory helps you maintain best practices and avoid penalties.",
//     services: ["Company Registration", "ROC Filing", "Board Minutes", "Secretarial Audit", "MCA Compliance"]
//   },
//   {
//     id: 6,
//     icon: TrendingUp,
//     title: "Business Advisory & Consultancy",
//     description: "Strategic consulting for growth, valuation, M&A, and financial decision-making.",
//     fullDescription: "Unlock your business potential with our strategic advisory services. We provide financial feasibility studies, business valuation, due diligence for mergers and acquisitions, project finance assistance, and loan syndication support. Our risk and internal control advisory helps you build robust systems while our management consultancy focuses on cost control, performance analysis, and process improvement.",
//     services: ["Business Valuation", "Due Diligence", "M&A Support", "Risk Advisory", "MIS Design"]
//   },
//   {
//     id: 7,
//     icon: Rocket,
//     title: "Startup Advisory & Compliance",
//     description: "Specialized services for startups including registration, funding, and compliance.",
//     fullDescription: "Empower your startup journey with our specialized advisory services. We assist with startup registration (MSME, DPIIT), set up robust accounting systems, provide ESOPs and cap table advisory, prepare investor pitch deck financials, and ensure all statutory and regulatory compliances. Our team understands the unique challenges of startups and provides scalable solutions that grow with your business.",
//     services: ["Startup Registration", "ESOP Advisory", "Cap Table", "Investor Financials", "Compliance"]
//   },
//   {
//     id: 8,
//     icon: Shield,
//     title: "Financial Planning & Investment",
//     description: "Personalized wealth management and tax-efficient investment strategies.",
//     fullDescription: "Secure your financial future with our comprehensive planning and investment advisory services. We create customized retirement and wealth plans, design tax-efficient investment strategies, manage personal finances, and provide portfolio review and restructuring. Our goal is to help you build and preserve wealth while minimizing tax liabilities and aligning investments with your long-term financial objectives.",
//     services: ["Wealth Planning", "Retirement Planning", "Tax-efficient Investing", "Portfolio Review"]
//   },
//   {
//     id: 9,
//     icon: Globe,
//     title: "International Taxation & FEMA",
//     description: "Cross-border taxation, NRI services, and foreign exchange compliance.",
//     fullDescription: "Navigate international taxation complexities with our specialized expertise. We provide NRI taxation advisory, DTAA consulting to avoid double taxation, FEMA and RBI compliance for foreign investments and remittances, and transfer pricing documentation. Our team stays updated with international tax laws and regulations to help you structure cross-border transactions efficiently while maintaining full compliance.",
//     services: ["NRI Taxation", "DTAA Consulting", "FEMA Compliance", "Transfer Pricing"]
//   },
//   {
//     id: 10,
//     icon: BarChart3,
//     title: "Management Consultancy",
//     description: "Performance optimization, cost control, and strategic financial decision support.",
//     fullDescription: "Enhance operational efficiency with our management consultancy services. We focus on cost control and performance analysis, internal process improvement, financial decision support, and design management information systems (MIS) tailored to your business needs. Our consultants work closely with your team to identify inefficiencies, implement best practices, and create systems that drive sustainable growth and profitability.",
//     services: ["Cost Control", "Process Improvement", "Decision Support", "Performance Analysis"]
//   }
// ];

// const ServiceCard = ({ service, onClick, onContact }) => {
//   const Icon = service.icon;
  
//   return (
//     <div
//       onClick={() => onClick(service)}
//       className="relative p-6 overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-sm cursor-pointer group rounded-2xl hover:shadow-xl hover:-translate-y-1"
//     >
//       <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-br from-blue-50 to-transparent group-hover:opacity-100" />
      
//       <div className="relative">
//         <div className="flex items-center justify-center mb-4 transition-transform duration-300 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl group-hover:scale-110">
//           <Icon className="text-white w-7 h-7" />
//         </div>
        
//         <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
//           {service.title}
//         </h3>
        
//         <p className="mb-4 text-sm leading-relaxed text-gray-600">
//           {service.description}
//         </p>
        
//         <div className="flex items-center text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:gap-2">
//           <span>Learn more</span>
//           <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
//         </div>
//         <div className="mt-4">
//           <button
//             onClick={(e) => { e.stopPropagation(); onContact && onContact(service); }}
//             className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white transition bg-blue-700 rounded-lg shadow hover:bg-blue-800"
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Modal = ({ service, onClose, onContact }) => {
//   if (!service) return null;
  
//   const Icon = service.icon;
  
//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
//       onClick={onClose}
//     >
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
//       <div
//         className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute z-10 flex items-center justify-center w-10 h-10 transition-colors duration-200 bg-gray-100 rounded-full top-6 right-6 hover:bg-gray-200"
//         >
//           <X className="w-5 h-5 text-gray-600" />
//         </button>
        
//         <div className="p-8">
//           <div className="flex items-center gap-4 mb-6">
//             <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl">
//               <Icon className="w-8 h-8 text-white" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
//           </div>
          
//           <div className="space-y-6">
//             <p className="text-lg leading-relaxed text-gray-700">
//               {service.fullDescription}
//             </p>
            
//             <div>
//               <h3 className="mb-3 text-lg font-semibold text-gray-900">Key Services Include:</h3>
//               <div className="flex flex-wrap gap-2">
//                 {service.services.map((item, index) => (
//                   <span
//                     key={index}
//                     className="px-4 py-2 text-sm font-medium text-blue-700 rounded-full bg-blue-50"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
            
//             <div className="mt-6">
//               <button
//                 onClick={() => onContact && onContact(service)}
//                 className="w-full px-8 py-4 mt-6 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
//               >
//                 Contact Us for This Service
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Services = () => {
//   const [selectedService, setSelectedService] = useState(null);
//   const navigate = useNavigate();

//   const handleContact = (service) => {
//     // close modal then navigate with router state so Contact page can prefill
//     setSelectedService(null);
//     navigate('/contact', { state: { service: service.title } });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out;
//         }
//         .animate-slideUp {
//           animation: slideUp 0.3s ease-out;
//         }
//       `}</style>
      
//       <main className="px-4 pt-20 pb-20 sm:px-6 lg:px-12">
//         <div className="mx-auto max-w-7xl">
//           <header className="mb-16 text-center">
//             <h1 className="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
//               Our Services
//             </h1>
//             <p className="max-w-3xl mx-auto text-lg text-gray-600">
//               Comprehensive financial, taxation, and advisory services to support growing businesses and individuals
//             </p>
//           </header>

//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {servicesData.map((service) => (
//               <ServiceCard
//                 key={service.id}
//                 service={service}
//                 onClick={setSelectedService}
//                 onContact={handleContact}
//               />
//             ))}
//           </div>
//         </div>
//       </main>

//       {selectedService && (
//         <Modal service={selectedService} onClose={() => setSelectedService(null)} onContact={handleContact} />
//       )}
//     </div>
//   );
// };

// export default Services;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Calculator, FileCheck, BookOpen, Building2, TrendingUp, Rocket, Shield, Globe, BarChart3, X } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    icon: FileText,
    title: "Auditing & Assurance",
    description: "Comprehensive audit services ensuring accuracy, compliance, and transparency in financial reporting.",
    fullDescription: "Our auditing and assurance services provide independent examination of your financial statements, internal controls, and compliance frameworks. We conduct statutory audits, tax audits, internal audits, stock audits, and due diligence assessments. Our team ensures your business meets all regulatory requirements while identifying opportunities for operational improvements and risk mitigation.",
    services: ["Statutory Audit", "Tax Audit", "Internal Audit", "Due Diligence", "Risk Assessment"],
    colors: {
      gradient: "from-indigo-500 to-indigo-600",
      hover: "group-hover:from-indigo-600 group-hover:to-indigo-700",
      text: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      shadow: "shadow-indigo-100"
    }
  },
  {
    id: 2,
    icon: Calculator,
    title: "Direct Taxation",
    description: "Expert tax planning, compliance, and representation services for individuals and businesses.",
    fullDescription: "Navigate the complex landscape of direct taxation with our specialized services. We handle income tax return filing for individuals, firms, and companies, provide strategic tax planning to optimize your tax liability, and represent you before tax authorities. Our services include TDS/TCS compliance, capital gains computation, tax assessments, and appeals to ensure you remain compliant while maximizing tax efficiency.",
    services: ["ITR Filing", "Tax Planning", "TDS/TCS", "Capital Gains", "Tax Representation"],
    colors: {
      gradient: "from-emerald-500 to-emerald-600",
      hover: "group-hover:from-emerald-600 group-hover:to-emerald-700",
      text: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      shadow: "shadow-emerald-100"
    }
  },
  {
    id: 3,
    icon: FileCheck,
    title: "GST & Indirect Taxation",
    description: "Complete GST solutions from registration to filing, refunds, and litigation support.",
    fullDescription: "Our GST and indirect taxation services cover the entire spectrum of goods and services tax compliance. We assist with GST registration, monthly/quarterly return filing, GST audits, reconciliation, refund claims, and input tax credit optimization. Our team provides expert representation before GST authorities and handles assessments, appeals, and litigation to protect your business interests.",
    services: ["GST Registration", "Return Filing", "GST Audit", "ITC Review", "Refund Claims"],
    colors: {
      gradient: "from-amber-500 to-amber-600",
      hover: "group-hover:from-amber-600 group-hover:to-amber-700",
      text: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
      shadow: "shadow-amber-100"
    }
  },
  {
    id: 4,
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    description: "Professional accounting services to maintain accurate financial records and reporting.",
    fullDescription: "Maintain pristine financial records with our comprehensive accounting and bookkeeping services. We handle day-to-day bookkeeping, preparation of financial statements, payroll management, budgeting, and cash flow analysis. Our virtual CFO services provide strategic financial guidance, helping you make informed business decisions. We use modern accounting software to ensure real-time visibility into your financial health.",
    services: ["Books Maintenance", "Financial Statements", "Payroll", "Virtual CFO", "Cash Flow Analysis"],
    colors: {
      gradient: "from-blue-500 to-blue-600",
      hover: "group-hover:from-blue-600 group-hover:to-blue-700",
      text: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      shadow: "shadow-blue-100"
    }
  },
  {
    id: 5,
    icon: Building2,
    title: "Company Incorporation & ROC Compliance",
    description: "End-to-end company registration and ongoing MCA compliance services.",
    fullDescription: "Start and maintain your business with confidence through our incorporation and compliance services. We handle company registration for Private Limited, Public Limited, and LLP entities, manage annual ROC filings, prepare board resolutions and minutes, conduct secretarial audits, and ensure complete MCA compliance. Our corporate governance advisory helps you maintain best practices and avoid penalties.",
    services: ["Company Registration", "ROC Filing", "Board Minutes", "Secretarial Audit", "MCA Compliance"],
    colors: {
      gradient: "from-purple-500 to-purple-600",
      hover: "group-hover:from-purple-600 group-hover:to-purple-700",
      text: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
      shadow: "shadow-purple-100"
    }
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "Business Advisory & Consultancy",
    description: "Strategic consulting for growth, valuation, M&A, and financial decision-making.",
    fullDescription: "Unlock your business potential with our strategic advisory services. We provide financial feasibility studies, business valuation, due diligence for mergers and acquisitions, project finance assistance, and loan syndication support. Our risk and internal control advisory helps you build robust systems while our management consultancy focuses on cost control, performance analysis, and process improvement.",
    services: ["Business Valuation", "Due Diligence", "M&A Support", "Risk Advisory", "MIS Design"],
    colors: {
      gradient: "from-rose-500 to-rose-600",
      hover: "group-hover:from-rose-600 group-hover:to-rose-700",
      text: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
      shadow: "shadow-rose-100"
    }
  },
  {
    id: 7,
    icon: Rocket,
    title: "Startup Advisory & Compliance",
    description: "Specialized services for startups including registration, funding, and compliance.",
    fullDescription: "Empower your startup journey with our specialized advisory services. We assist with startup registration (MSME, DPIIT), set up robust accounting systems, provide ESOPs and cap table advisory, prepare investor pitch deck financials, and ensure all statutory and regulatory compliances. Our team understands the unique challenges of startups and provides scalable solutions that grow with your business.",
    services: ["Startup Registration", "ESOP Advisory", "Cap Table", "Investor Financials", "Compliance"],
    colors: {
      gradient: "from-orange-500 to-orange-600",
      hover: "group-hover:from-orange-600 group-hover:to-orange-700",
      text: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-100",
      shadow: "shadow-orange-100"
    }
  },
  {
    id: 8,
    icon: Shield,
    title: "Financial Planning & Investment",
    description: "Personalized wealth management and tax-efficient investment strategies.",
    fullDescription: "Secure your financial future with our comprehensive planning and investment advisory services. We create customized retirement and wealth plans, design tax-efficient investment strategies, manage personal finances, and provide portfolio review and restructuring. Our goal is to help you build and preserve wealth while minimizing tax liabilities and aligning investments with your long-term financial objectives.",
    services: ["Wealth Planning", "Retirement Planning", "Tax-efficient Investing", "Portfolio Review"],
    colors: {
      gradient: "from-teal-500 to-teal-600",
      hover: "group-hover:from-teal-600 group-hover:to-teal-700",
      text: "text-teal-600",
      bg: "bg-teal-50",
      border: "border-teal-100",
      shadow: "shadow-teal-100"
    }
  },
  {
    id: 9,
    icon: Globe,
    title: "International Taxation & FEMA",
    description: "Cross-border taxation, NRI services, and foreign exchange compliance.",
    fullDescription: "Navigate international taxation complexities with our specialized expertise. We provide NRI taxation advisory, DTAA consulting to avoid double taxation, FEMA and RBI compliance for foreign investments and remittances, and transfer pricing documentation. Our team stays updated with international tax laws and regulations to help you structure cross-border transactions efficiently while maintaining full compliance.",
    services: ["NRI Taxation", "DTAA Consulting", "FEMA Compliance", "Transfer Pricing"],
    colors: {
      gradient: "from-cyan-500 to-cyan-600",
      hover: "group-hover:from-cyan-600 group-hover:to-cyan-700",
      text: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-100",
      shadow: "shadow-cyan-100"
    }
  },
  {
    id: 10,
    icon: BarChart3,
    title: "Management Consultancy",
    description: "Performance optimization, cost control, and strategic financial decision support.",
    fullDescription: "Enhance operational efficiency with our management consultancy services. We focus on cost control and performance analysis, internal process improvement, financial decision support, and design management information systems (MIS) tailored to your business needs. Our consultants work closely with your team to identify inefficiencies, implement best practices, and create systems that drive sustainable growth and profitability.",
    services: ["Cost Control", "Process Improvement", "Decision Support", "Performance Analysis"],
    colors: {
      gradient: "from-violet-500 to-violet-600",
      hover: "group-hover:from-violet-600 group-hover:to-violet-700",
      text: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-100",
      shadow: "shadow-violet-100"
    }
  }
];

const ServiceCard = ({ service, onClick, onContact }) => {
  const Icon = service.icon;
  
  return (
    <div
      className={`relative p-6 sm:p-7 lg:p-8 overflow-hidden transition-all duration-500 bg-white border-2 ${service.colors.border} shadow-lg ${service.colors.shadow} cursor-pointer group rounded-3xl hover:shadow-2xl hover:-translate-y-2 hover:border-opacity-50`}
    >
      <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-to-br ${service.colors.gradient} blur-3xl`} />
      
      <div className="relative">
        <div className={`flex items-center justify-center mb-5 transition-all duration-500 w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br ${service.colors.gradient} ${service.colors.hover} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6`}>
          <Icon className="w-8 h-8 text-white sm:w-9 sm:h-9" strokeWidth={2.5} />
        </div>
        
        <h3 className={`mb-3 text-xl sm:text-2xl font-bold text-gray-900 transition-colors duration-300 ${service.colors.text.replace('text-', 'group-hover:text-')}`}>
          {service.title}
        </h3>
        
        <p className="mb-5 text-sm sm:text-base leading-relaxed text-gray-600 min-h-[60px]">
          {service.description}
        </p>
        
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={(e) => { 
              e.stopPropagation(); 
              onClick(service);
            }}
            className={`inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold ${service.colors.text} transition-all duration-300 group-hover:gap-3`}
          >
            <span>Learn more</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          
          <button
            onClick={(e) => { 
              e.stopPropagation(); 
              onContact && onContact(service); 
            }}
            className={`w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r ${service.colors.gradient} rounded-xl shadow-md hover:shadow-xl hover:scale-105 active:scale-95`}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ service, onClose, onContact }) => {
  if (!service) return null;
  
  const Icon = service.icon;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 lg:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute z-10 flex items-center justify-center w-10 h-10 transition-all duration-200 rounded-full shadow-lg sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm top-4 right-4 sm:top-6 sm:right-6 hover:bg-gray-100 hover:shadow-xl hover:scale-110 active:scale-95"
        >
          <X className="w-5 h-5 text-gray-700 sm:w-6 sm:h-6" strokeWidth={2.5} />
        </button>
        
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col items-start gap-4 mb-6 sm:flex-row sm:items-center sm:gap-5 sm:mb-8">
            <div className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.colors.gradient} rounded-2xl shadow-xl`}>
              <Icon className="w-8 h-8 text-white sm:w-10 sm:h-10" strokeWidth={2.5} />
            </div>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              {service.title}
            </h2>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
              {service.fullDescription}
            </p>
            
            <div>
              <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-900 sm:text-xl">
                <div className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${service.colors.gradient}`} />
                Key Services Include
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {service.services.map((item, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-semibold ${service.colors.text} ${service.colors.bg} rounded-full border-2 ${service.colors.border} transition-all duration-300 hover:scale-105 hover:shadow-md`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <button
                onClick={() => onContact && onContact(service)}
                className={`w-full px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r ${service.colors.gradient} rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95`}
              >
                Contact Us for This Service →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const handleContact = (service) => {
    setSelectedService(null);
    navigate('/contact', { state: { service: service.title } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
      
      <main className="px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:px-12 lg:pt-24 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <header className="mb-12 text-center sm:mb-16 lg:mb-20">
            <div className="inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100">
              <span className="text-sm font-semibold text-blue-700 sm:text-base">Professional Services</span>
            </div>
            <h1 className="mb-4 text-4xl font-black leading-tight text-gray-900 sm:mb-6 sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="max-w-3xl px-4 mx-auto text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
              Comprehensive financial, taxation, and advisory services designed to support growing businesses and individuals with excellence
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={setSelectedService}
                onContact={handleContact}
              />
            ))}
          </div>
        </div>
      </main>

      {selectedService && (
        <Modal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
          onContact={handleContact} 
        />
      )}
    </div>
  );
};

export default Services;