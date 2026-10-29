import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // useState stores data that can change; the screen re-renders when it does.
  const [status, setStatus] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  // useEffect runs code once when the page first loads.
  useEffect(() => {
    fetch('/api/test.php')
      .then((response) => {
        if (!response.ok) throw new Error('Server responded with an error')
        return response.json() // convert the JSON text into a JS object
      })
      .then((data) => {
        setStatus(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="setup-page">
      <div className="setup-card">
        <h1>💊 Pharmacy Management System</h1>
        <p className="subtitle">Setup connection test</p>

        {loading && <p>Checking backend connection...</p>}

        {error && (
          <div className="box box-error">
            <strong>❌ Cannot reach PHP backend.</strong>
            <p>{error}</p>
            <p>Check that Apache is running in XAMPP and the folder name is correct.</p>
          </div>
        )}

        {status && (
          <div className="box box-success">
            <strong>✅ {status.message}</strong>
            <ul>
              <li>PHP version: {status.php_version}</li>
              <li>PDO MySQL driver: {status.pdo_mysql}</li>
              <li>Server time: {status.time}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default App