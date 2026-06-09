const React = window.React;

export function Badge({
  children,
  variant = 'rosa',
  size = 'sm',
  className = '',
  style = {},
}) {
  const variantStyles = {
    rosa: { background: 'var(--color-rosa-lighter)', color: 'var(--color-rosa-dark)' },
    neutral: { background: 'var(--neutral-100)', color: 'var(--neutral-600)' },
    success: { background: '#e8f2ea', color: '#5a8a64' },
    warning: { background: '#f5eddf', color: '#9a7a42' },
    error: { background: '#f5e3e3', color: '#a05050' },
  };

  const sizes = {
    sm: { padding: 'var(--space-1) var(--space-2)', fontSize: 'var(--text-xs)' },
    md: { padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--text-sm)' },
  };

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 'var(--radius-full)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: 'var(--tracking-wide)',
    lineHeight: '1.4',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variantStyles[variant],
    ...style,
  };

  return React.createElement('span', { className, style: baseStyle }, children);
}
