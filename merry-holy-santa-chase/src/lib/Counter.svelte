<script>

  import {CountStore} from "./store";
  let count;

  CountStore.subscribe((value) => {
    count = value;
  })

  export const increment = () => {
    CountStore.update((n) => n + 1)
  }
  
  export const decrement = () => {
    CountStore.update((n) => n - 1)
  }

</script>

<div id="counter">
  Punkte: {count}
</div>

<style>

  #counter {
    position: absolute;
  }

</style>

