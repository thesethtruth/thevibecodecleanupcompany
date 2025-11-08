<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import { Toaster } from '$lib/components/ui/sonner/index.js';

	import '../app.css';
	let { children } = $props();
</script>

<Toaster />
<Header />
{@render children?.()}
