const React = window.React;

export function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  multiline = false,
  rows = 3,
  disabled = false,
  error,
  helperText,
  fullWidth = false,
  className = '',
  style = {},
}) {
  const [focused, setFocused] = React.useState(false);

  const wrapStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-1)',
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-body)',
    ...style,
  };

  const labelStyle = {
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-medium)',
    color: 'var(--text-primary)',
    letterSpacing: 'var(--tracking-wide)',
  };

  const inputStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    padding: 'var(--space-3) var(--space-4)',
    borderRadius: 'var(--radius-md)',
    border: `1.5px solid ${error ? 'var(--status-error)' : focused ? 'var(--border-focus)' : 'var(--border-default)'}`,
    outline: 'none',
    background: disabled ? 'var(--neutral-50)' : 'var(--surface-card)',
    color: 'var(--text-primary)',
    transition: `border-color var(--duration-fast) var(--ease-default)`,
    opacity: disabled ? 0.6 : 1,
    width: '100%',
    resize: multiline ? 'vertical' : 'none',
  };

  const helperStyle = {
    fontSize: 'var(--text-xs)',
    color: error ? 'var(--status-error)' : 'var(--text-muted)',
    marginTop: '2px',
  };

  const inputEl = multiline
    ? React.createElement('textarea', {
        placeholder,
        value,
        onChange,
        disabled,
        rows,
        style: inputStyle,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
      })
    : React.createElement('input', {
        type,
        placeholder,
        value,
        onChange,
        disabled,
        style: inputStyle,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
      });

  return React.createElement(
    'div',
    { className, style: wrapStyle },
    label && React.createElement('label', { style: labelStyle }, label),
    inputEl,
    (error || helperText) && React.createElement('span', { style: helperStyle }, error || helperText)
  );
}
