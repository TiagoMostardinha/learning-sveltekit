<script lang="ts">
    import Title from "$lib/components/Title.svelte";
    import "../../../styles/global.css";
</script>

<header>
    <nav>
        <Title title="SvelteKit Gaming Guides" />
        <div class="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/guides">Guides</a>
        </div>
    </nav>
</header>

<main>
    <slot />
</main>

<footer>
    <p>Copyright 2023 SveltKit Gaming Guides</p>
</footer>

<style>
    header {
        text-align: center;
        background-color: rgba(0, 0, 0, 0.2);
    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    footer {
        text-align: center;
    }
    nav {
        display: flex;
        align-items: center;
        max-width: 960px;
        margin: 0 auto;
    }
    .links {
        margin-left: auto;
    }
    a {
        margin-left: 10px;
    }
</style>
