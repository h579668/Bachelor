import http from "../http-commons.js";
// fetching the data from the database
class AreaDataService {
  getAll() {
    return http.get("/areas");
  }

  get(id) {
    return http.get(`/areas/${id}`);
  }

  create(data) {
    return http.post("/areas", data);
  }
/*
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
export default new AreaDataService();
