<script lang="ts">
    let isSocialOpen = $state(false);

    function toggleMenu() {
        isSocialOpen = !isSocialOpen;
    }

    function closeMenu() {
        isSocialOpen = false;
    }
</script>

<header class="flex flex-col md:flex-row justify-between item-start md:items-center py-6 border-dos-text/30 mb-8">
    <div class="mb-4 md:mb-0">
        <a href="/" class="text-2xl font-bold tracking-widest hover:text-dos-green transition-none">
            > Scope.Lab_
        </a>
    </div>
    
    <nav class="flex flex-wrap gap-2 md:gap-4 text-sm md:text-base">
        <a href="/" class="px-1 hover:bg-dos-text hover:text-dos-bg transition-none">[HOME]</a>
        <a href="/apps" class="px-1 hover:bg-dos-text hover:text-dos-bg transition-none">[CATALOG]</a>

        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div 
            class="relative"
            onmouseleave={closeMenu}
        >
            <button
                onclick={toggleMenu}
                onmouseenter={() => isSocialOpen = true}
                class="px-1 hover:bg-dos-text hover:text-dos-bg transition-none cursor-pointer font-mono flex items-center"
            >
                [SOCIAL<b>˅</b>]
            </button>
        
            {#if isSocialOpen}
                <div class="absolute top-full right-0 md:left-0 mt-2 flex flex-col border border-dos-text bg-dos-bg w-40 shadow-[4px_4px_0_0_rgba(204,204,204,0.3)] z-50">
                    <!-- Social URL-->
                    <a href="https://github.com/ScopeHyena" target="_blank" rel="noopener noreferrer" class="px-4 py-3 hover:bg-dos-text hover:text-dos-bg transition-none border-t border-dos-text/30">GITHUB</a>
                    <a href="https://m.blog.naver.com/scope-hyena" target="_blank" rel="noopener noreferrer" class="px-4 py-3 hover:bg-dos-text hover:text-dos-bg transition-none border-t border-dos-text/30">BLOG</a>
                    <a href="https://x.com/scope_the_hyena" target="_blank" rel="noopener noreferrer" class="px-4 py-3 hover:bg-dos-text hover:text-dos-bg transition-none border-t border-dos-text/30">X</a>
                </div>
            {/if}
        </div>
    </nav>
</header>
