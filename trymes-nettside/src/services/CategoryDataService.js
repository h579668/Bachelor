import http from "../http-commons.js";
// fetching the data from the database
class CategoryDataService {
  getAll() {
    return http.get("/categories");
  }
/*
  findOne(id) {
    return http.get(`/categories/${id}`);
  }

  create(data) {
    return http.post("/categories", data);
  }

  update(id, data) {
    return http.put(`/categories/${id}`, data);
  }

  delete(id) {
    return http.delete(`/categories/${id}`);
  }

  deleteAll() {
    return http.delete(`/categories`);
  }

  findByTitle(navn) {
    return http.get(`/categories?navn=${navn}`);
  }*/
}

export default new CategoryDataService(); 