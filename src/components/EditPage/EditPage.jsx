import { Link } from "react-router-dom";

const EditPage = (params) => {
    console.log(params.id)
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };
    console.log(data);

    // fetch(`http://localhost:3000/users/${}`, )
  };

  return (
    <div>
      <h1>ইউজার এডিট করো</h1>
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
    </div>
  );
};

export default EditPage;
