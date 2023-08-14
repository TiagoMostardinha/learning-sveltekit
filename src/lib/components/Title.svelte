<script lang="ts">
    export let title: string = "SvelteKit Gaming";
</script>

<div class="title">
    <img src="../../svelte.svg" alt="Svelte Kit" />
    <h1>{title}</h1>
</div>

<style>
    .title {
        display: flex;
    }
    .title img {
        max-width: 50px;
        padding:10px;
        display: inline-block;
        filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg)
            brightness(100%) contrast(90%);
    }
    .title h1 {
        margin-left: 10px;
    }
</style>
