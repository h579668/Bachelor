import http from "../http-commons.js";
// fetching the data from the database
class AssociationDataService {
  getAll() {
    return http.get("/associations");
  }

  findOne(id) {
    return http.get(`/associations/${id}`);
  }

  create(data) {
    return http.post("/associations", data);
  }

  updateName(id, data) {
    return http.put(`/associations/${id}`, data);
  }

  delete(id) {
    return http.delete(`/associations/${id}`);
  }
/*
  deleteAll() {
    return http.delete(`/features`);
  }

  findByTitle(navn) {
    return http.get(`/features?navn=${navn}`);
  }*/
}

export default new AssociationDataService(); 