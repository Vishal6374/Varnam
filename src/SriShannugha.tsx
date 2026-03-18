import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
  { label: "Singing", top: "top-0", left: "left-px", width: "w-[217px]" },
  { label: "Group Dance", top: "top-0", left: "left-[349px]", width: "" },
  { label: "Fashion Show", top: "top-[77px]", left: "left-0", width: "" },
  {
    label: "Drama",
    top: "top-[154px]",
    left: "left-[127px]",
    width: "w-[218px]",
  },
  {
    label: "Individual Talent",
    top: "top-[154px]",
    left: "left-[479px]",
    width: "",
  },
  { label: "Miming", top: "top-0", left: "left-[702px]", width: "" },
  {
    label: "Meme Creation",
    top: "top-[77px]",
    left: "left-[332px]",
    width: "",
  },
  { label: "Short Flim", top: "top-[77px]", left: "left-[679px]", width: "" },
];

const checkboxStyle =
  "w-[18.99px] h-[18px] bg-[#d9d9d933] rounded-[9.5px/9px] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]";

const SriShannugha: React.FC = () => {
  const [registering, setRegistering] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    <div className="bg-[#171012] overflow-x-hidden min-h-screen relative font-sans">
      {/* ── LAYER 1: Full-width Background & Glows ── */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,19,22,1)_0%,rgba(44,11,0,1)_100%)] pointer-events-none" />
      
      {/* Top Glow Ellipse */}
      <img
        className="absolute top-[-115px] left-1/2 -translate-x-1/2 w-[1616px]  max-w-none pointer-events-none"
        alt=""
        src={ellipse1}
      />

      {/* Middle Glow Ellipse - Scaled 200% */}
      <img
        className="absolute  left-1/2 -translate-x-1/2 w-[738px] h-[702px] pointer-events-none  blur-2xl"
        alt=""
        src={ellipse2}
      />

      {/* ── LAYER 2: Bleed Visual Elements (Banners & Marquee) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Layer 1: Orange Diagonal Banner */}
        <div className="absolute top-[987px] left-1/2 -translate-x-1/2 w-[2500px] h-[173px] bg-[#ce562b] rotate-[15.95deg]" />
        <div className="absolute top-[1010px] left-1/2 -translate-x-1/2 w-[3000px] h-[154px] flex items-center justify-center gap-[100px] rotate-[15.95deg]">
          {Array(6).fill("REVEALING SOON").map((item, index) => (
            <div
              key={index}
              className="font-sans font-medium text-white text-8xl md:text-9xl text-center tracking-[1.28px] whitespace-nowrap"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Layer 2: Yellow/Gold Diagonal Banner */}
        <div className="absolute top-[979px] left-1/2 -translate-x-1/2 w-[2500px] h-[173px] bg-[#f9b220] rotate-[-9.18deg]" />
        <div className="absolute top-[984px] left-1/2 -translate-x-1/2 w-[3000px] h-[154px] flex items-center justify-center gap-[100px] rotate-[-9.18deg]">
          {Array(6).fill("REVEALING SOON").map((item, index) => (
            <div
              key={index}
              className="font-sans font-medium text-white text-8xl md:text-9xl text-center tracking-[1.28px] whitespace-nowrap"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Bottom Scrolling Marquee - Clean Version */}
        <div className="absolute top-[2650px] mt-10 ml-5 left-0 w-full overflow-hidden opacity-40">
          <div className="flex w-fit whitespace-nowrap animate-marquee gap-12">
            {Array(10).fill("Celebrate Every Colour | ").map((text, i) => (
              <span key={i} className="font-melodrama text-white text-3xl italic">{text}</span>
            ))}
            {Array(10).fill("Celebrate Every Colour | ").map((text, i) => (
              <span key={i + 10} className="font-melodrama text-white text-3xl italic">{text}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── LAYER 3: Centered Content Container (1280px Design) ── */}
      <div className="relative w-[1280px] mx-auto min-h-[2969px]">
        {/* Right Hero Image (Performing Artist) - Positioned relative to the 1280px grid */}
        <img
          className="absolute  left-[901px] w-[586px] h-[795px] mix-blend-multiply "
          alt=""
          src={dsc06605Copy1}
        />

        {/* Logos Section */}
        <div className="absolute top-[251px] left-1/2 -translate-x-1/2 w-[754px] h-[190px] flex items-center justify-center">
          <img
            className="w-[401px] h-36 object-contain"
            alt="Varnam"
            src={varnam1}
          />
          <div className="mx-8 [text-shadow:0px_-1px_4px_#ee6c3c] font-melodrama font-normal text-white text-9xl">
            X
          </div>
          <img
            className="w-[232px] h-[190px] object-contain"
            alt="Aura fest"
            src={auraFest1}
          />
        </div>

        {/* Header Navigation Background */}
        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[409px] h-[42px] bg-[#d9d9d933] rounded-[7px] backdrop-blur-[19.0px] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32)]" />

        {/* Info Box Background (Date/Time) */}
        <div className="absolute top-[568px] left-1/2 -translate-x-1/2 w-[687px] h-[50px] bg-[#d9d9d933] rounded-xl backdrop-blur-[19.0px] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32)]" />

        {/* Sri Shanmugha Title */}
        <div className="absolute top-[151px] left-1/2 -translate-x-1/2 w-[400px] font-melodrama font-normal text-white text-[64px] text-center whitespace-nowrap italic">
          Sri Shanmugha
        </div>

        {/* Present Text - Repositioned closer */}
        <div className="absolute top-[225px] left-1/2 -translate-x-1/2 w-[110px] font-sans font-light text-white text-base text-center whitespace-nowrap italic opacity-60">
          Presents
        </div>

        {/* Radiate your Talent Text */}
        <p className="absolute top-[485px] left-1/2 -translate-x-1/2 w-[800px] font-melodrama font-normal text-white text-[40px] text-center italic">
          Radiate your Talent Celebrate Every Colour
        </p>

        {/* Decorative Squiggles */}
        <img
          className="absolute top-[-73px] left-[914px] w-[1339px] h-[1044px] max-w-none opacity-60"
          alt=""
          src={DecorativeSquiggleInTheBackgroundCircle1}
        />
        <img
          className="absolute top-[1237px] left-[-104px] w-[1532px] h-[707px] max-w-none opacity-60"
          alt=""
          src={DecorativeSquiggleInTheBackgroundCircle2}
        />

        {/* Navbar */}
        <nav className="absolute top-[85px] left-1/2 -translate-x-1/2 flex items-center gap-[54px]">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-melodrama font-normal text-white text-base text-center hover:text-orange-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Info Text (Date / Time / Place) */}
        <p className="absolute top-[581px] left-1/2 -translate-x-1/2 font-sans font-light text-white text-xl text-center whitespace-nowrap">
          March 27, 2026&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;9 AM – 4
          PM&nbsp;&nbsp; |&nbsp;&nbsp; Shanmugha Convention Center
        </p>

        {/* Celebrity Header */}
        <div
          id="celebrity"
          className="absolute top-[823px] left-1/2 -translate-x-1/2 font-melodrama font-normal text-white text-[64px] text-center whitespace-nowrap italic"
        >
          Celebrity
        </div>

        {/* (The diagonal banners are moved to Layer 2 for full-width support) */}

        {/* Events Header */}
        <div
          id="events"
          className="absolute top-[1327px] left-1/2 -translate-x-1/2 font-melodrama font-normal text-white text-[64px] text-center whitespace-nowrap italic"
        >
          Events
        </div>

        {/* Events Box Background */}
        <img
          className="absolute top-[1431px] left-1/2 -translate-x-1/2 w-[994px] h-[318px]"
          alt=""
          src={rectangle7}
        />

        {/* Events List Grid */}
        <div className="absolute top-[1492px] left-[221px] w-[857px] h-[197px]">
          {eventItems.map((ev) => (
            <div
              key={ev.label}
              className={`absolute ${ev.top} ${ev.left} ${ev.width || ""} font-sans font-medium text-white text-4xl text-center whitespace-nowrap`}
            >
              {ev.label}
            </div>
          ))}
        </div>

        {/* Register Now Header */}
        <div
          id="register"
          className="absolute top-[1779px] left-1/2 -translate-x-1/2 font-melodrama font-normal text-[64px] text-white text-center whitespace-nowrap italic"
        >
          Register Now
        </div>

        {/* Form Container (Glassmorphism) - Increased height to fix button clipping */}
        <div className="absolute top-[1871px] left-1/2 -translate-x-1/2 w-[972px] h-[800px] bg-[#d9d9d91a] rounded-[13px] backdrop-blur-[10px] border border-white/20 shadow-2xl overflow-hidden">
           {/* Form Content */}
           <form onSubmit={handleSubmit} className="relative w-full h-full p-12">
              {/* Personal Info Grid */}
              <div className="grid grid-cols-2 gap-x-24 gap-y-8 mb-12">
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
                      className="w-[300px] h-[37px] bg-[#d9d9d9] rounded-[7px] px-3 font-sans text-black text-sm"
                      value={formData[field.key as keyof typeof formData] as string}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    />
                  </div>
                ))}
              </div>

              {/* Register For Section */}
              <div className="flex flex-col items-center gap-6 mt-4">
                <div className="font-sans font-medium text-xl text-white text-center">
                  Register For
                </div>
                <div className="grid grid-cols-4 gap-x-12 gap-y-6 w-full px-12">
                  {[
                    "Singing", "Group Dance", "Miming", "Drama",
                    "Fashion Show", "Meme Creation", "Short Flim", "Individual Talent"
                  ].map((label) => (
                    <div key={label} className="flex items-center gap-2">
                       <button
                        type="button"
                        onClick={() => handleCheckbox(label)}
                        className={`${checkboxStyle} flex-shrink-0 cursor-pointer ${formData.registerFor.includes(label) ? "bg-[#f9b220]" : ""}`}
                      />
                      <span className="font-sans font-normal text-white text-base whitespace-nowrap">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Members */}
              <div className="flex flex-col items-center gap-3 mt-12 px-12">
                <label className="font-sans font-normal text-white text-base">
                  Team Members (if applicable)
                </label>
                <textarea
                  className="w-full h-[75px] bg-[#d9d9d9] rounded-[7px] px-3 py-2 font-sans text-black text-sm resize-none"
                  value={formData.teamMembers}
                  onChange={(e) => setFormData({ ...formData, teamMembers: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center gap-4 mt-10">
                <button
                  type="submit"
                  disabled={registering}
                  className={`w-[177px] h-[47px] rounded-[7px] bg-[linear-gradient(90deg,rgba(249,178,32,1)_0%,rgba(161,62,2,1)_100%)] font-melodrama text-2xl text-white italic hover:brightness-110 transition-all flex items-center justify-center ${registering ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {registering ? "Registering..." : "Register"}
                </button>
                {success && (
                  <p className="font-sans text-green-400 text-sm animate-fade-up">
                    Registration successful! We&apos;ll contact you soon.
                  </p>
                )}
                {error && (
                  <p className="font-sans text-red-400 text-sm animate-fade-up">
                    {error}
                  </p>
                )}
              </div>
           </form>
        </div>

        {/* (The marquee line is moved to Layer 2 for full-width support) */}

        {/* Footer Area */}
        <div className="absolute top-[2746px] left-[441px] w-[398px] flex flex-col items-center gap-3">
          <div className="font-sans font-bold text-white text-base text-center whitespace-nowrap">
            Varnam&apos;26 × Aura Fest&apos;26
          </div>
          <div className="font-sans font-light text-white text-sm text-center whitespace-nowrap opacity-70">
            #AURAFest26&nbsp;&nbsp;·&nbsp;&nbsp;#Varnam26&nbsp;&nbsp;·&nbsp;&nbsp;#RadiateYourTalent&nbsp;&nbsp;·&nbsp;&nbsp;#SSEI
          </div>
          <p className="font-sans font-light text-white text-sm text-center opacity-50">
            © 2026 SSEI | All Rights Reserved
          </p>
        </div>

        {/* Contact Info Footer */}
        <div className="absolute top-[2762px] left-[938px] font-sans font-light text-white text-sm text-right opacity-80">
          For Queires
          <br />
          7200509681 |&nbsp;&nbsp;ssei_design@shanmugha.edu.in
        </div>

        {/* SSEI Logo */}
        <img
          className="absolute top-[2739px] left-[67px] w-[82px] h-[81px] object-contain"
          alt="Ssei logo"
          src={SSEILogo2}
        />
      </div>
    </div>
  );
};

export default SriShannugha;
