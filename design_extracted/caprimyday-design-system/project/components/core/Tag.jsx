const React = window.React;

export function Tag({
  children,
  dismissible = false,
  onDismiss,
  className = '',
  style = {},
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-1)',
    padding: 'var(--space-1) var(--space-3)',
    borderRadius: 'var(--radius-full)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: 'var(--tracking-wide)',
    color: 'var(--color-grigio-dark)',
    background: 'var(--neutral-100)',
    border: '1px solid var(--neutral-200)',
    lineHeight: '1.4',
    whiteSpace: 'nowrap',
    ...style,
  };

  const closeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    marginLeft: '2px',
    color: 'var(--color-grigio)',
    fontSize: '14px',
    lineHeight: 1,
  };

  return React.createElement(
    'span',
    { className, style: baseStyle },
    children,
    dismissible &&
      React.createElement(
        'button',
        { style: closeStyle, onClick: onDismiss, 'aria-label': 'Remove' },
        '×'
      )
  );
}
