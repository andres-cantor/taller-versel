import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button"; // Importación correcta
import { FaGithub, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import './App.css';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-night-blue p-6 relative">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="relative max-w-4xl mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-2xl shadow-lg animate-fade-in">
        {/* Foto de perfil */}
        <div className="flex flex-col items-center">
          <img
            src="https://st4.depositphotos.com/5934840/23454/v/1600/depositphotos_234542254-stock-illustration-man-profile-smiling-cartoon-vector.jpg" // Reemplaza con la ruta de tu imagen
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full border-4 border-gray-300 hover:scale-110 transition-transform duration-300"
          />
          <h1 className="text-2xl font-bold mt-4 animate-bounce text-white">Andres David Cantor Turriago</h1>
          <p className="text-gray-200">Desarrollador Full Stack Entusiasta de la tecnología</p>
        </div>

        {/* Perfil de Programador */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold text-center text-white animate-pulse">Sobre Mí</h2>
          <p className="text-gray-200 text-center mt-4">
            Soy un desarrollador apasionado por la tecnología, especializado en desarrollo web
            Escucha activa y comunicación asertiva Adaptabilidad Framework Programming language JavaScript,Riact,Python,Riact-Native
              Ofimática Basic Excel, Word, Power Point y bases de datos SQL.
          </p>
        </section>

        {/* Tecnologías */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold text-center text-white">Tecnologías que manejo</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Card className="hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up bg-gradient-to-r from-blue-400 to-blue-600">
              <CardContent className="flex justify-center items-center p-4">
                <FaReact className="text-6xl text-white hover:text-blue-200 transition duration-300 hover:scale-110 animate-spin-slow" />
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up bg-gradient-to-r from-green-400 to-green-600">
              <CardContent className="flex justify-center items-center p-4">
                <FaNodeJs className="text-6xl text-white hover:text-green-200 transition duration-300 hover:scale-110 animate-bounce" />
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up bg-gradient-to-r from-yellow-400 to-yellow-600">
              <CardContent className="flex justify-center items-center p-4">
                <FaPython className="text-6xl text-white hover:text-yellow-200 transition duration-300 hover:scale-110 animate-pulse" />
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up bg-gradient-to-r from-purple-400 to-pink-500">
              <CardContent className="flex justify-center items-center p-4">
                <SiPostgresql className="text-6xl text-white hover:text-blue-200 transition duration-300 hover:scale-110 animate-spin-slow" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Proyectos */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold text-center text-white">Proyectos</h2>
          <div className="grid gap-4 mt-4">
            <Card className="hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up bg-gradient-to-r from-green-400 to-blue-500">
              <CardContent className="p-4">
                <h3 className="text-lg font-medium text-white">sakila</h3>
                <p className="text-gray-200">Se realizó una prueba de conexión a la base de datos de sakila</p>
                <a href="https://github.com/andres-cantor/sakila.git" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-2 flex items-center gap-2 bg-white text-black hover:bg-gray-200">
                    <FaGithub /> Ver en GitHub
                  </Button>
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up bg-gradient-to-r from-purple-400 to-pink-500">
              <CardContent className="p-4">
                <h3 className="text-lg font-medium text-white">Página WEB</h3>
                <p className="text-gray-200">Se realizó una página web para el corredor ecológico de Villavicencio</p>
                <a href="https://github.com/andres-cantor/tallerweb.git" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-2 flex items-center gap-2 bg-white text-black hover:bg-gray-200">
                    <FaGithub /> Ver en GitHub
                  </Button>
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up bg-gradient-to-r from-red-400 to-yellow-500">
              <CardContent className="p-4">
                <h3 className="text-lg font-medium text-white">northwind</h3>
                <p className="text-gray-200">Se creó un ejemplo en northwind para una base de datos.</p>
                <a href="https://github.com/andres-cantor/web-y-base-de-datos.git" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-2 flex items-center gap-2 bg-white text-black hover:bg-gray-200">
                    <FaGithub /> Ver en GitHub
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hoja de vida */}
        <section className="mt-6 text-center">
          <a href="./public/CV Actualizado 2025.pdf" download>
            <Button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 animate-bounce">
              Descargar Hoja de Vida
            </Button>
          </a>
        </section>
      </div>
    </div>
  );
}

