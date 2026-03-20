import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useFormValidation } from '../../hooks/useFormValidation';
import { useToast } from '../ui/ToastContext';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';

type SubmitStatus = 'idle' | 'submitting' | 'success';

interface TourismFormFields {
  [key: string]: string;
  name: string;
  email: string;
  phone: string;
  destination: string;
  tripType: string;
  travelers: string;
  budget: string;
  preferredDates: string;
  message: string;
}

const INITIAL_VALUES: TourismFormFields = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  tripType: '',
  travelers: '',
  budget: '',
  preferredDates: '',
  message: '',
};

const VALIDATION_RULES = {
  name: { required: true, minLength: 2 },
  email: { required: true, email: true },
  phone: { required: true, phone: true },
  destination: { required: true },
  tripType: { required: true },
  travelers: {},
  budget: {},
  preferredDates: {},
  message: {},
};

export default function TourismForm() {
  const { t } = useTranslation();
  const { addToast } = useToast();
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validate,
    reset,
  } = useFormValidation<TourismFormFields>(INITIAL_VALUES, VALIDATION_RULES);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    await new Promise<void>((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    addToast(t('tourism.form.success_message'), 'success');
  };

  const handleReset = () => {
    reset();
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 px-6 md:py-16 md:px-8">
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-8 shadow-inner ring-4 md:ring-8 ring-emerald-50 dark:ring-emerald-900/10">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400" strokeWidth={1.75} />
        </div>
        <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {t('tourism.form.success_title')}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-sm leading-relaxed mb-10">
          {t('tourism.form.success_message')}
        </p>
        <Button
          variant="secondary"
          size="md"
          onClick={handleReset}
          type="button"
          className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20"
        >
          {t('tourism.form.send_another')}
        </Button>
      </div>
    );
  }

  const destinationOptions = [
    { value: 'china', label: t('tourism.form.option_china') },
    { value: 'japan', label: t('tourism.form.option_japan') },
    { value: 'korea', label: t('tourism.form.option_korea') },
    { value: 'multi', label: t('tourism.form.option_multi') },
  ];

  const tripTypeOptions = [
    { value: 'cultural', label: t('tourism.form.type_cultural') },
    { value: 'business', label: t('tourism.form.type_business') },
    { value: 'custom', label: t('tourism.form.type_custom') },
  ];

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      onSubmit={handleSubmit}
      noValidate
      aria-label={t('tourism.form.title')}
    >
      {/* Name */}
      <div>
        <Input
          name="name"
          label={t('common.full_name')}
          placeholder="John Doe"
          value={values.name}
          error={touched.name ? errors.name : undefined}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          required
          autoComplete="name"
        />
      </div>

      {/* Email */}
      <div>
        <Input
          name="email"
          type="email"
          label={t('common.email')}
          placeholder="john@example.com"
          value={values.email}
          error={touched.email ? errors.email : undefined}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          required
          autoComplete="email"
        />
      </div>

      {/* Phone */}
      <div>
        <Input
          name="phone"
          type="tel"
          label={t('common.phone')}
          placeholder="+91 XXXX XXX XXX"
          value={values.phone}
          error={touched.phone ? errors.phone : undefined}
          onChange={(e) => handleChange('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          required
          autoComplete="tel"
        />
      </div>

      {/* Destination */}
      <div>
        <Select
          name="destination"
          label={t('tourism.form.destination_label')}
          options={destinationOptions}
          placeholder="Select destination"
          value={values.destination}
          error={touched.destination ? errors.destination : undefined}
          onChange={(e) => handleChange('destination', e.target.value)}
          onBlur={() => handleBlur('destination')}
          required
        />
      </div>

      {/* Trip Type */}
      <div>
        <Select
          name="tripType"
          label={t('tourism.form.type_label')}
          options={tripTypeOptions}
          placeholder="Select travel type"
          value={values.tripType}
          error={touched.tripType ? errors.tripType : undefined}
          onChange={(e) => handleChange('tripType', e.target.value)}
          onBlur={() => handleBlur('tripType')}
          required
        />
      </div>

      {/* Number of Travelers */}
      <div>
        <Input
          name="travelers"
          type="number"
          label={t('tourism.form.travelers_label')}
          placeholder="2"
          min="1"
          value={values.travelers}
          error={touched.travelers ? errors.travelers : undefined}
          onChange={(e) => handleChange('travelers', e.target.value)}
          onBlur={() => handleBlur('travelers')}
        />
      </div>

      {/* Budget */}
      <div>
        <Input
          name="budget"
          type="text"
          label={t('tourism.form.budget_label')}
          placeholder={t('tourism.form.budget_placeholder')}
          value={values.budget}
          error={touched.budget ? errors.budget : undefined}
          onChange={(e) => handleChange('budget', e.target.value)}
          onBlur={() => handleBlur('budget')}
        />
      </div>

      {/* Preferred Dates — full width */}
      <div className="md:col-span-2">
        <Input
          name="preferredDates"
          type="text"
          label={t('tourism.form.dates_label')}
          placeholder={t('tourism.form.dates_placeholder')}
          value={values.preferredDates}
          error={touched.preferredDates ? errors.preferredDates : undefined}
          onChange={(e) => handleChange('preferredDates', e.target.value)}
          onBlur={() => handleBlur('preferredDates')}
        />
      </div>

      {/* Message — full width */}
      <div className="md:col-span-2">
        <Textarea
          name="message"
          label={t('common.additional_notes')}
          placeholder={t('common.notes_placeholder')}
          value={values.message}
          error={touched.message ? errors.message : undefined}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          rows={4}
        />
      </div>

      {/* Submit — full width */}
      <div className="md:col-span-2">
        <Button
          type="submit"
          pillar="tourism"
          size="lg"
          fullWidth
          loading={status === 'submitting'}
          disabled={status === 'submitting'}
          className="!bg-orange-600 hover:!bg-orange-700 border-orange-600 shadow-xl shadow-orange-900/20"
        >
          {t('tourism.form.submit')}
        </Button>
      </div>
    </form>
  );
}
