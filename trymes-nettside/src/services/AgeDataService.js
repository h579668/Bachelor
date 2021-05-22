import http from "../http-commons.js";
// fetching the data from the database
class AgeDataService {
  getAll() {
    return http.get("/age_intervals");
  }

  findOne(id) {
    return http.get(`/age_intervals/${id}`);
  }

  create(data) {
    return http.post("/age_intervals", data);
  }

  update(id, data) {
    return http.put(`/age_intervals/${id}`, data);
  }

  delete(id) {
    return http.delete(`/age_intervals/${id}`);
  }

  deleteAll() {
    return http.delete(`/age_intervals`);
  }

  findByTitle(navn) {
    return http.get(`/age_intervals?navn=${navn}`);
  }
}

export default new AgeDataService(); 