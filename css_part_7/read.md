# CSS Selector Priority List

CSS selectors have different levels of specificity and priority when they are applied to elements. The higher the specificity, the more priority it has over other styles.

| Selector Type               | Example            | Specificity Value    |
|-----------------------------|--------------------|----------------------|
| Universal Selector           | `*`                | 1                    |
| Element Selector             | `div`, `h1`, `p`   | 10                    |
| Class, Attribute, Pseudo-class Selector | `.class`, `[type="text"]`, `:hover` | 100   |
| ID Selector                 | `#id`               | 1000                  |
| Inline Styles               | `style="color: red"` | 10000                |
| Important Rule               | `!important`       | 100000 overright any CSS |

### Notes:
- Specificity is calculated by adding the specificity values. For example, `#id.class` has a specificity of 100 + 10 = 110.
- Inline styles have the highest specificity.
- The `!important` rule will override all selectors, but should be used sparingly as it makes debugging harder.

