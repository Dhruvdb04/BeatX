import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/common/common.css';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
import Logo from "../assets/logo.jpg";


// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, BarElement, ArcElement, CategoryScale, LinearScale);

const Dashboard = () => {
  const navigate = useNavigate();
  
  const isLoggedIn = localStorage.getItem('accessToken') ? true : false;

  const logout = () => {
    console.log("logout clicked");
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  // Data and options for the Line Chart
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Data',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Value: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderColor: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
  };

  // Data and options for the Bar Chart
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        data: [120, 150, 180, 200, 220, 240, 260],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Revenue: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderColor: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
  };

  // Data and options for the Pie Chart
  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Distribution',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Value: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-md p-4 flex items-center justify-between mt-[-60px]">
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <Link to="/" className="logo-text">
            EvaluaTeach
          </Link>
        </div>
        <Link to='/' className="text-xl font-bold text-gray-800">Dashboard</Link>
        <div className="space-x-4">
          <a href="/profile" className="text-gray-800 hover:text-blue-600">Profile</a>
          <button onClick={logout} className="text-gray-800 hover:text-blue-600">Logout</button>
        </div>
      </header>

      {/* Chart Sections */}
      <main className="flex-grow p-6 space-y-6">
        <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Sales Overview</h2>
          <div className="relative w-full h-64">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Revenue Breakdown</h2>
          <div className="relative w-full h-64">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Distribution</h2>
          <div className="relative w-full h-64">
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
