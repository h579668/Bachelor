module.exports = {
    HOST: "data1.hib.no",
    USER: "TryMes",
    PASSWORD: "pass",
    DB: "TryMes",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };