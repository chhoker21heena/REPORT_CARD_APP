import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Hazel", score: 50 },
    { id: 2, name: "Priya", score: 30 },
  ]);

  const updateScore = (id, newScore) => {
    const updated = students.map((stu) =>
      stu.id === id ? { ...stu, score: Number(newScore) } : stu
    );
    setStudents(updated);
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: students.length + 1,
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;