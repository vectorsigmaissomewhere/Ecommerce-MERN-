function App(){
  return(
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common component */}
      <h1>Header component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
          
        </Route>
      </Routes>
    </div>
  )
}