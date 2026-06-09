const React = window.React;

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  iconLeft,
  iconRight,
  type = 'button',
  className = '',
  style = {},
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: 'var(--tracking-wide)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: `all var(--duration-normal) var(--ease-default)`,
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    borderRadius: 'var(--radius-md)',
    whiteSpace: 'nowrap',
  };

  const sizes = {
    sm: { padding: 'var(--space-2) var(--space-4)', fontSize: 'var(--text-sm)' },
    md: { padding: 'var(--space-3) var(--space-6)', fontSize: 'var(--text-sm)' },
    lg: { padding: 'var(--space-4) var(--space-8)', fontSize: 'var(--text-base)' },
  };

  const variants = {
    primary: {
      background: 'var(--interactive-primary)',
      color: 'var(--interactive-primary-text)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-rosa-dark)',
      boxShadow: 'inset 0 0 0 1.5px var(--color-rosa)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
    },
    dark: {
      background: 'var(--neutral-900)',
      color: 'var(--color-white)',
    },
  };

  const [hovered, setHovered] = React.useState(false);

  const hoverStyles = {
    primary: { background: 'var(--interactive-primary-hover)' },
    secondary: { background: 'var(--color-rosa-lighter)' },
    ghost: { background: 'var(--neutral-100)' },
    dark: { background: 'var(--neutral-800)' },
  };

  const merged = {
    ...baseStyle,
    ...sizes[size],
    ...variants[variant],
    ...(hovered && !disabled ? hoverStyles[variant] : {}),
    ...style,
  };

  return React.createElement(
    'button',
    {
      type,
      disabled,
      onClick,
      className,
      style: merged,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
    iconLeft,
    children,
    iconRight
  );
}
