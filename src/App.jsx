import React from 'react';
import { Globe, Server, Shield, Smartphone, Code, Layout, Check, Mail, Phone, MapPin, Rocket, ArrowUpRight, Quote, ShoppingBag, Info, Calendar, Palette, Instagram, Camera, Layers } from 'lucide-react';

/* 
  PROPOSAL DATA 
  Based on user request
*/
const proposalData = {
  invoiceNo: "INV-001",
  date: "February 6, 2026",
  validDate: "February 20, 2026",
  clients: [
    "First Class Credit",
    "Katimas Properties",
    "Koperasi Kapital Rakyat",
    "JomKaki Motor"
  ],
  services: [
    {
      title: "First Class Credit",
      image: "/proposed/first class credit.png",
      desc: "Comprehensive corporate portal with integrated customer service features.",
      details: [
        "9 custom-designed pages",
        "Dual language support (BM & ENG)",
        "Loan calculator & inquiry forms",
        "Secure customer portal placeholder"
      ],
      price: 5500
    },
    {
      title: "Katimas Properties",
      image: "/proposed/katimas properties.png",
      desc: "Modern real estate showcase platform emphasizing visual portfolio.",
      details: [
        "6 high-impact visual pages",
        "Property listing gallery",
        "Interactive location maps",
        "Direct agent WhatsApp integration"
      ],
      price: 4200
    },
    {
      title: "Koperasi Kapital Rakyat",
      image: "/proposed/koperasi kapital rakyat.png",
      desc: "Trust-focused institutional website for cooperative members.",
      details: [
        "9 informational pages",
        "Member login area structure",
        "Annual report download center",
        "News & announcements system"
      ],
      price: 5500
    },
    {
      title: "JomKaki Motor",
      image: "/proposed/jomkaki.png",
      desc: "Dynamic automotive catalog with extensive inventory management.",
      details: [
        "User-friendly car search & filter",
        "Estimated 70+ inventory pages",
        "High-res gallery for vehicles",
        "Fast-loading inventory system"
      ],
      price: 7800
    }
  ],
  subtotal: 23000,
  discount: 4000,
  total: 19000
};

/* 
  PORTFOLIO DATA 
*/
const portfolioAssets = {
  "ACEIT": [
    "/WEBSITES SCREENSHOTS/ACEIT/screencapture-aceit-group-vercel-app-2026-02-04-15_48_51.png",
    "/WEBSITES SCREENSHOTS/ACEIT/screencapture-aceit-group-vercel-app-about-2026-02-04-15_50_01.png",
    "/WEBSITES SCREENSHOTS/ACEIT/screencapture-aceit-group-vercel-app-aceteam-connect-aceteamconnect-2026-02-04-15_49_35.png",
    "/WEBSITES SCREENSHOTS/ACEIT/screencapture-aceit-group-vercel-app-aceteam-networks-aceteamnetworks-2026-02-04-15_49_15.png",
    "/WEBSITES SCREENSHOTS/ACEIT/screencapture-aceit-group-vercel-app-blog-ai-infrastructure-revolution-july-2025-2026-02-04-15_52_25.png"
  ],
  "FTECH": [
    "/WEBSITES SCREENSHOTS/FTECH/Screenshot 2026-02-04 152406.png",
    "/WEBSITES SCREENSHOTS/FTECH/Screenshot 2026-02-04 152600.png",
    "/WEBSITES SCREENSHOTS/FTECH/Screenshot 2026-02-04 152611.png",
    "/WEBSITES SCREENSHOTS/FTECH/Screenshot 2026-02-04 152620.png",
    "/WEBSITES SCREENSHOTS/FTECH/Screenshot 2026-02-04 152628.png",
    "/WEBSITES SCREENSHOTS/FTECH/Screenshot 2026-02-04 152722.png"
  ],
  "GEARBOX CVT": [
    "/WEBSITES SCREENSHOTS/GEARBOX CVT/screencapture-gearboxcvt-2026-02-04-15_39_19.png",
    "/WEBSITES SCREENSHOTS/GEARBOX CVT/screencapture-gearboxcvt-byd-vs-tesla-perbandingan-ev-di-malaysia-2026-02-04-15_42_34.png",
    "/WEBSITES SCREENSHOTS/GEARBOX CVT/screencapture-gearboxcvt-honda-city-cvt-tersentak-malaysia-punca-cara-baiki-2026-02-04-15_43_23.png",
    "/WEBSITES SCREENSHOTS/GEARBOX CVT/screencapture-gearboxcvt-honda-civic-cvt-rosak-pakar-repair-shah-alam-harga-2026-02-04-15_42_57.png",
    "/WEBSITES SCREENSHOTS/GEARBOX CVT/screencapture-gearboxcvt-honda-cr-v-cvt-repair-dekat-sini-subang-klang-shah-alam-pakar-gearbox-2026-02-04-15_41_54.png"
  ],
  "HARGA REPAIR GEARBOX": [
    "/WEBSITES SCREENSHOTS/HARGA REPAIR GEARBOX/screencapture-hargarepairgearbox-2026-02-04-15_44_02.png",
    "/WEBSITES SCREENSHOTS/HARGA REPAIR GEARBOX/screencapture-hargarepairgearbox-blog-html-2026-02-04-15_46_03.png",
    "/WEBSITES SCREENSHOTS/HARGA REPAIR GEARBOX/screencapture-hargarepairgearbox-pages-brands-bmw-html-2026-02-04-15_45_24.png",
    "/WEBSITES SCREENSHOTS/HARGA REPAIR GEARBOX/screencapture-hargarepairgearbox-pages-brands-honda-html-2026-02-04-15_44_44.png"
  ],
  "LEANX SIGN UP": [
    "/WEBSITES SCREENSHOTS/LEANX SIGN UP/screencapture-leanx-sign-up-vercel-app-2026-02-04-15_55_05.png",
    "/WEBSITES SCREENSHOTS/LEANX SIGN UP/screencapture-leanx-sign-up-vercel-app-signup-html-2026-02-04-15_55_24.png"
  ],
  "NEXOVA.MY": [
    "/WEBSITES SCREENSHOTS/NEXOVA.MY/screencapture-nexova-my-2026-02-04-15_53_55.png"
  ],
  "ONEXTRANSMISSION": [
    "/WEBSITES SCREENSHOTS/ONEXTRANSMISSION/screencapture-onextransmission-lp-vercel-app-2026-02-04-15_48_02.png"
  ],
  "TROPICOR": [
    "/WEBSITES SCREENSHOTS/TROPICOR/screencapture-tropicorfoods-vercel-app-2026-02-04-15_36_18.png",
    "/WEBSITES SCREENSHOTS/TROPICOR/screencapture-tropicorfoods-vercel-app-about-html-2026-02-04-15_38_06.png",
    "/WEBSITES SCREENSHOTS/TROPICOR/screencapture-tropicorfoods-vercel-app-contact-html-2026-02-04-15_38_28.png",
    "/WEBSITES SCREENSHOTS/TROPICOR/screencapture-tropicorfoods-vercel-app-customisation-oem-html-2026-02-04-15_37_52.png"
  ]
};

const portfolioProjects = [
  {
     category: "Company Website",
     items: [
       { title: "Nexova.my", url: "https://www.nexova.my/", key: "NEXOVA.MY" }
     ]
  },
  {
    category: "Ongoing Website Projects & SEO",
    items: [
      { title: "F-Tech Lighting", url: "https://www.ftechlighting.com/", key: "FTECH" },
      { title: "Tropicor Foods", url: "https://tropicorfoods.vercel.app/", key: "TROPICOR" },
      { title: "Gearbox CVT", url: "https://gearboxcvt.com/", key: "GEARBOX CVT" },
      { title: "Harga Repair Gearbox", url: "https://www.hargarepairgearbox.com/", key: "HARGA REPAIR GEARBOX" },
      { title: "Onex Transmission", url: "https://onextransmission-lp.vercel.app/", key: "ONEXTRANSMISSION" },
      { title: "AceIT Group", url: "https://aceit-group.vercel.app/", key: "ACEIT" }
    ]
  },
  {
    category: "E-Commerce & Ads",
    items: [
       { title: "LeanX Sign Up", url: "https://leanx-sign-up.vercel.app/", key: "LEANX SIGN UP" }
    ]
  }
];

const creativeAssets = {
  "ENFRASYS": ["/visuals/ENFRASYS/AI CHANGE 2.jpg", "/visuals/ENFRASYS/C5.jpg", "/visuals/ENFRASYS/WHATS NEXT 1.jpg"],
  "LEANX": ["/visuals/LEANX/c1 dash.jpg", "/visuals/LEANX/C7.jpg", "/visuals/LEANX/C2.jpg"],
  "ONEX": ["/visuals/ONEX/VISUAL 1.jpg", "/visuals/ONEX/part 8 1.jpg", "/visuals/ONEX/INSPECTION.jpg"],
  "TROPICOR": ["/visuals/TROPICOR FOODS/C1 a.jpg", "/visuals/TROPICOR FOODS/C2.jpg", "/visuals/TROPICOR FOODS/C4.jpg"]
};

const companyInfo = {
  name: "Nexova Digital",
  slogan: "Web Development & Digital Marketing Solutions",
  email: "sales@nexovadigital.com",
  logo: "/logo.png",
  phone: "+60 11-3309 5095",
  address: "10-2, Jln USJ 9/5N, Subang Business Centre, 47600 Subang Jaya, Selangor"
};

/* 
  LAYOUT COMPONENTS 
*/
const Page = ({ children, className = "" }) => (
  <div className={`w-full min-h-screen snap-start bg-white p-6 md:p-12 lg:p-20 relative flex flex-col overflow-hidden ${className}`}>
    <div className="flex-1 flex flex-col relative z-10 max-w-7xl mx-auto w-full">
      {children}
    </div>
    
    {/* Page Footer / Watermark - Clean & Minimal */}
    <div className="mt-12 flex justify-between text-[10px] tracking-widest text-slate-300 font-medium uppercase border-t border-slate-50 pt-6">
      <span className="text-blue-200">Nexova Digital</span>
      <span>Confidential</span>
      <span>2026</span>
    </div>
  </div>
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-10 relative">
    <div className="absolute -left-6 top-1 w-1 h-12 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-r-lg"></div>
    <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800 text-gradient uppercase tracking-tight">{title}</h2>
    {subtitle && <p className="text-slate-500 mt-2 text-lg lg:text-xl font-light">{subtitle}</p>}
  </div>
);

const ProjectDisplay = ({ project, assets }) => (
    <div className="mb-14">
       <div className="flex justify-between items-center mb-6">
         <h4 className="font-bold text-xl lg:text-2xl text-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-200">
               <Globe size={16} />
            </div>
            {project.title}
         </h4>
         <div className="flex flex-col items-end">
             <a 
               href={project.url} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-white text-xs font-bold flex items-center gap-2 bg-slate-900 px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
             >
               Visit Live <ArrowUpRight size={12} />
             </a>
             <span className="hidden lg:block text-[9px] text-slate-400 mt-1 tracking-wider">{project.url}</span>
         </div>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {assets[project.key] && assets[project.key].slice(0, 2).map((imgSrc, i) => (
             <div key={i} className="rounded-2xl overflow-hidden shadow-2xl relative group bg-white ring-1 ring-slate-100 transition-all hover:shadow-3xl hover:ring-blue-100">
                {/* Modern Clean Browser Header */}
                <div className="h-8 bg-white/80 backdrop-blur-sm border-b border-slate-100 flex items-center px-4 gap-2 sticky top-0 z-10">
                   <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                   </div>
                   <div className="mx-auto w-1/2 h-4 bg-slate-50 rounded-md text-[8px] flex items-center justify-center text-slate-300 tracking-wider">
                      {project.url.replace('https://', '')}
                   </div>
                </div>
                
                {/* Image Container with darker overlay for depth */}
                <div className="h-64 lg:h-72 w-full relative bg-slate-50">
                   <img src={imgSrc} alt={`${project.title} preview ${i+1}`} className="w-full h-full object-cover object-top transition-transform duration-[2000ms] ease-in-out group-hover:object-bottom" />
                   
                   {/* Elegant Fade */}
                   <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest bg-white/50 px-3 py-1 rounded-full backdrop-blur-md">Scroll to view</span>
                   </div>
                </div>
             </div>
          ))} 
          {(!assets[project.key] || assets[project.key].length === 0) && (
             <div className="bg-slate-50 h-72 rounded-2xl flex items-center justify-center text-slate-400 text-sm font-medium">No Preview Available</div>
          )}
       </div>
    </div>
);

/* 
  MAIN APPLICATION 
*/
function App() {
  return (
    <div className="bg-slate-900 h-screen w-full overflow-y-scroll snap-y snap-mandatory font-sans text-slate-800 scroll-smooth">

      {/* --- PAGE 1: COVER --- */}
      <Page className="justify-center text-center !bg-slate-900 text-white print:!bg-slate-900 print:!text-white overflow-hidden relative">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600 blur-[120px]"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500 blur-[100px]"></div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center z-10 relative">
          <div className="mb-12 p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-400/30 transition-all"></div>
            <img src={companyInfo.logo} alt="Nexova Logo" className="w-48 h-auto drop-shadow-lg relative z-10 brightness-0 invert opacity-90" />
          </div>
          
          <h1 className="text-7xl font-black mb-8 tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-sm">
            DIGITAL<br/> PROPOSAL
          </h1>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-16 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
          
          <div className="bg-white/5 backdrop-blur-md px-10 py-6 rounded-2xl border border-white/10">
            <p className="text-blue-300 mb-2 uppercase tracking-[0.2em] text-xs font-bold">Planned For</p>
            <div className="text-3xl font-bold text-white tracking-wide">
              {proposalData.clients.map((client, idx) => (
                <div key={idx}>{client}</div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-left border-t border-white/10 pt-8 w-full flex justify-between items-end z-10 relative bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent">
          <div className="pl-4">
            <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-widest">Crafted By</p>
            <p className="font-bold text-xl text-white">{companyInfo.name}</p>
            <p className="text-slate-400 font-light">{companyInfo.email}</p>
          </div>
          <div className="text-right pr-4">
             <p className="text-slate-400 text-sm font-light">{proposalData.date}</p>
             <p className="text-blue-400 text-sm mt-1 font-mono tracking-wider">{proposalData.invoiceNo}</p>
          </div>
        </div>
      </Page>

      {/* --- PAGE 2: INTRODUCTION --- */}
      <Page>
        <SectionHeader title="The Vision" subtitle="Modernizing Your Digital Presence" />
        
        <div className="grid grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-600 font-light">
              <strong className="text-slate-900 font-semibold">{companyInfo.name}</strong> partners with ambitious brands to build digital products that matter. 
            </p>
            <p className="text-lg leading-relaxed text-slate-600 font-light">
              We believe your website should be your best employee: working 24/7 without complaint, explaining your value perfectly every time, and constantly bringing in new business.
            </p>
            
            <div className="pt-4 flex gap-4">
               <div className="glass-panel p-4 rounded-xl flex-1 text-center bg-blue-50/50">
                  <span className="block text-3xl font-bold text-blue-600 mb-1">Fast</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Performance</span>
               </div>
               <div className="glass-panel p-4 rounded-xl flex-1 text-center bg-cyan-50/50">
                  <span className="block text-3xl font-bold text-cyan-600 mb-1">Secure</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Architecture</span>
               </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl transform rotate-3 opacity-10"></div>
             <div className="glass-panel p-8 rounded-2xl border border-slate-100 flex flex-col justify-center items-center text-center h-full relative bg-white/50 backdrop-blur-sm">
                <Quote size={48} className="text-blue-100 mb-6" />
                <p className="text-xl text-slate-700 italic font-light">
                  "Good design is obvious. Great design is transparent."
                </p>
                <div className="w-12 h-1 bg-slate-200 mt-6 mb-2 rounded-full"></div>
                <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Nexova Philosophy</p>
             </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-8 text-slate-900 flex items-center gap-3">
          <div className="h-px bg-slate-200 flex-1"></div>
          <span>Core Capabilities</span>
          <div className="h-px bg-slate-200 flex-1"></div>
        </h3>
        
        <div className="grid grid-cols-2 gap-6">
           {[
             { icon: Layout, title: "UI/UX Design", desc: "User-centric interfaces that convert." },
             { icon: Code, title: "Development", desc: "Start-of-the-art React & Next.js." },
             { icon: Smartphone, title: "Responsive", desc: "Perfect on every screen size." },
             { icon: Server, title: "Infrastructure", desc: "Secure hosting & automated scaling." }
           ].map((item, i) => (
             <div key={i} className="flex gap-5 p-5 border border-slate-100/50 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
               <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl h-fit text-blue-600">
                 <item.icon size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-lg mb-1 text-slate-800">{item.title}</h4>
                 <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
               </div>
             </div>
           ))}
        </div>
      </Page>

       {/* --- PAGE 3: PORTFOLIO 1 --- */}
       <Page>
        <SectionHeader title="Selected Works" subtitle="Digital Experiences (Series 1)" />
        <div className="space-y-12">
           {/* Company Website */}
           <div className="glass-panel p-1 rounded-3xl bg-slate-50/50">
              <div className="px-4 py-3 border-b border-slate-200/50 mb-4 flex items-center justify-between">
                 <h3 className="font-bold text-slate-700 text-sm uppercase tracking-wider">{portfolioProjects[0].category}</h3>
                 <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                 </div>
              </div>
              <div className="px-4 pb-4">
                 {portfolioProjects[0].items.map((project, pIdx) => (
                   <ProjectDisplay key={pIdx} project={project} assets={portfolioAssets} />
                 ))}
              </div>
           </div>

           {/* First 2 Ongoing */}
           <div>
              <div className="flex items-center gap-4 mb-6">
                 <div className="h-px bg-slate-200 flex-1"></div>
                 <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest">{portfolioProjects[1].category}</h3>
                 <div className="h-px bg-slate-200 flex-1"></div>
              </div>
              {portfolioProjects[1].items.slice(0, 2).map((project, pIdx) => (
                <ProjectDisplay key={pIdx} project={project} assets={portfolioAssets} />
              ))}
           </div>
        </div>
      </Page>

      {/* --- PAGE 4: PORTFOLIO 2 --- */}
      <Page>
        <SectionHeader title="Selected Works" subtitle="Digital Experiences (Series 2)" />
        <div className="space-y-12">
           <div>
             {portfolioProjects[1].items.slice(2, 4).map((project, pIdx) => (
                <ProjectDisplay key={pIdx} project={project} assets={portfolioAssets} />
              ))}
           </div>
        </div>
      </Page>

      {/* --- PAGE 5: PORTFOLIO 3 --- */}
      <Page>
        <SectionHeader title="Selected Works" subtitle="Digital Experiences (Series 3)" />
        <div className="space-y-12">
           <div>
             {portfolioProjects[1].items.slice(4, 6).map((project, pIdx) => (
                <ProjectDisplay key={pIdx} project={project} assets={portfolioAssets} />
              ))}
           </div>

           {/* E-Commerce */}
           <div className="glass-panel p-6 rounded-3xl bg-blue-50/30 border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                 <ShoppingBag size={20} className="text-blue-500" />
                 {portfolioProjects[2].category}
              </h3>
              {portfolioProjects[2].items.map((project, pIdx) => (
                <ProjectDisplay key={pIdx} project={project} assets={portfolioAssets} />
              ))}
           </div>
        </div>
      </Page>

      {/* --- PAGE 6: ARCHITECTURE STRATEGY --- */}
      <Page>
        <SectionHeader title="Architecture Strategy" subtitle="Centralized Content Network" />
        
        <div className="mb-12">
           <p className="text-lg leading-relaxed text-slate-600 mb-8">
             For a multi-brand entity, managing separate websites can be chaotic. We propose a <strong className="text-slate-900">Unified Headless Architecture</strong> using Payload CMS.
           </p>

           <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden text-white shadow-2xl">
              {/* Background Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-[80px] opacity-20"></div>
              
              <div className="relative z-10 flex gap-8 items-center">
                 <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="p-2 bg-white/10 rounded-lg">
                          <Server size={24} className="text-cyan-400" />
                       </div>
                       <h3 className="text-2xl font-bold">One Central Brain</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-6">
                       A single, powerful dashboard (Payload CMS) manages the content for <strong>all 4 websites</strong>. You don't need to log in to four different places.
                    </p>
                    <ul className="space-y-3">
                       <li className="flex gap-3 text-sm text-slate-200">
                          <Check size={18} className="text-green-400" /> Manage Products, News, & Content in one place.
                       </li>
                       <li className="flex gap-3 text-sm text-slate-200">
                          <Check size={18} className="text-green-400" /> Changes reflect instantly across specific sites.
                       </li>
                       <li className="flex gap-3 text-sm text-slate-200">
                          <Check size={18} className="text-green-400" /> Secure, scalable, and API-driven.
                       </li>
                    </ul>
                 </div>
                 <div className="w-1/3">
                    <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-inner relative">
                        <img src="/proposed/payload1.jpeg" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Payload CMS Interface" />
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                           <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Admin Panel</span>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
           <div className="glass-panel p-6 rounded-2xl bg-white border-none shadow-md">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                 <Layout size={20} className="text-blue-500" /> Frontend Flexibility
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                 While the backend is unified, the <strong>Frontend Design</strong> for each website is 100% custom. We don't use rigid templates. Your corporate site will look professional, while the motor site looks sporty.
              </p>
           </div>
           <div className="glass-panel p-6 rounded-2xl bg-white border-none shadow-md">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                 <Code size={20} className="text-blue-500" /> Maintenance as a Service
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                 Nexova handles the complex code. You just handle the content. Our "Frontend as a Service" model ensures your sites are always modern, fast, and secure.
              </p>
           </div>
        </div>
      </Page>

      {/* --- PAGE 7: PROPOSED DESIGNS 1 & 2 --- */}
      <Page>
        <SectionHeader title="Proposed Designs" subtitle="Visual Concepts (1/2)" />
        
        {proposalData.services.slice(0, 2).map((service, index) => (
          <div key={index} className="mb-10 break-inside-avoid">
             <div className="glass-panel bg-white p-1 rounded-2xl shadow-xl overflow-hidden mb-6 relative group">
                {/* Browser Header */}
                <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                   <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                   </div>
                   <div className="mx-auto w-1/2 h-4 bg-white rounded text-[9px] text-center text-slate-300 flex items-center justify-center">
                      nexova-secure-preview.com
                   </div>
                </div>
                {/* Mockup Image - Full Cover */}
                <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                   <img 
                     src={service.image} 
                     className="w-full h-full object-cover object-top transition-transform duration-[3s] ease-in-out group-hover:scale-105" 
                     alt={`${service.title} Mockup`}
                   />
                </div>
             </div>

             <div className="flex justify-between items-start">
                <div>
                   <h3 className="text-2xl font-bold text-slate-800 mb-1">{service.title}</h3>
                   <p className="text-slate-500 text-sm mb-3">{service.desc}</p>
                </div>
                <div className="font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                   RM {service.price.toLocaleString()}
                </div>
             </div>
             
             <div className="flex flex-wrap gap-2">
              {service.details.map((detail, idx) => (
                <span key={idx} className="text-[10px] uppercase font-bold tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                  {detail}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Page>

       {/* --- PAGE 8: PROPOSED DESIGNS 3 & 4 --- */}
       <Page>
        <SectionHeader title="Proposed Designs" subtitle="Visual Concepts (2/2)" />
        
        {proposalData.services.slice(2, 4).map((service, index) => (
          <div key={index} className="mb-10 break-inside-avoid">
             <div className="glass-panel bg-white p-1 rounded-2xl shadow-xl overflow-hidden mb-6 relative group">
                <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                   <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                   </div>
                   <div className="mx-auto w-1/2 h-4 bg-white rounded text-[9px] text-center text-slate-300 flex items-center justify-center">
                      nexova-secure-preview.com
                   </div>
                </div>
                <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                   <img 
                     src={service.image} 
                     className="w-full h-full object-cover object-top transition-transform duration-[3s] ease-in-out group-hover:scale-105" 
                     alt={`${service.title} Mockup`}
                   />
                </div>
             </div>

             <div className="flex justify-between items-start">
                <div>
                   <h3 className="text-2xl font-bold text-slate-800 mb-1">{service.title}</h3>
                   <p className="text-slate-500 text-sm mb-3">{service.desc}</p>
                </div>
                <div className="font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                   RM {service.price.toLocaleString()}
                </div>
             </div>
             
             <div className="flex flex-wrap gap-2">
              {service.details.map((detail, idx) => (
                <span key={idx} className="text-[10px] uppercase font-bold tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                  {detail}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 flex items-center gap-5 text-white shadow-xl">
           <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-cyan-400">
              <Shield size={20} />
           </div>
           <div>
             <h4 className="font-bold text-white mb-1">Nexova Guarantee</h4>
             <p className="text-slate-300 text-sm">Includes complementary Initial server setup, SSL configuration, and 30-day post-launch support.</p>
           </div>
        </div>
      </Page>

      {/* --- PAGE: CREATIVE PORTFOLIO --- */}
      <Page>
        <SectionHeader title="Creative Studio" subtitle="Social Media & Visual Content" />
        
        <div className="mb-10">
           <p className="text-lg leading-relaxed text-slate-600 mb-8">
             Beyond development, we craft <strong className="text-slate-900">high-impact visual stories</strong>. From corporate branding to viral social media campaigns, our creative team ensures your message cuts through the noise.
           </p>
           
           <div className="flex gap-4 mb-12">
              <div className="flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm font-bold border border-pink-100">
                 <Instagram size={16} /> Social Media Mgmt
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-bold border border-purple-100">
                 <Palette size={16} /> Brand Identity
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-bold border border-orange-100">
                 <Camera size={16} /> Content Production
              </div>
           </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-3 gap-6 space-y-6">
           {/* ENFRASYS COLLECTION */}
           <div className="break-inside-avoid mb-6">
              <div className="relative group rounded-2xl overflow-hidden shadow-lg bg-slate-900">
                 <img src={creativeAssets['ENFRASYS'][0]} alt="Creative Work" className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">Enfrasys • AI Campaign</span>
                 </div>
              </div>
           </div>

           <div className="break-inside-avoid mb-6">
               <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                 <img src={creativeAssets['LEANX'][1]} alt="Creative Work" className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
              </div>
           </div>

           <div className="break-inside-avoid mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
               <Quote className="text-blue-200 mx-auto mb-2" />
               <p className="text-slate-600 italic text-sm">"Visuals that drive engagement."</p>
           </div>

           <div className="break-inside-avoid mb-6">
              <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                 <img src={creativeAssets['ONEX'][0]} alt="Creative Work" className="w-full h-auto" />
              </div>
           </div>
           
           <div className="break-inside-avoid mb-6">
              <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                 <img src={creativeAssets['TROPICOR'][0]} alt="Creative Work" className="w-full h-auto" />
              </div>
           </div>

           <div className="break-inside-avoid mb-6">
              <div className="relative group rounded-2xl overflow-hidden shadow-lg bg-black">
                 <img src={creativeAssets['ENFRASYS'][2]} alt="Creative Work" className="w-full h-auto opacity-90" />
              </div>
           </div>
           
           <div className="break-inside-avoid mb-6">
              <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                 <img src={creativeAssets['LEANX'][0]} alt="Creative Work" className="w-full h-auto" />
              </div>
           </div>

           <div className="break-inside-avoid mb-6">
              <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                 <img src={creativeAssets['ONEX'][2]} alt="Creative Work" className="w-full h-auto" />
              </div>
           </div>

           <div className="break-inside-avoid mb-6">
              <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                 <img src={creativeAssets['TROPICOR'][2]} alt="Creative Work" className="w-full h-auto" />
              </div>
           </div>
        </div>
      </Page>

      {/* --- PAGE 9: COMMERCIALS --- */}
      <Page>
        <SectionHeader title="Commercials" subtitle={`Reference: ${proposalData.invoiceNo}`} />

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg mb-10 bg-white">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-5 font-bold w-20 text-center uppercase text-xs tracking-wider text-slate-400">Item</th>
                <th className="p-5 font-bold uppercase text-xs tracking-wider text-slate-400">Description</th>
                <th className="p-5 font-bold text-right w-48 uppercase text-xs tracking-wider text-slate-400">Investment (RM)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {proposalData.services.map((service, i) => (
                <tr key={i} className="group hover:bg-blue-50/30 transition-colors">
                  <td className="p-5 text-center text-slate-400 font-mono text-sm group-hover:text-blue-500">0{i + 1}</td>
                  <td className="p-5">
                    <div className="font-bold text-slate-800 text-lg mb-1">{service.title}</div>
                    <div className="text-sm text-slate-500 font-light">{service.desc}</div>
                  </td>
                  <td className="p-5 text-right font-medium text-slate-700 font-mono">
                    {service.price.toLocaleString('en-MY', { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-slate-50">
              <tr>
                <td colSpan="2" className="p-5 text-right text-slate-500 font-medium">Subtotal</td>
                <td className="p-5 text-right font-bold text-slate-700 font-mono">
                  {proposalData.subtotal.toLocaleString('en-MY', { minimumFractionDigits: 2 })}
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="p-5 text-right text-emerald-600 font-medium highlight">Discount Package</td>
                <td className="p-5 text-right font-bold text-emerald-600 font-mono">
                  -{proposalData.discount.toLocaleString('en-MY', { minimumFractionDigits: 2 })}
                </td>
              </tr>
              <tr className="bg-slate-900 text-white">
                <td colSpan="2" className="p-8 text-right font-bold text-2xl tracking-tight">TOTAL INVESTMENT</td>
                <td className="p-8 text-right font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  <span className="text-lg text-blue-400 mr-1 align-top relative top-1">RM</span>
                  {proposalData.total.toLocaleString('en-MY', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Retainer Note */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-500 rounded-r-xl">
            <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
               <Info size={16} /> Annual Maintenance
            </h4>
            <div className="flex justify-between items-end">
               <div>
                  <p className="text-blue-800 mb-1 text-sm max-w-lg">
                     To ensure security and performance, we provide server upkeep and minor updates at a nominal yearly fee.
                  </p>
               </div>
               <div className="text-right">
                  <span className="block font-bold text-blue-900">RM 250.00</span>
                  <span className="text-xs text-blue-600">per website / year</span>
               </div>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-12 text-sm">
           <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
             <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 uppercase tracking-wide text-xs">Payment Information</h4>
             <div className="space-y-3 text-slate-600">
               <p className="flex justify-between"><span className="text-slate-400">Bank</span> <span className="font-bold">Maybank</span></p>
               <p className="flex justify-between"><span className="text-slate-400">Account Name</span> <span className="font-bold">Nexova Digital</span></p>
               <p className="flex justify-between"><span className="text-slate-400">Account No</span> <span className="font-mono text-md text-slate-900">5123 4567 8901</span></p>
             </div>
           </div>
           
           <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
             <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 uppercase tracking-wide text-xs">Payment Terms</h4>
             <ul className="list-none text-slate-600 space-y-2 pl-0">
               <li className="flex gap-2"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-slate-300"></div> Payment due within 7 days of invoice date.</li>
               <li className="flex gap-2"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-slate-300"></div> Please include invoice number as reference.</li>
               <li className="flex gap-2"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-slate-300"></div> Final payment for completed works.</li>
             </ul>
           </div>
        </div>

      </Page>
      
      {/* --- PAGE 9: CLOSING --- */}
      <Page className="flex flex-col justify-center items-center text-center relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 opacity-10 pointer-events-none">
           <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-400 rounded-full blur-[80px]"></div>
           <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-600 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
           <div className="mb-8 mx-auto w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-200 rotate-12 hover:rotate-0 transition-all duration-500">
              <Code size={40} className="text-white" />
           </div>
           <h2 className="text-5xl font-black mb-6 text-slate-900 tracking-tight">Let's Build The Future</h2>
           <p className="text-slate-500 text-xl font-light mb-16">
             Ready to transform your digital presence? We're excited to start this journey with you.
           </p>

           <div className="grid grid-cols-2 gap-16 text-left mb-24 glass-panel p-10 bg-white/60 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl">
              <div className="relative group">
                <div className="h-32 border-b-2 border-slate-200 mb-4 group-hover:border-blue-400 transition-colors relative">
                    <span className="absolute bottom-2 left-0 text-slate-300 text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity">Sign Here</span>
                </div>
                <p className="font-bold text-slate-900 uppercase tracking-wide">Accepted By</p>
                <p className="text-sm text-slate-500">Client Representative</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                   <Calendar size={12} /> Date: _________________
                </div>
              </div>
              <div>
                <div className="h-32 border-b-2 border-slate-200 mb-4 relative">
                   <div className="absolute bottom-4 left-0 font-handwriting text-2xl text-blue-600 rotate-[-5deg] opacity-80">
                      Nexova Inc.
                   </div>
                </div>
                <p className="font-bold text-slate-900 uppercase tracking-wide">Nexova Digital</p>
                <p className="text-sm text-slate-500">Authorized Signature</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                   <Calendar size={12} /> Date: {new Date().toLocaleDateString()}
                </div>
              </div>
           </div>

           <div className="flex justify-center gap-10 text-slate-400">
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail size={18} /> {companyInfo.email}
              </div>
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone size={18} /> {companyInfo.phone}
              </div>
           </div>
        </div>
      </Page>

    </div>
  );
}

export default App;
