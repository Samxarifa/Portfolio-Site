<ContentWrapper max={1000}> 
    <main>
        <h2>Links</h2>

        <section>
            <ul>
                <li><a href="https://www.github.com/Samxarifa"><span><Github size={64}/></span></a></li>
                <li><a href="mailto:sam@xarifa.co.uk"><span><Mail size={64}/></span></a></li>
            </ul>
        </section>
    </main>
</ContentWrapper>

<script lang="ts">

    import ContentWrapper from "$lib/components/contentWrapper.svelte";
    import { Github, Mail } from "lucide-svelte";

</script>

<style>
    @keyframes color-scroll {
        0%, 100% {
            background-position: 0% 100%;
        }
        50% {
            background-position: 100% 100%;
        }
    }
    
    h2 {
       font-size: 5rem;
    }

    section {
        margin-top: 4rem;
    }
    ul {
        list-style: none;
        display: flex;
        height: fit-content;
        gap: 2rem;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-size: 2rem;
        background-color: var(--fg);
        border-radius: 1rem;
        display: block;
        width: 10rem;
        height: 10rem;
        transition: var(--theme-transition);
    }

    a span {
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a:hover span{
        background: linear-gradient(to right, var(--lightblue), var(--lightgreen), var(--yellow), var(--lightred));
        background-size: 300% 100%;
        color: white;
        animation: color-scroll 5s ease 0s infinite;
    }
</style>