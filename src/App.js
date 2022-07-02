import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';

import Moon from './pages/Moon';
import Sunset from './pages/Sunset';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		
		<Route path='/Moon' element={<Moon/>} />
		<Route path='/Sunset' element={<Sunset/>} />
	
	</Routes>
	</Router>
);
}

export default App;


