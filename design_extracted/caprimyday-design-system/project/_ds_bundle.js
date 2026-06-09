/* @ds-bundle: {"format":3,"namespace":"CapriMyDayDesignSystem_f50da7","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"45d96d9925f9","components/core/Badge.jsx":"ad15044b0218","components/core/Button.jsx":"f38ccf2f25fa","components/core/Card.jsx":"1e9e4d7bd9e2","components/core/Divider.jsx":"54b1218577a2","components/core/Tag.jsx":"4e7a9fe6002a","components/forms/Input.jsx":"4b3b93d41d5c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CapriMyDayDesignSystem_f50da7 = window.CapriMyDayDesignSystem_f50da7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const React = window.React;
function Avatar({
  src,
  alt = '',
  initials = '',
  size = 40,
  className = '',
  style = {}
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
    ...style
  };
  if (src && !imgError) {
    return React.createElement('div', {
      className,
      style: baseStyle
    }, React.createElement('img', {
      src,
      alt,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      },
      onError: () => setImgError(true)
    }));
  }
  return React.createElement('div', {
    className,
    style: baseStyle
  }, initials.slice(0, 2).toUpperCase());
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const React = window.React;
function Badge({
  children,
  variant = 'rosa',
  size = 'sm',
  className = '',
  style = {}
}) {
  const variantStyles = {
    rosa: {
      background: 'var(--color-rosa-lighter)',
      color: 'var(--color-rosa-dark)'
    },
    neutral: {
      background: 'var(--neutral-100)',
      color: 'var(--neutral-600)'
    },
    success: {
      background: '#e8f2ea',
      color: '#5a8a64'
    },
    warning: {
      background: '#f5eddf',
      color: '#9a7a42'
    },
    error: {
      background: '#f5e3e3',
      color: '#a05050'
    }
  };
  const sizes = {
    sm: {
      padding: 'var(--space-1) var(--space-2)',
      fontSize: 'var(--text-xs)'
    },
    md: {
      padding: 'var(--space-1) var(--space-3)',
      fontSize: 'var(--text-sm)'
    }
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
    ...style
  };
  return React.createElement('span', {
    className,
    style: baseStyle
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const React = window.React;
function Button({
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
  style = {}
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
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      padding: 'var(--space-2) var(--space-4)',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: 'var(--space-3) var(--space-6)',
      fontSize: 'var(--text-sm)'
    },
    lg: {
      padding: 'var(--space-4) var(--space-8)',
      fontSize: 'var(--text-base)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--interactive-primary)',
      color: 'var(--interactive-primary-text)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-rosa-dark)',
      boxShadow: 'inset 0 0 0 1.5px var(--color-rosa)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)'
    },
    dark: {
      background: 'var(--neutral-900)',
      color: 'var(--color-white)'
    }
  };
  const [hovered, setHovered] = React.useState(false);
  const hoverStyles = {
    primary: {
      background: 'var(--interactive-primary-hover)'
    },
    secondary: {
      background: 'var(--color-rosa-lighter)'
    },
    ghost: {
      background: 'var(--neutral-100)'
    },
    dark: {
      background: 'var(--neutral-800)'
    }
  };
  const merged = {
    ...baseStyle,
    ...sizes[size],
    ...variants[variant],
    ...(hovered && !disabled ? hoverStyles[variant] : {}),
    ...style
  };
  return React.createElement('button', {
    type,
    disabled,
    onClick,
    className,
    style: merged,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const React = window.React;
function Card({
  children,
  variant = 'default',
  padding = 'md',
  onClick,
  className = '',
  style = {}
}) {
  const [hovered, setHovered] = React.useState(false);
  const isClickable = !!onClick;
  const paddings = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const variants = {
    default: {
      background: 'var(--surface-card)',
      boxShadow: hovered && isClickable ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      border: 'none'
    },
    outlined: {
      background: 'var(--surface-card)',
      boxShadow: 'none',
      border: `1px solid ${hovered && isClickable ? 'var(--border-accent)' : 'var(--border-default)'}`
    },
    elevated: {
      background: 'var(--surface-card)',
      boxShadow: hovered && isClickable ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      border: 'none'
    },
    accent: {
      background: 'var(--surface-accent)',
      boxShadow: 'none',
      border: 'none'
    }
  };
  const baseStyle = {
    borderRadius: 'var(--radius-md)',
    padding: paddings[padding],
    cursor: isClickable ? 'pointer' : 'default',
    transition: `all var(--duration-normal) var(--ease-default)`,
    ...variants[variant],
    ...style
  };
  return React.createElement('div', {
    className,
    style: baseStyle,
    onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
const React = window.React;
function Divider({
  ornament = false,
  spacing = 'md',
  className = '',
  style = {}
}) {
  const spacings = {
    sm: 'var(--space-4)',
    md: 'var(--space-8)',
    lg: 'var(--space-12)'
  };
  const wrapStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-4)',
    margin: `${spacings[spacing]} 0`,
    ...style
  };
  const lineStyle = {
    flex: 1,
    height: '1px',
    background: 'var(--border-default)'
  };
  const dotStyle = {
    width: 6,
    height: 6,
    borderRadius: 'var(--radius-full)',
    background: 'var(--color-rosa)',
    flexShrink: 0
  };
  if (ornament) {
    return React.createElement('div', {
      className,
      style: wrapStyle
    }, React.createElement('div', {
      style: lineStyle
    }), React.createElement('div', {
      style: dotStyle
    }), React.createElement('div', {
      style: lineStyle
    }));
  }
  return React.createElement('div', {
    className,
    style: {
      height: '1px',
      background: 'var(--border-default)',
      margin: `${spacings[spacing]} 0`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const React = window.React;
function Tag({
  children,
  dismissible = false,
  onDismiss,
  className = '',
  style = {}
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
    ...style
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
    lineHeight: 1
  };
  return React.createElement('span', {
    className,
    style: baseStyle
  }, children, dismissible && React.createElement('button', {
    style: closeStyle,
    onClick: onDismiss,
    'aria-label': 'Remove'
  }, '×'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const React = window.React;
function Input({
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
  style = {}
}) {
  const [focused, setFocused] = React.useState(false);
  const wrapStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-1)',
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-body)',
    ...style
  };
  const labelStyle = {
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-medium)',
    color: 'var(--text-primary)',
    letterSpacing: 'var(--tracking-wide)'
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
    resize: multiline ? 'vertical' : 'none'
  };
  const helperStyle = {
    fontSize: 'var(--text-xs)',
    color: error ? 'var(--status-error)' : 'var(--text-muted)',
    marginTop: '2px'
  };
  const inputEl = multiline ? React.createElement('textarea', {
    placeholder,
    value,
    onChange,
    disabled,
    rows,
    style: inputStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }) : React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    disabled,
    style: inputStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  });
  return React.createElement('div', {
    className,
    style: wrapStyle
  }, label && React.createElement('label', {
    style: labelStyle
  }, label), inputEl, (error || helperText) && React.createElement('span', {
    style: helperStyle
  }, error || helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

})();
