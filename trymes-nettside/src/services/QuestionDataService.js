import http from "../http-commons.js";
// fetching the data from the database
class QuestionDataService {
  getAll() {
    return http.get("/questions");
  }
/*
  findOne(id) {
    return http.get(`/associations/${id}`);
  }

  create(data) {
    return http.post("/features", data);
  }

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



export default new QuestionDataService(); 