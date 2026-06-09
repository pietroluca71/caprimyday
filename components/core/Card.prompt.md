Card — container for grouped content with optional elevation and interactivity.

```jsx
<Card variant="default" padding="md">
  <h3>Villa Jovis</h3>
  <p>An iconic venue overlooking the sea.</p>
</Card>

<Card variant="accent" padding="lg">
  <p>Featured package highlight</p>
</Card>

<Card variant="outlined" onClick={() => {}}>
  <p>Clickable card with hover border</p>
</Card>
```

### Variants
- `default` — white with subtle shadow
- `outlined` — white with border, no shadow
- `elevated` — white with stronger shadow
- `accent` — rosa-tinted background

### Props
- `padding`: `none` | `sm` | `md` | `lg`
- `onClick`: makes the card interactive (hover effects activate)
