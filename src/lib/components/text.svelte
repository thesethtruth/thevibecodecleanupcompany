<!-- Typography.svelte -->
<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { WithElementRef } from 'bits-ui';

	interface TypographyProps {
		variant: keyof typeof baseStyles;
		class?: string;
		children?: () => any;
	}

	let {
		ref = $bindable(null),
		class: className,
		variant: variant = 'p',
		children
	}: WithElementRef<TypographyProps> = $props();

	const baseStyles = {
		h1: 'scroll-m-20 mb-4 text-4xl font-bold',
		h2: 'mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0',
		'h2-muted':
			'mt-10 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 text-muted-foreground',
		h3: 'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
		p: 'leading-7 [&:not(:first-child)]:mt-6',
		blockquote: 'mt-6 border-l-2 pl-6 italic',
		ul: 'my-6 ml-6 list-disc [&>li]:mt-2',
		table: 'my-6 w-full overflow-y-auto'
		// md: 'prose prose-lg'
	};
</script>

<svelte:element this={variant} bind:this={ref} class={cn(baseStyles[variant], className)}>
	{@render children?.()}
</svelte:element>
