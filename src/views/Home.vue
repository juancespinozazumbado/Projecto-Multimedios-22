<template>
   <div>
     <UpcomingMovies />
     <TrendingMovies />
     
   </div>
</template>

<script>
  
import TrendingMovies from '../components/TrendingMovies.vue'
import UpcomingMovies from '../components/UpcomingMovies.vue'

  export default {
    name: 'Home',
    components: {
    TrendingMovies,
    UpcomingMovies
    
}

    
  }
</script>
