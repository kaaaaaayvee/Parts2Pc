<template>
    <div>
      <div v-show="items">
        <div style="padding: 50px">
          <div style="margin-bottom: 10px">
            Categories:
            <span v-for="cat in categories" :key="cat">
              <button
                style="margin-left: 5px"
                @click="filterProductsByCategory(cat)"
                class="name"
              >
                {{ cat }}
              </button>
            </span>
          </div>
  
          <div>
            <h2>Products</h2>
            <div v-for="item in filteredItems" :key="item.id">
              <h3>{{ item.title }}</h3>
              <p>Category: {{ item.category }}</p>
              <p>Price: ${{ item.price }}</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        items: [],
        filteredItems: [],
        categories: ["all", "monitor", "laptop"],
        selectedCategory: "all",
      };
    },
    async created() {
      try {
        const response = await axios.get("https://run.mocky.io/v3/29a1b6ed-d7ce-403e-8e71-7118032b7673");
        this.items = response.data.products;
        this.filteredItems = this.items;
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    },
    methods: {
      filterProductsByCategory(category) {
        this.selectedCategory = category;
        if (category === "all") {
          this.filteredItems = this.items;
        } else {
          this.filteredItems = this.items.filter((item) => item.category === category);
        }
      },
    },
  };
  </script>
  