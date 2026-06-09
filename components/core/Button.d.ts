export function Button(props: ButtonProps): JSX.Element;

export interface ButtonProps {
  /** Button label text */
  children: React.ReactNode;
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Full-width button */
  fullWidth?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: (e: React.MouseEvent) => void;
  /** Optional icon element placed before the label */
  iconLeft?: React.ReactNode;
  /** Optional icon element placed after the label */
  iconRight?: React.ReactNode;
  /** HTML type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Additional CSS class */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}
