import { useState, useEffect } from 'react';
import { 
  Scale, 
  Droplet, 
  Flame, 
  User, 
  Share2, 
  MessageCircle, 
  Users, 
  Check, 
  Sparkles, 
  Info
} from 'lucide-react';

// Pre-designed messages
const PREDESIGNED_MESSAGES = {
  healthTips: {
    title: 'Blog / Health Tips',
    emoji: '🌿',
    text: `🌿 *Jaipur Wellness Community — Daily Health Tip* 🌿\n\n*Tip of the Day:* Focus on eating whole foods. Drink 3-4 liters of water daily, prioritize 7-8 hours of sleep, and take a 10-minute walk after meals. Small daily changes lead to massive long-term transformations!\n\nJoin our community for more tips:\n🔗 https://chat.whatsapp.com/EXjSgoU9lQ48JAzWJ5vRAh`
  },
  weightLoss: {
    title: 'Weight Loss Tips',
    emoji: '🔥',
    text: `🔥 *Jaipur Wellness Community — Weight Loss Secret* 🔥\n\n*Weight Loss Strategy:*\n1. *Calorie Deficit:* Eat slightly less than you burn. Focus on high-protein, high-fiber foods.\n2. *NEAT:* Keep moving! Aim for 8,000–10,000 steps daily.\n3. *Strength Training:* Build muscle to boost your metabolism.\n4. *Consistency:* A perfect diet for 2 days is worse than an 80% perfect diet for 6 months.\n\nWant a personalized plan? Reach out to Coach Mohsin!\n🔗 https://chat.whatsapp.com/EXjSgoU9lQ48JAzWJ5vRAh`
  },
  lifestyle: {
    title: 'Healthy Lifestyle Content',
    emoji: '✨',
    text: `✨ *Jaipur Wellness Community — Healthy Lifestyle Habits* ✨\n\n*The 4 Pillars of Health:*\n1. *Nutrition:* Eat to nourish, not just to fill. Include more color on your plate.\n2. *Movement:* Do exercise you enjoy. Walk, run, dance, or lift.\n3. *Sleep:* Quality sleep is when your body repairs and burns fat.\n4. *Mindset:* Stress raises cortisol which hinders fat loss. Practice deep breathing or meditation.\n\nJoin our royal wellness circle:\n🔗 https://chat.whatsapp.com/EXjSgoU9lQ48JAzWJ5vRAh`
  },
  motivation: {
    title: 'Daily Motivation Updates',
    emoji: '🌟',
    text: `🌟 *Jaipur Wellness Community — Daily Motivation* 🌟\n\n"Your health is an investment, not an expense. Although it will take time, energy, and effort, it pays the best interest."\n\nRemember, Mrs. Dipali started at age 53 and transformed her life. Mr. Manpreet started at 172 kg and achieved his goal. What is holding you back? Your journey starts with one single choice.\n\nStart your transformation today:\n🔗 https://chat.whatsapp.com/EXjSgoU9lQ48JAzWJ5vRAh`
  }
};

const WHATSAPP_NUMBER = '919680801786';

export default function WellnessTools() {
  const [activeCalcTab, setActiveCalcTab] = useState<'bmi' | 'water' | 'calorie' | 'weight'>('bmi');
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');

  // Input states
  const [weight, setWeight] = useState<string>('70'); // kg or lbs
  const [heightCm, setHeightCm] = useState<string>('170'); // cm
  const [heightFt, setHeightFt] = useState<string>('5'); // ft
  const [heightIn, setHeightIn] = useState<string>('7'); // in
  const [age, setAge] = useState<string>('28');
  const [gender, setGender] = useState<'male' | 'female'>('female');
  const [activity, setActivity] = useState<string>('moderate'); // sedentary, light, moderate, active
  const [goal, setGoal] = useState<string>('lose'); // lose, maintain, gain

  // Predesigned message states
  const [selectedTemplate, setSelectedTemplate] = useState<keyof typeof PREDESIGNED_MESSAGES>('healthTips');
  const [customPhone, setCustomPhone] = useState<string>('');

  // Sync inputs on unit switch to keep values reasonable
  useEffect(() => {
    if (unitSystem === 'metric') {
      // Convert lbs to kg
      const lbsVal = parseFloat(weight);
      if (!isNaN(lbsVal) && lbsVal > 0) {
        setWeight(Math.round(lbsVal * 0.453592).toString());
      }
      // Convert ft/in to cm
      const ftVal = parseFloat(heightFt);
      const inVal = parseFloat(heightIn);
      if (!isNaN(ftVal)) {
        const totalIn = ftVal * 12 + (isNaN(inVal) ? 0 : inVal);
        setHeightCm(Math.round(totalIn * 2.54).toString());
      }
    } else {
      // Convert kg to lbs
      const kgVal = parseFloat(weight);
      if (!isNaN(kgVal) && kgVal > 0) {
        setWeight(Math.round(kgVal * 2.20462).toString());
      }
      // Convert cm to ft/in
      const cmVal = parseFloat(heightCm);
      if (!isNaN(cmVal) && cmVal > 0) {
        const totalIn = cmVal / 2.54;
        const ft = Math.floor(totalIn / 12);
        const inch = Math.round(totalIn % 12);
        setHeightFt(ft.toString());
        setHeightIn(inch.toString());
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unitSystem]);

  // Helper converters
  const getWeightInKg = (): number => {
    const w = parseFloat(weight);
    if (isNaN(w) || w <= 0) return 0;
    return unitSystem === 'metric' ? w : w * 0.45359237;
  };

  const getHeightInCm = (): number => {
    if (unitSystem === 'metric') {
      const h = parseFloat(heightCm);
      return isNaN(h) || h <= 0 ? 0 : h;
    } else {
      const ft = parseFloat(heightFt);
      const inch = parseFloat(heightIn);
      const totalIn = (isNaN(ft) ? 0 : ft) * 12 + (isNaN(inch) ? 0 : inch);
      return totalIn * 2.54;
    }
  };

  // BMI Calculation
  const weightKg = getWeightInKg();
  const heightM = getHeightInCm() / 100;
  const bmi = heightM > 0 && weightKg > 0 ? parseFloat((weightKg / (heightM * heightM)).toFixed(1)) : 0;

  const getBmiCategory = (val: number) => {
    if (val <= 0) return { label: 'Enter details', color: 'text-gray-400', bg: 'bg-gray-100 dark:bg-gray-800', border: 'border-gray-200', text: 'Please enter details to calculate.' };
    if (val < 18.5) return { label: 'Underweight', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-950/20', border: 'border-amber-200 dark:border-amber-800/30', text: 'You are below the healthy range. Focus on nutrient-rich calorie surplus and strength building.' };
    if (val < 25) return { label: 'Normal Weight', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-950/20', border: 'border-green-200 dark:border-green-800/30', text: 'Congratulations! You are in the healthy BMI range. Keep up the active lifestyle & balanced nutrition.' };
    if (val < 30) return { label: 'Overweight', color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-950/20', border: 'border-orange-200 dark:border-orange-800/30', text: 'You are slightly above the healthy range. A gentle calorie deficit and consistent daily movement will help.' };
    return { label: 'Obese', color: 'text-jaipur-pink-deep dark:text-jaipur-pink-light', bg: 'bg-jaipur-pink-pale dark:bg-rose-950/25', border: 'border-jaipur-pink/20', text: 'Higher range. Sustainable weight loss can dramatically improve energy levels, mobility, and metabolic indicators.' };
  };
  const bmiCat = getBmiCategory(bmi);

  // Water Calculation
  const activityWaterOffset = activity === 'active' ? 1.0 : activity === 'moderate' ? 0.5 : 0;
  const recommendedWater = weightKg > 0 ? parseFloat((weightKg * 0.033 + activityWaterOffset).toFixed(1)) : 0;
  const glassCount = Math.round(recommendedWater * 4); // 250ml per glass

  // Calorie Calculation (Mifflin-St Jeor TDEE)
  const getBmr = (): number => {
    const w = weightKg;
    const h = getHeightInCm();
    const a = parseFloat(age);
    if (w <= 0 || h <= 0 || isNaN(a) || a <= 0) return 0;
    
    if (gender === 'male') {
      return 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      return 10 * w + 6.25 * h - 5 * a - 161;
    }
  };

  const getTdee = (bmr: number): number => {
    const activityMultipliers: Record<string, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725
    };
    return Math.round(bmr * (activityMultipliers[activity] || 1.2));
  };

  const bmr = getBmr();
  const tdee = getTdee(bmr);
  
  const getCalorieTarget = (): number => {
    if (tdee === 0) return 0;
    if (goal === 'lose') return Math.max(1200, Math.round(tdee - 500));
    if (goal === 'gain') return Math.round(tdee + 400);
    return tdee;
  };
  const calorieTarget = getCalorieTarget();

  const macros = getMacros(calorieTarget);
  function getMacros(calories: number) {
    if (calories <= 0) return { protein: 0, carbs: 0, fats: 0 };
    const proteinG = Math.round((calories * 0.3) / 4);
    const fatsG = Math.round((calories * 0.25) / 9);
    const carbsG = Math.round((calories * 0.45) / 4);
    return { protein: proteinG, carbs: carbsG, fats: fatsG };
  }

  // Ideal Weight Calculation (Robinson Formula 1983)
  const getIdealWeightRange = () => {
    const hCm = getHeightInCm();
    if (hCm <= 0) return { min: 0, max: 0, robinson: 0, devine: 0 };

    const inches = hCm / 2.54;
    const inchesOver5Ft = Math.max(0, inches - 60);

    let robinson = 0;
    let devine = 0;

    if (gender === 'male') {
      robinson = 52.0 + 1.9 * inchesOver5Ft;
      devine = 50.0 + 2.3 * inchesOver5Ft;
    } else {
      robinson = 49.0 + 1.7 * inchesOver5Ft;
      devine = 45.5 + 2.3 * inchesOver5Ft;
    }

    const heightMeters = hCm / 100;
    const minWeight = 18.5 * heightMeters * heightMeters;
    const maxWeight = 24.9 * heightMeters * heightMeters;

    return {
      robinson: parseFloat(robinson.toFixed(1)),
      devine: parseFloat(devine.toFixed(1)),
      min: parseFloat(minWeight.toFixed(1)),
      max: parseFloat(maxWeight.toFixed(1))
    };
  };
  const idealWeight = getIdealWeightRange();

  // Universal WhatsApp Sender Function
  const handleWhatsAppSend = (text: string, forceCoach = false) => {
    let phoneNum = WHATSAPP_NUMBER;
    if (!forceCoach && customPhone.trim()) {
      phoneNum = customPhone.replace(/[^0-9]/g, '');
      if (phoneNum.length === 10) {
        phoneNum = '91' + phoneNum;
      }
    }

    const url = `https://wa.me/${phoneNum}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareClick = (text: string) => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Pre-designed templates for tools
  const getBmiShareText = () => {
    return `📊 *My Jaipur Wellness Health Report* 📊\n\n• Height: ${unitSystem === 'metric' ? heightCm + ' cm' : heightFt + 'ft ' + heightIn + 'in'}\n• Weight: ${weight} ${unitSystem === 'metric' ? 'kg' : 'lbs'}\n• Calculated BMI: *${bmi}*\n• Classification: *${bmiCat.label}*\n\nCalculate your fitness and nutrition targets at Jaipur Wellness Community!\n🔗 https://chat.whatsapp.com/EXjSgoU9lQ48JAzWJ5vRAh`;
  };

  const getWaterShareText = () => {
    return `💧 *My Hydration Target* 💧\n\n• Target: *${recommendedWater} Liters* daily (approx. *${glassCount} glasses* of 250ml)\n• Activity Level: ${activity.charAt(0).toUpperCase() + activity.slice(1)}\n\nStay healthy and glowing with custom diet insights from Jaipur Wellness!\n🔗 https://chat.whatsapp.com/EXjSgoU9lQ48JAzWJ5vRAh`;
  };

  const getCalorieShareText = () => {
    return `🍎 *My Personal Nutrition Target* 🍎\n\n• Goal: *${goal === 'lose' ? 'Weight Loss' : goal === 'gain' ? 'Weight Gain' : 'Weight Maintenance'}*\n• Daily Calorie Target: *${calorieTarget} kcal*\n• Target Macros Budget:\n  - 🍗 Protein: *${macros.protein}g* (30%)\n  - 🍚 Carbs: *${macros.carbs}g* (45%)\n  - 🥑 Fats: *${macros.fats}g* (25%)\n\nGet your royal diet transformation plan with Coach Mohsin!\n🔗 https://chat.whatsapp.com/EXjSgoU9lQ48JAzWJ5vRAh`;
  };

  const getWeightShareText = () => {
    return `⚖️ *My Healthy & Ideal Weight Range* ⚖️\n\n• Height: ${unitSystem === 'metric' ? heightCm + ' cm' : heightFt + 'ft ' + heightIn + 'in'}\n• Ideal Body Weight: *${idealWeight.devine} kg* (Devine Formula)\n• Healthy Range (BMI 18.5 - 24.9): *${idealWeight.min} kg – ${idealWeight.max} kg*\n\nStart your personalized weight program with Jaipur Wellness Community!\n🔗 https://chat.whatsapp.com/EXjSgoU9lQ48JAzWJ5vRAh`;
  };

  return (
    <>
      {/* ─── SECTION 1: HEALTH CALCULATORS ─── */}
      <section id="calculators" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-jaipur-pink-pale/30 dark:from-[#1a0d10] dark:to-[#220e14] relative overflow-hidden hawa-mahal-border">
        {/* Decorative patterns */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-jaipur-gold/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-jaipur-pink/8 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-10 bg-jaipur-gold" />
              <span className="text-jaipur-gold font-serifPremium font-semibold text-xs tracking-widest uppercase">Personal Metrics</span>
              <span className="h-px w-10 bg-jaipur-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-jaipur-dark dark:text-white mb-4 font-serifPremium">
              Interactive{' '}
              <span className="bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-gold bg-clip-text text-transparent font-extrabold">
                Health Calculators
              </span>
            </h2>
            <p className="text-base text-jaipur-dark/65 dark:text-gray-400 font-ui max-w-xl mx-auto">
              Calculate your BMI, daily water needs, ideal body weight, and daily caloric targets instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Input Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white dark:bg-[#2a1018] rounded-2xl p-6 shadow-sandstone border border-jaipur-pink/15">
                <div className="flex justify-between items-center mb-6 border-b border-jaipur-pink/10 pb-4">
                  <h3 className="font-bold text-lg text-jaipur-dark dark:text-white font-serifPremium flex items-center gap-2">
                    <Sparkles className="text-jaipur-gold h-5 w-5" />
                    Enter Your Vitals
                  </h3>
                  {/* Unit System Switch */}
                  <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-0.5 rounded-lg text-xs font-semibold font-ui">
                    <button
                      onClick={() => setUnitSystem('metric')}
                      className={`px-3 py-1.5 rounded-md transition-all ${unitSystem === 'metric' ? 'bg-white dark:bg-gray-700 text-jaipur-pink-deep dark:text-white shadow-sm' : 'text-gray-500'}`}
                    >
                      Metric
                    </button>
                    <button
                      onClick={() => setUnitSystem('imperial')}
                      className={`px-3 py-1.5 rounded-md transition-all ${unitSystem === 'imperial' ? 'bg-white dark:bg-gray-700 text-jaipur-pink-deep dark:text-white shadow-sm' : 'text-gray-500'}`}
                    >
                      Imperial
                    </button>
                  </div>
                </div>

                {/* Shared Fields form */}
                <div className="space-y-4 font-ui">
                  
                  {/* Gender Select */}
                  <div>
                    <label className="block text-xs font-bold text-jaipur-dark/70 dark:text-gray-300 uppercase tracking-wide mb-1.5">Gender</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setGender('female')}
                        className={`py-2 px-4 rounded-xl border text-sm font-semibold transition-all ${
                          gender === 'female'
                            ? 'border-jaipur-pink bg-jaipur-pink-pale/60 text-jaipur-pink-deep dark:bg-rose-950/20 dark:text-jaipur-pink-light'
                            : 'border-gray-200 dark:border-gray-800 text-jaipur-dark/60 dark:text-gray-400'
                        }`}
                      >
                        👩 Female
                      </button>
                      <button
                        type="button"
                        onClick={() => setGender('male')}
                        className={`py-2 px-4 rounded-xl border text-sm font-semibold transition-all ${
                          gender === 'male'
                            ? 'border-jaipur-pink bg-jaipur-pink-pale/60 text-jaipur-pink-deep dark:bg-rose-950/20 dark:text-jaipur-pink-light'
                            : 'border-gray-200 dark:border-gray-800 text-jaipur-dark/60 dark:text-gray-400'
                        }`}
                      >
                        👨 Male
                      </button>
                    </div>
                  </div>

                  {/* Age (Only shown/needed for Calories) */}
                  {activeCalcTab === 'calorie' && (
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="block text-xs font-bold text-jaipur-dark/70 dark:text-gray-300 uppercase tracking-wide">Age</label>
                        <span className="text-xs text-jaipur-pink font-semibold">{age} years</span>
                      </div>
                      <input
                        type="range"
                        min="12"
                        max="85"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full accent-jaipur-pink bg-gray-200 dark:bg-gray-700 h-1.5 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  )}

                  {/* Height Field */}
                  <div>
                    <label className="block text-xs font-bold text-jaipur-dark/70 dark:text-gray-300 uppercase tracking-wide mb-1.5">
                      Height
                    </label>
                    {unitSystem === 'metric' ? (
                      <div className="relative">
                        <input
                          type="number"
                          value={heightCm}
                          onChange={(e) => setHeightCm(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-850 bg-white dark:bg-[#1a0d10] text-sm text-jaipur-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-jaipur-pink/30 focus:border-jaipur-pink"
                          placeholder="e.g. 170"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-jaipur-dark/45 dark:text-gray-400">cm</span>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <input
                            type="number"
                            value={heightFt}
                            onChange={(e) => setHeightFt(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-850 bg-white dark:bg-[#1a0d10] text-sm text-jaipur-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-jaipur-pink/30 focus:border-jaipur-pink"
                            placeholder="ft"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-jaipur-dark/45 dark:text-gray-400">ft</span>
                        </div>
                        <div className="relative">
                          <input
                            type="number"
                            value={heightIn}
                            onChange={(e) => setHeightIn(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-850 bg-white dark:bg-[#1a0d10] text-sm text-jaipur-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-jaipur-pink/30 focus:border-jaipur-pink"
                            placeholder="in"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-jaipur-dark/45 dark:text-gray-400">in</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Weight Field */}
                  <div>
                    <label className="block text-xs font-bold text-jaipur-dark/70 dark:text-gray-300 uppercase tracking-wide mb-1.5">
                      Weight
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-850 bg-white dark:bg-[#1a0d10] text-sm text-jaipur-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-jaipur-pink/30 focus:border-jaipur-pink"
                        placeholder={unitSystem === 'metric' ? 'e.g. 70' : 'e.g. 154'}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-jaipur-dark/45 dark:text-gray-400">
                        {unitSystem === 'metric' ? 'kg' : 'lbs'}
                      </span>
                    </div>
                  </div>

                  {/* Activity Level Field (For Calorie & Water) */}
                  {(activeCalcTab === 'calorie' || activeCalcTab === 'water') && (
                    <div>
                      <label className="block text-xs font-bold text-jaipur-dark/70 dark:text-gray-300 uppercase tracking-wide mb-1.5">Activity Level</label>
                      <select
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-850 bg-white dark:bg-[#1a0d10] text-sm text-jaipur-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-jaipur-pink/30 focus:border-jaipur-pink"
                      >
                        <option value="sedentary">Sedentary (desk job, low activity)</option>
                        <option value="light">Lightly Active (walks, light exercise 1-3d/wk)</option>
                        <option value="moderate">Moderately Active (exercise 3-5d/wk)</option>
                        <option value="active">Very Active (heavy athletics, training daily)</option>
                      </select>
                    </div>
                  )}

                  {/* Goal Field (For Calorie only) */}
                  {activeCalcTab === 'calorie' && (
                    <div>
                      <label className="block text-xs font-bold text-jaipur-dark/70 dark:text-gray-300 uppercase tracking-wide mb-1.5">Wellness Goal</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { val: 'lose', label: 'Lose Fat', emoji: '🔥' },
                          { val: 'maintain', label: 'Maintain', emoji: '⚖️' },
                          { val: 'gain', label: 'Build Muscle', emoji: '💪' }
                        ].map((item) => (
                          <button
                            key={item.val}
                            type="button"
                            onClick={() => setGoal(item.val)}
                            className={`py-2.5 px-2 rounded-xl border text-xs font-bold text-center leading-tight transition-all ${
                              goal === item.val
                                ? 'border-jaipur-pink bg-jaipur-pink-pale/60 text-jaipur-pink-deep dark:bg-rose-950/20 dark:text-jaipur-pink-light shadow-sm'
                                : 'border-gray-200 dark:border-gray-850 text-jaipur-dark/60 dark:text-gray-400'
                            }`}
                          >
                            <span className="block text-base mb-1">{item.emoji}</span>
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Right Column: Calculator Tabs & Result Presentation */}
            <div className="lg:col-span-7 flex flex-col">
              
              {/* Tab selector */}
              <div className="grid grid-cols-4 gap-2 mb-6 bg-white dark:bg-[#2a1018] p-1.5 rounded-2xl border border-jaipur-pink/10 shadow-sandstone">
                {([
                  { id: 'bmi', label: 'BMI', icon: Scale },
                  { id: 'water', label: 'Water', icon: Droplet },
                  { id: 'calorie', label: 'Calories', icon: Flame },
                  { id: 'weight', label: 'Ideal Weight', icon: User },
                ] as const).map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveCalcTab(tab.id)}
                      className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 px-1.5 sm:px-3 rounded-xl text-xs sm:text-sm font-bold font-ui transition-all ${
                        activeCalcTab === tab.id
                          ? 'bg-jaipur-pink-pale dark:bg-rose-950/20 text-jaipur-pink-deep dark:text-jaipur-pink-light border border-jaipur-pink/10 shadow-inner'
                          : 'text-jaipur-dark/60 dark:text-gray-400 hover:text-jaipur-pink'
                      }`}
                    >
                      <Icon size={16} className={activeCalcTab === tab.id ? 'text-jaipur-pink-deep dark:text-jaipur-pink' : ''} />
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Display of Calculations */}
              <div className="flex-1 bg-white dark:bg-[#2a1018] rounded-3xl p-8 border border-jaipur-pink/15 shadow-sandstone flex flex-col justify-between min-h-[400px]">
                
                {/* ── SUB-CASE A: BMI ── */}
                {activeCalcTab === 'bmi' && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xl font-bold font-serifPremium text-jaipur-dark dark:text-white">Body Mass Index</h4>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-900/10 border border-jaipur-gold/20 text-jaipur-gold">Health Score</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-jaipur-pink-pale/30 dark:bg-[#1a0d10]/40 p-6 rounded-2xl border border-jaipur-pink/10">
                        {/* Dial Indicator */}
                        <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
                          <div className="relative w-28 h-28 rounded-full border-4 border-dashed border-jaipur-gold/30 flex items-center justify-center bg-white dark:bg-[#2a1018] shadow-inner">
                            <div className="flex flex-col items-center">
                              <span className="text-3xl font-extrabold text-jaipur-pink-deep dark:text-white font-serifPremium">{bmi > 0 ? bmi : '--'}</span>
                              <span className="text-[10px] uppercase font-bold text-jaipur-dark/45 dark:text-gray-400">BMI Index</span>
                            </div>
                          </div>
                        </div>

                        {/* Analysis Card */}
                        <div className="md:col-span-8 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-jaipur-dark/60 dark:text-gray-400">Classification:</span>
                            <span className={`text-base font-extrabold font-serifPremium ${bmiCat.color}`}>{bmiCat.label}</span>
                          </div>
                          <p className="text-sm text-jaipur-dark/70 dark:text-gray-300 font-ui leading-relaxed">
                            {bmiCat.text}
                          </p>
                        </div>
                      </div>

                      {/* Visual Category Bar */}
                      <div className="mt-8 space-y-2">
                        <div className="flex justify-between text-[10px] font-bold font-ui text-jaipur-dark/50 dark:text-gray-400 uppercase tracking-wider">
                          <span>Underweight (&lt;18.5)</span>
                          <span>Normal (18.5-24.9)</span>
                          <span>Overweight (25-29.9)</span>
                          <span>Obese (&ge;30)</span>
                        </div>
                        <div className="relative h-3 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden flex">
                          <div className="h-full bg-amber-400" style={{ width: '18.5%' }} />
                          <div className="h-full bg-green-500" style={{ width: '25%' }} />
                          <div className="h-full bg-orange-400" style={{ width: '20%' }} />
                          <div className="h-full bg-jaipur-pink-deep" style={{ width: '36.5%' }} />
                          
                          {/* Indicator pin */}
                          {bmi > 0 && (
                            <div 
                              className="absolute top-0 bottom-0 w-1 bg-jaipur-dark dark:bg-white border-2 border-white dark:border-jaipur-dark shadow-md"
                              style={{ 
                                left: `${Math.min(99, Math.max(1, (bmi / 40) * 100))}%`,
                                transform: 'translateX(-50%)'
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-jaipur-pink/10 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleWhatsAppSend(getBmiShareText(), true)}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 font-ui text-sm border border-green-400/30 shadow-md"
                      >
                        <MessageCircle size={16} />
                        Get Expert Analysis
                      </button>
                      <button
                        onClick={() => handleShareClick(getBmiShareText())}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-jaipur-pink-pale hover:bg-jaipur-pink-light/30 text-jaipur-pink-deep dark:bg-rose-950/20 dark:text-jaipur-pink-light font-bold rounded-xl hover:shadow transition-all duration-300 font-ui text-sm border border-jaipur-pink/15"
                      >
                        <Share2 size={16} />
                        Share Result
                      </button>
                    </div>
                  </div>
                )}

                {/* ── SUB-CASE B: WATER ── */}
                {activeCalcTab === 'water' && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xl font-bold font-serifPremium text-jaipur-dark dark:text-white">Daily Hydration Target</h4>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-800/30 text-sky-500 flex items-center gap-1">
                          <Droplet size={12} /> Liquid Gold
                        </span>
                      </div>

                      <div className="bg-gradient-to-br from-sky-50/50 to-white dark:from-[#131b2c]/20 dark:to-[#2a1018] border border-sky-100 dark:border-sky-900/20 rounded-2xl p-6 mb-6">
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-5xl font-black text-sky-500 font-serifPremium">{recommendedWater > 0 ? recommendedWater : '--'}</span>
                          <span className="text-lg font-bold text-jaipur-dark/50 dark:text-gray-400 font-ui">Liters / Day</span>
                        </div>
                        <p className="text-sm text-jaipur-dark/65 dark:text-gray-300 font-ui leading-relaxed">
                          Your body needs this volume of water to clean metabolic wastes, optimize your thyroid function, lubricate joints, and control calorie intake cues.
                        </p>
                      </div>

                      {/* Glass Grid Visualization */}
                      {recommendedWater > 0 && (
                        <div className="space-y-3">
                          <p className="text-[10px] font-bold text-jaipur-dark/50 dark:text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                            📊 Hydration tracker (approx. {glassCount} glasses of 250ml)
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {Array.from({ length: Math.min(24, glassCount) }).map((_, i) => (
                              <div
                                key={i}
                                className="w-8 h-10 rounded-b-md border-2 border-sky-300 dark:border-sky-700 bg-sky-50 dark:bg-sky-950/30 flex items-end justify-center pb-1 overflow-hidden transition-all duration-300 hover:scale-110 cursor-pointer group"
                                title="250ml Glass"
                              >
                                <div className="w-full h-4/5 bg-gradient-to-t from-sky-400 to-sky-300 rounded-b-sm group-hover:h-full transition-all" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-6 border-t border-jaipur-pink/10 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleWhatsAppSend(getWaterShareText(), true)}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 font-ui text-sm border border-green-400/30 shadow-md"
                      >
                        <MessageCircle size={16} />
                        Get Hydration Tips
                      </button>
                      <button
                        onClick={() => handleShareClick(getWaterShareText())}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-jaipur-pink-pale hover:bg-jaipur-pink-light/30 text-jaipur-pink-deep dark:bg-rose-950/20 dark:text-jaipur-pink-light font-bold rounded-xl hover:shadow transition-all duration-300 font-ui text-sm border border-jaipur-pink/15"
                      >
                        <Share2 size={16} />
                        Share Target
                      </button>
                    </div>
                  </div>
                )}

                {/* ── SUB-CASE C: CALORIE ── */}
                {activeCalcTab === 'calorie' && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xl font-bold font-serifPremium text-jaipur-dark dark:text-white">Daily Calorie & Macro Target</h4>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-850/30 text-orange-500 flex items-center gap-1">
                          <Flame size={12} /> TDEE Analysis
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-jaipur-pink-pale/30 dark:bg-[#1a0d10]/40 p-4 rounded-xl border border-jaipur-pink/10">
                          <p className="text-[10px] font-bold text-jaipur-dark/50 dark:text-gray-400 uppercase">Maintain Calories (TDEE)</p>
                          <p className="text-2xl font-black text-jaipur-dark dark:text-white font-serifPremium mt-1">{tdee > 0 ? tdee : '--'} <span className="text-xs font-bold font-ui">kcal</span></p>
                        </div>
                        <div className="bg-gradient-to-br from-jaipur-pink-deep to-jaipur-pink p-4 rounded-xl text-white shadow-md border border-jaipur-gold/25 relative overflow-hidden">
                          <div className="absolute -right-3 -bottom-3 text-white/10 text-5xl font-black select-none">🎯</div>
                          <p className="text-[10px] font-bold text-white/80 uppercase">Target Calories</p>
                          <p className="text-2xl font-black font-serifPremium mt-1">{calorieTarget > 0 ? calorieTarget : '--'} <span className="text-xs font-bold font-ui">kcal/day</span></p>
                        </div>
                      </div>

                      {/* Macros split bar */}
                      {calorieTarget > 0 && (
                        <div className="space-y-3 font-ui text-sm">
                          <p className="text-[10px] font-bold text-jaipur-dark/50 dark:text-gray-400 uppercase tracking-widest">Macro Splits (30/45/25 Budget)</p>
                          
                          <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800 flex overflow-hidden">
                            <div className="h-full bg-rose-500" style={{ width: '30%' }} title="Protein" />
                            <div className="h-full bg-amber-400" style={{ width: '45%' }} title="Carbohydrates" />
                            <div className="h-full bg-teal-400" style={{ width: '25%' }} title="Fats" />
                          </div>

                          <div className="grid grid-cols-3 gap-2 text-center pt-2">
                            <div className="bg-rose-50/50 dark:bg-rose-950/10 p-2.5 rounded-xl border border-rose-100 dark:border-rose-900/20">
                              <span className="block text-[10px] font-bold text-rose-500 uppercase">🍗 Protein (30%)</span>
                              <span className="text-base font-extrabold text-jaipur-dark dark:text-white font-serifPremium">{macros.protein}g</span>
                            </div>
                            <div className="bg-amber-50/50 dark:bg-amber-950/10 p-2.5 rounded-xl border border-amber-100 dark:border-amber-900/20">
                              <span className="block text-[10px] font-bold text-amber-500 uppercase">🍚 Carbs (45%)</span>
                              <span className="text-base font-extrabold text-jaipur-dark dark:text-white font-serifPremium">{macros.carbs}g</span>
                            </div>
                            <div className="bg-teal-50/50 dark:bg-teal-950/10 p-2.5 rounded-xl border border-teal-100 dark:border-teal-900/20">
                              <span className="block text-[10px] font-bold text-teal-500 uppercase">🥑 Fats (25%)</span>
                              <span className="text-base font-extrabold text-jaipur-dark dark:text-white font-serifPremium">{macros.fats}g</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-6 border-t border-jaipur-pink/10 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleWhatsAppSend(getCalorieShareText(), true)}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 font-ui text-sm border border-green-400/30 shadow-md"
                      >
                        <MessageCircle size={16} />
                        Get Customized Diet Plan
                      </button>
                      <button
                        onClick={() => handleShareClick(getCalorieShareText())}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-jaipur-pink-pale hover:bg-jaipur-pink-light/30 text-jaipur-pink-deep dark:bg-rose-950/20 dark:text-jaipur-pink-light font-bold rounded-xl hover:shadow transition-all duration-300 font-ui text-sm border border-jaipur-pink/15"
                      >
                        <Share2 size={16} />
                        Share Macros
                      </button>
                    </div>
                  </div>
                )}

                {/* ── SUB-CASE D: IDEAL WEIGHT ── */}
                {activeCalcTab === 'weight' && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xl font-bold font-serifPremium text-jaipur-dark dark:text-white">Ideal Body Weight (IBW)</h4>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-900/10 border border-jaipur-gold/20 text-jaipur-gold">Scientific Index</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-jaipur-pink-pale/50 to-white dark:from-[#2a1018] dark:to-[#1a0d10] border border-jaipur-pink/10 rounded-2xl p-5 text-center flex flex-col justify-center">
                          <p className="text-[10px] font-bold text-jaipur-dark/50 dark:text-gray-400 uppercase mb-1">Robinson Ideal Weight</p>
                          <p className="text-3xl font-black text-jaipur-pink-deep dark:text-white font-serifPremium">{idealWeight.robinson > 0 ? `${idealWeight.robinson} kg` : '--'}</p>
                          <p className="text-[10px] text-jaipur-dark/40 dark:text-gray-500 font-ui mt-1">(Standard metric formulation)</p>
                        </div>
                        <div className="bg-gradient-to-br from-amber-50/50 to-white dark:from-amber-950/5 dark:to-[#1a0d10] border border-amber-200/40 rounded-2xl p-5 text-center flex flex-col justify-center">
                          <p className="text-[10px] font-bold text-jaipur-gold-warm uppercase mb-1">Devine Ideal Weight</p>
                          <p className="text-3xl font-black text-jaipur-gold dark:text-white font-serifPremium">{idealWeight.devine > 0 ? `${idealWeight.devine} kg` : '--'}</p>
                          <p className="text-[10px] text-jaipur-dark/40 dark:text-gray-500 font-ui mt-1">(Clinical pharmacology standard)</p>
                        </div>
                      </div>

                      {idealWeight.min > 0 && (
                        <div className="p-4 rounded-xl bg-green-50/40 dark:bg-green-950/10 border border-green-200/40 font-ui text-sm flex gap-3">
                          <Info className="text-green-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-green-700 dark:text-green-400">Healthy Weight Range (BMI 18.5 - 24.9)</p>
                            <p className="text-xs text-jaipur-dark/70 dark:text-gray-300 leading-relaxed mt-1">
                              Based on standard body dimensions for your height, your healthy weight target range is: <strong className="text-jaipur-pink-deep dark:text-jaipur-pink-light">{idealWeight.min} kg – {idealWeight.max} kg</strong>.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-6 border-t border-jaipur-pink/10 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleWhatsAppSend(getWeightShareText(), true)}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 font-ui text-sm border border-green-400/30 shadow-md"
                      >
                        <MessageCircle size={16} />
                        Discuss Weight Targets
                      </button>
                      <button
                        onClick={() => handleShareClick(getWeightShareText())}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-jaipur-pink-pale hover:bg-jaipur-pink-light/30 text-jaipur-pink-deep dark:bg-rose-950/20 dark:text-jaipur-pink-light font-bold rounded-xl hover:shadow transition-all duration-300 font-ui text-sm border border-jaipur-pink/15"
                      >
                        <Share2 size={16} />
                        Share Range
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WHATSAPP COMMUNITY & MESSAGES HUB ─── */}
      <section id="whatsapp-hub" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jaipur-pink-pale/30 to-white dark:from-[#220e14] dark:to-[#1a0d10] relative overflow-hidden hawa-mahal-border">
        {/* Decorative patterns */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-jaipur-gold/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-jaipur-pink/8 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-10 bg-jaipur-gold" />
              <span className="text-jaipur-gold font-serifPremium font-semibold text-xs tracking-widest uppercase">Stay Connected</span>
              <span className="h-px w-10 bg-jaipur-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-jaipur-dark dark:text-white mb-4 font-serifPremium">
              WhatsApp Community &{' '}
              <span className="bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-gold bg-clip-text text-transparent font-extrabold">
                Sharing Hub
              </span>
            </h2>
            <p className="text-base text-jaipur-dark/65 dark:text-gray-400 font-ui max-w-xl mx-auto">
              Join our active community in Jaipur and share predesigned motivation, health tips, and healthy lifestyle content.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Community Card */}
            <div className="lg:col-span-5 flex">
              <div className="bg-white dark:bg-[#2a1018] rounded-3xl p-8 border border-jaipur-pink/15 shadow-sandstone flex flex-col justify-between items-center text-center relative overflow-hidden flex-1">
                
                {/* Background design elements */}
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-green-500/5 rounded-full" />
                <div className="absolute -left-12 -bottom-12 w-36 h-36 bg-jaipur-gold/5 rounded-full" />

                <div className="space-y-6">
                  {/* Community Icon Banner */}
                  <div className="relative inline-flex items-center justify-center p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-[#1b2f25] dark:to-[#220e14] rounded-3xl border border-green-200/50 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Users size={40} className="text-green-500" />
                    <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-jaipur-dark dark:text-white font-serifPremium">
                      Join Our WhatsApp Community
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 dark:bg-green-950/20 border border-green-100 dark:border-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold font-ui">
                      ✦ Active Support Group
                    </div>
                  </div>

                  <p className="text-sm text-jaipur-dark/65 dark:text-gray-300 font-ui leading-relaxed">
                    Access free daily weight loss menus, motivational challenges, healthy recipes, and connect with 500+ peers in Jaipur who are actively transforming their habits!
                  </p>

                  <div className="space-y-2.5 max-w-sm mx-auto text-left">
                    {[
                      'Daily home workout guides & plans',
                      'Direct chat options with Coach Mohsin',
                      'Weekly success celebration reviews',
                      '100% free with no membership requirements'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-jaipur-dark/75 dark:text-gray-300 font-ui">
                        <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://chat.whatsapp.com/EXjSgoU9lQ48JAzWJ5vRAh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_6px_25px_rgba(34,197,94,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-ui border border-green-400/30 text-sm"
                >
                  <MessageCircle size={18} />
                  Join Jaipur Wellness Community
                </a>

              </div>
            </div>

            {/* Right Column: Predesigned message sender */}
            <div className="lg:col-span-7 flex">
              <div className="bg-white dark:bg-[#2a1018] rounded-3xl p-8 border border-jaipur-pink/15 shadow-sandstone flex flex-col justify-between flex-1 min-h-[500px]">
                
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-jaipur-dark dark:text-white font-serifPremium flex items-center gap-2">
                    <Sparkles className="text-jaipur-gold h-5 w-5" />
                    Predesigned Message Hub
                  </h3>

                  {/* Template Picker Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {(Object.keys(PREDESIGNED_MESSAGES) as Array<keyof typeof PREDESIGNED_MESSAGES>).map((key) => {
                      const item = PREDESIGNED_MESSAGES[key];
                      const isSelected = selectedTemplate === key;
                      return (
                        <button
                          key={key}
                          onClick={() => setSelectedTemplate(key)}
                          className={`p-3 rounded-xl border text-left flex flex-col justify-between h-20 transition-all font-ui ${
                            isSelected
                              ? 'border-jaipur-pink bg-jaipur-pink-pale/60 text-jaipur-pink-deep dark:bg-rose-950/20 dark:text-jaipur-pink-light shadow-sm'
                              : 'border-gray-200 dark:border-gray-850 text-jaipur-dark/70 dark:text-gray-400 hover:border-jaipur-pink/30'
                          }`}
                        >
                          <span className="text-lg">{item.emoji}</span>
                          <span className="text-xs font-bold leading-tight line-clamp-1">{item.title.split(' ')[0]}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Interactive Live Preview (WhatsApp bubble mock) */}
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-jaipur-dark/50 dark:text-gray-400 uppercase tracking-widest">
                      Live Message Preview
                    </p>
                    <div className="relative rounded-2xl bg-[#efeae2] dark:bg-[#121212] p-4 border border-[#e1d9cf] dark:border-gray-850 font-ui text-sm relative">
                      {/* WhatsApp wall pattern effect (simulated) */}
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:10px_10px]" />
                      
                      {/* Message Bubble */}
                      <div className="relative z-10 max-w-[85%] bg-[#d9fdd3] dark:bg-[#005c4b] text-[#111b21] dark:text-[#e9edef] p-3.5 rounded-xl rounded-tl-none shadow-sm text-xs font-mono whitespace-pre-wrap leading-relaxed">
                        {/* Triangle corner */}
                        <div className="absolute top-0 -left-2.5 w-3 h-3 bg-[#d9fdd3] dark:bg-[#005c4b] [clip-path:polygon(100%_0,0_0,100%_100%)]" />
                        {PREDESIGNED_MESSAGES[selectedTemplate].text}
                      </div>
                    </div>
                  </div>

                  {/* Recipient Form Details */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-jaipur-dark/70 dark:text-gray-300 uppercase tracking-wide">
                      Recipient Number (Optional)
                    </label>
                    <div className="flex gap-2">
                      <div className="w-16 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl text-sm font-bold border border-gray-200 dark:border-gray-850 text-jaipur-dark/60 dark:text-gray-400 font-ui select-none">
                        +91
                      </div>
                      <input
                        type="tel"
                        value={customPhone}
                        onChange={(e) => setCustomPhone(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-850 bg-white dark:bg-[#1a0d10] text-sm text-jaipur-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-jaipur-pink/30 focus:border-jaipur-pink font-ui"
                        placeholder="Enter friend's 10-digit number"
                      />
                    </div>
                    <p className="text-[10px] text-jaipur-dark/45 dark:text-gray-500 font-ui">
                      If left empty, WhatsApp will open a contact selector allowing you to search and select any contact in your list!
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-jaipur-pink/10 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleWhatsAppSend(PREDESIGNED_MESSAGES[selectedTemplate].text, false)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 font-ui text-sm border border-green-400/30 shadow-md"
                  >
                    <MessageCircle size={16} />
                    {customPhone.trim() ? 'Send Message Direct' : 'Share Message via Picker'}
                  </button>
                  <button
                    onClick={() => handleWhatsAppSend(`Hello Coach Mohsin, I would like to subscribe to the daily health tips and wellness updates!`, true)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-jaipur-pink-pale hover:bg-jaipur-pink-light/30 text-jaipur-pink-deep dark:bg-rose-950/20 dark:text-jaipur-pink-light font-bold rounded-xl hover:shadow transition-all duration-300 font-ui text-sm border border-jaipur-pink/15"
                  >
                    <Users size={16} />
                    Subscribe with Coach
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
