<template>
  <div>
    <ul>
      <li v-for="restaurant in allRestaurants" :key="restaurant.id">
        {{ restaurant.attributes.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'home',
    mounted() {
      this.loadAllRestaurants();
    },
    methods: {
      ...mapActions({
        loadAllRestaurants: 'restaurants/loadAll',
      }),
    },
    computed: {
      ...mapGetters({
        allRestaurants: 'restaurants/all',
      }),
    },
  };
</script>