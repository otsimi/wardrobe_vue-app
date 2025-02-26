<template>
  <div class="home-container h-100">
    <div class="container">
      <div class="form-title text-center my-5">
        <h1>Welcome to Your Wardrobe, {{ userName }}</h1>
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
              <button class="btn btn-primary" @click="editItem(item)">
                Edit
              </button>
              <button class="btn btn-danger mt-2" @click="deleteItem(item.id)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <button class="btn btn-success mt-3 mb-3" @click="openAddModal">
        + Add New Item
      </button>

      <!-- notification dialogue -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h3>{{ editingItemId ? "Edit Item" : "Add New Item" }}</h3>
          <form @submit.prevent="editingItemId ? updateItem() : submitItem()">
            <div class="mb-3">
              <label class="form-label">Item Name</label>
              <input
                type="text"
                class="form-control"
                v-model="newItem.name"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Category</label>
              <select class="form-control" v-model="newItem.category" required>
                <option
                  v-for="category in categories"
                  :key="category.id"
                  :value="category.name"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Image URL</label>
              <input
                type="text"
                class="form-control"
                v-model="newItem.image"
                required
              />
            </div>
            <div class="d-flex justify-content-between">
              <button type="submit" class="btn btn-primary">
                {{ editingItemId ? "Update" : "Save" }}
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                @click="showModal = false"
              >
                Cancel
              </button>
            </div>
          </form>
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
      searchQuery: "",
      selectedCategory: "",
      userName: localStorage.getItem("user_name") || null,
      showModal: false,
      editingItemId: null,
      newItem: { name: "", category: "", image: "" },
      categories: [
        { id: 1, name: "Tops" },
        { id: 2, name: "Bottoms" },
        { id: 3, name: "Shoes" },
      ],
      clothingItems: [],
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
    async fetchClothingItems() {
      try {
        const response = await axios.get("api/clothes");
        this.clothingItems = response.data;
        console.log(this.clothingItems, "ALL clothes in the db");
      } catch (error) {
        console.error("Error fetching items:", error.response?.data || error);
      }
    },
    async submitItem() {
      try {
        const response = await axios.post("api/clothes", this.newItem, {
          headers: { "Content-Type": "application/json" },
        });
        this.clothingItems.push(response.data);
        this.showModal = false;
        this.newItem = { name: "", category: "", image: "" };
        console.log(this.newItem, "New clothe Malenge");
      } catch (error) {
        console.error("Error adding item:", error.response?.data || error);
      }
    },

    async updateItem() {
      try {
        const response = await axios.put(
          `api/clothes/${this.editingItemId}`,
          this.newItem,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const index = this.clothingItems.findIndex(
          (item) => item.id === this.editingItemId
        );
        if (index !== -1) {
          this.clothingItems[index] = response.data;
        }

        this.showModal = false;
        this.editingItemId = null;
        this.newItem = { name: "", category: "", image: "" };
        console.log(this.newItem, "Edited ItemMalenge");
      } catch (error) {
        console.error("Error updating item:", error.response?.data || error);
      }
    },
    async deleteItem(itemId) {
      try {
        await axios.delete(`api/clothes/${itemId}`);
        this.clothingItems = this.clothingItems.filter(
          (item) => item.id !== itemId
        );
        console.log(this.clothingItems, "deletedItem Malenge");
      } catch (error) {
        console.error("Error deleting item:", error.response?.data || error);
      }
    },
    editItem(item) {
      this.newItem = { ...item };
      this.editingItemId = item.id;
      this.showModal = true;
    },
    openAddModal() {
      this.newItem = { name: "", category: "", image: "" };
      this.editingItemId = null;
      this.showModal = true;
    },
  },
  mounted() {
    this.fetchClothingItems();
  },
};
</script>

<style scoped>
.home-container {
  height: 100%;
  min-height: 100vh;
  background: #e3f2fd;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
}
</style>
