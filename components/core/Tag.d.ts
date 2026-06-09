export function Tag(props: TagProps): JSX.Element;

export interface TagProps {
  /** Tag label */
  children: React.ReactNode;
  /** Dismissible — shows × button */
  dismissible?: boolean;
  /** Dismiss handler */
  onDismiss?: () => void;
  /** Additional CSS class */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}
