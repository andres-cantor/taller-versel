import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button"; // Importación correcta
import { FaGithub, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { useState } from 'react';
import './App.css';

export default function Portfolio() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        {/* Foto de perfil */}
        <div className="flex flex-col items-center">
          <img
            src="https://st4.depositphotos.com/5934840/23454/v/1600/depositphotos_234542254-stock-illustration-man-profile-smiling-cartoon-vector.jpg" // Reemplaza con la ruta de tu imagen
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full border-4 border-gray-300"
          />
          <h1 className="text-2xl font-bold mt-4">Andres David Cantor Turriago</h1>
          <p className="text-gray-600">Desarrollador Full Stack | Entusiasta de la tecnología</p>
        </div>

        {/* Perfil de Programador */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold text-center text-blue-600">Sobre Mí</h2>
          <p className="text-gray-700 text-center mt-4">
            Soy un desarrollador apasionado por la tecnología, especializado en desarrollo web
            con Programming language JavaScript,Riact,Python,Riact-Native y bases de datos SQL Escucha activa y comunicación asertiva  
            Adaptabilidad  Framework Ofimática Basic  Excel, Word, Power Point
.
          </p>
        </section>

        {/* Tecnologías */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold text-center text-blue-600">Tecnologías que manejo</h2>
          <div className="flex justify-center space-x-8 mt-4 text-8xl text-blue-600">
            <FaReact className="hover:text-blue-400 transition duration-300" />
            <FaNodeJs className="text-green-600 hover:text-green-400 transition duration-600" />
            <FaPython className="text-yellow-500 hover:text-yellow-700 transition duration-600" />
            <SiPostgresql className="text-blue-500 hover:text-blue-800 transition duration-600" />
          </div>
        </section>

        {/* Proyectos */}
        <section className="mt-6">
          <h2 className="text-3xl font-bold text-center text-blue-600">Proyectos</h2>
          <div className="grid gap-4 mt-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">sakila </h3>
                <p className="text-gray-600">se realizo una prueba de coneccion a la base de datos de sakila</p>
                <a href="https://github.com/andres-cantor/sakila.git" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-2 flex items-center gap-2">
                    <FaGithub /> Ver en GitHub
                  </Button>
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">pagina WEB </h3>
                <p className="text-gray-600">se realizo una pagina web para el corredor ecologico de villavicencio </p>
                <a href="https://github.com/andres-cantor/proyecto2" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-2 flex items-center gap-2">
                    <FaGithub /> Ver en GitHub
                  </Button>
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">northwind </h3>
                <p className="text-gray-600">se creo un ejemplo en northwind para una base de datos.</p>
                <a href="https://github.com/andres-cantor/web-y-base-de-datos.git" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-2 flex items-center gap-2">
                    <FaGithub /> Ver en GitHub
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hoja de vida */}
        <section className="mt-6 text-center">
          <a 
          href="./public/CV Actualizado 2025.pdf" 
          download= 'CV Actualizado 2025.pdf' >
            <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Descargar Hoja de Vida
            </Button>
          </a>
        </section>
      </div>
    </div>
  );
}

