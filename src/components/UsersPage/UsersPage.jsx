import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const loadedUsers = useLoaderData();
  // console.log(loadedUsers);
  const [users, setUsers] = useState(loadedUsers);

  useEffect(() => {
    setUsers(loadedUsers);
  }, [loadedUsers]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data);
  //       // console.log(data);
  //     });
  // }, []);

  const handleDelete = (id) => {
    // const stringId = id.toString();
    // console.log(id);
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          return fetch("http://localhost:3000/users")
        } else {
          throw new Error("something went wrong");
        }
      })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        if (data.deletedCount > 1) {
          alert("user deleted successfully");
        }
        // const newUsers = users.filter((user) => user.id !== id);
        // setUsers(newUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>hello users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <div>
              <h3>Email: {user.email}</h3>
              <p>Password: {user.password}</p>
              <p>id: {user._id}</p>
            </div>
            <button
              onClick={() => {
                handleDelete(user._id);
              }}
            >
              <MdDelete /> মুছে ফেলো...
            </button>
            <Link to={`/users/${user._id}`}>
              <MdEdit /> এডিট করো...
            </Link>
          </div>
        );
      })}
      <Link to="/">বাসায় যাও...</Link>
    </div>
  );
};

export default UsersPage;
