const React = window.React;

export function Divider({
  ornament = false,
  spacing = 'md',
  className = '',
  style = {},
}) {
  const spacings = {
    sm: 'var(--space-4)',
    md: 'var(--space-8)',
    lg: 'var(--space-12)',
  };

  const wrapStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-4)',
    margin: `${spacings[spacing]} 0`,
    ...style,
  };

  const lineStyle = {
    flex: 1,
    height: '1px',
    background: 'var(--border-default)',
  };

  const dotStyle = {
    width: 6,
    height: 6,
    borderRadius: 'var(--radius-full)',
    background: 'var(--color-rosa)',
    flexShrink: 0,
  };

  if (ornament) {
    return React.createElement(
      'div',
      { className, style: wrapStyle },
      React.createElement('div', { style: lineStyle }),
      React.createElement('div', { style: dotStyle }),
      React.createElement('div', { style: lineStyle })
    );
  }

  return React.createElement('div', {
    className,
    style: {
      height: '1px',
      background: 'var(--border-default)',
      margin: `${spacings[spacing]} 0`,
      ...style,
    },
  });
}
