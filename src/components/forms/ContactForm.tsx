import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { useToast } from '../ui/ToastContext';
import { useFormValidation } from '../../hooks/useFormValidation';
import { COMPANY } from '../../constants';

interface ContactFormValues {
  [key: string]: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  activeTab: 'education' | 'tourism' | 'trade';
}

const INITIAL_VALUES: ContactFormValues = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

const VALIDATION_RULES = {
  fullName: { required: true },
  email: { required: true, email: true },
  message: { required: true, minLength: 10 },
};

export default function ContactForm({ activeTab }: ContactFormProps) {
  const { t } = useTranslation();
  const { addToast } = useToast();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const { values, errors, touched, handleChange, handleBlur, validate, reset } =
    useFormValidation<ContactFormValues>(INITIAL_VALUES, VALIDATION_RULES);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      addToast(t('contact.form.success'), 'success');
    }, 1500);
  };

  const handleSendAnother = () => {
    reset();
    setFormStatus('idle');
  };

  if (formStatus === 'success') {
    return (
      <div className="py-20 text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-10 h-10" />
        </div>
        <h4 className="text-2xl font-bold text-slate-950 dark:text-white">
          {t('contact.form.success')}
        </h4>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {t('contact.form.subtitle')}
        </p>
        <button
          onClick={handleSendAnother}
          className="text-blue-600 font-bold hover:underline"
        >
          {t('contact.form.send_another')}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      aria-label={t('contact.form.title')}
    >
      {/* Hidden context field so submissions carry the service type */}
      <input type="hidden" name="serviceContext" value={activeTab} />

      {/* Full Name */}
      <div className="space-y-2">
        <Input
          name="fullName"
          label={t('common.full_name')}
          placeholder="John Doe"
          required
          autoComplete="name"
          value={values.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          onBlur={() => handleBlur('fullName')}
          error={touched.fullName ? errors.fullName : undefined}
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Input
          name="email"
          type="email"
          label={t('common.email')}
          placeholder={COMPANY.email}
          required
          autoComplete="email"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          error={touched.email ? errors.email : undefined}
        />
      </div>

      {/* Phone — optional, full width */}
      <div className="md:col-span-2">
        <Input
          name="phone"
          type="tel"
          label={t('common.phone')}
          placeholder="+91 XXXX XXX XXX"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          error={touched.phone ? errors.phone : undefined}
        />
      </div>

      {/* Message — full width */}
      <div className="md:col-span-2">
        <Textarea
          name="message"
          label={t('common.additional_notes')}
          placeholder={t('common.notes_placeholder')}
          required
          rows={4}
          value={values.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          error={touched.message ? errors.message : undefined}
        />
      </div>

      {/* Submit — full width */}
      <div className="md:col-span-2 pt-2">
        <Button
          type="submit"
          pillar="education"
          size="lg"
          fullWidth
          loading={formStatus === 'submitting'}
          iconRight={<Send className="w-4 h-4" />}
        >
          {t('contact.form.submit')}
        </Button>
      </div>
    </form>
  );
}
