export function Divider(props: DividerProps): JSX.Element;

export interface DividerProps {
  /** Decorative element in the center */
  ornament?: boolean;
  /** Spacing above and below */
  spacing?: 'sm' | 'md' | 'lg';
  /** Additional CSS class */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}
