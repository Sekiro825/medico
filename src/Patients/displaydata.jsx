import React, { useEffect, useState } from 'react';
import { db } from '../connection';
import 'firebase/firestore';

const DisplayData = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
     const fetchData = async () => {
       try {
         const snapshot = await db.collection("data").get();
         const fetchedData = snapshot.docs.map((doc) => ({
           id: doc.id,
           ...doc.data(),
         }));
         setData(fetchedData);
       } catch (error) {
         console.error("Error fetching data: ", error);
       }
     };
     fetchData();
   }, []);


  return (
 <div>  
  <div style={{width: 1112, height: 742, position: 'relative'}}>
  {data.map((item, index) => (
  <div key={index}>
  <div style={{width: 1112, height: 742, left: 0, top: 0, position: 'absolute', background: '#CCEFC6', borderRadius: 52}} />
  <div style={{width: 316, height: 218, left: 71, top: 46, position: 'absolute', background: '#F6F2F2', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 33, border: '1px black solid'}} />
  <div style={{left: 85, top: 211, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Marital Status: {item.maritialS}</div>
  <div style={{left: 85, top: 183, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>D.O.B:</div>
  <div style={{left: 83, top: 128, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Gender:</div>
  <div style={{left: 84, top: 155, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Age:</div>
  <div style={{left: 83, top: 101, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Email:</div>
  <div style={{left: 84, top: 73, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Name:</div>
  <div style={{width: 671, height: 218, left: 410, top: 46, position: 'absolute', background: '#F6F2F2', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 33, border: '1px black solid'}} />
  <div style={{left: 436, top: 101, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Address2:</div>
  <div style={{left: 436, top: 210, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Insurance Id:</div>
  <div style={{left: 436, top: 183, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Primary Insurance Carrier:</div>
  <div style={{left: 435, top: 156, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Occupation:</div>
  <div style={{left: 435, top: 73, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Address1:</div>
  <div style={{left: 435, top: 128, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Adhaar Details:</div>
  <div style={{left: 484, top: 13, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Personal Details</div>
  <div style={{left: 482, top: 309, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Medical History</div>
  <div style={{width: 1004, height: 321, left: 58, top: 349, position: 'absolute', background: '#FBF3F3', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 35}} />
  <div style={{left: 88, top: 475, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Psychological Disease:</div>
  <div style={{left: 88, top: 503, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Neurological diseases:</div>
  <div style={{left: 88, top: 531, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Diabities:{item.diabeties}</div>
  <div style={{left: 88, top: 559, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Blood Pressure:</div>
  <div style={{left: 88, top: 587, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>HIV/AIDS:</div>
  <div style={{left: 88, top: 615, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Physical Disorder:</div>
  <div style={{left: 88, top: 363, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Current Medications:</div>
  <div style={{left: 436, top: 363, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Insomniac?</div>
  <div style={{left: 436, top: 391, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Current Medications:</div>
  <div style={{left: 435, top: 419, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Cancer: {item.cancer}</div>
  <div style={{left: 435, top: 447, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Covid Vaccination:</div>
  <div style={{left: 435, top: 475, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Ever Been In Any Accidents:</div>
  <div style={{left: 435, top: 503, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Allergies:</div>
  <div style={{left: 435, top: 531, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Substance Use:</div>
  <div style={{left: 434, top: 559, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Tuberculosis (TB):</div>
  <div style={{left: 434, top: 587, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Gastrointestinal Diseases:</div>
  <div style={{left: 88, top: 391, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Blood Group:{item.bloodgroup}</div>
  <div style={{left: 88, top: 419, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Surgeries:</div>
  <div style={{left: 88, top: 447, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Heart Disease:</div>
</div>
 ))}
 </div>
</div>
);
};
export default DisplayData;