<script lang="ts">
    import Title from "$lib/components/Title.svelte";
    import '../../styles/global.css';
</script>

<header>
    <Title title="SvelteKit Gaming Guides" />
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
</style>
