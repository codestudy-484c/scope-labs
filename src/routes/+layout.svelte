<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';

    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="min-h-screen p-4 md:p-8 flex flex-col max-w-4xl mx-auto">
    <Header />

    <main class="grow flex flex-col">
        {@render children()}
    </main>

    <Footer />
</div>
