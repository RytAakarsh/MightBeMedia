import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { GoogleGenAI } from '@google/genai';
import './Proposal.css';
import logo from '../assets/MBM_ICON.png';

// Gemini API configuration - Using the new SDK
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

// Initialize the Gemini client
const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

const Proposal: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chatbot');
  const [chatMessages, setChatMessages] = useState<Array<{role: string, content: string}>>([
    { role: 'assistant', content: "Hello! I'm ClearSkin AI, your automated reception assistant. How can I help you find medical skincare support today?" }
  ]);
  const [proposalMessages, setProposalMessages] = useState<Array<{role: string, content: string}>>([
    { role: 'assistant', content: "Ask me anything about our deliverables, pricing structure, or support coverage! For instance: \"What does the ₹20,000 package include?\" or \"Explain the retainer fee.\"" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [proposalInput, setProposalInput] = useState('');
  const [scriptTopic, setScriptTopic] = useState('');
  const [scriptResult, setScriptResult] = useState('');
  const [isScriptLoading, setIsScriptLoading] = useState(false);
  const [showScriptResult, setShowScriptResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const totalSlides = 17;

  // Navigation functions
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isPresenting) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          e.preventDefault();
          nextSlide();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPresenting, currentSlide]);

  // Reset to first slide when entering presentation mode
  useEffect(() => {
    if (isPresenting) {
      setCurrentSlide(0);
    }
  }, [isPresenting]);

// Gemini API call function using the new SDK
const callGeminiAPI = async (messages: Array<{role: string, content: string}>, systemPrompt: string) => {
  if (!GEMINI_API_KEY) {
    console.warn('❌ Gemini API key not found. Please add VITE_GEMINI_API_KEY to your .env file');
    return null;
  }

  try {
    // Format messages for the SDK
    const contents = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Prepare the system instruction
    const systemInstruction = {
      parts: [{ text: systemPrompt }]
    };

    // Make the API call using the SDK - Using gemini-2.0-flash
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-lite', // Changed from gemini-1.5-flash
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 256,
      }
    });

    console.log('✅ Gemini API Response:', response);

    // Extract the text from the response
    const text = response.text || response.candidates?.[0]?.content?.parts?.[0]?.text || null;
    return text;
  } catch (error: any) {
    console.error('❌ Error calling Gemini API:', error);
    
    // Log the full error details for debugging
    if (error.message) {
      console.error('Error message:', error.message);
    }
    if (error.status) {
      console.error('Error status:', error.status);
    }
    
    return null;
  }
};

  // AI functions with Gemini integration
  const sendChatMessage = async () => {
    if (!chatInput.trim()) return;
    
    const userMessage = { role: 'user', content: chatInput };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsLoading(true);

    try {
      const systemPrompt = "You are ClearSkin AI, a friendly, authoritative, and helpful medical assistant built by MightBeMedia for the Clear Skin Clinic. Answer skincare queries with clinical assurance in 1-2 sentences. Do not offer strict medical diagnosis; state that a dermatologist must inspect the skin. Gently suggest booking a professional consultation at Clear Skin Clinic.";
      
      const messages = [...chatMessages, userMessage];
      const response = await callGeminiAPI(messages, systemPrompt);
      
      if (response) {
        setChatMessages(prev => [...prev, { role: 'assistant', content: response }]);
      } else {
        setChatMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting. Please try again in a moment." }]);
      }
    } catch (error) {
      console.error('Error in sendChatMessage:', error);
      setChatMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendProposalMessage = async () => {
    if (!proposalInput.trim()) return;
    
    const userMessage = { role: 'user', content: proposalInput };
    setProposalMessages(prev => [...prev, userMessage]);
    setProposalInput('');
    setIsLoading(true);

    try {
      const systemPrompt = "You are the interactive MightBeMedia Proposal Partner. Answer questions accurately using only details from this business proposal. The setup pricing is ₹20,000 one-time (covers AI Website, Meta Ads Setup, Patient Chatbot, Social Setup, Local SEO, 3 Years Support, Google Review Engine, QR lobby reviews). The monthly growth retainer is ₹10,000 (covers social maintenance, reels editing, script creation, Meta ads, analytics). Keep answers brief and under 2 sentences.";
      
      const messages = [...proposalMessages, userMessage];
      const response = await callGeminiAPI(messages, systemPrompt);
      
      if (response) {
        setProposalMessages(prev => [...prev, { role: 'assistant', content: response }]);
      } else {
        setProposalMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting. Please try again in a moment." }]);
      }
    } catch (error) {
      console.error('Error in sendProposalMessage:', error);
      setProposalMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const generateScript = async () => {
    if (!scriptTopic.trim()) return;
    
    setIsScriptLoading(true);
    setShowScriptResult(true);
    setScriptResult('Generating outline...');

    try {
      const systemPrompt = "You are MightBeMedia's creative outline assistant. Keep responses ultra-concise and professional.";
      const prompt = `Provide a premium, hyper-concise 30-second reel script outline strategy for: "${scriptTopic}". Elements: 1. Hook (Instant capture), 2. Visual flow, 3. Call-To-Action (directs to Clear Skin Clinic bookings). Keep it under 100 words.`;
      
      const messages = [{ role: 'user', content: prompt }];
      const response = await callGeminiAPI(messages, systemPrompt);
      
      if (response) {
        setScriptResult(response);
      } else {
        setScriptResult("Unable to generate outline. Please try again.");
      }
    } catch (error) {
      console.error('Error in generateScript:', error);
      setScriptResult("Error generating script. Please try again.");
    } finally {
      setIsScriptLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    const notify = document.createElement('div');
    notify.className = "fixed bottom-6 left-1/2 -translate-x-1/2 bg-neonLime text-black font-mono text-xs font-bold px-4 py-2 rounded-full shadow-2xl z-50 animate-bounce";
    notify.textContent = "COPIED TO CLIPBOARD!";
    document.body.appendChild(notify);
    setTimeout(() => notify.remove(), 2000);
  };

  // Slide 1: Hero
  const slide1 = () => (
    <>
      <div className="neon-glow-primary -top-0 -right-40 w-[600px] h-[200px]"></div>
      <div className="neon-glow-violet -bottom-32 -left-32 w-[500px] h-[200px]"></div>
      <div className="dot-matrix"></div>
      <div className="grid-blueprint"></div>
      
      <div className="brand-header flex justify-between items-center border-b border-white/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="MightBeMedia Logo" className="w-8 h-8 flex-shrink-0" />
          <span className="font-display font-bold text-lg tracking-tight text-white">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-neonLime font-bold bg-neonLime/10 px-3 py-1 rounded-full border border-neonLime/20">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-neonLime animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-neonLime/90">We Don't Build Marketing System</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white mb-5">
            We Build <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-neonLime via-emerald-400 to-teal-400">Revenue System</span>.
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-[500px] leading-relaxed font-light mb-6">
            A customized premium conversion infrastructure to transform clinic attention into predictable revenue flow.
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl flex items-center gap-3">
              <i className="fa-solid fa-shield-halved text-neonLime"></i>
              <span className="text-xs text-white/80 font-mono">Your Revenue Growth Proposal</span>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 relative flex justify-center">
          <div className="absolute w-[300px] h-[300px] bg-neonLime/15 rounded-full filter blur-[40px] -z-10 animate-pulse"></div>
          <div className="glass-card-dark neon-card-highlight p-6 rounded-[24px] w-full max-w-[340px] relative overflow-hidden transition-all duration-300 hover:shadow-neonGlow">
            <div className="absolute top-3 right-3 text-[9px] text-neonLime/60 font-mono px-2 py-0.5 bg-neonLime/10 rounded-full">SYSTEM: ACTIVE</div>
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80" 
                 alt="Premium abstract glass sculpture" 
                 className="w-full h-[180px] object-cover rounded-xl mb-4 border border-white/10 shadow-inner"
                 onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[8px] text-white/40 block tracking-wider uppercase">CLIENT SPECIFICATION</span>
                <span className="text-xs font-semibold text-white tracking-wide">MightBeMedia Proposal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-white/5 pt-4 text-[10px] text-white/40 z-10 w-full">
        <span className="font-mono hover:text-neonLime transition-colors cursor-pointer">www.mightbemedia.in</span>
        <span className="font-mono">01 / 17</span>
      </div>
    </>
  );

  // Slide 2: Who We Are
  const slide2 = () => (
    <>
      <div className="dot-matrix-light"></div>
      <div className="brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-black flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-brandDark">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-black font-bold bg-neonLime px-3 py-1 rounded-full">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full">
        <div className="col-span-12 lg:col-span-7">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block">WHO WE ARE</span>
          <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-3">Who We Are</h2>
          <p className="text-brandDark/80 text-sm leading-relaxed mb-4 font-normal">
            At MightBeMedia, we help clinics, doctors, healthcare brands, and local businesses transform their social media attention into predictable patient bookings. Most agencies focus entirely on cosmetic metrics like views. We focus single-mindedly on conversions and revenue.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-5">
            <div className="glass-card-light p-3.5 border-t-2 border-black/85 hover:border-neonLime transition-all duration-300">
              <span className="text-xs font-mono font-bold text-black/50">01</span>
              <h4 className="font-display font-bold text-xs mt-1 mb-1 text-black">Generate Consultations</h4>
              <p className="text-[10px] text-black/75 leading-normal font-medium">Turning casual lookers into verified booked appointments.</p>
            </div>
            <div className="glass-card-light p-3.5 border-t-2 border-black/85 hover:border-neonLime transition-all duration-300">
              <span className="text-xs font-mono font-bold text-black/50">02</span>
              <h4 className="font-display font-bold text-xs mt-1 mb-1 text-black">Generate Trust</h4>
              <p className="text-[10px] text-black/75 leading-normal font-medium">Structuring high-authority social proof and system loops.</p>
            </div>
            <div className="glass-card-light p-3.5 border-t-2 border-black/85 hover:border-neonLime transition-all duration-300">
              <span className="text-xs font-mono font-bold text-black/50">03</span>
              <h4 className="font-display font-bold text-xs mt-1 mb-1 text-black">Generate Revenue</h4>
              <p className="text-[10px] text-black/75 leading-normal font-medium">Direct, measurable impact on the clinic's monthly balance sheet.</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative h-[200px] sm:h-[250px] lg:h-[300px]">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80" 
                 alt="Luxury clinic lobby interior" 
                 className="w-full h-full object-cover"
                 onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-white flex items-center gap-2">
              <i className="fa-solid fa-hospital-user text-neonLime text-xs"></i>
              <span className="text-[9px] font-mono tracking-wide uppercase">Dermatology Standard</span>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full">
        <span className="font-mono">www.mightbemedia.in</span>
        <span className="font-mono">02 / 17</span>
      </div>
    </>
  );

  // Slide 3: The Real Problem
  const slide3 = () => (
    <>
      <div className="neon-glow-red -bottom-40 -left-40 w-[500px] h-[500px]"></div>
      <div className="dot-matrix"></div>
      <div className="brand-header flex justify-between items-center border-b border-white/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-neonLime flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-white">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full">
        <div className="col-span-12 lg:col-span-6">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-red-500 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-md mb-3 inline-block">THE SYSTEM BOTTLENECK</span>
          <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-3">The Real Problem</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-4 font-light">
            Clinics routinely exhaust resources creating and editing video content, thinking that virality solves customer acquisition. Thousands of views, but zero consultations.
          </p>
          <div className="bg-red-500/5 border-l-4 border-red-500 p-4 rounded-r-xl">
            <p className="text-white/80 text-xs leading-relaxed">
              The actual barrier isn't content reach. The real issue is the complete lack of a Conversion System behind your social media attention.
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 flex justify-end w-full">
          <div className="glass-card-dark p-6 rounded-2xl border border-red-500/30 w-full max-w-[400px] shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 text-base border border-red-500/30">
                <i className="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div>
                <span className="text-[8px] tracking-widest text-red-400 font-mono block uppercase font-bold">THE VIRALITY TRAP</span>
                <h3 className="text-sm font-bold">Misleading Metric Correlation</h3>
              </div>
            </div>
            <blockquote className="text-lg font-display font-light italic text-white/90 leading-snug mb-5 border-l-2 border-neonLime pl-3">
              "More Views automatically equals More Patients"
            </blockquote>
            <div className="flex items-center justify-between text-[10px] text-white/40 font-mono pt-3 border-t border-white/5">
              <span>REVENUE CONVERSION</span>
              <span className="text-red-500 font-bold">0% ACCELERATION</span>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-white/5 pt-4 text-[10px] text-white/40 z-10 w-full">
        <span className="font-mono">www.mightbemedia.in</span>
        <span className="font-mono">03 / 17</span>
      </div>
    </>
  );

  // Slide 4: Current Friction Flow
  const slide4 = () => (
    <>
      <div className="dot-matrix-light"></div>
      <div className="brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-black flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-brandDark">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full">
        <div className="col-span-12 lg:col-span-5">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block">FRICTION TUNNEL ANALYSIS</span>
          <h2 className="font-display font-bold text-3xl tracking-tight mb-3">The Current Friction Flow</h2>
          <p className="text-brandDark/80 text-sm leading-relaxed mb-4">
            Your audience hits massive friction points on their way from discovery to clinic check-in.
          </p>
          <div className="glass-card-light p-4 border border-red-200 bg-red-50/40 rounded-xl flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center text-red-500 text-base flex-shrink-0">
              <i className="fa-solid fa-chart-line-down"></i>
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-red-900 mb-0.5">Massive Attention Decay</h4>
              <p className="text-[10px] text-red-700 leading-relaxed">With a raw conversion rate, the vast majority of interested viewers completely drop off before ever booking.</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-2.5 pl-0 lg:pl-6 w-full">
          <div className="flex items-center gap-3 w-full">
            <div className="w-20 text-right font-mono text-[9px] text-brandDark/40 uppercase tracking-widest flex-shrink-0">Phase 01</div>
            <div className="flex-1 bg-brandDark text-white px-4 sm:px-5 py-2 rounded-full flex justify-between items-center transition-all duration-300 hover:scale-[1.015] shadow-sm">
              <span className="text-xs font-semibold tracking-wider">10k Views</span>
              <span className="text-[9px] font-mono text-neonLime bg-white/10 px-2 py-0.5 rounded">Discovery</span>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full">
            <div className="w-20 text-right font-mono text-[9px] text-brandDark/40 uppercase tracking-widest flex-shrink-0">Phase 02</div>
            <div className="flex-1 max-w-[85%] bg-brandDark/90 text-white px-4 sm:px-5 py-2 rounded-full flex justify-between items-center transition-all duration-300 hover:scale-[1.015] shadow-sm">
              <span className="text-xs font-semibold tracking-wider">200 Likes</span>
              <span className="text-[9px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded">Interest</span>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full">
            <div className="w-20 text-right font-mono text-[9px] text-brandDark/40 uppercase tracking-widest flex-shrink-0">Phase 03</div>
            <div className="flex-1 max-w-[70%] bg-brandDark/80 text-white px-4 sm:px-5 py-2 rounded-full flex justify-between items-center transition-all duration-300 hover:scale-[1.015] shadow-sm">
              <span className="text-xs font-semibold tracking-wider">50 Visits</span>
              <span className="text-[9px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded">Intention</span>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full">
            <div className="w-20 text-right font-mono text-[9px] text-brandDark/40 uppercase tracking-widest flex-shrink-0">Phase 04</div>
            <div className="flex-1 max-w-[55%] bg-brandDark/70 text-white px-4 sm:px-5 py-2 rounded-full flex justify-between items-center transition-all duration-300 hover:scale-[1.015] shadow-sm">
              <span className="text-xs font-semibold tracking-wider">15 DMs</span>
              <span className="text-[9px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded">Inquiry</span>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full">
            <div className="w-20 text-right font-mono text-[9px] text-brandDark/40 uppercase tracking-widest flex-shrink-0">Final Goal</div>
            <div className="flex-1 max-w-[40%] bg-red-600 text-white px-4 sm:px-5 py-2 rounded-full flex justify-between items-center shadow-md transition-all duration-300 hover:scale-[1.015]">
              <span className="text-xs font-bold tracking-wider">1-2 Patients</span>
              <span className="text-[9px] font-mono bg-black/20 px-2 py-0.5 rounded">Check-In</span>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full">
        <span className="font-mono">www.mightbemedia.in</span>
        <span className="font-mono">04 / 17</span>
      </div>
    </>
  );

  // Slide 5: Hidden Revenue Leak
  const slide5 = () => (
    <>
      <div className="dot-matrix-light"></div>
      <div className="brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-black flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-brandDark">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 w-full">
        <div className="text-center mb-4">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-red-500 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-md inline-block mb-1.5">REVENUE AUDIT REPORT</span>
          <h2 className="font-display font-bold text-3xl tracking-tight text-brandDark">The Hidden Revenue Leak</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch w-full">
          <div className="glass-card-light p-5 border-t-4 border-emerald-500 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500"><i className="fa-solid fa-circle-check text-sm"></i></div>
                <h3 className="font-display font-bold text-sm text-brandDark">What patients actually do:</h3>
              </div>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-emerald-600 mb-3">They are ready for skincare help, but...</p>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2.5 text-xs text-brandDark/70"><i className="fa-solid fa-check text-emerald-500"></i> Watch your highly-engaging reel video</li>
                <li className="flex items-center gap-2.5 text-xs text-brandDark/70"><i className="fa-solid fa-check text-emerald-500"></i> Visit your clinic's social media profile</li>
                <li className="flex items-center gap-2.5 text-xs text-brandDark/70"><i className="fa-solid fa-check text-emerald-500"></i> Become actively interested in procedures</li>
              </ul>
            </div>
          </div>
          <div className="glass-card-light p-5 border-t-4 border-red-500 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500"><i className="fa-solid fa-circle-xmark text-sm"></i></div>
                <h3 className="font-display font-bold text-sm text-brandDark">Where the process breaks down:</h3>
              </div>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-red-600 mb-3">Critical structural friction points</p>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2.5 text-xs text-brandDark/70"><i className="fa-solid fa-xmark text-red-500 font-bold"></i> No proper optimized clinic landing page</li>
                <li className="flex items-center gap-2.5 text-xs text-brandDark/70"><i className="fa-solid fa-xmark text-red-500 font-bold"></i> No instant guidance or response on profile</li>
                <li className="flex items-center gap-2.5 text-xs text-brandDark/70"><i className="fa-solid fa-xmark text-red-500 font-bold"></i> No streamlined, 24/7 appointment system</li>
                <li className="flex items-center gap-2.5 text-xs text-brandDark/70"><i className="fa-solid fa-xmark text-red-500 font-bold"></i> No automated trust-building or follow-ups</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full">
        <span className="font-mono">www.mightbemedia.in</span>
        <span className="font-mono">05 / 17</span>
      </div>
    </>
  );

  // Slide 6: Attention Is Not The Problem
  const slide6 = () => (
    <>
      <div className="dot-matrix-light"></div>
      <div className="brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-black flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-brandDark">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 w-full">
        <div className="grid grid-cols-12 gap-6 items-center w-full">
          <div className="col-span-12 lg:col-span-5">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block">ATTENTION ANALYSIS</span>
            <h2 className="font-display font-bold text-3xl tracking-tight mb-3">Attention Is Not The Problem</h2>
            <p className="text-brandDark/70 text-sm leading-relaxed mb-4 font-light">
              Every month, thousands of local prospective patients with active skin conditions are watching your content, finding your clinic profile, and then drifting away.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center w-full">
            <div className="relative bg-brandDark/5 p-4 sm:p-5 rounded-2xl border border-brandDark/10 w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center relative z-10">
                <div className="bg-white p-3 rounded-xl shadow border border-brandDark/5">
                  <span className="text-[9px] font-mono text-brandDark/40">STEP 01</span>
                  <h4 className="font-display font-bold text-xs mt-0.5 mb-0.5 text-brandDark">Raw Audience</h4>
                  <div className="w-5 h-5 rounded-full bg-brandDark/10 mx-auto mt-1 flex items-center justify-center text-[9px]"><i className="fa-solid fa-users text-brandDark"></i></div>
                </div>
                <div className="bg-white p-3 rounded-xl shadow border border-brandDark/5">
                  <span className="text-[9px] font-mono text-brandDark/40">STEP 02</span>
                  <h4 className="font-display font-bold text-xs mt-0.5 mb-0.5 text-brandDark">Active Interest</h4>
                  <div className="w-5 h-5 rounded-full bg-brandDark/10 mx-auto mt-1 flex items-center justify-center text-[9px]"><i className="fa-solid fa-heart text-brandDark"></i></div>
                </div>
                <div className="bg-red-500 text-white p-3 rounded-xl shadow border border-red-600">
                  <span className="text-[8px] font-mono tracking-wider block text-white/80 font-bold">CRITICAL GAP</span>
                  <h4 className="font-display font-bold text-[9px] mt-0.5 leading-tight mb-0.5">MISSING BRIDGE</h4>
                  <div className="w-5 h-5 rounded-full bg-white/20 mx-auto mt-1 flex items-center justify-center text-[9px]"><i className="fa-solid fa-bolt text-white"></i></div>
                </div>
                <div className="bg-brandDark text-white p-3 rounded-xl shadow border border-brandDark">
                  <span className="text-[9px] font-mono text-white/50">STEP 03</span>
                  <h4 className="font-display font-bold text-xs mt-0.5 mb-0.5 text-white">Booked</h4>
                  <div className="w-5 h-5 rounded-full bg-neonLime text-brandDark mx-auto mt-1 flex items-center justify-center text-[9px]"><i className="fa-solid fa-calendar-check"></i></div>
                </div>
              </div>
            </div>
            <div className="text-center mt-3">
              <span className="text-[10px] font-mono tracking-wider text-brandDark/50 uppercase"><i className="fa-solid fa-circle-chevron-right text-neonLime mr-1"></i> Your End-Goal is directly linked to the bridge</span>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full">
        <span className="font-mono">www.mightbemedia.in</span>
        <span className="font-mono">06 / 17</span>
      </div>
    </>
  );

  // Slide 7: Revenue System
  const slide7 = () => (
    <>
      <div className="dot-matrix-light"></div>
      <div className="brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-black flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-brandDark">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 w-full">
        <div className="text-center mb-5">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md inline-block mb-1.5">INFRASTRUCTURE BLUEPRINT</span>
          <h2 className="font-display font-bold text-3xl tracking-tight text-brandDark">The MightBeMedia Revenue System™</h2>
          <p className="text-brandDark/70 text-xs max-w-[650px] mx-auto mt-1 leading-relaxed">
            Instead of simply drafting content and hoping for views, we build an entire revenue ecosystem. A streamlined patient acquisition machine operating 24 hours a day, 7 days a week, continuously nurturing clinic interest.
          </p>
        </div>
        <div className="w-full">
          <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-brandDark/50 block text-center mb-2.5">The Flow Optimization System</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <div className="bg-white p-4 rounded-xl shadow-md border border-brandDark/5 flex flex-col justify-between hover:border-neonLime transition-all duration-300 cursor-pointer" onClick={() => { setIsAIOpen(true); setActiveTab('chatbot'); }}>
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-brandDark/35 block">MODULE 01</span>
                  <span className="text-[9px] font-bold bg-neonLime/30 text-black px-1.5 py-0.5 rounded animate-pulse">LIVE DEMO</span>
                </div>
                <h4 className="font-display font-bold text-sm mt-1.5 mb-1.5 text-brandDark">Convert Viewers</h4>
              </div>
              <div className="bg-brandDark/5 rounded-lg p-2 text-center text-[11px] font-semibold text-brandDark/70">
                → Into Inquiries
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-brandDark/5 flex flex-col justify-between hover:border-neonLime transition-all duration-300">
              <div>
                <span className="text-[10px] font-mono text-brandDark/35 block">MODULE 02</span>
                <h4 className="font-display font-bold text-sm mt-1.5 mb-1.5 text-brandDark">Nurture Inquiries</h4>
              </div>
              <div className="bg-brandDark/5 rounded-lg p-2 text-center text-[11px] font-semibold text-brandDark/70">
                → Into Booked Consultations
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-brandDark/5 flex flex-col justify-between hover:border-neonLime transition-all duration-300">
              <div>
                <span className="text-[10px] font-mono text-brandDark/35 block">MODULE 03</span>
                <h4 className="font-display font-bold text-sm mt-1.5 mb-1.5 text-brandDark">Deliver Services</h4>
              </div>
              <div className="bg-brandDark/5 rounded-lg p-2 text-center text-[11px] font-semibold text-brandDark/70">
                System Loop Integration Completed
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full">
        <span className="font-mono">www.mightbemedia.in</span>
        <span className="font-mono">07 / 17</span>
      </div>
    </>
  );

  // Slide 8: Premium Website
  const slide8 = () => (
    <>
      <div className="dot-matrix-light"></div>
      <div className="brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-black flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-brandDark">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full">
        <div className="col-span-12 lg:col-span-6">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block">PRODUCT SUITE</span>
          <h2 className="font-display font-bold text-3xl tracking-tight mb-3">Personalised Premium Website</h2>
          <p className="text-brandDark/70 text-sm leading-relaxed mb-4 font-light">
            A highly optimized premium-tier skincare website structured from the ground up to rank and convert visitors into patients.
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            <div className="flex items-center gap-2 text-xs text-brandDark/80 font-medium"><i className="fa-solid fa-square-check text-emerald-500"></i> Premium Design</div>
            <div className="flex items-center gap-2 text-xs text-brandDark/80 font-medium"><i className="fa-solid fa-square-check text-emerald-500"></i> WhatsApp System</div>
            <div className="flex items-center gap-2 text-xs text-brandDark/80 font-medium"><i className="fa-solid fa-square-check text-emerald-500"></i> Treatment Pages</div>
            <div className="flex items-center gap-2 text-xs text-brandDark/80 font-medium"><i className="fa-solid fa-square-check text-emerald-500"></i> SEO Optimization</div>
            <div className="flex items-center gap-2 text-xs text-brandDark/80 font-medium"><i className="fa-solid fa-square-check text-emerald-500"></i> Before/After Slider</div>
            <div className="flex items-center gap-2 text-xs text-brandDark/80 font-medium"><i className="fa-solid fa-square-check text-emerald-500"></i> Fast & Responsive</div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 w-full">
          <div className="glass-card-light overflow-hidden rounded-xl shadow-2xl border border-brandDark/10 h-[260px] flex flex-col w-full">
            <div className="bg-brandDark/5 px-3 py-2 border-b border-brandDark/10 flex items-center justify-between">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <div className="bg-white px-6 py-0.5 rounded text-[8px] text-brandDark/40 font-mono tracking-wide">https://clearskinclinic.com</div>
              <div className="w-8"></div>
            </div>
            <div className="flex-1 p-4 bg-white relative overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-center mb-2">
                <span className="font-display font-bold text-xs tracking-tight text-black">Clear Skin Clinic</span>
                <span className="text-[8px] bg-brandDark text-white px-2 py-0.5 rounded font-bold uppercase">Book Appointment</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-1 flex-1">
                <div className="flex flex-col justify-center">
                  <h3 className="font-display font-bold text-xs leading-tight mb-1 text-black">Premium Skincare</h3>
                  <p className="text-[8px] text-brandDark/55 leading-normal">Schedule professional dermatological check-ups.</p>
                  <div className="mt-2 flex gap-1">
                    <div className="bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[8px] font-bold text-emerald-700 flex items-center gap-1">
                      <i className="fa-brands fa-whatsapp"></i> WhatsApp
                    </div>
                  </div>
                </div>
                <div className="bg-brandDark/5 rounded-lg border border-brandDark/5 p-2 flex flex-col justify-center items-center text-center">
                  <div className="text-[8px] font-mono text-brandDark/40">Dermatologist Rating</div>
                  <div className="text-xs font-display font-bold text-black mt-0.5">4.9 ★★★★★</div>
                  <div className="text-[7px] text-emerald-600 font-bold mt-0.5">Verified Clinical Trust</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full">
        <span className="font-mono text-brandDark/50 font-semibold uppercase">The MightBeMedia Revenue System™</span>
        <span className="font-mono">08 / 17</span>
      </div>
    </>
  );

  // Slide 9: Technical Support
  const slide9 = () => (
    <>
      <div className="dot-matrix-light"></div>
      <div className="brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-black flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-brandDark">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full">
        <div className="col-span-12 lg:col-span-7">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block">GUARANTEED CONTINUITY</span>
          <h2 className="font-display font-bold text-3xl tracking-tight mb-1 text-brandDark">3 Years Technical Support</h2>
          <p className="text-brandDark/90 font-semibold text-sm mb-3">Zero Technical Worry for Clear Skin Clinic.</p>
          <p className="text-brandDark/70 text-xs leading-relaxed mb-4 font-light">
            Websites require updates, backups, security patches, and periodic optimization to avoid traffic crashes. We handle everything behind the scenes so you can focus entirely on patients. Complete peace of mind. No hidden retainer fees.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white p-3 rounded-lg border border-brandDark/5 text-center shadow-sm">
              <i className="fa-solid fa-wrench text-brandDark text-sm mb-1"></i>
              <h4 className="font-display font-bold text-[10px] text-brandDark">Maintenance</h4>
            </div>
            <div className="bg-white p-3 rounded-lg border border-brandDark/5 text-center shadow-sm">
              <i className="fa-solid fa-server text-brandDark text-sm mb-1"></i>
              <h4 className="font-display font-bold text-[10px] text-brandDark">Hosting Care</h4>
            </div>
            <div className="bg-white p-3 rounded-lg border border-brandDark/5 text-center shadow-sm">
              <i className="fa-solid fa-shield-halved text-brandDark text-sm mb-1"></i>
              <h4 className="font-display font-bold text-[10px] text-brandDark">Security</h4>
            </div>
            <div className="bg-white p-3 rounded-lg border border-brandDark/5 text-center shadow-sm">
              <i className="fa-solid fa-gauge-high text-brandDark text-sm mb-1"></i>
              <h4 className="font-display font-bold text-[10px] text-brandDark">Performance</h4>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 flex justify-end w-full">
          <div className="bg-brandDark text-white p-6 rounded-2xl w-full max-w-[300px] relative overflow-hidden shadow-xl mx-auto lg:mr-0">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-neonLime/10 rounded-full blur-2xl"></div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-neonLime text-brandDark flex items-center justify-center text-lg font-bold mb-3 shadow-md">
                <i className="fa-solid fa-shield-heart"></i>
              </div>
              <span className="text-[8px] tracking-widest text-white/40 font-mono block uppercase">CONTRACT INCLUSION</span>
              <h3 className="text-lg font-display font-bold mt-0.5 text-white mb-1">3 Years Support</h3>
              <p className="text-white/60 text-[10px] leading-relaxed font-light">Fully covered within your direct system setup. Absolute continuity.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full">
        <span className="font-mono">www.mightbemedia.in</span>
        <span className="font-mono">09 / 17</span>
      </div>
    </>
  );

  // Slide 10: SEO & Google Discovery
  const slide10 = () => (
    <>
      <div className="dot-matrix-light"></div>
      <div className="brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-black flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-brandDark">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full">
        <div className="col-span-12 lg:col-span-6">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block">TRAFFIC SYSTEM</span>
          <h2 className="font-display font-bold text-3xl tracking-tight mb-1">SEO & Google Discovery System</h2>
          <h4 className="font-display font-bold text-sm text-brandDark/80 mb-3">Attracting Active High-Intent Patients</h4>
          <p className="text-brandDark/70 text-xs leading-relaxed mb-4 font-light">
            Unlike social media viewers who might just be looking for skin routines, Google searchers are looking for a dermatologist clinic today to solve their problem immediately.
          </p>
          <div className="space-y-2 text-brandDark">
            <div className="flex gap-2 text-xs text-brandDark/85"><i className="fa-solid fa-arrow-right mt-0.5 text-brandDark text-[10px]"></i> <span><strong>Discovery Suite Setup:</strong> Directly matches patients actively typing "Skincare specialist clinic near me".</span></div>
            <div className="flex gap-2 text-xs text-brandDark/85"><i className="fa-solid fa-arrow-right mt-0.5 text-brandDark text-[10px]"></i> <span><strong>Google Business Profile Tuning:</strong> Claim top organic slots on map listings.</span></div>
            <div className="flex gap-2 text-xs text-brandDark/85"><i className="fa-solid fa-arrow-right mt-0.5 text-brandDark text-[10px]"></i> <span><strong>Skincare Treatments SEO:</strong> Targeted keyword ranking for acne, pigment treatments, skin whitening, and lasers.</span></div>
            <div className="flex gap-2 text-xs text-brandDark/85"><i className="fa-solid fa-arrow-right mt-0.5 text-brandDark text-[10px]"></i> <span><strong>High Trust Optimization:</strong> Show clear clinic location, timings, and credentials directly in search results.</span></div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 w-full">
          <div className="bg-white p-4 rounded-xl shadow-xl border border-brandDark/10 w-full">
            <div className="flex items-center gap-2 border-b border-brandDark/5 pb-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold font-mono">G</div>
              <span className="text-[9px] font-mono tracking-wider text-brandDark/40">SECURE DISCOVERY NODE</span>
            </div>
            <div className="space-y-3">
              <div className="bg-brandLight/50 p-3 rounded-lg border border-brandDark/5">
                <span className="text-[8px] text-brandDark/40 block">https://www.clearskinclinic.com</span>
                <h3 className="font-display font-bold text-xs text-blue-600 hover:underline cursor-pointer">Clear Skin Clinic - Skincare Dermatologist</h3>
                <div className="flex items-center gap-0.5 text-amber-500 text-[10px] mt-0.5">
                  <span>4.9</span> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                  <span className="text-brandDark/40 text-[8px] font-mono ml-1">(120+ patient ratings)</span>
                </div>
                <p className="text-[9px] text-brandDark/60 mt-1">Dermatology clinical specialists in laser skincare treatments, acne scar removals, and skin lighteners.</p>
              </div>
              <div className="flex justify-between items-center bg-brandDark text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                <span className="font-mono tracking-wide text-[10px]">"Skincare clinic near me"</span>
                <span className="text-neonLime text-[9px] font-mono">RANKED #1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full">
        <span className="font-mono">www.mightbemedia.in</span>
        <span className="font-mono">10 / 17</span>
      </div>
    </>
  );

  // Slide 11: Google Review Engine
  const slide11 = () => (
    <>
      <div className="dot-matrix-light"></div>
      <div className="brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-black flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-brandDark">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 w-full">
        <div className="text-center mb-4">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md inline-block mb-1.5">PATIENT FEEDBACK SYSTEM</span>
          <h2 className="font-display font-bold text-3xl tracking-tight text-brandDark">Google Review Growth Engine</h2>
          <p className="text-brandDark/70 text-xs max-w-[700px] mx-auto mt-1 leading-relaxed">
            Patient reviews build ultimate medical authority. Before scheduling an appointment, over 80% of skincare patients cross-reference the clinic's Google rating and feedback. A silent clinic profile loses customers instantly.
          </p>
        </div>
        <div className="w-full">
          <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-brandDark/50 block text-center mb-3">The Operational Funnel</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 w-full">
            <div className="bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:scale-105 transition-transform duration-300">
              <div className="w-7 h-7 rounded-lg bg-brandDark/5 flex items-center justify-center text-xs font-bold text-brandDark mb-2">01</div>
              <p className="text-[11px] font-semibold text-brandDark/80">Automatic review request flow</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:scale-105 transition-transform duration-300">
              <div className="w-7 h-7 rounded-lg bg-brandDark/5 flex items-center justify-center text-xs font-bold text-brandDark mb-2">02</div>
              <p className="text-[11px] font-semibold text-brandDark/80">Review page direct redirection</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:scale-105 transition-transform duration-300">
              <div className="w-7 h-7 rounded-lg bg-brandDark/5 flex items-center justify-center text-xs font-bold text-brandDark mb-2">03</div>
              <p className="text-[11px] font-semibold text-brandDark/80">Spam rating protection filter</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:scale-105 transition-transform duration-300">
              <div className="w-7 h-7 rounded-lg bg-brandDark/5 flex items-center justify-center text-xs font-bold text-brandDark mb-2">04</div>
              <p className="text-[11px] font-semibold text-brandDark/80">Reputation tracking dashboard</p>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full">
        <span className="font-mono">www.mightbemedia.in</span>
        <span className="font-mono">11 / 17</span>
      </div>
    </>
  );

  // Slide 12: Instant QR Review System
  const slide12 = () => (
    <>
      <div className="dot-matrix-light"></div>
      <div className="brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-black flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-brandDark">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full">
        <div className="col-span-12 lg:col-span-6">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block">LOBBY AUTOMATION</span>
          <h2 className="font-display font-bold text-3xl tracking-tight mb-3">Instant QR Review System</h2>
          <p className="text-brandDark/70 text-sm leading-relaxed mb-4 font-light">
            Make review collection incredibly simple and low friction inside Clear Skin Clinic lobby.
          </p>
          <div className="space-y-3.5">
            <div className="flex items-start gap-3">
              <span className="font-display font-bold text-xs bg-brandDark text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">1</span>
              <div>
                <h4 className="font-display font-bold text-xs text-brandDark">Scan</h4>
                <p className="text-[11px] text-brandDark/60">Patient scans clinic QR code with their mobile.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-display font-bold text-xs bg-brandDark text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">2</span>
              <div>
                <h4 className="font-display font-bold text-xs text-brandDark">Direct</h4>
                <p className="text-[11px] text-brandDark/60">Review input redirects automatically to correct page.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-display font-bold text-xs bg-brandDark text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">3</span>
              <div>
                <h4 className="font-display font-bold text-xs text-brandDark">Feedback</h4>
                <p className="text-[11px] text-brandDark/60">Authentic high-rating logged on clinic profile.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 w-full flex justify-center">
          <div className="relative bg-white p-5 rounded-2xl shadow-xl border border-brandDark/10 flex flex-col items-center w-full max-w-[280px]">
            <div className="absolute top-2 left-2 text-[7px] font-mono tracking-wider text-brandDark/30">LOBBY TERMINAL</div>
            <i className="fa-solid fa-qrcode text-6xl mb-3 text-brandDark"></i>
            <h4 className="font-display font-bold text-xs mb-0.5 text-brandDark">Clear Skin Review Hub</h4>
            <span className="text-[8px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200 font-bold">SCAN TO REVIEW</span>
            <div className="mt-3 border-t border-brandDark/5 pt-3 text-center text-[9px] text-brandDark/40 leading-relaxed">
              Reduces review time friction to under 15 seconds
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full">
        <span className="font-mono">www.mightbemedia.in</span>
        <span className="font-mono">12 / 17</span>
      </div>
    </>
  );

  // Slide 13: Social Media Boost
  const slide13 = () => (
    <>
      <div className="dot-matrix-light"></div>
      <div className="brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-black flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-brandDark">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 w-full">
        <div className="text-center mb-4">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md inline-block mb-1.5">ORGANIC GROWTH ACCELERATOR</span>
          <h2 className="font-display font-bold text-3xl tracking-tight text-brandDark">Social Media Boost System</h2>
          <p className="text-brandDark/70 text-xs max-w-[700px] mx-auto mt-1 leading-relaxed">
            You treat patients. We handle growth. Our comprehensive content engine is meticulously designed to optimize your time and scale your medical authority across all social channels.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-3 w-full">
          <div className="bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer" onClick={() => { setIsAIOpen(true); setActiveTab('script'); }}>
            <div>
              <div className="flex justify-between items-start">
                <i className="fa-solid fa-feather text-brandDark text-lg mb-2"></i>
                <span className="text-[8px] font-bold bg-neonLime text-black px-1.5 py-0.5 rounded">AI DEMO</span>
              </div>
              <h4 className="font-display font-bold text-xs text-brandDark">Content Outlines</h4>
            </div>
            <p className="text-[10px] text-brandDark/60 leading-normal mt-1.5">Scripts structured for retention and appointment call-to-actions.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <i className="fa-solid fa-clapperboard text-brandDark text-lg mb-2"></i>
              <h4 className="font-display font-bold text-xs text-brandDark">Professional Editing</h4>
            </div>
            <p className="text-[10px] text-brandDark/60 leading-normal mt-1.5">Sleek, minimal, medical-authority visual pacing.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <i className="fa-solid fa-chart-line text-brandDark text-lg mb-2"></i>
              <h4 className="font-display font-bold text-xs text-brandDark">Trend Research</h4>
            </div>
            <p className="text-[10px] text-brandDark/60 leading-normal mt-1.5">Capturing organic momentum on fast growing clinic topics.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-brandDark/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <i className="fa-solid fa-calendar-days text-brandDark text-lg mb-2"></i>
              <h4 className="font-display font-bold text-xs text-brandDark">Scheduling Engine</h4>
            </div>
            <p className="text-[10px] text-brandDark/60 leading-normal mt-1.5">Consistent multi-platform publication without friction.</p>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full">
        <span className="font-mono">www.mightbemedia.in</span>
        <span className="font-mono">13 / 17</span>
      </div>
    </>
  );

  // Slide 14: Meta Ads System
  const slide14 = () => (
    <>
      <div className="dot-matrix-light"></div>
      <div className="brand-header flex justify-between items-center border-b border-black/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-black flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-brandDark">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-brandDark/50 font-semibold bg-brandDark/5 px-3 py-1 rounded-full border border-brandDark/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full">
        <div className="col-span-12 lg:col-span-6">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brandDark bg-neonLime px-2.5 py-1 rounded-md mb-3 inline-block font-sans">PAID TRAFFIC MATRIX</span>
          <h2 className="font-display font-bold text-3xl tracking-tight mb-3">Meta Ads Growth System</h2>
          <p className="text-brandDark/70 text-xs leading-relaxed mb-4 font-light">
            Scale reliably beyond organic reach. Organic video reach is subject to algorithmic mood swings. Local Facebook and Instagram ads allow us to target high-intent prospects within a 5-10km radius of Clear Skin Clinic with complete mathematical certainty.
          </p>
          <div className="space-y-3">
            <div className="flex gap-2 text-xs text-brandDark/85"><i className="fa-solid fa-circle-dot mt-0.5 text-brandDark text-[10px]"></i> <span><strong>Geo-Fenced Targeting:</strong> Connect purely with local prospects near you.</span></div>
            <div className="flex gap-2 text-xs text-brandDark/85"><i className="fa-solid fa-circle-dot mt-0.5 text-brandDark text-[10px]"></i> <span><strong>Laser Direct Campaigns:</strong> Lead generation directly for skincare consultations.</span></div>
            <div className="flex gap-2 text-xs text-brandDark/85"><i className="fa-solid fa-circle-dot mt-0.5 text-brandDark text-[10px]"></i> <span><strong>Retargeting funnels:</strong> Show before/afters to warm, interested leads.</span></div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 w-full">
          <div className="bg-white p-4 rounded-xl shadow-xl border border-brandDark/10 relative overflow-hidden h-[240px] w-full">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=500&q=80" 
                 alt="Map grid representation" 
                 className="absolute inset-0 w-full h-full object-cover opacity-30"
                 onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 bg-brandDark text-white p-3 rounded-xl border border-white/10 shadow-2xl">
              <span className="text-[8px] font-mono tracking-widest block text-white/50 uppercase">TARGET RADIAL GRID</span>
              <div className="flex justify-between items-center mt-0.5">
                <span className="font-display font-bold text-xs">Radius: 5-10km Clear Skin</span>
                <span className="text-neonLime text-[10px] font-mono font-bold">ACTIVE SCAN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-black/5 pt-4 text-[10px] text-black/40 z-10 w-full">
        <span className="font-mono">www.mightbemedia.in</span>
        <span className="font-mono">14 / 17</span>
      </div>
    </>
  );

  // Slide 15: One-Time Setup Investment
  const slide15 = () => (
    <>
      <div className="neon-glow-primary -top-40 -right-40 w-[600px] h-[600px]"></div>
      <div className="dot-matrix"></div>
      <div className="grid-blueprint"></div>
      <div className="brand-header flex justify-between items-center border-b border-white/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-neonLime flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-white">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full">
        <div className="col-span-12 lg:col-span-5">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neonLime bg-neonLime/10 border border-neonLime/20 px-2.5 py-1 rounded-md mb-3 inline-block">CAPITAL INFRASTRUCTURE</span>
          <h2 className="font-display font-bold text-3xl tracking-tight mb-3">One-Time Setup Investment</h2>
          <p className="text-white/60 text-xs leading-relaxed mb-4 font-light">
            Establish your digital framework with our primary setup suite. Pure architecture built for continuous clinic conversion.
          </p>
          <div className="bg-white/5 border-l-4 border-neonLime p-3 rounded-r-xl flex justify-between items-center">
            <div>
              <span className="text-[8px] font-mono uppercase tracking-widest text-white/40 block">CONTRACT INCLUSION</span>
              <h4 className="font-display font-semibold text-[10px] text-white">No Hidden Charges • Fixed Scale Agreement</h4>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 flex justify-end w-full">
          <div className="glass-card-dark neon-card-highlight p-6 rounded-2xl w-full max-w-[440px] relative overflow-hidden shadow-2xl">
            <div className="flex flex-wrap justify-between items-start mb-4 border-b border-white/10 pb-3 gap-2">
              <div>
                <span className="text-[8px] font-mono tracking-widest text-white/40 block">PLAN SPECIFICATION</span>
                <h3 className="font-display font-bold text-base text-white">COMPLETE ECOSYSTEM SUITE</h3>
              </div>
              <div className="text-right">
                <span className="text-2xl font-display font-bold text-neonLime">₹20,000</span>
                <span className="text-[9px] font-mono block text-white/40">One-Time Setup</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-3 text-xs mb-1">
              <div className="flex items-center gap-2 text-white/80"><i className="fa-solid fa-circle-check text-neonLime text-[10px]"></i> AI Skincare Website</div>
              <div className="flex items-center gap-2 text-white/80"><i className="fa-solid fa-circle-check text-neonLime text-[10px]"></i> Meta Ads Setup</div>
              <div className="flex items-center gap-2 text-white/80 cursor-pointer hover:text-neonLime" onClick={() => { setIsAIOpen(true); setActiveTab('chatbot'); }}>
                <i className="fa-solid fa-circle-check text-neonLime text-[10px] animate-pulse"></i> AI Patient Chatbot <span className="text-[8px] bg-neonLime/20 text-neonLime px-1 rounded">Try</span>
              </div>
              <div className="flex items-center gap-2 text-white/80"><i className="fa-solid fa-circle-check text-neonLime text-[10px]"></i> Social Media Setup</div>
              <div className="flex items-center gap-2 text-white/80"><i className="fa-solid fa-circle-check text-neonLime text-[10px]"></i> Advanced Local SEO</div>
              <div className="flex items-center gap-2 text-white/80"><i className="fa-solid fa-circle-check text-neonLime text-[10px]"></i> 3 Years Complete Support</div>
              <div className="flex items-center gap-2 text-white/80"><i className="fa-solid fa-circle-check text-neonLime text-[10px]"></i> Google Review Engine</div>
              <div className="flex items-center gap-2 text-white/80"><i className="fa-solid fa-circle-check text-neonLime text-[10px]"></i> QR lobby review system</div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-white/5 pt-4 text-[10px] text-white/40 z-10 w-full">
        <span className="font-mono">www.mightbemedia.in</span>
        <span className="font-mono">15 / 17</span>
      </div>
    </>
  );

  // Slide 16: Monthly Growth Management
  const slide16 = () => (
    <>
      <div className="neon-glow-primary -bottom-40 -right-40 w-[600px] h-[600px]"></div>
      <div className="dot-matrix"></div>
      <div className="grid-blueprint"></div>
      <div className="brand-header flex justify-between items-center border-b border-white/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-neonLime flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-white">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 grid grid-cols-12 gap-6 items-center w-full">
        <div className="col-span-12 lg:col-span-5">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neonLime bg-neonLime/10 border border-neonLime/20 px-2.5 py-1 rounded-md mb-3 inline-block">ONGOING MAINTENANCE</span>
          <h2 className="font-display font-bold text-3xl tracking-tight mb-3">Monthly Growth Management</h2>
          <p className="text-white/60 text-xs leading-relaxed mb-4 font-light">
            Ongoing maintenance, constant creative scaling, ad updates, and algorithmic tuning for Clear Skin Clinic.
          </p>
          <div className="bg-white/5 border-l-4 border-neonLime p-3 rounded-r-xl">
            <span className="text-[8px] font-mono uppercase tracking-widest text-white/40 block">CONTRACT FREQUENCY</span>
            <h4 className="font-display font-semibold text-[10px] text-white">Continuous Expansion Retainer</h4>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 flex justify-end w-full">
          <div className="glass-card-dark neon-card-highlight p-6 rounded-2xl w-full max-w-[440px] relative overflow-hidden shadow-2xl">
            <div className="flex flex-wrap justify-between items-start mb-4 border-b border-white/10 pb-3 gap-2">
              <div>
                <span className="text-[8px] font-mono tracking-widest text-white/40 block">GROWTH ENGAGEMENT</span>
                <h3 className="font-display font-bold text-base text-white">MONTHLY OPTIMIZATION</h3>
              </div>
              <div className="text-right">
                <span className="text-2xl font-display font-bold text-neonLime">₹10,000</span>
                <span className="text-[9px] font-mono block text-white/40">Per Month Retainer</span>
              </div>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                <strong className="text-neonLime block mb-0.5 text-[11px]">Social Media Maintenance:</strong>
                <span className="text-white/75 leading-relaxed text-[11px]">Done-For-You planning, reels editing, & scripts.</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                <strong className="text-neonLime block mb-0.5 text-[11px]">Meta Ads Scaling:</strong>
                <span className="text-white/75 leading-relaxed text-[11px]">Creative updates, audience targeting tuning, and lead analytics optimization.</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                <strong className="text-neonLime block mb-0.5 text-[11px]">Funnel Nurturing:</strong>
                <span className="text-white/75 leading-relaxed text-[11px]">Constant chatbot refinement and performance analytics oversight.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-white/5 pt-4 text-[10px] text-white/40 z-10 w-full">
        <span className="font-mono">www.mightbemedia.in</span>
        <span className="font-mono">16 / 17</span>
      </div>
    </>
  );

  // Slide 17: Thank You
  const slide17 = () => (
    <>
      <div className="neon-glow-primary -top-40 -right-40 w-[700px] h-[700px]"></div>
      <div className="dot-matrix"></div>
      <div className="grid-blueprint"></div>
      <div className="brand-header flex justify-between items-center border-b border-white/5 pb-4 z-10 w-full">
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" className="w-6 h-6 text-neonLime flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-display font-bold text-lg tracking-tight text-white">MightBeMedia</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/10">Build • Convert • Scale</span>
      </div>

      <div className="content-area my-auto z-10 text-center flex flex-col items-center justify-center w-full">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neonLime bg-neonLime/10 border border-neonLime/20 px-3 py-1 rounded-full mb-3 inline-block">PARTNERSHIP ENGAGEMENT</span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none mb-3">Thank You</h1>
        <p className="text-white/70 text-sm max-w-[550px] leading-relaxed mb-4 font-light px-4">
          We would be deeply honored to act as your digital growth and revenue partner.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 max-w-[480px] shadow-xl mb-4 mx-4">
          <p className="text-xs font-semibold tracking-wide italic text-white/90">
            "We Are Not A Service Provider. <span className="text-neonLime underline underline-offset-4 decoration-2">We Are Your Revenue Growth Partner.</span>"
          </p>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-6 border-t border-white/10 pt-4 mt-2 w-full max-w-[400px] justify-center text-[11px] px-4">
          <div className="flex items-center gap-2 text-white/70">
            <i className="fa-solid fa-globe text-neonLime text-sm"></i>
            <span>www.mightbemedia.in</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <i className="fa-solid fa-envelope text-neonLime text-sm"></i>
            <span>info@mightbemedia.in</span>
          </div>
        </div>
      </div>

      <div className="brand-footer flex justify-between items-center border-t border-white/5 pt-4 text-[10px] text-white/40 z-10 w-full">
        <span className="font-mono">MightBeMedia • Build • Convert • Scale</span>
        <span className="font-mono">17 / 17</span>
      </div>
    </>
  );

  // Array of all slide render functions
  const slideRenderers = [
    slide1, slide2, slide3, slide4, slide5, slide6, slide7,
    slide8, slide9, slide10, slide11, slide12, slide13, slide14,
    slide15, slide16, slide17
  ];

  // Render slide content
  const renderSlideContent = (index: number) => {
    return slideRenderers[index]();
  };

  return (
    <>
      <Helmet>
        <title>Revenue System Proposal | MightBeMedia</title>
        <meta name="description" content="Premium conversion infrastructure for clinics and healthcare brands. Build your revenue system with MightBeMedia." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </Helmet>

      <div className="proposal-container min-h-screen bg-[#050507] text-white antialiased">
        {/* Navigation Bar */}
        <div className="fixed bottom-4 sm:top-4 sm:bottom-auto left-1/2 -translate-x-1/2 z-50 bg-[#070709]/95 backdrop-blur-md border border-white/10 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center justify-between gap-3 sm:gap-5 shadow-2xl transition-all duration-300 w-[94%] sm:w-auto max-w-[480px] sm:max-w-none">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <svg width="18" height="18" className="w-[18px] h-[18px] text-neonLime flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="font-display font-bold text-[9px] sm:text-xs tracking-widest text-white hidden xs:inline-block">MIGHTBEMEDIA</span>
          </div>
          
          <div className="h-4 w-px bg-white/20"></div>
          
          <div className="flex items-center gap-1 flex-shrink-0">
            <button 
              onClick={() => setIsPresenting(false)}
              className={`text-[9px] sm:text-xs bg-white/10 hover:bg-white/20 text-white font-mono px-2 py-1 sm:px-3 rounded-full transition-colors flex items-center gap-1 ${!isPresenting ? 'bg-white/20' : ''}`}
            >
              <i className="fa-solid fa-list-ul"></i> <span className="hidden xs:inline">Scroll</span>
            </button>
            <button 
              onClick={() => setIsPresenting(true)}
              className={`text-[9px] sm:text-xs font-mono px-2 py-1 sm:px-3 rounded-full transition-all flex items-center gap-1 ${isPresenting ? 'bg-neonLime text-black' : 'bg-white/5 hover:bg-neonLime hover:text-black text-white'}`}
            >
              <i className="fa-solid fa-play"></i> <span className="hidden xs:inline">Present</span>
            </button>
          </div>
          
          {isPresenting && (
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="h-4 w-px bg-white/20"></div>
              <button onClick={prevSlide} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                <i className="fa-solid fa-chevron-left text-[10px]"></i>
              </button>
              <span className="font-mono text-[10px] sm:text-xs text-neonLime min-w-[32px] text-center">{currentSlide + 1}/{totalSlides}</span>
              <button onClick={nextSlide} className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                <i className="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          )}
          
          <div className="h-4 w-px bg-white/20"></div>
          
          {/* AI Lab Trigger */}
          <button 
            onClick={() => setIsAIOpen(true)}
            className="relative group overflow-hidden bg-gradient-to-r from-neonLime to-emerald-400 text-black text-[9px] sm:text-xs font-bold font-mono px-2.5 py-1 sm:px-4 rounded-full flex items-center gap-1 transition-all duration-300 hover:scale-105 hover:shadow-neonGlow flex-shrink-0"
          >
            <i className="fa-solid fa-wand-magic-sparkles"></i> <span>AI Lab</span>
          </button>
        </div>

        {/* Slides Container */}
        <div className={`deck-wrapper ${isPresenting ? 'presenting-mode' : ''}`}>
          {Array.from({ length: totalSlides }, (_, idx) => (
            <div 
              key={idx}
              ref={el => slidesRef.current[idx] = el}
              className={`slide-container ${idx === 0 || idx === 2 || idx >= 14 ? 'bg-obsidian text-white' : 'bg-brandLight text-brandDark'} ${isPresenting && idx === currentSlide ? 'current-active' : ''}`}
              style={{ display: isPresenting && idx !== currentSlide ? 'none' : 'flex' }}
            >
              {renderSlideContent(idx)}
            </div>
          ))}
        </div>

{/* AI Lab Drawer - Mobile Optimized with Fill Space */}
<div 
  className={`fixed top-0 right-0 h-full w-full max-w-[500px] bg-[#0c0c10] border-l border-white/15 shadow-2xl z-50 transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col ${isAIOpen ? 'translate-x-0' : 'translate-x-full'}`}
>
  {/* Backdrop */}
  <div 
    className={`fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-none transition-opacity duration-500 ${isAIOpen ? 'opacity-100' : 'opacity-0'}`}
    onClick={() => setIsAIOpen(false)}
    style={{ zIndex: -1 }}
  />

  {/* Header - Compact */}
  <div className="p-3 sm:p-4 border-b border-white/10 flex items-center justify-between bg-[#0b0b0f] relative z-10 flex-shrink-0">
    <div className="flex items-center gap-2">
      <div className="w-2.5 h-2.5 rounded-full bg-neonLime animate-ping"></div>
      <div>
        <h3 className="font-display font-bold text-xs sm:text-sm tracking-tight text-white flex items-center gap-1.5">
          <i className="fa-solid fa-wand-magic-sparkles text-neonLime text-xs"></i> MBM AI Engine
        </h3>
        <p className="text-[7px] sm:text-[8px] font-mono uppercase tracking-wider text-white/50">Powered by Gemini</p>
      </div>
    </div>
    <button onClick={() => setIsAIOpen(false)} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all">
      <i className="fa-solid fa-xmark text-sm"></i>
    </button>
  </div>

  {/* Tabs - Compact */}
  <div className="px-2 py-1.5 sm:py-2 border-b border-white/10 bg-[#08080c] flex gap-1 flex-shrink-0">
    {['chatbot', 'script', 'proposal'].map(tab => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`flex-1 py-1.5 px-1 rounded-lg text-[8px] sm:text-[9px] font-mono font-bold uppercase transition-all duration-300 flex items-center justify-center gap-1 ${
          activeTab === tab 
            ? 'bg-neonLime text-black' 
            : 'text-white/70 hover:text-white bg-white/10 hover:bg-white/15'
        }`}
      >
        <i className={`fa-solid ${tab === 'chatbot' ? 'fa-comments' : tab === 'script' ? 'fa-video' : 'fa-file-contract'} text-[10px] sm:text-xs`}></i>
        <span className="hidden xs:inline">{tab}</span>
      </button>
    ))}
  </div>

  {/* Content - Fills remaining space with flex-1 */}
  <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 bg-[#0c0c10] min-h-0">
    {/* Chatbot Tab */}
    {activeTab === 'chatbot' && (
      <div className="flex flex-col h-full space-y-3">
        <div className="bg-white/5 border border-white/10 p-2.5 sm:p-3 rounded-xl flex-shrink-0">
          <h4 className="font-display font-bold text-[10px] sm:text-xs text-neonLime mb-0.5">Live Patient Bot Demo</h4>
          <p className="text-[8px] sm:text-[9px] text-white/60 leading-relaxed">
            Ask any skincare question to our AI receptionist.
          </p>
        </div>
        
        <div className="bg-[#121218] border border-white/10 rounded-xl flex-1 flex flex-col overflow-hidden min-h-[150px]">
          <div className="flex-1 p-2 sm:p-3 overflow-y-auto space-y-2">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[7px] sm:text-[8px] flex-shrink-0 ${msg.role === 'user' ? 'bg-white/15 text-white order-2' : 'bg-neonLime text-black'}`}>
                  <i className={`fa-solid ${msg.role === 'user' ? 'fa-user' : 'fa-user-doctor'} text-[8px] sm:text-[10px]`}></i>
                </div>
                <div className={`px-2 py-1.5 rounded-xl max-w-[80%] leading-relaxed text-[10px] sm:text-xs ${
                  msg.role === 'user' 
                    ? 'bg-neonLime/15 border border-neonLime/30 text-white rounded-l-xl rounded-br-xl font-medium' 
                    : 'bg-[#1c1c24] border border-white/10 text-white rounded-r-xl rounded-bl-xl font-medium'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-neonLime text-black flex items-center justify-center font-bold text-[7px] sm:text-[8px] flex-shrink-0">
                  <i className="fa-solid fa-user-doctor text-[8px] sm:text-[10px]"></i>
                </div>
                <div className="bg-[#1c1c24] border border-white/10 px-2 py-1.5 rounded-r-xl rounded-bl-xl max-w-[80%] text-white text-[10px] sm:text-xs">
                  <i className="fa-solid fa-spinner animate-spin"></i> Thinking...
                </div>
              </div>
            )}
          </div>
          <div className="px-2 py-1.5 border-t border-white/10 bg-[#09090d] flex gap-1 overflow-x-auto whitespace-nowrap scrollbar-none flex-shrink-0">
            <button 
              onClick={() => { setChatInput('What treatment do you have for dark acne scars?'); sendChatMessage(); }}
              className="text-[7px] sm:text-[8px] bg-[#1a1a24] hover:bg-[#252533] border border-white/15 px-2 py-0.5 rounded-full transition-all text-white font-medium"
            >
              Acne scars
            </button>
            <button 
              onClick={() => { setChatInput('Is laser safe for hyperpigmentation?'); sendChatMessage(); }}
              className="text-[7px] sm:text-[8px] bg-[#1a1a24] hover:bg-[#252533] border border-white/15 px-2 py-0.5 rounded-full transition-all text-white font-medium"
            >
              Hyperpigmentation
            </button>
          </div>
        </div>

        <div className="flex gap-2 flex-shrink-0">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendChatMessage()}
            placeholder="Type your question..."
            className="flex-1 bg-[#161622] border border-white/20 rounded-xl px-3 py-2 text-[10px] sm:text-xs focus:outline-none focus:border-neonLime text-white placeholder-white/40 min-h-[36px]"
          />
          <button onClick={sendChatMessage} className="bg-neonLime text-black px-3 py-2 rounded-xl text-[10px] sm:text-xs font-bold hover:scale-102 transition-all flex items-center justify-center gap-1 flex-shrink-0 min-h-[36px]">
            Send <i className="fa-regular fa-paper-plane"></i>
          </button>
        </div>
      </div>
    )}

    {/* Script Tab */}
    {activeTab === 'script' && (
      <div className="flex flex-col h-full space-y-3">
        <div className="bg-white/5 border border-white/10 p-2.5 sm:p-3 rounded-xl flex-shrink-0">
          <h4 className="font-display font-bold text-[10px] sm:text-xs text-neonLime mb-0.5">High-Retention Outline Builder</h4>
          <p className="text-[8px] sm:text-[9px] text-white/60 leading-relaxed">
            Input a skincare topic to generate a 30-second script outline.
          </p>
        </div>

        <div className="space-y-2 flex-shrink-0">
          <div>
            <label className="block text-[8px] sm:text-[9px] uppercase tracking-wider font-mono text-white/50 mb-0.5 font-bold">Skincare Topic</label>
            <input
              type="text"
              value={scriptTopic}
              onChange={(e) => setScriptTopic(e.target.value)}
              placeholder="e.g., Hydrafacial vs Chemical Peel"
              className="w-full bg-[#161622] border border-white/20 rounded-xl px-3 py-2 text-[10px] sm:text-xs focus:outline-none focus:border-neonLime text-white placeholder-white/40"
            />
          </div>
          <button 
            onClick={generateScript}
            disabled={isScriptLoading}
            className="w-full bg-gradient-to-r from-neonLime to-emerald-400 text-black py-2 rounded-xl text-[10px] sm:text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 disabled:opacity-50"
          >
            <i className={`fa-solid fa-cube ${isScriptLoading ? 'animate-spin' : ''}`}></i> 
            {isScriptLoading ? 'Generating...' : 'Generate Reel Outline'}
          </button>
        </div>

        {showScriptResult && (
          <div className="flex-1 flex flex-col space-y-2 min-h-0">
            <label className="block text-[8px] sm:text-[9px] uppercase tracking-wider font-mono text-white/50 font-bold flex-shrink-0">Generated outline</label>
            <div className="bg-[#121218] border border-white/10 rounded-xl p-3 text-[10px] sm:text-xs font-medium text-white leading-relaxed overflow-y-auto flex-1 min-h-[100px] whitespace-pre-wrap font-sans">
              {scriptResult}
            </div>
            <button 
              onClick={() => copyToClipboard(scriptResult)}
              className="w-full bg-white/10 hover:bg-white/15 border border-white/15 text-white py-1.5 rounded-xl text-[10px] sm:text-xs transition-all flex items-center justify-center gap-2 flex-shrink-0"
            >
              <i className="fa-solid fa-copy"></i> Copy Script
            </button>
          </div>
        )}
      </div>
    )}

    {/* Proposal Tab */}
    {activeTab === 'proposal' && (
      <div className="flex flex-col h-full space-y-3">
        <div className="bg-white/5 border border-white/10 p-2.5 sm:p-3 rounded-xl flex-shrink-0">
          <h4 className="font-display font-bold text-[10px] sm:text-xs text-neonLime mb-0.5">Proposal Advisor</h4>
          <p className="text-[8px] sm:text-[9px] text-white/60 leading-relaxed">
            Ask about our packages, pricing, or support coverage.
          </p>
        </div>

        <div className="bg-[#121218] border border-white/10 rounded-xl flex-1 flex flex-col overflow-hidden min-h-[150px]">
          <div className="flex-1 p-2 sm:p-3 overflow-y-auto space-y-2">
            {proposalMessages.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[7px] sm:text-[8px] flex-shrink-0 ${msg.role === 'user' ? 'bg-white/15 text-white order-2' : 'bg-neonLime text-black'}`}>
                  <i className={`fa-solid ${msg.role === 'user' ? 'fa-user' : 'fa-file-contract'} text-[8px] sm:text-[10px]`}></i>
                </div>
                <div className={`px-2 py-1.5 rounded-xl max-w-[80%] leading-relaxed text-[10px] sm:text-xs ${
                  msg.role === 'user' 
                    ? 'bg-neonLime/15 border border-neonLime/30 text-white rounded-l-xl rounded-br-xl font-medium' 
                    : 'bg-[#1c1c24] border border-white/10 text-white rounded-r-xl rounded-bl-xl font-medium'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-neonLime text-black flex items-center justify-center font-bold text-[7px] sm:text-[8px] flex-shrink-0">
                  <i className="fa-solid fa-file-contract text-[8px] sm:text-[10px]"></i>
                </div>
                <div className="bg-[#1c1c24] border border-white/10 px-2 py-1.5 rounded-r-xl rounded-bl-xl max-w-[80%] text-white text-[10px] sm:text-xs">
                  <i className="fa-solid fa-spinner animate-spin"></i> Thinking...
                </div>
              </div>
            )}
          </div>
          <div className="px-2 py-1.5 border-t border-white/10 bg-[#09090d] flex gap-1 overflow-x-auto whitespace-nowrap scrollbar-none flex-shrink-0">
            <button 
              onClick={() => { setProposalInput('What does the ₹20,000 setup include?'); sendProposalMessage(); }}
              className="text-[7px] sm:text-[8px] bg-[#1a1a24] hover:bg-[#252533] border border-white/15 px-2 py-0.5 rounded-full transition-all text-white font-medium"
            >
              Setup cost
            </button>
            <button 
              onClick={() => { setProposalInput('Tell me about the 3-year support.'); sendProposalMessage(); }}
              className="text-[7px] sm:text-[8px] bg-[#1a1a24] hover:bg-[#252533] border border-white/15 px-2 py-0.5 rounded-full transition-all text-white font-medium"
            >
              3-Year support
            </button>
          </div>
        </div>

        <div className="flex gap-2 flex-shrink-0">
          <input
            type="text"
            value={proposalInput}
            onChange={(e) => setProposalInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendProposalMessage()}
            placeholder="Type proposal question..."
            className="flex-1 bg-[#161622] border border-white/20 rounded-xl px-3 py-2 text-[10px] sm:text-xs focus:outline-none focus:border-neonLime text-white placeholder-white/40 min-h-[36px]"
          />
          <button onClick={sendProposalMessage} className="bg-neonLime text-black px-3 py-2 rounded-xl text-[10px] sm:text-xs font-bold hover:scale-102 transition-all flex items-center justify-center gap-1 flex-shrink-0 min-h-[36px]">
            Ask <i className="fa-regular fa-paper-plane"></i>
          </button>
        </div>
      </div>
    )}
  </div>
</div>
      </div>
    </>
  );
};

export default Proposal;
