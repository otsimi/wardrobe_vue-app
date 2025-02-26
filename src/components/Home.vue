<template>
  <div class="home-container h-100">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mt-3">
        <!-- <h4 v-if="userName">Welcome, {{ userName }}</h4> -->
        <!-- <button v-if="userName" class="btn btn-danger" @click="logout">Logout</button> -->
      </div>

      <div class="hero text-center my-5">
        <h1>Welcome to Your Wardrobe,{{userName}}</h1>
        <p>Manage and explore your clothing collection with ease.</p>
      </div>

      <div class="d-flex justify-content-between align-items-center mb-4">
        <input
          type="text"
          class="form-control w-50"
          v-model="searchQuery"
          placeholder="Search for clothing items..."
        />
        <select class="form-select w-25" v-model="selectedCategory">
          <option value="">All Categories</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.name"
          >
            {{ category.name }}
          </option>
        </select>
      </div>

      <div class="row">
        <div class="col-md-4 mb-4" v-for="item in filteredItems" :key="item.id">
          <div class="card">
            <img :src="item.image" class="card-img-top" alt="Clothing item" />
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">{{ item.category }}</p>
              <button class="btn btn-primary " @click="editItem(item)">
                Edit
              </button>
              <button class="btn btn-danger mt-2" @click="deleteItem(item.id)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <button class="btn btn-success mt-3 mb-3" @click="addItem">
        + Add New Item
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      selectedCategory: "",
      userName: localStorage.getItem("user_name") || null,
      categories: [
        { id: 1, name: "Tops" },
        { id: 2, name: "Bottoms" },
        { id: 3, name: "Shoes" },
      ],
      clothingItems: [
        {
          id: 1,
          name: "T-Shirt",
          category: "Tops",
          image: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/84/7555101/1.jpg?5105",
        },
        {
          id: 2,
          name: "Jeans",
          category: "Bottoms",
          image: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/08/9864392/1.jpg?3053",
        },
        {
          id: 3,
          name: "Sneakers",
          category: "Shoes",
          image: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/03/5240451/1.jpg?8167",
        },
        {
          id: 4,
          name: "Sandles",
          category: "Shoes",
          image: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/73/692507/1.jpg?7191",
        },
        {
          id: 5,
          name: "Shirts",
          category: "Tops",
          image: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/26/3659971/1.jpg?6713",
        },
        {
          id: 6,
          name: "Shorts",
          category: "Bottoms",
          image: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/81/9784261/1.jpg?8866",
        },
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.clothingItems.filter((item) => {
        return (
          (this.selectedCategory === "" ||
            item.category === this.selectedCategory) &&
          (this.searchQuery === "" ||
            item.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        );
      });
    },
  },
  methods: {
    addItem() {
      console.log("Redirect to add item page");
    },
    editItem(item) {
      console.log("Edit item:", item);
    },
    deleteItem(itemId) {
      this.clothingItems = this.clothingItems.filter(
        (item) => item.id !== itemId
      );
    },
    // logout() {
    //   // Clear localStorage on logout
    //   localStorage.removeItem("user_id");
    //   localStorage.removeItem("user_name");

    //   // Redirect to login
    //   this.$router.push('/login');
    // }
  },
  // beforeCreate() {
  //   if (!localStorage.getItem("user_id")) {
  //     this.$router.push('/login');
  //   }
  // }
};
</script>

<style scoped>
.home-container {
  height: 100%;
  min-height: 100vh;
  padding-top: 0;
  background: #e3f2fd;
}
.button-spacing {
  margin-right: 10px;
}
</style>
