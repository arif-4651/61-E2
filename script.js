const studentTableBody = document.querySelector("#studentTable tbody");
let students = [];

document.getElementById("addForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;
  const number = document.getElementById("number").value;

  if (students.some(student => student.id === id)) {
    alert("Student ID already exists!");
    return;
  }

  students.push({ name, id, number });
  updateTable();
  this.reset();
});

function updateTable() {
  studentTableBody.innerHTML = "";
  students.forEach(student => {
    const row = `<tr>
      <td>${student.name}</td>
      <td>${student.id}</td>
      <td>${student.number}</td>
    </tr>`;
    studentTableBody.innerHTML += row;
  });
}

document.getElementById("modifyForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const modifyId = document.getElementById("modifyId").value;
  const student = students.find(s => s.id === modifyId);

  if (!student) {
    alert("No student found with this ID!");
    return;
  }

  const newMark = prompt("Enter new number (mark):", student.number);
  if (newMark !== null && !isNaN(newMark)) {
    student.number = newMark;
    updateTable();
  }
});
