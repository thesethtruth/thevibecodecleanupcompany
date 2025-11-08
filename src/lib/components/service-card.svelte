<script lang="ts">
	interface Props {
		title: string;
		description: string;
	}

	let { title, description }: Props = $props();
</script>

<div
	class="card group relative rounded-[20px] border-4 border-[#e8d5b7] bg-[#4a5c4e] px-[30px] py-10 text-center shadow-[6px_6px_0_#1a1816] transition-shadow duration-300 ease-in-out hover:shadow-[12px_6px_0_#1a1816]"
>
	<!-- Red layer - hidden by default, appears on hover moving left -->
	<div
		class="pointer-events-none absolute inset-0 -z-10 rounded-[20px] border-4 border-[#e8d5b7] bg-[#b85230] opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-[-18px] group-hover:opacity-100"
	></div>

	<h3 class="mb-[15px] font-['Righteous'] text-2xl text-[#e8d5b7]">{title}</h3>
	<p class="leading-relaxed text-[#e8d5b7]">{description}</p>
</div>
