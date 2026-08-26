<script>
    import { project } from "$lib/data/projects";
</script>

<svelte:head>
    <title>Scope.Lab | App Catalog</title>
</svelte:head>

<section class="mb-12 md:mb-16">
    <h1 class="text-dos-green mb-0-4 font-bold flex items-center">
        <span class="mr-2">$</span> ls -C | less
    </h1>

    <p class="mb-10 text-dos-text/70 border-b border-dos-text/30 pb-4">
        Directory in SCOPE.LAB<br>
        Total <b>{project.length}</b> executable applications and projects found.
    </p>

    <!-- CSS Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each project as prj}
            <!-- each card -->
            <div class="border border-dos-text/50 p-6 flex flex-col h-full hover:border-dos-white transition-none group bg-dos-bg">
                
                <div class="mb-4 flex flex-wrap gap-2 text-xs">
                    <span class="text-dos-green border border-dos-green px-2 py-0.5">[{prj.category}]</span>
                    <span class="text-dos-text/70 border border-dos-text/30 px-2 py-0.5">YEAR: {prj.releaseYear}</span>
                </div>

                <!-- hover effect -->
                <h2 class="text-2xl font-bold mb-1 text-dos-white group-hover:text-dos-green transition-none">
                    {prj.name}
                </h2>
                <div class="text-dos-text/50 mb-4 text-xs">{prj.version} - {prj.status}</div>

                <p class="text-sm md:text-base text-dos-text mb-8 grow">
                    {prj.description}
                </p>
                
                <!-- RUN button -->
                <div class="mt-auto pt-4 border-t border-dos-text/30 flex justify-end">
                    <a href={prj.link} target="_blank" rel="noopener noreferrer" class="inline-block text-dos-amber hover:bg-dos-amber hover:text-dos-bg px-4 py-2 transition-none uppercase text-sm font-bold tracking-widest border border-transparent hover:border-dos-amber">
                        [ EXECUTE ]
                    </a>
                </div>

            </div>
        {/each}
    </div>

</section>
    <p class="uppercase">
        <span class="bg-dos-text text-dos-bg">(END)</span>
    </p>
