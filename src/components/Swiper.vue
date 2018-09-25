<template>
    <md-card>
        <md-card-media>
            <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide
                        v-for="(slide, index) in slides"
                        :style="slide"
                        class="swip"
                >
                    Slide {{index}}
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </md-card-media>
    </md-card>
</template>

<script>
    export default {
        data() {
            return {
                slides: [
                    'background-image: url("https://www.factroom.ru/wp-content/uploads/2017/01/4-50-730x592.jpg")',
                    'background-image: url("https://www.factroom.ru/wp-content/uploads/2017/01/4-50-730x592.jpg")',
                    'background-image: url("https://www.factroom.ru/wp-content/uploads/2017/01/4-50-730x592.jpg")',
                    'background-image: url("https://www.factroom.ru/wp-content/uploads/2017/01/4-50-730x592.jpg")',
                    'background-image: url("https://www.factroom.ru/wp-content/uploads/2017/01/4-50-730x592.jpg")',
                    'background-image: url("https://www.factroom.ru/wp-content/uploads/2017/01/4-50-730x592.jpg")',
                    'background-image: url("https://www.factroom.ru/wp-content/uploads/2017/01/4-50-730x592.jpg")',
                    'background-image: url("https://www.factroom.ru/wp-content/uploads/2017/01/4-50-730x592.jpg")',
                    'background-image: url("https://www.factroom.ru/wp-content/uploads/2017/01/4-50-730x592.jpg")',
                    'background-image: url("https://www.factroom.ru/wp-content/uploads/2017/01/4-50-730x592.jpg")'
                ],
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        // when window width is <= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        // when window width is <= 480px
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is <= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }
                }
            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .swip {
        height: 40vh;
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
    }
</style>
