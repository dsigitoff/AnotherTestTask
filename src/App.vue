<template>
    <div id="app">
        <div id="nav">
            <header class="header">
                <router-link to="/">Home</router-link>
                |
                <router-link to="/">About Us</router-link>
                |
                <router-link to="/contact">Contact Us</router-link>
            </header>
        </div>
        <router-view/>
    </div>
</template>

<style>

    body {
        padding: 0;
        margin: 0;
    }

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 1200px;
    }

    #nav {

    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
        padding: 20px;
        text-decoration: none;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    .header {
        width: 100%;
        border-bottom: 0.3px solid #2c3e50;
        padding: 20px;
    }
</style>
