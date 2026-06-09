export function Input(props: InputProps): JSX.Element;

export interface InputProps {
  /** Input label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'date';
  /** Render as textarea */
  multiline?: boolean;
  /** Number of rows for textarea */
  rows?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Full-width */
  fullWidth?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}
