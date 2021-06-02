import http from "../http-commons.js";
// fetching the data from the database
class UserFeatureDataService {
 /* getAll() {
    return http.get("/users");
  }*/
/*
  findOne(id) {
    return http.get(`/associations/${id}`);
  }
*/
  addFeature(input) {
    return http.post("/users_features", input);
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



export default new UserFeatureDataService(); 