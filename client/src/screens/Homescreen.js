import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room';

const Homescreen = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = (await axios.get('/api/rooms/getallrooms')).data;
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true)
        console.log(error);
        loading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
       <div className='row justify-content-center mt-5'>
       {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error...</h1>
      ) : (
        rooms.map(rooms => {
          return <div className='col-md-9 mt-2'>
            <Room room={rooms} />
          </div>
        })
      )}
       </div>
    </div>
  );
};

export default Homescreen;
