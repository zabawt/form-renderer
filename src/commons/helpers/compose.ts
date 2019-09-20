export const compose = (...functions: any[]) => (value: any) => functions.reduceRight((newValue, fx) => fx(newValue), value);