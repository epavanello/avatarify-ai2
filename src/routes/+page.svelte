<script>
  import '../app.pcss';
  import Board from './board.svelte';
  import Header from './header.svelte';
  import Sidebar from './sidebar.svelte';

  export let data;
</script>

<Header supabase={data.supabase} user={data.user} />

<main class="flex flex-1 flex-col overflow-auto md:flex-row">
  <Board user={data.user} />
  <Sidebar user={data.user} dailyGeneratedImages={data.dailyGeneratedImages} />
</main>
