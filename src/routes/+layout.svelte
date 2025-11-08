<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import { Toaster } from '$lib/components/ui/sonner/index.js';

	import '../app.css';
	let { children } = $props();
</script>

<Toaster />
<Header />
<div class="p-35 container mx-auto flex flex-col items-center justify-center">
	{@render children?.()}
</div>
