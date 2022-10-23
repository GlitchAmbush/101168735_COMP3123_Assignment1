const express = require("express");
//const mongoose = require("mongoose");
const EmpModel = require("../models/emp");
const UserModel = require("../models/user");

const routes = express.Router();

// Create new user
routes.post("/user/signup", async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* Sample Req Payload for registration
{
  "username": "pip",
  "email": "p@p.com",
  "password": "password$123"
}
*/

// Login
routes.post("/user/login", async (req, res) => {
  res.send({ message: "Login" });
});

/* Sample Req Payload for Login
{
    "username": "p@p.com",
    "password": "password$123"
}
*/

// list Employees
routes.get("/emp/employees", async (req, res) => {
  try {
    const employees = await EmpModel.find();
    res.status(200).send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create Employees
routes.post("/emp/employees", async (req, res) => {
  try {
    const newEmp = new EmpModel(req.body);
    await newEmp.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* Sample Req Payload for emp
{
  "first_name": "Tam",
  "last_name": "Harrow",
  "email": : "tam@hollywood.com",
  "gender": "Male",
  "salary": 125500.00
}
*/

// Get employee by ID
routes.get("/emp/employees/:eid", async (req, res) => {
  try {
    const findEmp = await EmpModel.findById(req.params.eid, req.body);
    res.status(200).send(findEmp);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update employee
routes.put("/emp/employees/:eid", async (req, res) => {
  try {
    const updateEmp = await EmpModel.findByIdAndUpdate(
      req.params.eid,
      req.body
    );
    res.status(200).send(updateEmp);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete employee by ID
routes.delete("/emp/employees?eid", async (req, res) => {
  try {
    const deleteEmp = await EmpModel.findByIdAndDelete(req.params.eid);
    if (!deleteEmp) {
      res.status(500).send(error);
    }
    res.status(204).send(deleteEmp);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = routes;
