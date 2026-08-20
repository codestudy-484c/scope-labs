<script lang="ts">
    import { getLatestProject } from "$lib/data/projects";

    const latestProject = getLatestProject();
</script>

<svelte:head>
    <title>Scope.Lab | Main Terminal</title>
</svelte:head>

<section class="mb-12 md:mb-16">
    <h1 class="text-dos-green mb-0-4 font-bold flex items-center">
        <span class="mr-2">$</span> whoami
    </h1>
    <div class="border border-dos-text/30 p-4 md:p-6 text-sm md:text-base leading-relaxed bg-dos-bg/50">
        <p class="mb-4 text-dos-white">
           <sapn class="font-bold text-dos-green">Scope.H</sapn>, a developer who doesn't worry about practicality or usefulness--I just build things that look fun. 
        </p>
    </div>
</section>

{#if latestProject}
    <section class="mb-8">
        <h2 class="text-dos-amber mb-4 font-bold flex items-center">
            <span class="mb-2">> SYSTEM.HIGHLIGHT</span>
        </h2>

        <div class="border-2 border-dos-text p-6 md:p-10 relative">
            <div class="mb-4 flex flex-wrap gap-2 text-xs md:text-sm">
                <span class="text-dos-green border border-dos-green px-2 py-0.5">[{latestProject.category}]</span>
                <span class="text-dos-text border border-dos-text/50 px-2 py-0.5 ">STATUS: {latestProject.status}</span>
                <span class="text-dos-text border border-dos-text/50 px-2 py-0.5">YEAR: {latestProject.releaseYear}</span>
            </div>

            <h3 class="text-3xl md:text-5xl font-bold mb-2 text-dos-white">
                {latestProject.name}
            </h3>
            <div class="text-dos-text/50 mb-6 text-sm">{latestProject.version}</div>
        

            <p class="text-lg md:text-xl mb-10 border-l-4 border-dos-amber pl-4">
                {latestProject.description}
            </p>

            <div class="flex flex-col md:flex-row gap-4">
                <a href={latestProject.link} target="_blank" rel="noopener noreferrer" class="inline-block border-2 border-dos-green text-dos-green px-6 py-3 text-center font-bold uppercase tracking-widest hover:bg-dos-green hover:text-dos-bg transition-none">
                    [ RUN {latestProject.name} ]
                </a>
                <a href="/apps" class="inline-block border border-dos-text/50 text-dos-text px-6 py-3 text-center uppercase tracking-widest hover:bg-dos-text hover:text-dos-bg transition-none">
                    VIEW_CATALOG
                </a>
            </div>
        </div>
    </section>
{/if}








