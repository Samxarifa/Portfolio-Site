<div in:fly={{x: 100}}><img src="profile-pic.png" alt="Sam Hay with Dog" /></div>

<script lang="ts">

    import { fly } from "svelte/transition";

</script>
<style>
    @keyframes color-scroll {
        0% {
            rotate: 0deg;
        }
        100% {
            rotate: 360deg;
        }
    }
    
    div {
        width: 30rem;
        height: 30rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    div::before {
        content: '';
        position: absolute;
        width: calc(100% + 5px);
        height: calc(100% + 5px);
        z-index: -1;
        border-radius: 50%;
        transition: var(--theme-transition);
        /* background: conic-gradient(var(--lightblue), var(--lightgreen),var(--yellow), var(--lightred)); */
        background: linear-gradient(to right, var(--lightblue), var(--lightgreen),var(--yellow), var(--lightred));
        animation: color-scroll 10s linear 0s infinite;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    @media (max-width: 850px) {
        div {
            width: 20rem;
            height: 20rem;
        }
    }
    @media (max-width: 600px) {
        div {
            width: 10rem;
            height: 10rem;
        }
    }
</style>

