import { Link } from "react-router-dom";
import "./App.css";
import Swal from 'sweetalert2'

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };
    console.log(data);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // alert("ইউজার তৈরি হয়েছে");
        if(data.insertedId)
          Swal.fire({
            title: 'শুভেচ্ছা!',
            text: 'ইউজার তৈরি হয়েছে',
            icon: 'success',
            confirmButtonText: 'ওকে'
          })
      });
      e.target.reset();
  };
  return (
    <>
      <h1>ইউজার বানাও</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button>জমা দাও...</button>
      </form>
      <Link to="/users">দেখো কারা চালাচ্ছে...</Link>
    </>
  );
}

export default App;
