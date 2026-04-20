<script lang="ts">
	let { data } = $props();
</script>

<div class="relative flex min-h-screen flex-col overflow-hidden bg-black">
	<div class="absolute inset-0 z-0">
		<div class="absolute inset-0 opacity-40">
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
	</div>

	<nav class="fixed right-0 bottom-8 left-0 z-50 flex justify-center">
		<ul class="flex items-center gap-12">
			<li class="text-xl font-normal text-white/60 hover:text-white">
				<a href="/" class="transition-colors">nofun</a>
			</li>
			<li class="text-lg text-white">
				<a href="/blog" class="transition-colors hover:text-white/80">blog</a>
			</li>
			<li class="text-lg text-white/60 hover:text-white">
				<a href="/about" class="transition-colors">about</a>
			</li>
		</ul>
	</nav>

	<main class="z-10 mt-24 mb-32 flex w-full max-w-2xl flex-col items-center self-center px-8">
		<h1 class="mb-12 text-3xl font-normal text-white">blog</h1>
		<ul class="flex w-full flex-col gap-8">
			{#each data.posts as post (post.slug)}
				<li>
					<a href="/{post.slug === 'about' ? 'about' : 'blog/' + post.slug}" class="group block">
						<article class="flex flex-col gap-2">
							<h2
								class="text-xl font-normal text-white transition-colors group-hover:text-white/80"
							>
								{post.title}
							</h2>
							<time class="text-xs text-white/40">{post.date}</time>
							<p class="text-sm text-white/60">{post.description}</p>
						</article>
					</a>
				</li>
			{/each}
		</ul>
	</main>
</div>
