<script>
  import TodoItem from './TodoItem.svelte';
  import { useTodoState } from '$lib/states/todoState.svelte.js';
  const todoState = useTodoState();
</script>

<ul>
  {#each todoState.todos as todo (todo.id)}
    <li>
      <TodoItem {todo} />
    </li>
  {/each}
</ul>