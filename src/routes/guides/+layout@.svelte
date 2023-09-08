<script lang="ts">
    import Title from "$lib/components/Title.svelte";
    import "../../styles/global.css";
</script>

<header>
    <Title title="SvelteKit Gaming Guides" />
    <div class="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/guides">Guides</a>
    </div>
</header>

<main>
    <slot />
</main>

<footer>
    <p>Copyright 2023 SveltKit Gaming Guides</p>
</footer>

<style>
    header {
        display: flex;
        justify-content: center;
    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    footer {
        text-align: center;
    }
    .links {
        margin-left: auto;
    }
    a {
        margin-left: 10px;
    }
</style>
