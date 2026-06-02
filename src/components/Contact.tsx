import { Phone, MessageCircle, Mail, MapPin, Navigation } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '919680801786';

// Builds a pre-filled WhatsApp message from form data and opens wa.me
function sendToWhatsApp(data: {
  name: string;
  email: string;
  phone: string;
  goal: string;
  message: string;
}) {
  const goalLabels: Record<string, string> = {
    'weight-loss': 'Weight Loss',
    'weight-gain': 'Weight Gain',
    'lifestyle': 'Lifestyle Transformation',
    'consultation': 'Free Consultation',
  };

  const text = [
    `🌸 *New Enquiry — Jaipur Wellness Community*`,
    ``,
    `👤 *Name:* ${data.name}`,
    `📞 *Phone:* ${data.phone}`,
    `📧 *Email:* ${data.email}`,
    `🎯 *Goal:* ${goalLabels[data.goal] || data.goal}`,
    data.message ? `💬 *Message:* ${data.message}` : '',
    ``,
    `_Sent from jaipurweightloss.com_`,
  ]
    .filter(Boolean)
    .join('\n');

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', goal: '', message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp(formData);
    setFormData({ name: '', email: '', phone: '', goal: '', message: '' });
  };

  const contactItems = [
    {
      href: 'tel:9680801786',
      icon: Phone,
      label: 'Phone',
      value: '+91 9680801786',
      color: 'from-jaipur-pink-deep to-jaipur-pink',
      bg: 'bg-jaipur-pink-pale dark:bg-jaipur-pink-deep/20',
    },
    {
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 9680801786',
      color: 'from-jaipur-gold to-jaipur-gold-warm',
      bg: 'bg-amber-50 dark:bg-jaipur-gold/10',
    },
    {
      href: 'mailto:jaipurweightloss@gmail.com',
      icon: Mail,
      label: 'Email',
      value: 'jaipurweightloss@gmail.com',
      color: 'from-jaipur-terracotta to-jaipur-pink',
      bg: 'bg-rose-50 dark:bg-jaipur-terracotta/10',
    },
  ];

  const InstagramLogo = () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <defs>
        <radialGradient id="ig-grad-contact" cx="30%" cy="107%" r="150%">
          <stop offset="0%"  stopColor="#fdf497" />
          <stop offset="5%"  stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig-grad-contact)" />
      <path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4z" fill="white" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
    </svg>
  );

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-jaipur-pink/20 dark:border-jaipur-pink/15 bg-white dark:bg-[#2a1018] text-jaipur-dark dark:text-white placeholder-jaipur-dark/30 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-jaipur-pink/40 focus:border-jaipur-pink/50 transition-all font-ui text-sm';

  // Google Maps directions URL for the address
  const mapsDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=J-128+Dhobiyon+Ka+Mod+Near+Oxford+School+Adarsh+Nagar+Jaipur+Rajasthan';

  // Embedded map src (no API key needed for embed)
  const mapEmbedUrl =
    'https://maps.google.com/maps?q=Adarsh+Nagar+Jaipur+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed';

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jaipur-pink-pale/40 to-white dark:from-[#220e14] dark:to-[#1a0d10] relative overflow-hidden hawa-mahal-border">
      <div className="absolute top-0 right-0 w-80 h-80 bg-jaipur-pink/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-jaipur-gold/8 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-10 bg-jaipur-pink" />
            <span className="text-jaipur-pink font-serifPremium font-semibold text-xs tracking-widest uppercase">Start Today</span>
            <span className="h-px w-10 bg-jaipur-pink" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-jaipur-dark dark:text-white mb-4 font-serifPremium">
            Take the First Step{' '}
            <span className="bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-gold bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="text-base text-jaipur-dark/60 dark:text-gray-400 font-ui max-w-xl mx-auto">
            Mrs. Dipali started at 53. Mr. Manpreet started at 172 kg. They didn't wait for the perfect moment — they just started. So can you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              { icon: '🆓', text: 'Free First Consultation' },
              { icon: '⚡', text: 'Results in Weeks' },
              { icon: '🤝', text: 'Personal Coach Support' },
              { icon: '🌸', text: 'No Extreme Diets' },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#2a1018] border border-jaipur-pink/20 shadow-sm text-sm font-medium text-jaipur-dark dark:text-jaipur-pink-light font-ui">
                <span>{b.icon}</span><span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Top row: contact info + form ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* Left: contact info */}
          <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-700">
            <h3 className="text-2xl font-bold text-jaipur-dark dark:text-white font-serifPremium mb-5">
              Contact Information
            </h3>

            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 p-4 rounded-xl ${item.bg} border border-jaipur-pink/10 hover:border-jaipur-pink/30 hover:shadow-sandstone transition-all duration-300 group`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-sandstone group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-jaipur-dark/50 dark:text-gray-500 font-ui">{item.label}</p>
                    <p className="font-semibold text-jaipur-dark dark:text-white font-ui text-sm">{item.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Address + Get Directions */}
            <div className="p-4 rounded-xl bg-jaipur-pink-pale/50 dark:bg-[#2a1018] border border-jaipur-pink/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-jaipur-pink to-jaipur-terracotta rounded-xl flex items-center justify-center shadow-sandstone flex-shrink-0">
                  <MapPin size={22} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-jaipur-dark/50 dark:text-gray-500 font-ui mb-1">Location</p>
                  <p className="font-semibold text-jaipur-dark dark:text-white font-ui text-sm leading-relaxed">
                    J-128, Dhobiyon Ka Mod, Near Oxford School,<br />
                    Shamshan Road, Adarsh Nagar, Jaipur
                  </p>
                  <p className="text-xs text-jaipur-dark/60 dark:text-gray-400 mt-1.5 font-ui">
                    ⏰ Timing: <span className="font-semibold text-jaipur-pink">8:30 AM – 9:30 AM</span>
                  </p>
                </div>
              </div>
              {/* Google Maps directions button */}
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-jaipur-pink-deep to-jaipur-pink text-white text-sm font-bold font-ui hover:scale-[1.02] hover:shadow-sandstone transition-all duration-300 border border-jaipur-gold/20"
              >
                <Navigation size={16} />
                Get Directions on Google Maps
              </a>
            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/jaipurweightloss?igsh=NDNmbWlvazE2bzZl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#fdf497]/10 via-[#fd5949]/10 to-[#285AEB]/10 dark:from-[#fdf497]/5 dark:via-[#fd5949]/5 dark:to-[#285AEB]/5 border border-[#d6249f]/20 hover:border-[#d6249f]/50 hover:shadow-sandstone transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sandstone bg-white dark:bg-[#1a0d10] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <InstagramLogo />
              </div>
              <div>
                <p className="text-xs text-jaipur-dark/50 dark:text-gray-500 font-ui">Instagram</p>
                <p className="font-semibold text-jaipur-dark dark:text-white font-ui text-sm">@jaipurweightloss</p>
                <p className="text-xs text-[#d6249f] dark:text-[#fd5949] font-ui mt-0.5">Follow us for daily tips & transformations</p>
              </div>
            </a>
          </div>

          {/* Right: WhatsApp-powered form */}
          <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white dark:bg-[#2a1018] p-8 rounded-2xl shadow-sandstone border border-jaipur-pink/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-jaipur-gold">✦</span>
                <h3 className="text-lg font-bold text-jaipur-dark dark:text-white font-serifPremium">
                  Send us a Message
                </h3>
                <span className="text-jaipur-gold">✦</span>
              </div>
              {/* WhatsApp notice */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 mb-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-green-500"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <p className="text-xs text-green-700 dark:text-green-400 font-ui">
                  Submitting will open WhatsApp with your message pre-filled
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-jaipur-dark/70 dark:text-gray-300 mb-1.5 font-ui uppercase tracking-wide">Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your name" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-jaipur-dark/70 dark:text-gray-300 mb-1.5 font-ui uppercase tracking-wide">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-jaipur-dark/70 dark:text-gray-300 mb-1.5 font-ui uppercase tracking-wide">Phone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} placeholder="+91 XXXXXXXXXX" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-jaipur-dark/70 dark:text-gray-300 mb-1.5 font-ui uppercase tracking-wide">Goal *</label>
                <select name="goal" value={formData.goal} onChange={handleChange} required className={inputClass}>
                  <option value="">Select your goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="weight-gain">Weight Gain</option>
                  <option value="lifestyle">Lifestyle Transformation</option>
                  <option value="consultation">Free Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-jaipur-dark/70 dark:text-gray-300 mb-1.5 font-ui uppercase tracking-wide">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} placeholder="Tell us about your fitness journey..." />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-ui border border-green-400/30"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* ── Google Maps embed ── */}
        <div className="rounded-2xl overflow-hidden border border-jaipur-pink/20 shadow-sandstone animate-in fade-in duration-700">
          {/* Map header */}
          <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-jaipur-pink-deep to-jaipur-pink">
            <div className="flex items-center gap-2 text-white">
              <MapPin size={16} />
              <span className="font-semibold font-ui text-sm">J-128, Dhobiyon Ka Mod, Adarsh Nagar, Jaipur</span>
            </div>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-jaipur-pink-deep text-xs font-bold rounded-lg hover:bg-jaipur-pink-pale transition-colors duration-200 font-ui"
            >
              <Navigation size={12} />
              Get Directions
            </a>
          </div>
          {/* Embedded map */}
          <div className="w-full h-72 md:h-96 bg-jaipur-pink-pale dark:bg-[#2a1018]">
            <iframe
              title="Jaipur Wellness Community Location"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
