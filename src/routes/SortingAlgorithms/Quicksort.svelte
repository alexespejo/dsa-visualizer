<script lang="ts">
    import { onMount } from 'svelte';
    import Layout from "../../layouts/Layout.svelte";
    import Controls from "../../components/custom/layout/Controls.svelte";
    import Visualize from "../../components/custom/layout/Visualize.svelte";
    import ArrayDisplay from "../../components/Array/ArrayDisplay.svelte";
    import ArrayElementIndexed from "../../components/Array/ArrayElementIndexed.svelte";
    import Button from "../../components/custom/Button.svelte";
    import FunctionVisualizerLayout from "../../layouts/Layout.svelte";
    import FormControl from "../../components/custom/FormControl.svelte";
    import LabelInput from "../../components/custom/Inputs/Label.svelte";
    import Label from "../../components/custom/Inputs/Label.svelte";
  
    let unsortedList: number[] = [];
    let unsortedListCopy: number[] = [];
    let i: number = 1;
    let j: number = unsortedList.length - 1;
  
    // Pivot placeholder
    let pivot: number = 30;
  
    let stateStack: { unsortedList: number[], i: number, j: number }[] = [];
    let inplaceOption: string = "Inplace1";
  
    function saveState() {
      stateStack.push({ unsortedList: [...unsortedList], i, j });
    }
  
    function next() {
      saveState();
      if (inplaceOption === "Inplace1") {
        if (i < j) {
          if (unsortedList[i] < pivot) {
            i += 1;
          } else if (unsortedList[i] > pivot && unsortedList[j] > pivot) {
            j -= 1;
          } else {
            let temp = unsortedList[i];
            unsortedList[i] = unsortedList[j];
            unsortedList[j] = temp;
            i += 1;
            j -= 1;
          }
        }
      } else if (inplaceOption === "Inplace2") {
        if (j < pivot) {
          ++i;
          ++j;
        } else if (j >= pivot) {
          ++j;
        }
      }
    }
  
    function undo() {
      if (stateStack.length > 0) {
        let state = stateStack.pop();
        unsortedList = state.unsortedList;
        i = state.i;
        j = state.j;
      }
    }
  
    function inplaceVariable() {
      if (inplaceOption === "Inplace1") {
        i = 1;
        j = unsortedList.length - 1;
      } else if (inplaceOption === "Inplace2") {
        i = 0;
        j = 1;
      }
    }
  
    function reset() {
        if (inplaceOption === "Inplace1") {
            i = 1;
            j = unsortedList.length - 1;
        } else if (inplaceOption === "Inplace2") {
            i = 0;
            j = 1;
        }
        unsortedList = [...unsortedListCopy];
    }
  
    function generateRandomNumbers(length: number): number[] {
      let numbers: number[] = [];
  
      // Pivot
      numbers.push(30);
  
      for (let i = 1; i < length - 1; i++) {
        numbers.push(Math.floor(Math.random() * 199) - 99);
      }
      return numbers;
    }
  
    function randomize() {
      unsortedList = generateRandomNumbers(10);
      unsortedListCopy = [...unsortedList];
      if (inplaceOption === "Inplace1") {
        i = 1;
        j = unsortedList.length - 1;
      } else if (inplaceOption === "Inplace2") {
        i = 0;
        j = 1;
      }
    }
  
    onMount(() => {
      randomize();
    });
  </script>

<FunctionVisualizerLayout dataStructure="SA">
  <Controls title="Quick Sort">
      <FormControl>
          <LabelInput>Option</LabelInput>
          <div class="join space-x-0.5">
          <button 
              on:click={() => { inplaceOption = 'Inplace1'; inplaceVariable(); }}
              class={`btn join-item btn-accent btn-sm ${inplaceOption !== "Inplace1" ? "btn-outline" : ""}`}
          >
              Inplace1
          </button>            
          <button 
          on:click={() => { inplaceOption = 'Inplace2'; inplaceVariable(); }}
          class={`btn join-item btn-accent btn-sm ${inplaceOption !== "Inplace2" ? "btn-outline" : ""}`}
      >
          Inplace2
      </button>        
          </div>
          
      </FormControl>
      <FormControl>
          <LabelInput>Choice</LabelInput>
          <div class="join space-x-0.5">
              <button class="btn btn-outline btn-primary join-item btn-sm"
                      on:click={next}>
                  Pass
              </button>
              <button class="btn btn-outline btn-secondary join-item btn-sm"
                      on:click={undo}>
                  Undo
              </button>
          </div>
      </FormControl>
      <FormControl>
          <Label>Misc</Label>
          <div class="join space-x-0.5">
           <button
            class="btn btn-success btn-outline join-item btn-sm"
            on:click={randomize}
            >Randomize
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-shuffle"
            viewBox="0 0 16 16"
          >
            <path
            fill-rule="evenodd"
            d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"
            />
            <path
            d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"
            />
          </svg>
           </button>
       </FormControl>
           <FormControl>
               <LabelInput>Special</LabelInput>
               <div class="join space-x-0.5">
               <button class="btn btn-outline btn-warning join-item btn-sm"
               on:click={reset}
               >
               Reset
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                   <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
                   <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
                 </svg>
               </button
               >
               </div>
           </FormControl>
        </Controls>
       

  <Visualize>
      <ArrayDisplay>
          {#each unsortedList as number, index}
              <div class="pt-5">
                  <div class="text-center font-bold">
                      {#if index === i}
                          i
                      {:else if index === j}
                          j
                      {:else}
                          &nbsp;
                      {/if}
                  </div>
                  <ArrayElementIndexed {index}>
                      {number}
                  </ArrayElementIndexed>
              </div>
          {/each}
      </ArrayDisplay>
  </Visualize>
</FunctionVisualizerLayout>
