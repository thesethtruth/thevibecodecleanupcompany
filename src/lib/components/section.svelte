<script lang="ts">
	interface Props {
		backgroundColor?: 'offwhite' | 'green' | 'black';
		id?: string;
		children?: import('svelte').Snippet;
	}

	let { backgroundColor = 'offwhite', id, children }: Props = $props();

	const bgClasses = {
		offwhite: 'bg-[#E8D5B7]',
		green: 'bg-[#4A5C4E]',
		black: 'bg-[#1a1816]'
	};
</script>

<section {id} class="relative px-5 py-[120px] {bgClasses[backgroundColor]}">
	{@render children?.()}
</section>
