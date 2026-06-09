export function Badge(props: BadgeProps): JSX.Element;

export interface BadgeProps {
  /** Badge label */
  children: React.ReactNode;
  /** Color variant */
  variant?: 'rosa' | 'neutral' | 'success' | 'warning' | 'error';
  /** Size */
  size?: 'sm' | 'md';
  /** Additional CSS class */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}
