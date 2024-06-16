import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const EditPage = ({params}) => {
  // console.log(params);

  const {_id, email, password} = useLoaderData();
  // console.log(users)

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const updatedData = { email, password };
    // console.log(updatedData);

    fetch(`http://localhost:3000/users/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(updatedData)
    } )
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0)
        Swal.fire({
          title: 'শুভেচ্ছা!',
          text: 'ইউজার update হয়েছে',
          icon: 'success',
          confirmButtonText: 'ওকে'
        })
    })
  };

  return (
    <div>
      <h1>{_id} ইউজার এডিট করো</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          defaultValue={email}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          defaultValue={password}
        />
        <button>জমা দাও...</button>
      </form>
      <Link to="/users">দেখো কারা চালাচ্ছে...</Link>
      <Link to="/">বাসায় যাও...</Link>
    </div>
  );
};

export default EditPage;
