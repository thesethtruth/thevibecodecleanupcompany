<script lang="ts">
	interface Props {
		number: string;
		title: string;
		description: string;
		position: 'left' | 'right';
	}

	let { number, title, description, position }: Props = $props();
</script>

<div
	class="timeline-item mb-[60px] grid items-center gap-10 md:gap-10 lg:grid-cols-[minmax(200px,1fr)_auto_minmax(200px,1fr)]"
>
	<div
		class="timeline-content relative w-auto max-w-full rounded-[15px] border-[3px] border-[#b85230] bg-[#e8d5b7] p-[30px] shadow-[4px_4px_0_#1a1816] lg:w-[380px] xl:w-[380px]
		{position === 'left'
			? 'justify-self-end text-right lg:col-start-1'
			: 'justify-self-start text-left lg:col-start-3'}"
	>
		<div
			class="timeline-number mb-[10px] font-['Righteous'] text-5xl leading-none font-normal text-[#b85230]"
		>
			{number}
		</div>
		<h3 class="mb-[10px] font-['Righteous'] text-2xl leading-tight font-normal text-[#1a1816]">
			{title}
		</h3>
		<p class="leading-relaxed text-[#1a1816]">{description}</p>
	</div>
	<div
		class="timeline-dot relative z-10 h-6 w-6 justify-self-center rounded-full border-4 border-[#e8d5b7] bg-[#b85230] shadow-[0_0_0_4px_#1a1816] lg:col-start-2"
	></div>
</div>

<style>
	@media (max-width: 1024px) {
		.timeline-content {
			width: 300px;
		}
	}

	@media (max-width: 768px) {
		.timeline-item {
			grid-template-columns: auto 1fr;
			gap: 20px;
		}

		.timeline-item .timeline-content {
			grid-column: 2;
			text-align: left;
			width: auto;
			max-width: 100%;
		}

		.timeline-item .timeline-dot {
			grid-column: 1;
		}
	}
</style>
