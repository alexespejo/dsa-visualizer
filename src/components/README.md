# Components Documentation

## Label.svelte

- Description: This component represents a label with customizable styling.
- Use: It wraps the content inside a styled container with the ability to apply custom styles.
- Props:
  - Requires content to be provided through a slot.

## NumberInput.svelte

- Description: This component is an input field specifically for numerical values.
- Use: It allows users to input numbers within a specified range.
- Props:
  - Requires a `value` property bound to a numerical variable & a `color` property bound to a string value.
  - Allows customization of size, styles, and placeholder text.
  - Optional requirement indicator (`require` property) can be set to enforce input.
  - Default min and max values are set from 1 to 50.
