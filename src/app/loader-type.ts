export type LoaderType =
  | 'spinner-cutout'
  | 'spinner-border'
  | 'spinner-multiring'
  | 'spinner-rotating-dot'
  | 'spinner-segmented-ring'
  | 'spinner-angled-arc'
  | 'spinner-nested-circle'
  | 'dots'
  | 'bar'
  | 'pulse'
  | string; // fallback to allow unknown/custom ones
