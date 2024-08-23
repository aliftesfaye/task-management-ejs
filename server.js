require("dotenv").config();
const express = require("express");
const app = express();
const taskController = require("./controllers/taskController");
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/tasks", taskController.getAllTasksPage);
app.get("/", taskController.getAllTasksPage);
app.get("/tasks/new", (req, res) => res.render("createTask"));
app.post("/tasks", taskController.createTask);
app.get("/tasks/:id", taskController.getTaskByIdPage);
app.get("/tasks/:id/edit", taskController.getTaskForEditPage);
app.put("/tasks/:id", taskController.updateTask);
app.delete("/tasks/:id", taskController.deleteTask);

app.use((req, res) => res.status(404).render("404"));

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
