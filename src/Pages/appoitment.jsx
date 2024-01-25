// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import '../styles/Appointemt.css'


// const Reservation = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/appoitment/getAllAppointments"); // Update the endpoint
//       console.log(response);
//       setAppointments(response.data.data);
//     } catch (error) {
//       setError(error);
//     }
//   };

//   const handleDelete = async (ID) => {
//     try {
//       const res = await axios.delete(
//         `${process.env.REACT_APP_URL}/appoitment/deleteAppointmentById/${ID}`
//       );

//       fetchAppointments();
//     } catch (er) {
//       console.error(er);
//     }
//   };

//   return (
//     <div className="card-main">
//       <h1> Appointment  </h1>

//       {error && <p className="error-message">{error.message}</p>}

//       <table className="table">
//         {/* ... Table headers ... */}

//         <tbody>
//           {appointments.map((appointment,index ) => (
//             <tr key={appointment._id}>
//               <td>{index}</td>
//               {/* Map other properties accordingly */}
//               <td>{appointment.userId && appointment.userId.fullName}</td>
//               <td>{appointment.serviceId && appointment.serviceId.name}</td>
//               <td>{appointment.dateTime}</td>
//               {/* ... Other properties ... */}
//               <td>
//                 <button
//                   className="button button-secondary"
//                   onClick={() => {
//                     handleDelete(appointment._id);
//                   }}
//                 >
//                   Cancel Appointment
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Reservation;
