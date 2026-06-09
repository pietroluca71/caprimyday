export function Card(props: CardProps): JSX.Element;

export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Visual style */
  variant?: 'default' | 'outlined' | 'elevated' | 'accent';
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Click handler — makes card interactive */
  onClick?: (e: React.MouseEvent) => void;
  /** Additional CSS class */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}
