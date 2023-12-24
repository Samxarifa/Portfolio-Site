<div><img src="profile-pic.png" alt="Sam Hay with Dog" /></div>

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
        background: conic-gradient(var(--lightblue), var(--lightgreen),var(--yellow), var(--lightred));
        animation: color-scroll 5s linear 0s infinite;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
</style>

