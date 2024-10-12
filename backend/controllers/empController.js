 const EmpModel = require("../models/employeeModels");

const empSave = (req, res) => {
    const { empno, name, city, salary } = req.body;
    const employee = new EmpModel({
        empno: empno,
        name: name,
        city: city,
        salary: salary
    })
    employee.save();
    console.log(req.body);
    res.send("your data  save");
}

const empDisplay = async (req, res) => {
    const data = await EmpModel.find();
    res.send(data);
}
module.exports = {
        empSave,
        empDisplay
    
    }
    
