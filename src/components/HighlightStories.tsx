const stories = [
  {
    id: 1,
    image: '/hilight/h1.jpeg',
    name: 'Mrs. Dipali',
    tag: 'School Teacher · Pune',
    stats: [
      { icon: '⚖️', text: '32 KG Weight Loss' },
      { icon: '👟', text: '10,000+ Steps Daily' },
      { icon: '⚡', text: 'More Energy' },
      { icon: '💪', text: 'More Confidence' },
      { icon: '❤️', text: 'Better Health' },
      { icon: '🌟', text: 'A New Life' },
    ],
    paragraphs: [
      "A school teacher from Pune, Mrs. Dipali's life changed completely after the loss of her husband. She was emotionally broken, overweight, low on energy, and struggling with multiple health challenges. Even walking properly felt difficult. Every day seemed harder than the last.",
      "At the age of 53, many people told her that weight loss was impossible. But she decided to give herself one more chance.",
      "She joined Jaipur Wellness Community and started focusing on her health, one day at a time. No magic. No shortcuts. Just consistency, support, and belief.",
      "The biggest transformation wasn't just the weight she lost... It was the confidence she gained. It was the smile she got back. It was proving that age is never a limitation and that it's never too late to start again.",
      "From struggling to walk... To walking 10,000 steps every day. From feeling helpless... To becoming an inspiration.",
    ],
    closing: '🔥 53 years young and stronger than ever. If she can do it, so can you. Your age is not your limitation. Your decision is.',
  },
  {
    id: 2,
    image: '/hilight/h2.jpeg',
    name: 'Mr. Manpreet Singh Chhabra',
    tag: 'Jaipur Wellness Community',
    stats: [
      { icon: '⚖️', text: '75+ KG Weight Loss' },
      { icon: '🚶', text: 'Walks Comfortably' },
      { icon: '✈️', text: 'Travels Freely' },
      { icon: '💼', text: 'Works Efficiently' },
      { icon: '💪', text: 'Renewed Confidence' },
      { icon: '🌟', text: 'A New Life' },
    ],
    paragraphs: [
      "When I joined Jaipur Wellness Community, my weight was 172 kg. My health was deteriorating day by day. I struggled to walk, felt tired all the time, and even simple daily activities became difficult. The excess weight had affected not only my physical health but also my confidence, emotions, and overall quality of life.",
      "I often felt frustrated, irritable, and emotionally drained. Traveling, enjoying life, and achieving my personal goals seemed impossible.",
      "Joining Jaipur Wellness Community was one of the best decisions of my life. With the right guidance, support, accountability, and a sustainable lifestyle approach, I gradually transformed my health and mindset.",
      "Today, I have successfully lost more than 75 kg. I can walk comfortably, travel freely, perform my job efficiently, and enjoy life with renewed energy and confidence. Most importantly, I am now able to achieve the goals and dreams that once felt out of reach.",
      "This journey was not just about losing weight; it was about gaining a new life. I am healthier, happier, stronger, and more confident than ever before.",
      "I am truly grateful to Jaipur Wellness Community and Coach Mohsin for helping me believe that transformation is possible when you stay committed to your goal.",
    ],
    closing: '— Mr. Manpreet Singh Chhabra · 75+ kg Weight Loss · Jaipur Wellness Community 💪🏆✨',
  },
  {
    id: 3,
    image: '/hilight/h3.jpeg',
    name: 'Mr. Manpreet Singh Chhabra',
    tag: 'Jaipur Wellness Community',
    stats: [
      { icon: '⚖️', text: '75+ KG Weight Loss' },
      { icon: '🚶', text: 'Walks Comfortably' },
      { icon: '✈️', text: 'Travels Freely' },
      { icon: '💼', text: 'Works Efficiently' },
      { icon: '💪', text: 'Renewed Confidence' },
      { icon: '🌟', text: 'A New Life' },
    ],
    paragraphs: [
      "When I joined Jaipur Wellness Community, my weight was 172 kg. My health was deteriorating day by day. I struggled to walk, felt tired all the time, and even simple daily activities became difficult. The excess weight had affected not only my physical health but also my confidence, emotions, and overall quality of life.",
      "I often felt frustrated, irritable, and emotionally drained. Traveling, enjoying life, and achieving my personal goals seemed impossible.",
      "Joining Jaipur Wellness Community was one of the best decisions of my life. With the right guidance, support, accountability, and a sustainable lifestyle approach, I gradually transformed my health and mindset.",
      "Today, I have successfully lost more than 75 kg. I can walk comfortably, travel freely, perform my job efficiently, and enjoy life with renewed energy and confidence. Most importantly, I am now able to achieve the goals and dreams that once felt out of reach.",
      "This journey was not just about losing weight; it was about gaining a new life. I am healthier, happier, stronger, and more confident than ever before.",
      "I am truly grateful to Jaipur Wellness Community and Coach Mohsin for helping me believe that transformation is possible when you stay committed to your goal.",
    ],
    closing: '— Mr. Manpreet Singh Chhabra · 75+ kg Weight Loss · Jaipur Wellness Community 💪🏆',
  },
];

export default function HighlightStories() {
  return (
    <section
      id="stories"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-jaipur-pink-pale/40 dark:from-[#1a0d10] dark:to-[#220e14] relative overflow-hidden hawa-mahal-border"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-jaipur-pink/8 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-jaipur-gold/6 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-10 bg-jaipur-pink" />
            <span className="text-jaipur-pink font-serifPremium font-semibold text-xs tracking-widest uppercase">
              Real Transformations
            </span>
            <span className="h-px w-10 bg-jaipur-pink" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-jaipur-dark dark:text-white mb-4 font-serifPremium">
            Weight Loss{' '}
            <span className="bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-gold bg-clip-text text-transparent">
              Highlight Stories
            </span>
          </h2>
          <p className="text-base text-jaipur-dark/60 dark:text-gray-400 font-ui">
            Real people. Real results. From the heart of Jaipur's wellness community.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className="rounded-3xl overflow-hidden bg-white dark:bg-[#2a1018] border border-jaipur-pink/15 shadow-sandstone hover:shadow-sandstone-hover hover:-translate-y-1 transition-all duration-500 animate-in fade-in flex flex-col"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* ── Full image — no crop, no overlay, fully visible ── */}
              <div className="w-full">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-auto block"
                />
              </div>

              {/* ── Card body ── */}
              <div className="p-6 flex flex-col flex-1">

                {/* Name badge */}
                <div className="mb-5">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-jaipur-pink-deep to-jaipur-pink border border-jaipur-gold/30 shadow-sandstone">
                    <span className="text-white font-bold font-serifPremium text-sm">{story.name}</span>
                    <span className="text-jaipur-gold opacity-50">·</span>
                    <span className="text-jaipur-pink-light text-xs font-ui">{story.tag}</span>
                  </div>
                </div>

                {/* Stats grid */}
                {story.stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {story.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-jaipur-pink-pale/60 dark:bg-[#1a0d10] border border-jaipur-pink/10"
                      >
                        <span className="text-sm">{stat.icon}</span>
                        <span className="text-xs font-semibold text-jaipur-dark dark:text-white font-ui leading-tight">{stat.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Divider */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px flex-1 bg-gradient-to-r from-jaipur-pink/30 to-transparent" />
                  <span className="text-jaipur-gold text-xs">✦</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-jaipur-pink/30 to-transparent" />
                </div>

                {/* Story paragraphs */}
                <div className="space-y-3 flex-1">
                  {story.paragraphs.map((para, i) => (
                    <p key={i} className="text-sm text-jaipur-dark/75 dark:text-gray-300 leading-relaxed font-ui">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Closing quote */}
                {story.closing && (
                  <div className="mt-5 p-4 rounded-2xl bg-gradient-to-br from-jaipur-pink-pale to-white dark:from-[#1a0d10] dark:to-[#220e14] border border-jaipur-pink/20">
                    <p className="text-sm font-semibold text-jaipur-pink-deep dark:text-jaipur-pink font-serifPremium leading-relaxed">
                      {story.closing}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-jaipur-dark/60 dark:text-gray-400 font-ui text-sm mb-4">
            Ready to write your own success story?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-jaipur-pink-deep to-jaipur-pink text-white font-bold rounded-xl shadow-sandstone hover:shadow-sandstone-hover hover:scale-105 transition-all duration-300 font-ui border border-jaipur-gold/20"
          >
            Start Your Journey 🌸
          </a>
        </div>
      </div>
    </section>
  );
}
