<template>
  <v-footer dark padless>
    <v-card flat tile class="white  grey--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 grey--text" icon :href= icon.link>
          <v-icon size="24px" >

            {{ icon.icon }}
           

          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="grey--text pt-0">
        The Movie Database (TMDB) is a community built movie and TV database.
        Every piece of data has been added by our amazing community dating back to 2008.
        TMDb's strong international focus and breadth of data is largely unmatched and something
        we're incredibly proud of.
        Put simply, we live and breathe community and that's precisely what makes us different.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="grey--text">
        {{ new Date().getFullYear() }} — <strong>UCR - Sede Guanacaste</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        icon: 'mdi-language-html5',
        link: 'https://devdocs.io/html/'
      },
      {
        icon: 'mdi-language-css3',
        link: 'https://devdocs.io/css/'
      },
      {
        icon: 'mdi-language-javascript',
        link: 'https://devdocs.io/javascript/'
      },
      {
        icon: 'mdi-nodejs',
         link: 'https://nodejs.org/es/',
      },
      {
        icon: 'mdi-vuejs', link: 'https://v2.vuejs.org/'
      },
      { icon: 'mdi-vuetify', link: 'https://vuetifyjs.com/en/' }

    ]
  })
}


</script>

<style>
</style>