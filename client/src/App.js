import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './views/Home'
import { RegistroMascota } from './views/RegistroMascota'
import { VerMascota } from './views/VerMascota'
import { EditarMascota } from './views/EditarMascota'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/mascota/nueva" element={<RegistroMascota />} />
                <Route path="/mascota/:id" element={<VerMascota />} />
                <Route path="/mascota/:id/edit" element={<EditarMascota />} />
                {/*<Route path="/pirate/:id" element={<UpdatePirate />} /> */}
                {/* <Route path="/:id" element={<ProductDetail />} />
                <Route path="/:id/edit" element={<ProductUpdate />} /> */}
            </Routes>
        </div>
    )
}

export default App
