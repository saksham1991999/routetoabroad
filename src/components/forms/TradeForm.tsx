import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { useFormValidation } from '../../hooks/useFormValidation';
import { useForm } from '@formspree/react';

interface TradeFormValues {
  [key: string]: string;
  companyName: string;
  tradeDirection: string;
  productCategory: string;
  estimatedVolume: string;
  additionalNotes: string;
}

const INITIAL_VALUES: TradeFormValues = {
  companyName: '',
  tradeDirection: '',
  productCategory: '',
  estimatedVolume: '',
  additionalNotes: '',
};

const VALIDATION_RULES = {
  companyName: { required: true },
  tradeDirection: { required: true },
};

export default function TradeForm() {
  const { t } = useTranslation();
  const [state, handleFormspreeSubmit] = useForm("xjgpgllz");

  const { values, errors, touched, handleChange, handleBlur, validate, reset } =
    useFormValidation<TradeFormValues>(INITIAL_VALUES, VALIDATION_RULES);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    await handleFormspreeSubmit(e);
  };

  const handleSendAnother = () => {
    reset();
    window.location.reload();
  };

  const tradeDirectionOptions = [
    { value: 'import', label: t('trade.form.option_import') },
    { value: 'export', label: t('trade.form.option_export') },
    { value: 'bilateral', label: t('trade.form.option_bilateral') },
  ];

  const productCategoryOptions = [
    { value: 'electronics', label: t('trade.form.cat_electronics') },
    { value: 'machinery', label: t('trade.form.cat_machinery') },
    { value: 'textiles', label: t('trade.form.cat_textiles') },
    { value: 'other', label: t('trade.form.cat_other') },
  ];

  if (state.succeeded) {
    return (
      <div className="py-16 text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div>
          <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {t('trade.form.success_title')}
          </h4>
          <p className="text-slate-500 dark:text-slate-400">
            {t('trade.form.success_message')}
          </p>
        </div>
        <button
          onClick={handleSendAnother}
          className="text-blue-600 font-bold hover:underline"
        >
          {t('trade.form.send_another')}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Company Name — full width */}
      <div className="md:col-span-2">
        <Input
          name="companyName"
          label={t('trade.form.label_company')}
          placeholder={t('trade.form.placeholder_company')}
          required
          value={values.companyName}
          onChange={(e) => handleChange('companyName', e.target.value)}
          onBlur={() => handleBlur('companyName')}
          error={touched.companyName ? errors.companyName : undefined}
          autoComplete="organization"
        />
      </div>

      {/* Trade Direction */}
      <Select
        name="tradeDirection"
        label={t('trade.form.label_direction')}
        options={tradeDirectionOptions}
        placeholder={t('trade.form.label_direction')}
        required
        value={values.tradeDirection}
        onChange={(e) => handleChange('tradeDirection', e.target.value)}
        onBlur={() => handleBlur('tradeDirection')}
        error={touched.tradeDirection ? errors.tradeDirection : undefined}
      />

      {/* Product Category */}
      <Select
        name="productCategory"
        label={t('trade.form.label_category')}
        options={productCategoryOptions}
        placeholder={t('trade.form.label_category')}
        value={values.productCategory}
        onChange={(e) => handleChange('productCategory', e.target.value)}
      />

      {/* Estimated Volume — full width */}
      <div className="md:col-span-2">
        <Input
          name="estimatedVolume"
          label={t('trade.form.label_volume')}
          placeholder={t('trade.form.placeholder_volume')}
          value={values.estimatedVolume}
          onChange={(e) => handleChange('estimatedVolume', e.target.value)}
          onBlur={() => handleBlur('estimatedVolume')}
        />
      </div>

      {/* Additional Notes — full width */}
      <div className="md:col-span-2">
        <Textarea
          name="additionalNotes"
          label={t('trade.form.label_desc')}
          placeholder={t('trade.form.placeholder_desc')}
          rows={4}
          value={values.additionalNotes}
          onChange={(e) => handleChange('additionalNotes', e.target.value)}
          onBlur={() => handleBlur('additionalNotes')}
        />
      </div>

      {/* Submit — full width */}
      <div className="md:col-span-2">
        <Button
          type="submit"
          pillar="trade"
          size="lg"
          fullWidth
          loading={state.submitting}
        >
          {t('trade.form.submit')}
        </Button>
      </div>
    </form>
  );
}
