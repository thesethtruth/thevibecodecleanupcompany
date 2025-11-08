<script lang="ts">
	import { onMount } from 'svelte';

	let scrollY = $state(0);
	let opacity = $derived(Math.min(scrollY / 100, 1));

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 z-50 flex h-16 w-full items-center justify-start px-5 transition-opacity duration-300"
	style="opacity: {opacity}"
>
	<div class="flex flex-col">
		<h1
			class="headline relative grid place-items-center font-['Righteous'] text-xl leading-[1.1] md:text-2xl"
		>
			<span
				class="text-outline font-normal text-[#b85230] [-webkit-text-stroke:2px_#e8d5b7] [grid-area:1/1] [text-shadow:3px_3px_0_#1a1816]"
			>
				vibe code cleanup
			</span>
			<span class="text-clean font-normal text-[#b85230] [grid-area:1/1]"> vibe code cleanup </span>
		</h1>
		<span
			class="w-fit rounded-sm bg-muted px-2 py-0.5 font-serif text-xs font-bold tracking-widest text-muted-foreground [text-shadow:2px_2px_0_#1a1816]"
		>
			COMPANY INC.
		</span>
	</div>
</header>
