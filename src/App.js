import React from 'react'
const StudentForm = React.lazy(() => import('FirstStudentApp/StudentForm'))

const App = () => {
  return (
    <div>
      <h1>Second Student App</h1>
      <StudentForm />
    </div>
  )
}

export default App
