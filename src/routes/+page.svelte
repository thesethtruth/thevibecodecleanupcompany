<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import Separator from '$lib/components/separator.svelte';
	import Timeline from '$lib/components/timeline.svelte';
	import ServiceCard from '$lib/components/service-card.svelte';
	import Footer from '$lib/components/footer.svelte';

	const timelineItems = [
		{
			number: '01',
			title: 'You tell us your pain',
			description: "30-minute call. No sales BS. Just you explaining what's actually broken."
		},
		{
			number: '02',
			title: 'We audit the mess',
			description:
				'Week one. We dig through your codebase and document every skeleton in the closet.'
		},
		{
			number: '03',
			title: 'Honest assessment',
			description:
				"No sugar coating. Here's what's broken, why it's broken, and what it'll take to fix it."
		},
		{
			number: '04',
			title: 'We fix it',
			description: 'Embedded with your team. Fixing, documenting, and teaching as we go.'
		},
		{
			number: '05',
			title: 'Your team ships',
			description:
				'Deploys without fear. New hires onboard in days, not months. You get your weekends back.'
		}
	];

	const services = [
		{
			title: 'Your tests are lying',
			description:
				"95% coverage. 5% of it actually works. We'll find what's broken and fix it before your Series B pitch."
		},
		{
			title: 'Nobody knows how it works',
			description:
				"Your best engineer quit six months ago and took all the knowledge with them. We'll document the chaos."
		},
		{
			title: "It's getting slower",
			description:
				"Each deploy takes longer. Each feature takes more time. We know why. We'll fix it."
		},
		{
			title: "You're afraid to deploy",
			description:
				"Friday deploys? Forget it. We'll stabilize your pipeline so you can ship without sweating."
		},
		{
			title: 'Technical debt is compounding',
			description:
				'"We\'ll refactor later" was 18 months ago. Later is now. We\'ll pay down the debt.'
		},
		{
			title: 'New hires are confused',
			description:
				"Onboarding takes three months because nobody understands the architecture. We'll make it make sense."
		}
	];
</script>

<Hero
	logoSrc="/stickerlogo.png"
	headlineText="Your codebase is a dumpster fire"
	ctaText="Yeah, we know"
	ctaHref="#contact"
/>

<Separator />

<Timeline title="How we work" items={timelineItems} />

<section class="services relative bg-[#E8D5B7] px-5 py-[120px]">
	<h2
		class="mb-20 grid place-items-center text-center font-['Righteous'] text-[clamp(2rem,6vw,3.5rem)]"
	>
		<span
			class="font-normal text-[#b85230] [-webkit-text-stroke:4px_#e8d5b7] [grid-area:1/1] [text-shadow:5px_5px_0_#1a1816]"
			>We've seen this before</span
		>
		<span class="font-normal text-[#b85230] [grid-area:1/1]">We've seen this before</span>
	</h2>
	<div
		class="mx-auto grid max-w-[1000px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[30px]"
	>
		{#each services as service}
			<ServiceCard title={service.title} description={service.description} />
		{/each}
	</div>
</section>

<Separator />

<section id="contact" class="contact relative bg-[#4A5C4E] px-5 py-[120px] text-center">
	<h2
		class="mb-[30px] font-['Righteous'] text-[clamp(2rem,6vw,3.5rem)] font-normal text-[#e8d5b7] [text-shadow:5px_5px_0_#1a1816]"
	>
		Ready to stop pretending?
	</h2>
	<p class="mb-10 text-[1.3rem] text-[#e8d5b7]">
		Your investors are asking questions. Your team is burning out.<br />We fix codebases for
		companies that grew too fast.
	</p>
	<a
		href="mailto:hello@vibecode.co"
		class="inline-block rounded-[50px] border-[5px] border-[#e8d5b7] bg-[#b85230] px-[50px] py-5 text-xl font-bold text-[#e8d5b7] no-underline shadow-[5px_5px_0_#1a1816] transition-transform duration-200 hover:scale-105"
	>
		hello@vibecode.co
	</a>
</section>

<Footer />
