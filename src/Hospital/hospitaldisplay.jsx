import React from "react";
import { db } from "../connection";
import { collection, getDocs,  getDoc  } from "firebase/firestore";
import "./hospital.css";
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
var itemid;

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const userDoc = getDoc(db, 'hospital', id);
      const userSnapshot = await getDocs(userDoc);

      if (userSnapshot.exists()) {
        setUser({ id: userSnapshot.id, ...userSnapshot.data() });
      } else {
        console.log('No such user!');
      }
    };

    fetchUser();
  }, [id]);

if (!user) {
    return <div>Loading...</div>;
}

return (
    <> 
   { Object.values(user).map((item) => ( 
        <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    ))}
    
    </>
);

};





const HospitalDisplay = () => {
    const [userData, setUserData] = React.useState([]);

 React.useEffect(() => {
  getDocs(collection(db, "hospital")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setUserData(newData);
    console.log(userData, newData);
  });
    }, []);

  

  return (
    <>
      <div class="container">
        <table class="responsive-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone number</th>
              <th scope="col">UID</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          {Object.values(userData).map((item) => (
            
            <tbody>
              <tr key={item.id}>
                <td data-title="name">{item.name} </td>
                <td data-title="email">{item.email} </td>
                <td data-title="phone number">{item.phone}</td>
                <td data-title="UID">{item.id}</td>
                <td data-title="link">
                  <a href={`/hospitaldisplay/${item.id}`}>View</a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>

        {window.location.pathname === `/hospitaldisplay/${itemid}` ? (
          <UserDetails id={itemid} />
        ) : null}
      </div>
    </>
  );
};
export default HospitalDisplay;
export { UserDetails };
