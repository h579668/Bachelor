import http from "../http-commons.js";
// fetching the data from the database
class ActivityDataService {
  getAll() {
    return http.get("/activities");
  }

  get(id) {
    return http.get(`/activities/${id}`);
  }
/*
  create(data) {
    return http.post("/activities", data);
  }

  update(id, data) {
    return http.put(`/activities/${id}`, data);
  }

  delete(id) {
    return http.delete(`/activities/${id}`);
  }

  deleteAll() {
    return http.delete(`/activities`);
  }

  findByTitle(navn) {
    return http.get(`/activities?navn=${navn}`);
  }*/
}



export default new ActivityDataService(); 