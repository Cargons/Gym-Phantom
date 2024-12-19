import React, { useEffect, useState } from 'react';
import { fetchAdminData } from '../services/api';

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Unauthorized');
      return;
    }

    const getData = async () => {
      try {
        const { data } = await fetchAdminData(token);
        setData(data);
        setLoading(false);
      } catch (err) {
        alert('Failed to fetch data');
      }
    };

    getData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
