import { Star } from 'lucide-react';

export default function Testimonials() {
  const avatar = new URL('./images/WhatsApp Image 2026-05-27 at 10.09.23.jpeg', import.meta.url).href;

  const testimonials = [
    { name: 'Deepak Gupta',       achievement: 'Local Guide • 11 reviews',  rating: 5, comment: 'Amazing Community and Shandaar coach' },
    { name: 'Richa Agarwal',      achievement: '3 reviews',                  rating: 5, comment: 'Very dedicated and disciplined .... always attending to all our queries' },
    { name: 'Ashish Dhawan',      achievement: 'Local Guide • 41 reviews',   rating: 5, comment: "If you join JWL then it will be one of the best decision you will ever take regarding your health. The team is knowledgeable and genuinely cares about your well-being." },
    { name: 'Modest Hijabi 21',   achievement: '0 reviews',                  rating: 5, comment: '' },
    { name: 'Azba Khatoon',       achievement: '6 reviews • 19 photos',      rating: 5, comment: '' },
    { name: 'Afreen Hashmi',      achievement: '0 reviews',                  rating: 5, comment: '' },
    { name: 'Ruman Hameed',       achievement: '0 reviews',                  rating: 5, comment: '' },
    { name: 'Nazmeen Baby',       achievement: '0 reviews',                  rating: 5, comment: '' },
    { name: 'Khan Ayesha',        achievement: '1 review',                   rating: 5, comment: 'Very good' },
    { name: 'Sunita Dhancholia',  achievement: '2 reviews • 1 photo',        rating: 5, comment: '' },
    { name: 'Mayank Saraswat',    achievement: '10 reviews',                 rating: 5, comment: 'This community is what I call as Life changer in a healthy way.' },
    { name: 'Suman',              achievement: '0 reviews',                  rating: 5, comment: '' },
    { name: 'Diksha Kapoor Khanna', achievement: '1 review',                 rating: 5, comment: 'I have joined Jaipur Wellness Community in 2022 for weight loss.. With the help of Mohsin I reduced 35 kgs weight loss...' },
    { name: 'Hashim Khan',        achievement: '1 review',                   rating: 5, comment: "It's not just about weight loss — they also focus on mental health and overall well-being." },
    { name: 'Aliya Khan',         achievement: '0 reviews',                  rating: 5, comment: '' },
    { name: 'Salma Khan',         achievement: '1 review',                   rating: 5, comment: 'Mujhe JWL Community ke daily sessions mein jaana bahut accha lagta hai. Har din naya motivation milta hai.' },
    { name: 'Sylvester Nazareth', achievement: '1 review',                   rating: 5, comment: 'Very good experience' },
    { name: 'Kashim Khan',        achievement: '3 reviews',                  rating: 5, comment: '' },
    { name: 'Seerat Hasan',       achievement: '1 review',                   rating: 5, comment: '' },
    { name: 'Amreen Khan',        achievement: '0 reviews',                  rating: 5, comment: '' },
    { name: 'Deepti Saraswat',    achievement: '0 reviews',                  rating: 5, comment: '' },
    { name: 'Shruti',             achievement: '5 reviews',                  rating: 5, comment: 'Hi all I want to share my remarkable journey...' },
    { name: 'Ishan Khan',         achievement: '7 reviews',                  rating: 5, comment: 'Very amazing service provide by Mr. Mohsin khan.' },
    { name: 'Shebar Siddiqui',    achievement: '2 reviews',                  rating: 5, comment: '' },
    { name: 'Mansi Jain',         achievement: '0 reviews',                  rating: 5, comment: '' },
    { name: 'Dalwinder Singh',    achievement: '2 reviews',                  rating: 5, comment: 'Excellent' },
    { name: 'Kajal Tuli',         achievement: '1 review • 1 photo',         rating: 5, comment: 'I m absolutely loving the results. I have been using it for the last five months and I have lost 13.5 kgs.' },
    { name: 'Akanksha Marwal',    achievement: '2 reviews',                  rating: 5, comment: 'The Jaipur Wells community is truly one of a kind—so helpful, genuine, and supportive in every way.' },
    { name: 'Gitika Sharma',      achievement: '1 review • 1 photo',         rating: 5, comment: 'Absolutely amazing 🤩 experience ✨' },
    { name: 'Pratibha Singh',     achievement: '1 review',                   rating: 5, comment: 'It is really helpful and helped me move towards a healthy lifestyle' },
    { name: 'Nidhi Balodia',      achievement: '3 reviews',                  rating: 5, comment: '' },
    { name: 'Dipali Saraswat',    achievement: '1 review',                   rating: 5, comment: '' },
    { name: 'Afreen Khan',        achievement: '2 reviews',                  rating: 5, comment: 'JWL Community ne meri life badal di. Supportive coach mohsin sir, daily sessions aur sustainable weight loss journey ne mujhe healthier, confident aur disciplined banaya.' },
    { name: 'Neha Mishra',        achievement: '4 reviews',                  rating: 5, comment: 'I and my family members were coached by Mohsin sir. He became our family coach....' },
    { name: 'Preet S',            achievement: 'Local Guide • 9 reviews',    rating: 5, comment: 'Jaipur Weight Loss is not just another place to lose weight. Here you get the information on how by making lifestyle changes...' },
  ];

  // Get initials for avatar fallback
  const getInitials = (name: string) =>
    name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a0d10] relative overflow-hidden hawa-mahal-border">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-jaipur-pink/8 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-jaipur-gold/8 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section heading */}
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-10 bg-jaipur-pink" />
            <span className="text-jaipur-pink font-serifPremium font-semibold text-xs tracking-widest uppercase">
              Royal Reviews
            </span>
            <span className="h-px w-10 bg-jaipur-pink" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-jaipur-dark dark:text-white mb-4 font-serifPremium">
            Success{' '}
            <span className="bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-gold bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-base text-jaipur-dark/60 dark:text-gray-400 font-ui">
            Real transformations from our Pink City community members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group rounded-2xl p-6 bg-gradient-to-br from-jaipur-pink-pale/60 to-white dark:from-[#2a1018] dark:to-[#220e14] border border-jaipur-pink/12 dark:border-jaipur-pink/8 shadow-sandstone hover:shadow-sandstone-hover hover:-translate-y-1.5 transition-all duration-400 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-jaipur-pink/40 flex-shrink-0 bg-gradient-to-br from-jaipur-pink-deep to-jaipur-pink flex items-center justify-center">
                  <img
                    src={avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <span className="text-white text-xs font-bold font-serifPremium absolute">
                    {getInitials(t.name)}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-jaipur-dark dark:text-white text-sm font-serifPremium truncate">
                    {t.name}
                  </h3>
                  <p className="text-xs text-jaipur-dark/50 dark:text-gray-500 truncate">
                    {t.achievement}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-jaipur-gold text-jaipur-gold" />
                ))}
              </div>

              {/* Comment */}
              {t.comment ? (
                <p className="text-jaipur-dark/70 dark:text-gray-300 text-sm leading-relaxed font-ui">
                  "{t.comment}"
                </p>
              ) : (
                <p className="text-jaipur-dark/30 dark:text-gray-600 text-xs italic font-ui">
                  ✦ Rated 5 stars
                </p>
              )}

              {/* Bottom accent */}
              <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-jaipur-pink to-jaipur-gold group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
