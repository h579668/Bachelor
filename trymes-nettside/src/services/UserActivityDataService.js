import http from "../http-commons.js";
// fetching the data from the database
class UserActivitiesDataService {
  findAllUsersActivities() {
    return http.get("/users_activities");
  }

  addActivity(data) {
    return http.post("/users_activities", data);
  }
/*
  addFeature(user) {
    return http.post("/users", user);
  }*/
/*
  update(id, data) {
    return http.put(`/features/${id}`, data);
  }

  delete(id) {
    return http.delete(`/features/${id}`);
  }

  deleteAll() {
    return http.delete(`/features`);
  }

  findByTitle(navn) {
    return http.get(`/features?navn=${navn}`);
  }*/
}



export default new UserActivitiesDataService(); 