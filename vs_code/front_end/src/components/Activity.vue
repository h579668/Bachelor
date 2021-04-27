<template>
  <div v-if="currentActivity" class="edit-form">
    <h4>Activity</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentActivity.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentActivity.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentActivity.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentActivity.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteActivity"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateActivity"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Activity...</p>
  </div>
</template>

<script>
import ActivityDataService from "../services/ActivityDataService";

export default {
  name: "Activity",
  data() {
    return {
      currentActivity: null,
      message: ''
    };
  },
  methods: {
    getActivity(id) {
      ActivityDataService.get(id)
        .then(response => {
          this.currentActivity = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentActivity.id,
        title: this.currentActivity.title,
        description: this.currentActivity.description,
        published: status
      };

      ActivityDataService.update(this.currentActivity.id, data)
        .then(response => {
          this.currentActivity.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateActivity() {
      ActivityDataService.update(this.currentActivity.id, this.currentActivity)
        .then(response => {
          console.log(response.data);
          this.message = 'The Activity was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteActivity() {
      ActivityDataService.delete(this.currentActivity.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "Activities" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getActivity(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>