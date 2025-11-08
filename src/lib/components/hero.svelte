<script lang="ts">
	interface Props {
		logoSrc: string;
		headlineText: string;
		ctaText: string;
		ctaHref: string;
	}

	let { logoSrc, headlineText, ctaText, ctaHref }: Props = $props();
</script>

<section
	class="hero relative flex min-h-screen flex-col items-center justify-center bg-[#E8D5B7] px-5 py-5"
>
	<img src={logoSrc} alt="Vibe Code Cleanup" class="logo mb-[60px] w-64 max-w-[300px]" />

	<h1
		class="headline relative mb-10 grid place-items-center text-center font-['Righteous'] text-[clamp(2rem,8vw,5rem)] leading-[1.1]"
	>
		<span
			class="text-outline font-normal text-[#b85230] [-webkit-text-stroke:5px_#e8d5b7] [grid-area:1/1] [text-shadow:6px_6px_0_#1a1816]"
			>{headlineText}</span
		>
		<span class="text-clean font-normal text-[#b85230] [grid-area:1/1]">{headlineText}</span>
	</h1>

	<a
		href={ctaHref}
		class="btn inline-block rounded-[50px] border-[5px] border-[#e8d5b7] bg-[#b85230] px-[50px] py-5 text-xl font-bold text-[#e8d5b7] no-underline shadow-[5px_5px_0_#1a1816] transition-transform duration-200 hover:scale-105"
	>
		{ctaText}
	</a>
</section>
