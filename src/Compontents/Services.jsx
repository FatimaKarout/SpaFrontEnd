import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/Service.css'
import { useToasts } from 'react-toast-notifications';
import {
  addDays,
  isWeekend,
  isAfter,
  isBefore,
  setHours,
  format,
} from 'date-fns';
import { getUserID } from '../Compontents/Util/GetData';

const MassageService = () => {
  const { id } = useParams();
  const [services, setServices] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const userId = getUserID();
  const { addToast } = useToasts();

  useEffect(() => {
    fetchService();
  }, []);

  const fetchService = async () => {
    try {
      const response = await axios.get(
        `https://spabackenddd.onrender.com/service/getServiceById/${id}`
      );
      setServices(response.data.data);
    } catch (error) {
      console.error('Error fetching service', error.message);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAcceptAppointment = async () => {
    if (!userId) {
      addToast(
        'You must be logged in to schedule a spa appointment ',
        { appearance: 'error', autoDismiss: true }
      );
      return;
    }

    try {
      if (!isWithinTimeRange(selectedDate)) {
        addToast(
          'Appointments are only available from 9 am to 7 pm ',
          { appearance: 'error', autoDismiss: true }
        );
        return;
      }

      const transformedDateString = formatDateTime(selectedDate);
     console.log(transformedDateString,id,userId)
      await axios.post(
      `https://spabackenddd.onrender.com/appoitment/addAppointment`,
        {
          dateTime: transformedDateString,
          serviceId: id,
          userId: userId,
        }
      );

      addToast(
        'Registration for Appointment was done successfully ',
        { appearance: 'success', autoDismiss: true }
      );
    } catch (error) {
      console.error('Error handling appointment', error.message);
      addToast(
        'This Service is already booked ',
        { appearance: 'error', autoDismiss: true }
      );
    }
  };

  const minDate = new Date('2024-02-05');
  const maxDate = addDays(new Date('2024-04-01'), 180); // 180 days from today

  const isWithinTimeRange = (date) => {
    const startHour = 9;
    const endHour = 19;

    return (
      isAfter(date, setHours(date, startHour)) &&
      isBefore(date, setHours(date, endHour))
    );
  };

  const formatDateTime = (date) => {
    return format(date, 'yyyy-MM-dd HH:mm');
  };

  const isWeekendDay = (date) => {
    return isWeekend(date);
  };

  const filterWeekends = (date) => {
    return !isWeekendDay(date);
  };

  return (
    <div className="containerAs">
      {Object.keys(services).length > 0 ? (
        <div className="C1" key={services._id}>
          <h4 className="name"> {services.name}</h4>
          <h4 className='descriptionservice'> {services.information.description}</h4>
          <ul className='benefits'> <strong>benefits </strong>:<li>{services.information.benefits}</li> </ul>
          <div className='both'>
          <h4 className='amount'>{services.price} $</h4>
          <h4 className='amount'>{services.information.duration} minutes</h4>
          </div>
          <div className='ensemble'>
            <div>
          <h1>Appointment </h1>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy h:mm aa"
            minDate={minDate}
            maxDate={maxDate}
            filterDate={filterWeekends}
            showTimeSelect
            timeIntervals={60}
            timeFormat="HH:mm"
          />
          <button onClick={handleAcceptAppointment}>Accept</button>
          </div>
          <img className="Imageservice" src={services.image} alt="Service Image" />
     
        </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MassageService;