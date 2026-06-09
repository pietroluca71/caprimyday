Input — text input field with label, validation, and multiline support.

```jsx
<Input label="Full Name" placeholder="Enter your name" />
<Input label="Email" type="email" error="Invalid email address" />
<Input label="Message" multiline rows={4} placeholder="Tell us about your vision..." />
```

### Props
- `label`: label text above the field
- `type`: `text` | `email` | `password` | `tel` | `url` | `number` | `date`
- `multiline`: renders as textarea
- `error`: shows red border + error message
- `helperText`: subtle hint below input
- `fullWidth`: stretches to container
- `disabled`: dims and disables interaction
