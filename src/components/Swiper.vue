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
        'background-image: url("https://www.meme-arsenal.com/memes/b73d0ff9295a4a2fd3f0d8d1d872ebc0.jpg")',
        'background-image: url("https://dl2.eduget.com/get/news/348526ea8b5b392a3ebe3082c761f225.jpg?bx=0&by=13&bw=449&bh=337")',
        'background-image: url("http://s.mediasole.ru/images/1035/1035546/40wsN6OtsWhaZR8DevS3Q9NEbs76ZxhBWBvXYIs0DU2J6E-ZvHWpN9q8zOGLxbnsfRciDzgg6T8-yUlivOqGU7_v5wverCSqiUlWBe1f8nw"',
        'background-image: url("http://pustunchik.ua/uploads/school/cache/old/interesting/animals/Koshachi-smajlyky/catsmiles-4.jpg")',
        'background-image: url("http://www.kulturologia.ru/files/u18476/cote.jpg")',
        'background-image: url("http://rusvesna.su/sites/default/files/styles/orign_wm/public/koty.jpg")',
        'background-image: url("https://obovsem.pp.ua/wp-content/uploads/kotiki-17.jpg")',
        'background-image: url("https://ru7.anyfad.com/items/t1@52408870-7698-428a-8687-e20590cebb70/Lyubimaya-tema-interneta--kotiki-.jpg")',
        'background-image: url("https://www.fresher.ru/wp-content/uploads/2018/03/9.jpg")',
        'background-image: url("https://pics.ru/wp-content/uploads/Kotik-CHarli.jpg")',
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
}
</style>
