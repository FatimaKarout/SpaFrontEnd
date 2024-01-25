import React, { useEffect, useState } from "react";
import axios from "axios";
// import '../styles/Appointemt.css'


const Reservation = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("https://spabackenddd.onrender.com/appoitment/getAllAppointments"); // Update the endpoint
      console.log(response);
      setAppointments(response.data.data);
    } catch (error) {
      setError(error);
    }
  };

  const handleDelete = async (ID) => {
    try {
      const res = await axios.delete(
        `https://spabackenddd.onrender.com/appoitment/deleteAppointmentById/${ID}`
      );

      fetchAppointments();
    } catch (er) {
      console.error(er);
    }
  };

  const handleAccept = async (appointmentId) => {
    try {
      const res = await axios.put(
        `https://spabackenddd.onrender.com/appoitment/updateAppointment/${appointmentId}`
      );
     
      fetchAppointments();
    } catch (error) {
      console.error(error);
    }
  }
 
  return (
    <div className="card-main">
      <h1> Appointment  </h1>

      {error && <p className="error-message">{error.message}</p>}

      <table className="table">
        {/* ... Table headers ... */}
<tr>
  <th>name</th>
  <th>service</th>
  <th>date</th>
  <th>status</th>
</tr>
        <tbody>
          {appointments.map((appointment,index ) => (
            <tr key={appointment._id}>
              {/* <td>{index}</td> */}
              {/* Map other properties accordingly */}
              <td>{appointment.userId && appointment.userId.fullName}</td>
              <td>{appointment.serviceId && appointment.serviceId.name}</td>
              <td>{appointment.dateTime}</td>
              <td>{appointment.status}</td>
              {/* ... Other properties ... */}
              <td>
              <button
                  className="button button-secondary"
                  onClick={() => {
                    handleAccept(appointment._id ); // Example: Updating the status
                  }}
                >
                  Update Appointment
                </button>

                <button
                  className="button button-secondary"
                  onClick={() => {
                    handleDelete(appointment._id);
                  }}
                >
                  Cancel Appointment
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservation;
