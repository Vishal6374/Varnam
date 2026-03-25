import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Menu, X } from "lucide-react"; // Import for mobile menu icons

import DecorativeSquiggleInTheBackgroundCircle1 from "./assets/73-735672-decorative-squiggle-in-the-background-circle 1.png";
import DecorativeSquiggleInTheBackgroundCircle2 from "./assets/73-735672-decorative-squiggle-in-the-background-circle 2.png";
import SSEILogo2 from "./assets/SSEI-logo-2.png";
import auraFest1 from "./assets/aura-fest-1.png";
import dsc06605Copy1 from "./assets/dsc06605-copy-1.png";
import ellipse1 from "./assets/ellipse-1.svg";
import ellipse2 from "./assets/ellipse-2.svg";
import rectangle7 from "./assets/rectangle-7.png";
import varnam1 from "./assets/varnam-1.png";

const navItems = ["Home", "Galleries", "Events", "Register"];

const eventItems = [
  { label: "Singing" },
  { label: "Group Dance" },
  { label: "Fashion Show" },
  { label: "Drama" },
  { label: "Individual Talent" },
  { label: "Miming" },
  { label: "Meme Creation" },
  { label: "Short Film" },
];

const checkboxStyle =
  "w-[18.99px] h-[18px] bg-[#d9d9d933] rounded-[9.5px/9px] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]";

const SriShannugha: React.FC = () => {
  const [registering, setRegistering] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    sinNumber: "",
    department: "",
    yearOfStudy: "",
    mobileNumber: "",
    emailAddress: "",
    teamMembers: "",
    registerFor: [] as string[],
  });

  const handleCheckbox = (label: string) => {
    setFormData((prev) => {
      const already = prev.registerFor.includes(label);
      return {
        ...prev,
        registerFor: already
          ? prev.registerFor.filter((l) => l !== label)
          : [...prev.registerFor, label],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegistering(true);
    setError(null);
    setSuccess(false);

    try {
      await addDoc(collection(db, "registrations"), {
        ...formData,
        submittedAt: serverTimestamp(),
      });
      setSuccess(true);
      // Reset form
      setFormData({
        fullName: "",
        sinNumber: "",
        department: "",
        yearOfStudy: "",
        mobileNumber: "",
        emailAddress: "",
        teamMembers: "",
        registerFor: [],
      });
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Failed to register. Please try again.");
    } finally {
      setRegistering(false);
    }
  };

  return (
    <div className="bg-[#171012] overflow-x-hidden min-h-screen relative font-sans text-white">
      {/* ── LAYER 1: Full-width Background & Glows ── */}
      <div className="fixed inset-0 bg-[linear-gradient(180deg,rgba(30,19,22,1)_0%,rgba(44,11,0,1)_100%)] pointer-events-none z-0" />
      
      {/* Top Glow Ellipse */}
      <img
        className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-full md:w-[1616px] max-w-none pointer-events-none opacity-50 z-0"
        alt=""
        src={ellipse1}
      />

      {/* Middle Glow Ellipse */}
      <img
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[738px] md:h-[702px] pointer-events-none blur-3xl opacity-30 z-0"
        alt=""
        src={ellipse2}
      />

      {/* ── LAYER 2: Decorative Squiggles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          className="absolute -top-20 -right-40 w-[600px] md:w-[1339px] opacity-40"
          alt=""
          src={DecorativeSquiggleInTheBackgroundCircle1}
        />
        <img
          className="absolute top-[40%] -left-40 w-[800px] md:w-[1532px] opacity-40"
          alt=""
          src={DecorativeSquiggleInTheBackgroundCircle2}
        />
      </div>

      {/* ── LAYER 3: Main Content ── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        
        {/* Navigation */}
        <header className="flex justify-between items-center py-6 relative">
          {/* Left: hamburger (mobile) / logo (desktop) */}
          <div className="flex items-center gap-3">
            <div className="md:hidden z-50">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
            {/* Desktop: SSEI logo on the left */}
            <div className="hidden md:flex items-center gap-2">
              <img className="w-10 h-10 object-contain" alt="SSEI" src={SSEILogo2} />
              <span className="font-sans font-bold text-sm text-white/80 leading-tight">Sri Shanmugha<br/>College of Engineering</span>
            </div>
          </div>

          {/* Center: Nav links */}
          <nav className={`fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center gap-8 text-2xl transition-transform duration-300 md:relative md:bg-transparent md:flex-row md:inset-auto md:text-base md:gap-[54px] md:translate-x-0 ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="font-melodrama font-normal text-white hover:text-orange-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Varnam × Aura tag (desktop only) */}
          <div className="hidden md:flex items-center gap-2 text-right">
            <div className="font-melodrama italic text-sm text-white/70 leading-tight">
              <span className="text-orange-400 text-base">Varnam</span> <span className="text-white/50">×</span> <span className="text-yellow-400 text-base">Aura</span><br/>
              <span className="text-xs font-sans font-light tracking-widest text-white/40">MARCH 27, 2026</span>
            </div>
          </div>

          {/* Background for Desktop Nav Pills */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[409px] h-[42px] bg-[#d9d9d933] rounded-[7px] backdrop-blur-[19.0px] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32)] -z-10" />
        </header>

        {/* Hero Image — top-right decorative image, visible on all screens */}
        <div className="absolute right-0 top-16 pointer-events-none overflow-hidden z-0">
          <img
            className="w-[180px] sm:w-[300px] md:w-[520px] lg:w-[586px] h-auto opacity-30 sm:opacity-60 md:opacity-90 mix-blend-screen"
            alt=""
            src={dsc06605Copy1}
          />
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center mt-12 md:mt-24 text-center ">
           <h2 className="font-melodrama text-4xl md:text-[64px] italic animate-fade-in">Sri Shanmugha</h2>
           <p className="font-sans font-light italic opacity-60 mt-2">Presents</p>

           <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-12 animate-fade-up">
              <img className="w-[200px] md:w-[401px] h-auto object-contain" alt="Varnam" src={varnam1} />
              <div className="[text-shadow:0px_-1px_4px_#ee6c3c] font-melodrama text-6xl md:text-9xl">X</div>
              <img className="w-[120px] md:w-[232px] h-auto object-contain" alt="Aura fest" src={auraFest1} />
           </div>

           <p className="font-melodrama text-2xl md:text-[40px] italic mt-12 max-w-[800px] px-4 animate-fade-up [--animation-delay:0.2s]">
            Radiate your Talent Celebrate Every Colour
           </p>

           <div className="mt-12 w-full max-w-[700px] bg-[#d9d9d933] rounded-xl backdrop-blur-[19.0px] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32)] p-4 border border-white/10 animate-fade-up [--animation-delay:0.4s]">
              <p className="font-sans font-light text-sm md:text-xl">
                March 27, 2026&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;9 AM – 4 PM&nbsp;&nbsp; |&nbsp;&nbsp; Shanmugha Convention Center
              </p>
           </div>
        </div>

        {/* Celebrity Section Header */}
        <div id="celebrity" className="mt-32 md:mt-64 text-center font-melodrama text-4xl md:text-[64px] italic">
          Celebrity
        </div>


        {/* ── LAYER 4: Diagonal Banners ── */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-32 md:py-64 pointer-events-none">
          {/* Layer 1: Orange Diagonal Banner */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3000px] h-[100px] md:h-[173px] bg-[#ce562b] rotate-[15.95deg]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4000px] flex items-center justify-center gap-[50px] md:gap-[100px] rotate-[15.95deg]">
            {Array(10).fill("REVEALING SOON").map((item, index) => (
              <div key={index} className="font-sans font-medium text-white text-5xl md:text-9xl tracking-wider whitespace-nowrap">
                {item}
              </div>
            ))}
          </div>

          {/* Layer 2: Yellow/Gold Diagonal Banner */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3000px] h-[100px] md:h-[173px] bg-[#f9b220] rotate-[-9.18deg]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4000px] flex items-center justify-center gap-[50px] md:gap-[100px] rotate-[-9.18deg]">
            {Array(10).fill("REVEALING SOON").map((item, index) => (
              <div key={index} className="font-sans font-medium text-white text-5xl md:text-9xl tracking-wider whitespace-nowrap">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <section id="events" className="mt-32 md:mt-48 flex flex-col items-center">
          <h2 className="font-melodrama text-4xl md:text-[64px] italic text-center">Events</h2>
          
          <div className="relative mt-12 w-full max-w-[1000px] min-h-[300px] flex items-center justify-center p-8">
            <img className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-80" alt="" src={rectangle7} />
            
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 w-full">
              {eventItems.map((ev) => (
                <div key={ev.label} className="font-sans font-medium text-white text-2xl md:text-4xl text-center whitespace-normal break-words">
                  {ev.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Register Now Section */}
        <section id="register" className="mt-32 md:mt-48 flex flex-col items-center w-full">
          <h2 className="font-melodrama text-4xl md:text-[64px] italic text-center mb-12">Register Now</h2>

          <div className="w-full max-w-[972px] bg-[#d9d9d91a] rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden p-6 md:p-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-12">
              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-8">
                {[
                  { label: "Full Name", key: "fullName" },
                  { label: "Sin Number", key: "sinNumber" },
                  { label: "Department", key: "department" },
                  { label: "Year of Study", key: "yearOfStudy" },
                  { label: "Mobile Number", key: "mobileNumber" },
                  { label: "Email Address", key: "emailAddress" },
                ].map((field) => (
                  <div key={field.key} className="flex flex-col gap-2">
                    <label className="font-sans font-normal text-white text-base">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      className="w-full h-12 bg-white/10 rounded-xl px-4 font-sans text-white text-sm border border-white/10 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none transition-all placeholder:text-white/30"
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                      value={formData[field.key as keyof typeof formData] as string}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    />
                  </div>
                ))}
              </div>

              {/* Register For Section */}
              <div className="flex flex-col items-center gap-8">
                <div className="font-sans font-medium text-2xl text-white">Register For</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                  {[
                    "Singing", "Group Dance", "Miming", "Drama",
                    "Fashion Show", "Meme Creation", "Short Flim", "Individual Talent"
                  ].map((label) => (
                    <div key={label} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer" onClick={() => handleCheckbox(label)}>
                      <button
                        type="button"
                        className={`${checkboxStyle} flex-shrink-0 ${formData.registerFor.includes(label) ? "bg-orange-500 scale-110" : "bg-white/20"} transition-all`}
                      />
                      <span className="font-sans font-normal text-white text-base">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Members */}
              <div className="flex flex-col gap-3">
                <label className="font-sans font-normal text-white text-base text-center">
                  Team Members (if applicable)
                </label>
                <textarea
                  className="w-full h-32 bg-white/10 rounded-xl px-4 py-3 font-sans text-white text-sm border border-white/10 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none transition-all resize-none placeholder:text-white/30"
                  placeholder="List your team members separated by commas..."
                  value={formData.teamMembers}
                  onChange={(e) => setFormData({ ...formData, teamMembers: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center gap-6">
                <button
                  type="submit"
                  disabled={registering}
                  className={`w-full max-w-xs h-14 rounded-xl bg-gradient-to-r from-orange-400 to-red-700 font-melodrama text-2xl text-white italic hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-orange-500/20 ${registering ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {registering ? "Registering..." : "Register"}
                </button>
                {success && (
                  <p className="font-sans text-green-400 text-base animate-bounce">
                    Registration successful! We&apos;ll contact you soon.
                  </p>
                )}
                {error && (
                  <p className="font-sans text-red-400 text-base">
                    {error}
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>

        {/* Bottom Marquee */}
        <div className="relative mt-32 w-screen left-1/2 -translate-x-1/2 overflow-hidden opacity-40">
          <div
            className="flex whitespace-nowrap animate-marquee gap-12"
            style={{ '--duration': '30s' } as React.CSSProperties}
          >
            {Array(20).fill("Celebrate Every Colour  ✦  ").map((text, i) => (
              <span key={i} className="font-melodrama text-white text-3xl italic flex-shrink-0">{text}</span>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <footer className="mt-20 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          {/* Left: Logo and Name */}
          <div className="flex items-center gap-4">
             <img className="w-16 h-16 object-contain" alt="Ssei logo" src={SSEILogo2} />
             <div className="font-sans font-bold text-xl md:text-2xl">Varnam&apos;26 × Aura Fest&apos;26</div>
          </div>

          {/* Center: Tags and Copy */}
          <div className="flex flex-col items-center gap-2">
            <div className="font-sans font-light text-white/70 text-sm md:text-base flex flex-wrap justify-center gap-x-4">
               <span>#AURAFest26</span>
               <span>#Varnam26</span>
               <span>#RadiateYourTalent</span>
               <span>#SSEI</span>
            </div>
            <p className="font-sans font-light text-white/40 text-sm">
              © 2026 SSEI | All Rights Reserved
            </p>
          </div>

          {/* Right: Contact */}
          <div className="font-sans font-light text-white/80 text-sm md:text-base">
            <p className="font-bold mb-1">For Queries</p>
            <p>7200509681</p>
            <p className="lowercase">ssei_design@shanmugha.edu.in</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SriShannugha;

