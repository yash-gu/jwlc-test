import { Star } from 'lucide-react';

export default function Testimonials() {
  const avatar = new URL('./images/WhatsApp Image 2026-05-27 at 10.09.23.jpeg', import.meta.url).href;

  const testimonials = [
    {
      name: 'Deepak Gupta',
      achievement: 'Local Guide • 11 reviews • 2 photos',
      rating: 5,
      comment: 'Amazing Community and Shandaar coach',
      image: avatar,
    },
    {
      name: 'Richa Agarwal',
      achievement: '3 reviews • 0 photos',
      rating: 5,
      comment: 'Very dedicated and disciplined .... always attending to all our queries',
      image: avatar,
    },
    {
      name: 'Ashish Dhawan',
      achievement: 'Local Guide • 41 reviews • 2 photos',
      rating: 5,
      comment: "If you join JWL then it will be one of the best decision you will ever take regarding your health.The team is knowledgeable and genuinely cares about your well-being.",
      image: avatar,
    },
    {
      name: 'Modest Hijabi 21',
      achievement: '0 reviews • 0 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Azba Khatoon',
      achievement: '6 reviews • 19 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Afreen Hashmi',
      achievement: '0 reviews • 0 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Ruman Hameed',
      achievement: '0 reviews • 0 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Nazmeen Baby',
      achievement: '0 reviews • 0 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Khan Ayesha',
      achievement: '1 review • 0 photos',
      rating: 5,
      comment: 'Very good',
      image: avatar,
    },
    {
      name: 'Sunita Dhancholia',
      achievement: '2 reviews • 1 photo',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Mayank Saraswat',
      achievement: '10 reviews • 0 photos',
      rating: 5,
      comment: 'This community is what I call as Life changer in a healthy way.',
      image: avatar,
    },
    {
      name: 'Suman',
      achievement: '0 reviews • 0 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Diksha Kapoor Khanna',
      achievement: '1 review • 0 photos',
      rating: 5,
      comment: 'I have joined Jaipur Wellness Community in 2022 for weight loss.. With the help of Mohsin I reduced 35 kgs weight loss...',
      image: avatar,
    },
    {
      name: 'Hashim Khan',
      achievement: '1 review • 0 photos',
      rating: 5,
      comment: "It's not just about weight loss — they also focus on mental health and overall well-being. The instructors go above and...",
      image: avatar,
    },
    {
      name: 'Aliya Khan',
      achievement: '0 reviews • 0 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Salma Khan',
      achievement: '1 review • 0 photos',
      rating: 5,
      comment: 'Mujhe JWL Community ke daily sessions mein jaana bahut accha lagta hai. Har din naya motivation milta hai, guidance perfect hoti hai aur health mein amazing transformation dekhne ko milta hai.',
      image: avatar,
    },
    {
      name: 'Sylvester Nazareth',
      achievement: '1 review • 0 photos',
      rating: 5,
      comment: 'Very good experience',
      image: avatar,
    },
    {
      name: 'Kashim Khan',
      achievement: '3 reviews • 0 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Seerat Hasan',
      achievement: '1 review • 0 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Amreen Khan',
      achievement: '0 reviews • 0 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Deepti Saraswat',
      achievement: '0 reviews • 0 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Shruti',
      achievement: '5 reviews • 0 photos',
      rating: 5,
      comment: 'Hi all I want to share my remarkable journey...',
      image: avatar,
    },
    {
      name: 'Ishan Khan',
      achievement: '7 reviews • 0 photos',
      rating: 5,
      comment: 'Very amazing service provide by Mr. Mohsin khan.',
      image: avatar,
    },
    {
      name: 'Shebar Siddiqui',
      achievement: '2 reviews • 0 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Mansi Jain',
      achievement: '0 reviews • 0 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Dalwinder Singh',
      achievement: '2 reviews • 0 photos',
      rating: 5,
      comment: 'Excellent',
      image: avatar,
    },
    {
      name: 'Kajal Tuli',
      achievement: '1 review • 1 photo',
      rating: 5,
      comment: 'I m absolutely loving the results. I have been using it for the last five months and I have lost 13.5 kgs. My energy...',
      image: avatar,
    },
    {
      name: 'Akanksha Marwal',
      achievement: '2 reviews • 0 photos',
      rating: 5,
      comment: 'The Jaipur Wells community is truly one of a kind—so helpful, genuine, and supportive in every way. Their dedication...',
      image: avatar,
    },
    {
      name: 'Gitika Sharma',
      achievement: '1 review • 1 photo',
      rating: 5,
      comment: 'Absolutely amazing 🤩 experience ✨',
      image: avatar,
    },
    {
      name: 'Pratibha Singh',
      achievement: '1 review • 0 photos',
      rating: 5,
      comment: 'It is really helpful and helped me move towards a healthy lifestyle',
      image: avatar,
    },
    {
      name: 'Nidhi Balodia',
      achievement: '3 reviews • 0 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Dipali Saraswat',
      achievement: '1 review • 0 photos',
      rating: 5,
      comment: '',
      image: avatar,
    },
    {
      name: 'Afreen Khan',
      achievement: '2 reviews • 0 photos',
      rating: 5,
      comment: 'JWL Community ne meri life badal di. Supportive coach mohsin sir, daily sessions aur sustainable weight loss journey ne mujhe healthier, confident aur disciplined banaya. Highly recommended for real transformation!',
      image: avatar,
    },
    {
      name: 'Neha Mishra',
      achievement: '4 reviews • 0 photos',
      rating: 5,
      comment: 'I and my family members were coached by Mohsin sir. He became our family coach....',
      image: avatar,
    },
    {
      name: 'Preet S',
      achievement: 'Local Guide • 9 reviews • 0 photos',
      rating: 5,
      comment: 'Jaipur Weight Loss is not just another place to lose weight. Here you get the information on how by making lifestyle...',
      image: avatar,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Real transformations from our community members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group rounded-2xl p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-600">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.achievement}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
