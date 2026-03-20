import { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Globe,
  Search,
  Compass,
  Calculator,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Award,
  Users
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Accordion from '../components/ui/Accordion';
import type { AccordionItem } from '../components/ui/Accordion';
import EducationForm from '../components/forms/EducationForm';
import Reveal from '../components/animation/Reveal';

const Education = () => {
  const { t } = useTranslation();
  const [cgpa, setCgpa] = useState('');
  const [showResult, setShowResult] = useState(false);

  const programs = [
    {
      id: 'mbbs',
      icon: GraduationCap,
      color: 'bg-blue-100 text-blue-600',
      tag: 'Medicine'
    },
    {
      id: 'engineering',
      icon: Compass,
      color: 'bg-indigo-100 text-indigo-600',
      tag: 'Technology'
    },
    {
      id: 'language',
      icon: Globe,
      color: 'bg-emerald-100 text-emerald-600',
      tag: 'Cultural'
    },
    {
      id: 'business',
      icon: Award,
      color: 'bg-amber-100 text-amber-600',
      tag: 'Corporate'
    },
    {
      id: 'undergrad',
      icon: BookOpen,
      color: 'bg-rose-100 text-rose-600',
      tag: 'Academic'
    },
    {
      id: 'research',
      icon: Search,
      color: 'bg-violet-100 text-violet-600',
      tag: 'Scientific'
    }
  ];

  const steps = ['step_01', 'step_02', 'step_03', 'step_04', 'step_05'];

  const universities = [
    { id: 'peking', rank: 'Asia #1', students: '10,000+', image: '/assets/images/edu-1.svg' },
    { id: 'tsinghua', rank: 'Asia #2', students: '9,500+', image: '/assets/images/edu-2.svg' },
    { id: 'fudan', rank: 'Asia #5', students: '7,000+', image: '/assets/images/edu-3.svg' },
    { id: 'zhejiang', rank: 'Asia #8', students: '6,500+', image: '/assets/images/edu-4.svg' },
    { id: 'sjtu', rank: 'Asia #10', students: '8,000+', image: '/assets/images/edu-5.svg' }
  ];

  const faqItems: AccordionItem[] = [
    { id: 1, question: t('education.faq.q1'), answer: t('education.faq.a1') },
    { id: 2, question: t('education.faq.q2'), answer: t('education.faq.a2') },
    { id: 3, question: t('education.faq.q3'), answer: t('education.faq.a3') },
    { id: 4, question: t('education.faq.q4'), answer: t('education.faq.a4') },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-50 dark:bg-slate-900">
        <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-education-blue/10 text-education-blue mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              {t('education.hero.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-6">
              {t('education.hero.title_part1')}<br/>
              <span className="text-education-blue">{t('education.hero.title_part2')}</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              {t('education.hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('education-inquiry')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-education-blue text-white rounded-xl font-semibold hover:bg-education-blue/90 transition-all flex items-center group shadow-lg shadow-education-blue/25"
              >
                {t('education.hero.cta_primary')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                {t('education.hero.cta_secondary')}
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6 p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-2xl border border-white/50 dark:border-slate-700 w-fit">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden">
                    <img src={`/assets/images/student_${(i % 6) + 1}.svg`} alt="Student" className="w-12 h-12 rounded-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-2xl font-bold font-display text-slate-900 dark:text-white">{t('common.stats.success')}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t('education.hero.stat_label')}</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in group">
            <div className="absolute -inset-4 bg-education-blue/10 rounded-[2rem] blur-2xl group-hover:bg-education-blue/20 transition-colors" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white dark:border-slate-800">
              <img
                src="/assets/images/edu-hero.svg"
                alt={t('education.hero.alt_hero')}
                className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('education.programs.title')}</h2>
            <div className="h-1.5 w-24 bg-education-blue mx-auto rounded-full" />
          </div>

          <Reveal variant="slide-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => {
                const Icon = program.icon;
                return (
                  <div key={program.id} className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-education-blue/30 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all duration-300">
                    <div className={`w-14 h-14 ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t(`education.programs.${program.id}.title`)}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {t(`education.programs.${program.id}.desc`)}
                    </p>
                    <button className="text-education-blue font-bold flex items-center group/btn">
                      {t('education.programs.explore_curriculum')}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-education-blue/20 blur-[120px] rounded-full" />

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <span className="text-education-blue font-bold tracking-wider uppercase mb-4 block">
                {t('education.process.subtitle')}
              </span>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                {t('education.process.title')}
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {t('education.hero.description')}
              </p>
            </div>

            <Reveal variant="slide-up" className="lg:w-2/3 w-full">
              <div className="grid gap-6 w-full">
                {steps.map((stepKey, idx) => (
                  <div key={stepKey} className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      <div className="w-12 h-12 rounded-full bg-education-blue/20 text-education-blue flex items-center justify-center font-bold text-xl border border-education-blue/30 shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{t(`education.process.${stepKey}.title`)}</h3>
                        <p className="text-slate-400">{t(`education.process.${stepKey}.desc`)}</p>
                      </div>
                      <div className="sm:ml-auto text-education-blue font-medium px-4 py-1 rounded-full bg-education-blue/10 border border-education-blue/20">
                        {t(`education.process.${stepKey}.duration`)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Scholarship Calculator */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="p-6 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-education-blue/10 rounded-xl text-education-blue">
                  <Calculator className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  {t('education.calculator.step', { current: 1, total: 3 })}
                </span>
              </div>

              {!showResult ? (
                <div className="animate-fade-in">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                    {t('education.calculator.title_part1')}
                    <span className="text-blue-600 dark:text-blue-400">{t('education.calculator.title_part2')}</span>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
                    {t('education.calculator.description')}
                  </p>

                  <div className="space-y-6">
                    <label className="block text-lg font-bold text-slate-700 dark:text-slate-200">{t('education.calculator.gpa_label')}</label>
                    <select
                      value={cgpa}
                      onChange={(e) => setCgpa(e.target.value)}
                      className="w-full p-5 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:border-education-blue focus:ring-4 focus:ring-education-blue/5 outline-none transition-all text-lg font-medium dark:text-white"
                    >
                      <option value="">{t('education.calculator.gpa_placeholder')}</option>
                      <option value="90">90% + (Grade A+)</option>
                      <option value="80">80% - 89% (Grade A)</option>
                      <option value="70">70% - 79% (Grade B)</option>
                      <option value="below">Below 70%</option>
                    </select>
                  </div>

                  <button
                    onClick={() => setShowResult(true)}
                    className="mt-10 w-full py-5 bg-education-blue text-white rounded-2xl font-bold text-xl hover:bg-education-blue/90 transition-all shadow-xl shadow-education-blue/20"
                  >
                    {t('education.calculator.next')}
                  </button>
                </div>
              ) : (
                <div className="animate-scale-in text-center py-8">
                  <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('education.calculator.result_title')}</h2>
                  <p className="text-slate-600 dark:text-slate-400 text-xl mb-10 leading-relaxed max-w-lg mx-auto">
                    {t('education.calculator.result_desc')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => document.getElementById('education-inquiry')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-8 py-4 bg-education-blue text-white rounded-xl font-bold shadow-lg shadow-education-blue/20"
                    >
                      {t('education.calculator.result_cta_primary')}
                    </button>
                    <button className="px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl font-bold">
                      {t('education.calculator.result_cta_secondary')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* University Partners */}
      <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-education-blue/10 text-education-blue rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
              {t('education.partners.badge')}
            </span>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-12 snap-x hide-scrollbar">
            {universities.map((uni) => (
              <div key={uni.id} className="min-w-[320px] snap-center group">
                <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-xl">
                  <img src={uni.image} alt={t(`common.universities.${uni.id}`)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm font-bold text-education-blue mb-1 uppercase tracking-widest">{t('education.partners.rank_label')}: {uni.rank}</div>
                    <div className="text-2xl font-bold">{t(`common.universities.${uni.id}`)}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
                    <Users className="w-4 h-4" />
                    {uni.students} {t('education.partners.students_label')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="education-inquiry" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('education.form.title')}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-education-blue/10 text-education-blue flex items-center justify-center shrink-0">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 dark:text-white">{t('education.form.next_step_01_title')}</h4>
                      <p className="text-slate-500 dark:text-slate-400">{t('education.form.next_step_01_text')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 dark:text-white">{t('education.form.next_step_02_title')}</h4>
                      <p className="text-slate-500 dark:text-slate-400">{t('education.form.next_step_02_text')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-indigo-900 dark:bg-black text-white relative overflow-hidden group border border-white/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-white/20 transition-colors" />
                <h3 className="text-2xl font-bold mb-4">{t('education.form.chatbot_title')}</h3>
                <p className="text-indigo-200 mb-8 max-w-xs">{t('education.form.chatbot_desc')}</p>
                <button className="px-6 py-3 bg-white text-indigo-900 rounded-xl font-bold hover:shadow-lg hover:shadow-white/20 transition-all">
                  {t('education.form.chatbot_cta')}
                </button>
              </div>
            </div>

            <EducationForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">{t('education.faq.title')}</h2>
          <Accordion items={faqItems} pillar="education" />

          <div className="mt-16 p-8 rounded-[2rem] bg-education-blue/5 border border-education-blue/10 flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-education-blue text-white flex items-center justify-center shadow-lg shadow-education-blue/30 scale-110">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900 dark:text-white">{t('common.instant_help')}</div>
                <div className="text-slate-500 dark:text-slate-400 font-medium">China Office: {t('common.phone_numbers.china')}</div>
              </div>
            </div>
            <button className="px-8 py-3 bg-white dark:bg-slate-800 text-education-blue border border-education-blue rounded-xl font-bold hover:bg-education-blue hover:text-white transition-all">
              {t('common.whatsapp')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
