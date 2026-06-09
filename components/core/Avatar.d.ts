export function Avatar(props: AvatarProps): JSX.Element;

export interface AvatarProps {
  /** Image source URL */
  src?: string;
  /** Alt text */
  alt?: string;
  /** Fallback initials (1-2 characters) */
  initials?: string;
  /** Size in pixels */
  size?: number;
  /** Additional CSS class */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}
