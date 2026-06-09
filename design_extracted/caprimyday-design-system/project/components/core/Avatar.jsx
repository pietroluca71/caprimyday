const React = window.React;

export function Avatar({
  src,
  alt = '',
  initials = '',
  size = 40,
  className = '',
  style = {},
}) {
  const [imgError, setImgError] = React.useState(false);

  const baseStyle = {
    width: size,
    height: size,
    borderRadius: 'var(--radius-full)',
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    background: 'var(--color-rosa-light)',
    color: 'var(--color-rosa-dark)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-medium)',
    fontSize: size * 0.38,
    letterSpacing: 'var(--tracking-wide)',
    ...style,
  };

  if (src && !imgError) {
    return React.createElement(
      'div',
      { className, style: baseStyle },
      React.createElement('img', {
        src,
        alt,
        style: { width: '100%', height: '100%', objectFit: 'cover' },
        onError: () => setImgError(true),
      })
    );
  }

  return React.createElement('div', { className, style: baseStyle }, initials.slice(0, 2).toUpperCase());
}
