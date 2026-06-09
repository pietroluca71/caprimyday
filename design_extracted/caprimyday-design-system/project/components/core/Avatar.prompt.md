Avatar — circular image or initials placeholder for people and contacts.

```jsx
<Avatar src="/photo.jpg" alt="Maria" size={48} />
<Avatar initials="MR" size={40} />
<Avatar initials="L" size={32} />
```

### Props
- `src`: image URL — falls back to initials on error
- `initials`: 1-2 character fallback
- `size`: diameter in pixels (default 40)
