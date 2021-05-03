module.exports = {
    HOST: "data1.hib.no",
    USER: "TryMes",
    USERNAME: "TryMes",
    PASSWORD: "pass",
    DATABASE: "TryMes",
    dialect: "postgres",
    port: 5434,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };