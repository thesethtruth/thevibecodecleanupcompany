<script lang="ts">
	import TimelineItem from './timeline-item.svelte';

	interface TimelineEntry {
		number: string;
		title: string;
		description: string;
	}

	interface Props {
		title: string;
		items: TimelineEntry[];
	}

	let { title, items }: Props = $props();
</script>

<section class="timeline relative bg-[#4A5C4E] px-5 py-[120px]">
	<h2
		class="mb-20 text-center font-['Righteous'] text-[clamp(2rem,6vw,3.5rem)] font-normal text-[#e8d5b7] [text-shadow:5px_5px_0_#1a1816]"
	>
		{title}
	</h2>

	<div class="timeline-container relative mx-auto max-w-[1200px] px-10">
		<!-- Timeline vertical line -->
		<div
			class="timeline-line absolute top-0 bottom-0 left-1/2 w-1 -translate-x-1/2 bg-[#1a1816] max-md:left-[30px]"
		></div>

		{#each items as item, index}
			<TimelineItem
				number={item.number}
				title={item.title}
				description={item.description}
				position={index % 2 === 0 ? 'left' : 'right'}
			/>
		{/each}
	</div>
</section>
