const express = require("express");
 const route = express.Router();
const EmpController = require("../controllers/empController");

route.get("/info", EmpController.empInfo);
route.post("/save", EmpController.empSave);
route.get("/display", EmpController.empDisplay);
route.post("/search", EmpController.empSearch);
route.get("/searchbyquery", EmpController.empSearchByQuery);
route.post("/savecreate", EmpController.empSaveCreate);


  module.exports = route;

