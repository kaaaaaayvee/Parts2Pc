<template>
  <div class="home">
    <Banner />
    <!-- <ProductList></ProductList> -->
    <Product />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Product from "@/components/Product.vue";
// import ProductList from "../components/ProductList.vue";

export default {
  name: "Home",
  components: {
    Banner,
    // ProductList,
    Product,
  },
};
</script>

<style></style>
