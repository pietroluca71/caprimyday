Button — primary action element for forms, CTAs, and navigation.

```jsx
<Button variant="primary" size="md" onClick={() => {}}>
  Get in Touch
</Button>

<Button variant="secondary" size="sm">
  View Gallery
</Button>

<Button variant="ghost" size="sm">
  Cancel
</Button>
```

### Variants
- `primary` — rosa background, white text. Main CTA.
- `secondary` — transparent with rosa border. Secondary actions.
- `ghost` — no background/border. Tertiary/cancel actions.
- `dark` — dark background for contrast sections.

### Props
- `size`: `sm` | `md` | `lg`
- `fullWidth`: stretches to container width
- `iconLeft` / `iconRight`: pass a React node for icon placement
- `disabled`: dims and prevents interaction
