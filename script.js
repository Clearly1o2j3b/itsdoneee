body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease-in-out;
}

.login-container h2 {
  margin-bottom: 20px;
}

.login-container img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.login-container form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-container input {
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-container button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-container button:hover {
  background-color: #006400;
}

.dashboard {
  display: flex;
  height: 100vh;
  animation: fadeIn 1s ease-in-out;
}

.sidebar {
  width: 250px;
  background-color: #006400;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar a {
  color: white;
  text-decoration: none;
  padding: 15px;
  margin: 5px 0;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.sidebar a:hover {
  background-color: #006400;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.content-section {
  display: none;
  animation: fadeIn 1s ease-in-out;
}

.content-section h2 {
  margin-bottom: 20px;
}

form .form-group {
  margin-bottom: 15px;
}

form .form-group label {
  display: block;
  margin-bottom: 5px;
}

form .form-group input,
form .form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

table th,
table td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}

table th {
  background-color: #007bff;
  color: white;
}

table tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

table tbody tr:hover {
  background-color: #f1f1f1;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  background-color: #007bff;
  color: white;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

ul li:hover {
  background-color: #0056b3;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

