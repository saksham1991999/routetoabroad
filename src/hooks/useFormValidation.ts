import { useState, useCallback } from 'react';

type ValidationRule = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  email?: boolean;
  phone?: boolean;
  pattern?: RegExp;
  patternMessage?: string;
};

type ValidationRules<T> = Partial<Record<keyof T, ValidationRule>>;

interface UseFormValidationReturn<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  handleChange: (field: keyof T, value: string) => void;
  handleBlur: (field: keyof T) => void;
  validate: () => boolean;
  reset: () => void;
  isValid: boolean;
  setValues: (values: T) => void;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s\-().]{7,20}$/;

function validateField(value: string, rule?: ValidationRule, label?: string): string {
  if (!rule) return '';
  const displayLabel = label ?? 'This field';

  if (rule.required && !value.trim()) return `${displayLabel} is required`;
  if (!value.trim()) return '';
  if (rule.minLength && value.trim().length < rule.minLength) {
    return `${displayLabel} must be at least ${rule.minLength} characters`;
  }
  if (rule.maxLength && value.trim().length > rule.maxLength) {
    return `${displayLabel} must be at most ${rule.maxLength} characters`;
  }
  if (rule.email && !EMAIL_REGEX.test(value)) return 'Please enter a valid email address';
  if (rule.phone && !PHONE_REGEX.test(value)) return 'Please enter a valid phone number';
  if (rule.pattern && !rule.pattern.test(value)) return rule.patternMessage ?? `${displayLabel} is invalid`;
  return '';
}

export function useFormValidation<T extends object>(
  initialValues: T,
  rules: ValidationRules<T>,
): UseFormValidationReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const handleChange = useCallback((field: keyof T, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear error on change if field was touched
    setErrors((prev) => {
      if (prev[field]) {
        const err = validateField(value, rules[field]);
        return { ...prev, [field]: err };
      }
      return prev;
    });
  }, [rules]);

  const handleBlur = useCallback((field: keyof T) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField((values as Record<string, string>)[field as string] ?? '', rules[field], String(field)),
    }));
  }, [values, rules]);

  const validate = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    const newTouched: Partial<Record<keyof T, boolean>> = {};
    let valid = true;

    for (const field of Object.keys(rules) as Array<keyof T>) {
      newTouched[field] = true;
      const err = validateField(String((values as Record<string, string>)[field as string] ?? ''), rules[field], String(field));
      if (err) {
        newErrors[field] = err;
        valid = false;
      }
    }

    setTouched(newTouched);
    setErrors(newErrors);
    return valid;
  }, [values, rules]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  const isValid = Object.values(errors).every((e) => !e) &&
    Object.keys(rules).every((k) => !rules[k as keyof T]?.required || Boolean((values as Record<string, string>)[k]?.trim()));

  return { values, errors, touched, handleChange, handleBlur, validate, reset, isValid, setValues };
}
