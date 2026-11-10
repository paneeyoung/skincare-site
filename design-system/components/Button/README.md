Pill-shaped uppercase action button in four variants: `primary` (olive), `light` (cream, for use on the olive band), `outline` (square, sand border) and `link` (gold underline).

**You provide:** children (label), optional `onClick`. Add `arrow` for a trailing arrow, `size="sm"` for compact, `full` for full width.

**Do**
- Use one `primary` per view area; use `outline` for "view all" and secondary actions.
- Place `light` only on `bg-inverse`.

**Don't**
- Round `outline` or `link` buttons; they stay square by design.
- Set label case yourself; the component uppercases and tracks it.
