# Components Documentation

## Label.svelte

- **Description**: This component represents a label with customizable styling.
- **Use**: It wraps the content inside a styled container with the ability to apply custom styles.
- **Props**:
  - Requires content to be provided through a slot.

```js
<Label>Capacity</Label>
```

## NumberInput.svelte

- **Description**: This component is an input field specifically for numerical values.
- **Use**: It allows users to input numbers within a specified range.
- **Props**:
  - `value`_(required):_ a state variable of type number
  - `color`_(required)_: a variable of type string (_[color options](https://daisyui.com/docs/colors/)_)
  - `size`_(optional):_ a variable of type string (_xs, sm, md, lg, xl_)
  - `styles`_(optional):_ Additional CSS class styles
  - `placeholder`_(optional):_ a string value
  - Optional requirement indicator (`require` property) can be set to enforce input.
  - Default min and max values are set from 1 to 50.

```js
<NumberInput
 color="accent"
 placeholder="Enter Value for q"
 styles=" w-40 join-item"
 bind:value={secondHashFunctionK}
/>
```

## TextInput.svelte

- **Description**: This component is an input field specifically for textual input.
- **Use**: It allows users to input text with customizable styling.
- **Props**:
  - `value`_(required)_: a string value
  - `color`_(required)_: a variable of type string (_[color options](https://daisyui.com/docs/colors/)_)
  - `sz`_(optional):_ a string value
  - `styles`_(optional):_ a string value
  - `placeholder`_(optional):_ a string value

```js
<TextInput
 bind:value={inputValue}
 color="primary"
 sz="md"
 styles="rounded-lg"
 placeholder="Enter text"
/>
```

## Controls.svelte

- **Description**: This component represents a control section with a title and inner content.
- **Use**: It provides a container for organizing control elements.
- **Props**:
  - `title`_(optional):_ a string value
  - Inner content can be provided using **_slots_**.

```js
<Controls title="Double Hashing">
 <FormControl>... // Other Components</FormControl>

 <FormControl>... // Other Components</FormControl>
</Controls>
```

## Visualize.svelte

- **Description**: This component represents a container for visualizing content.
- **Use**: It provides a styled container for visual representation of data.
- **Props**:
  - Inner content can be provided using **_slots_**.

```js
<Visualize>
  <div class="text-base-content font-bold mt-5">
   ...
  </div>
  <InsertionOrderDisplay {insertionOrder} />
  <ArrayDisplay>
   ...
    <ArrayElementIndexed index={i}>
     ...
    </ArrayElementIndexed>
   ...
  </ArrayDisplay>
 </Visualize>
```

## Button.svelte

- **Description**: This component represents a customizable button element.
- **Use**: It provides a button with customizable styling and click functionality.
- **Props**:
  - `color`_(required)_: a string value
  - `size`_(optional):_: a string value
  - `styles`_(optional):_: a string value
  - `onClick()`_(optional):_: a function to handle events

```js
<Button
 color="secondary"
 styles="btn btn-outline btn-secondary w-16 join-item w-max-w-xs"
 on:click={() => remove()}
>
 Delete
</Button>
```

## FormControl.svelte

- **Description**: This component represents a form control container.
- **Use**: It provides a styled container for form elements.
- **Props**:
  - Inner content can be provided using **_slots_**.

```js
<FormControl>
 <Label>Misc</Label>
 <div class="join">...</div>
</FormControl>
```

## ArrayDisplay.svelte

- **Description**: This component represents a container for displaying arrays.
- **Use**: It provides a styled container for displaying array elements.
- **Props**:
  - Inner content can be provided using **_slots_**.

```js
<ArrayDisplay>
   {#each hashingArray as item, i}
    <ArrayElementIndexed index={i}>
     ...
    </ArrayElementIndexed>
   {/each}
  </ArrayDisplay>
```

## ArrayElementIndexed.svelte

- **Description**: This component represents an indexed array element.
- **Use**: It provides a styled container for displaying indexed array elements.
- **Props**:
  - `index`_(required)_: a numerical value
  - `rehash`_(optional):_: a boolean value
  - `classList`_(optional):_: a string value
  - Allows customization of additional styling and animation based on conditions.

```js
 <ArrayElementIndexed index={i}>
    {#if item === null}
    <div class="p-3 text-center">X</div>
    {:else}
    <div class="p-3 text-center">{item}</div>
    {/if}
  </ArrayElementIndexed>
```

## Layout.svelte

- **Description**: This component represents the layout structure of the application.
- **Use**: It provides a structured layout based on the selected data structure.
- **Props**:
  - `dataStructure`(required): a string value
  - Imports and renders different navigation bars based on the selected data structure.
  - Provides a main content area for displaying dynamic content using slots.

```js
<Layout dataStructure="HT">
 <Controls title="Double Hashing">
  <FormControl>...</FormControl>

  <FormControl>
   <Label>...</Label>
  </FormControl>
 </Controls>

 <Visualize>
  ...
  <ArrayDisplay>
   ...
   <ArrayElementIndexed index={i}>...</ArrayElementIndexed>
   ...
  </ArrayDisplay>
 </Visualize>
</Layout>
```
