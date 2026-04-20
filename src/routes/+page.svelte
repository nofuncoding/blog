<script lang="ts">
	let navLinks = [
		{ href: '/', label: 'home' },
		{ href: '/blog', label: 'blog' },
		{ href: '/about', label: 'about' }
	];

	let time = $state(new Date());

	$effect(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);
		return () => clearInterval(interval);
	});

	function formatTime(date: Date) {
		return date.toLocaleTimeString('en-US', { hour12: false });
	}

	const particleCount = 40;
	let particles = $state(
		Array.from({ length: particleCount }, () => ({
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: Math.random() * 3 + 1,
			duration: Math.random() * 25 + 20,
			delay: Math.random() * -30
		}))
	);
</script>

<div class="relative flex min-h-screen flex-col overflow-hidden bg-black">
	<div class="absolute inset-0 z-0">
		{#each particles as p (p.x + p.y)}
			<div
				class="animate-float absolute rounded-full bg-white/50"
				style="left: {p.x}%; top: {p.y}%; width: {p.size}px; height: {p.size}px; animation-duration: {p.duration}s; animation-delay: {p.delay}s;"
			></div>
		{/each}
	</div>

	<div class="absolute inset-0 z-0 opacity-40">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M 60 0 L 0 0 0 60"
						fill="none"
						stroke="currentColor"
						stroke-width="0.5"
						class="text-white/20"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#grid)" />
		</svg>
	</div>

	<nav class="fixed inset-0 z-50 flex flex-col items-center justify-center">
		<ul class="flex items-center gap-12">
			<li class="text-2xl font-normal text-white">nofun</li>
			{#each navLinks as link (link.href)}
				<li>
					<a href={link.href} class="text-lg text-white/60 transition-colors hover:text-white">
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<footer class="fixed right-0 bottom-8 left-0 flex justify-center">
		<p class="text-xs text-white/60">{formatTime(time)}</p>
	</footer>
</div>

<style>
	@keyframes float {
		0%,
		100% {
			transform: translateY(0) translateX(0);
			opacity: 0.3;
		}
		25% {
			opacity: 0.7;
		}
		50% {
			transform: translateY(-30px) translateX(10px);
			opacity: 0.5;
		}
		75% {
			opacity: 0.8;
		}
	}
	.animate-float {
		animation: float ease-in-out infinite;
	}
</style>
