const React = window.React;

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  onClick,
  className = '',
  style = {},
}) {
  const [hovered, setHovered] = React.useState(false);
  const isClickable = !!onClick;

  const paddings = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)',
  };

  const variants = {
    default: {
      background: 'var(--surface-card)',
      boxShadow: hovered && isClickable ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      border: 'none',
    },
    outlined: {
      background: 'var(--surface-card)',
      boxShadow: 'none',
      border: `1px solid ${hovered && isClickable ? 'var(--border-accent)' : 'var(--border-default)'}`,
    },
    elevated: {
      background: 'var(--surface-card)',
      boxShadow: hovered && isClickable ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      border: 'none',
    },
    accent: {
      background: 'var(--surface-accent)',
      boxShadow: 'none',
      border: 'none',
    },
  };

  const baseStyle = {
    borderRadius: 'var(--radius-md)',
    padding: paddings[padding],
    cursor: isClickable ? 'pointer' : 'default',
    transition: `all var(--duration-normal) var(--ease-default)`,
    ...variants[variant],
    ...style,
  };

  return React.createElement(
    'div',
    {
      className,
      style: baseStyle,
      onClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
    children
  );
}
