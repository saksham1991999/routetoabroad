import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useFormValidation } from '../../hooks/useFormValidation';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { useForm } from '@formspree/react';

interface EducationFormFields {
  [key: string]: string;
  fullName: string;
  email: string;
  phone: string;
  educationLevel: string;
  programInterest: string;
  targetIntake: string;
  cgpa: string;
  notes: string;
}

const INITIAL_VALUES: EducationFormFields = {
  fullName: '',
  email: '',
  phone: '',
  educationLevel: '',
  programInterest: '',
  targetIntake: '',
  cgpa: '',
  notes: '',
};

const VALIDATION_RULES = {
  fullName: { required: true, minLength: 2 },
  email: { required: true, email: true },
  phone: { required: true, phone: true },
  educationLevel: { required: true },
  programInterest: { required: true },
  targetIntake: { required: true },
  cgpa: {},
  notes: {},
};

export default function EducationForm() {
  const { t } = useTranslation();
  const [state, handleFormspreeSubmit] = useForm("xjgpgllz");

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validate,
    reset,
  } = useFormValidation<EducationFormFields>(INITIAL_VALUES, VALIDATION_RULES);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    await handleFormspreeSubmit(e);
  };

  const handleReset = () => {
    reset();
    window.location.reload();
  };

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 px-6 md:py-16 md:px-8 bg-white dark:bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800">
        <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6 shadow-inner">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
          {t('education.form.success_title')}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-sm leading-relaxed mb-8">
          {t('education.form.success_message')}
        </p>
        <Button
          variant="secondary"
          size="md"
          onClick={handleReset}
          type="button"
        >
          {t('education.form.send_another')}
        </Button>
      </div>
    );
  }

  const educationLevelOptions = [
    { value: 'high_school', label: t('education.form.edu_level_hs') },
    { value: 'bachelor', label: t('education.form.edu_level_bach') },
    { value: 'master', label: t('education.form.edu_level_mast') },
  ];

  const programOptions = [
    { value: 'mbbs', label: t('common.programs.mbbs') },
    { value: 'engineering', label: t('common.programs.engineering') },
    { value: 'business', label: t('common.programs.business') },
    { value: 'language', label: t('education.programs.language.title') },
    { value: 'undergrad', label: t('education.programs.undergrad.title') },
    { value: 'research', label: t('education.programs.research.title') },
  ];

  const intakeOptions = [
    { value: 'sept_2026', label: t('common.dates.sept_2026') },
    { value: 'march_2027', label: t('common.dates.march_2027') },
  ];

  const cgpaOptions = [
    { value: '90plus', label: '90% + (Grade A+)' },
    { value: '80to89', label: '80% – 89% (Grade A)' },
    { value: '70to79', label: '70% – 79% (Grade B)' },
    { value: 'below70', label: 'Below 70%' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800">
      <form
        className="space-y-6"
        onSubmit={handleSubmit}
        noValidate
        aria-label={t('education.form.title')}
      >
        {/* Row: Full Name + Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            name="fullName"
            label={t('education.form.label_name')}
            placeholder={t('education.form.placeholder_name')}
            value={values.fullName}
            error={touched.fullName ? errors.fullName : undefined}
            onChange={(e) => handleChange('fullName', e.target.value)}
            onBlur={() => handleBlur('fullName')}
            required
            autoComplete="name"
          />
          <Input
            name="email"
            type="email"
            label={t('education.form.label_email')}
            placeholder={t('education.form.placeholder_email')}
            value={values.email}
            error={touched.email ? errors.email : undefined}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            required
            autoComplete="email"
          />
        </div>

        {/* Phone */}
        <Input
          name="phone"
          type="tel"
          label={t('education.form.label_phone')}
          placeholder={t('education.form.placeholder_phone')}
          value={values.phone}
          error={touched.phone ? errors.phone : undefined}
          onChange={(e) => handleChange('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          required
          autoComplete="tel"
        />

        {/* Education Level */}
        <Select
          name="educationLevel"
          label={t('education.form.label_level')}
          options={educationLevelOptions}
          placeholder={t('education.calculator.gpa_placeholder')}
          value={values.educationLevel}
          error={touched.educationLevel ? errors.educationLevel : undefined}
          onChange={(e) => handleChange('educationLevel', e.target.value)}
          onBlur={() => handleBlur('educationLevel')}
          required
        />

        {/* Row: Program Interest + Target Intake */}
        <div className="grid md:grid-cols-2 gap-6">
          <Select
            name="programInterest"
            label={t('education.form.label_program')}
            options={programOptions}
            placeholder="Select a program"
            value={values.programInterest}
            error={touched.programInterest ? errors.programInterest : undefined}
            onChange={(e) => handleChange('programInterest', e.target.value)}
            onBlur={() => handleBlur('programInterest')}
            required
          />
          <Select
            name="targetIntake"
            label={t('education.form.label_intake')}
            options={intakeOptions}
            placeholder="Select intake period"
            value={values.targetIntake}
            error={touched.targetIntake ? errors.targetIntake : undefined}
            onChange={(e) => handleChange('targetIntake', e.target.value)}
            onBlur={() => handleBlur('targetIntake')}
            required
          />
        </div>

        {/* CGPA / Grade */}
        <Select
          name="cgpa"
          label={t('education.calculator.gpa_label')}
          options={cgpaOptions}
          placeholder={t('education.calculator.gpa_placeholder')}
          value={values.cgpa}
          onChange={(e) => handleChange('cgpa', e.target.value)}
          onBlur={() => handleBlur('cgpa')}
        />

        {/* Additional Notes */}
        <Textarea
          name="notes"
          label={t('education.form.label_notes')}
          placeholder={t('education.form.placeholder_notes')}
          value={values.notes}
          error={touched.notes ? errors.notes : undefined}
          onChange={(e) => handleChange('notes', e.target.value)}
          onBlur={() => handleBlur('notes')}
          rows={4}
        />

        {/* Submit */}
        <Button
          type="submit"
          pillar="education"
          size="lg"
          fullWidth
          loading={state.submitting}
          disabled={state.submitting}
        >
          {t('education.form.submit')}
        </Button>
      </form>
    </div>
  );
}
