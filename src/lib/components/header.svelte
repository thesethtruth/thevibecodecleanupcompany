<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/ui/button/button.svelte';
	import { BookOpen, FileSearch } from 'lucide-svelte';
</script>

<header
	class="absolute top-0 z-50 flex h-12 w-full items-center justify-between bg-white px-20 py-1 shadow-sm"
>
	{#if page.url.pathname === '/'}
		<a
			href="/"
			class="flex items-center gap-2 transition-opacity hover:opacity-75"
			aria-label="Go to homepage"
		>
			<FileSearch class="h-6 w-6 text-blue-600" />
			<span class="text-lg font-semibold text-gray-900">TIV</span>
		</a>

		<a
			href="/"
			class="flex items-center gap-2 transition-opacity hover:opacity-75"
			aria-label="Go to homepage"
		>
			<BookOpen class="h-6 w-6 text-slate-600" />
			<span class="text-lg text-gray-800">about</span>
		</a>
	{:else}
		<Button variant="outline" size="sm" href="/">
			<span class="text-md text-gray-800">⟵ Back</span>
		</Button>
	{/if}
</header>
