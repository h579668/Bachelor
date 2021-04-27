<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Activities List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(actvity, index) in activities"
          :key="index"
          @click="setActiveActvity(activity, index)"
        >
          {{ activity.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllActivities">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentActivity">
        <h4>Activity</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentActvity.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentActvity.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentActvity.published ? "Published" : "Pending" }}
        </div>

        <a class="badge badge-warning"
          :href="'/activities/' + currentActvity.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Actvity...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ActvityDataService from "../services/ActvityDataService";

export default {
  name: "activities-list",
  data() {
    return {
      activities: [],
      currentActvity: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveActivities() {
      ActvityDataService.getAll()
        .then(response => {
          this.activities = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveActivities();
      this.currentActvity = null;
      this.currentIndex = -1;
    },

    setActiveActvity(Actvity, index) {
      this.currentActvity = Actvity;
      this.currentIndex = index;
    },

    removeAllActivities() {
      ActvityDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      ActvityDataService.findByTitle(this.title)
        .then(response => {
          this.activities = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveActivities();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>