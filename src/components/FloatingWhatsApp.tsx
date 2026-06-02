import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919680801786"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-50 group"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-jaipur-pink/40 animate-ping" />

      {/* Button */}
      <span className="relative flex w-16 h-16 items-center justify-center rounded-full bg-gradient-to-br from-jaipur-pink-deep to-jaipur-pink shadow-[0_0_30px_rgba(232,83,106,0.5)] border-2 border-jaipur-gold/40 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(232,83,106,0.7)] transition-all duration-300">
        <MessageCircle size={30} className="text-white" />
      </span>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-jaipur-dark text-white text-xs font-ui font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg border border-jaipur-pink/20">
        Chat with us 🌸
      </span>
    </a>
  );
}
