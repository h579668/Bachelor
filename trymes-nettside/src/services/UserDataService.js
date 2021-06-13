import http from "../http-commons.js";
// fetching the data from the database
class UserDataService {
  getAll() {
    return http.get("/users");
  }
/*
  findOneUserAnswers(id) {
    return http.get(`/users/${id}`);
  }
*/
  create(data) {
    return http.post("/users", data);
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



export default new UserDataService(); 