/**
 * Pair a form's submit values with its translated option labels.
 *
 * Labels come from the per-locale strings in src/i18n/ui.ts. They are
 * positional, so the values here must list options in the same order. A
 * length mismatch throws at build time instead of rendering an option whose
 * value is undefined.
 */
export function formOptions<K extends string>(
  field: string,
  values: readonly K[],
  labels: readonly string[]
): { value: K; label: string }[] {
  if (values.length !== labels.length) {
    throw new Error(`Form field "${field}": ${values.length} values but ${labels.length} labels`);
  }
  return values.map((value, i) => ({ value, label: labels[i] }));
}
