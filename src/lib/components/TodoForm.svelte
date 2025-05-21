<script>
  import { useTodoState } from '$lib/states/todoState.svelte.js';
  const todoState = useTodoState();
  let name = '';
  let done = false;

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    todoState.add({ id: crypto.randomUUID(), name, done });
    name = '';
    done = false;
  }
</script>

<form on:submit={handleSubmit}>
  <label for="name">Todo</label>
  <input id="name" name="name" type="text" bind:value={name} placeholder="Enter a new todo" />
  <div>
    <input id="done" name="done" type="checkbox" bind:checked={done} />
    <label for="done">Done</label>
  </div>
  <input type="submit" value="Add Todo" />
</form>