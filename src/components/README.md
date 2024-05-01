# Components Documentation

## Label.svelte

- **Description**: This component represents a label with customizable styling.
- **Use**: It wraps the content inside a styled container with the ability to apply custom styles.
- **Props**:
  - Requires content to be provided through a slot.

```js
<div class="label">
  <span class="label-text flex items-center">
    <slot />
  </span>
</div>
```

## NumberInput.svelte

- **Description**: This component is an input field specifically for numerical values.
- **Use**: It allows users to input numbers within a specified range.
- **Props**:
  - _`value`(required): a numeric value_
  - _`color`(required): a string value_
  - `size`(optional): a string value
  - `styles`(optional): a string value
  - `placeholder`(optional): a string value
  - Optional requirement indicator (`require` property) can be set to enforce input.
  - Default min and max values are set from 1 to 50.

```js
<input
 bind:value
 required={require}
 on:change
 type="number"
 {placeholder}
 class={`input input-${color} input-${size} ${styles} input-bordered w-max-w-xs font-bold w-40`}
 min="1"
 max="50"
/>
```

## TextInput.svelte

- **Description**: This component is an input field specifically for textual input.
- **Use**: It allows users to input text with customizable styling.
- **Props**:
  - _`value`(required): a string value_
  - _`color`(required): a string value_
  - `size`(optional): a string value
  - `styles`(optional): a string value
  - `placeholder`(optional): a string value

```js
<input
  bind:value
  type="text"
  placeholder={placeholder}
  class={`input input-${color} input-${sz} ${styles} input-bordered w-max-w-xs font-bold`}
/>
```

## Controls.svelte

- **Description**: This component represents a control section with a title and inner content.
- **Use**: It provides a container for organizing control elements.
- **Props**:
  - `title`(optional): a string value
  - Inner content can be provided using **_slots_**.

```js
<div class="hash-table-controller">
  <h1 class="title-heading w-fit">{title}</h1>
  <div class="flex flex-col lg:flex-row lg:space-x-2 w-fit">
    <slot />
  </div>
</div>
```

## Visualize.svelte

- **Description**: This component represents a container for visualizing content.
- **Use**: It provides a styled container for visual representation of data.
- **Props**:
  - Inner content can be provided using **_slots_**.

```js
<div class="flex items-center justify-center flex-col w-full space-y-5">
  <slot />
</div>
```

## Button.svelte

- **Description**: This component represents a customizable button element.
- **Use**: It provides a button with customizable styling and click functionality.
- **Props**:
  - _`color`(required): a string value_
  - `size`(optional): a string value
  - `styles`(optional): a string value
  - `onClick()`(optional): a function to handle events

```js
<button class={`btn btn-${color} btn-${size} ${styles}`} on:click={onClick}>
  <slot />
</button>
```

## FormControl.svelte

- **Description**: This component represents a form control container.
- **Use**: It provides a styled container for form elements.
- **Props**:
  - Inner content can be provided using **_slots_**.

```js
<div class="form-control flex max-w-xs font-bold">
  <slot />
  <div class="join"></div>
</div>
```

## ArrayDisplay.svelte

- **Description**: This component represents a container for displaying arrays.
- **Use**: It provides a styled container for displaying array elements.
- **Props**:
  - Inner content can be provided using **_slots_**.

```js
<div class="flex flex-wrap space-x-0.5 justify-center lg:justify-start">
  <slot />
</div>
```

## ArrayElementIndexed.svelte

- **Description**: This component represents an indexed array element.
- **Use**: It provides a styled container for displaying indexed array elements.
- **Props**:
  - _`index`(required): a numerical value_
  - `rehash`(optional): a boolean value
  - `classList`(optional): a string value
  - Allows customization of additional styling and animation based on conditions.

```js
<div
  class={`hash-table-item ${
    rehash && "animate__animated animate__headShake text-red-300 border-red-300"
  } ${classList}`}
>
  <div class="px-3 text-base border-b-2 border-inherit text-center">
    {index}
  </div>
  <slot />
</div>
```

## Layout.svelte

- **Description**: This component represents the layout structure of the application.
- **Use**: It provides a structured layout based on the selected data structure.
- **Props**:
  - `dataStructure`(required): a string value
  - Imports and renders different navigation bars based on the selected data structure.
  - Provides a main content area for displaying dynamic content using slots.

```js
{#if dataStructure === "HT"}
 <HashTableNavbar />
{:else if dataStructure === "SA"}
 <SortingAlgoNavbar />
{/if}
<main class="px-2 2xl:px-64 relative flex-col flex items-center">
 <!-- Your content here -->
 <!-- <h1 class="title-heading xl:px-9 3xl:px-24">{title}</h1> -->
 <slot />
</main>
```
