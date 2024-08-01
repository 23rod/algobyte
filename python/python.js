document.addEventListener('DOMContentLoaded', function() {
    var loggedIn = localStorage.getItem('loggedIn');
    var courseList = document.getElementById('course-list');

    if (loggedIn === 'true') {
        courseList.innerHTML = `
            <div class="course">
                <h2>Curso de C++</h2>
                <ul>
                    <li><a href="cursos/cpp/tema1.html">Tema 1: Fundamentos</a> - <a href="cursos/cpp/quiz1.html">Quiz 1</a></li>
                    <li><a href="cursos/cpp/tema2.html">Tema 2: Representación Algorítmica</a> - <a href="cursos/cpp/quiz2.html">Quiz 2</a></li>
                    <li><a href="cursos/cpp/tema3.html">Tema 3: Acciones Elementales</a> - <a href="cursos/cpp/quiz3.html">Quiz 3</a></li>
                    <li><a href="cursos/cpp/tema4.html">Tema 4: Estructuras de Control Condicional</a> - <a href="cursos/cpp/quiz4.html">Quiz 4</a></li>
                    <li><a href="cursos/cpp/tema5.html">Tema 5: Estructuras de Control Iterativo</a> - <a href="cursos/cpp/quiz5.html">Quiz 5</a></li>
                    <li><a href="cursos/cpp/tema6.html">Tema 6: Programación Modular</a> - <a href="cursos/cpp/quiz6.html">Quiz 6</a></li>
                    <li><a href="cursos/cpp/tema7.html">Tema 7: Tipos de Datos Estructurados</a> - <a href="cursos/cpp/quiz7.html">Quiz 7</a></li>
                    <li><a href="cursos/cpp/tema8.html">Tema 8: Programación Orientada a Objetos</a> - <a href="cursos/cpp/quiz8.html">Quiz 8</a></li>
                </ul>
            </div>
            <div class="course">
                <h2>Curso de Python</h2>
                <ul>
                    <li><a href="cursos/python/tema1.html">Tema 1: Fundamentos</a> - <a href="cursos/python/quiz1.html">Quiz 1</a></li>
                    <li><a href="cursos/python/tema2.html">Tema 2: Representación Algorítmica</a> - <a href="cursos/python/quiz2.html">Quiz 2</a></li>
                    <li><a href="cursos/python/tema3.html">Tema 3: Acciones Elementales</a> - <a href="cursos/python/quiz3.html">Quiz 3</a></li>
                    <li><a href="cursos/python/tema4.html">Tema 4: Estructuras de Control Condicional</a> - <a href="cursos/python/quiz4.html">Quiz 4</a></li>
                    <li><a href="cursos/python/tema5.html">Tema 5: Estructuras de Control Iterativo</a> - <a href="cursos/python/quiz5.html">Quiz 5</a></li>
                    <li><a href="cursos/python/tema6.html">Tema 6: Programación Modular</a> - <a href="cursos/python/quiz6.html">Quiz 6</a></li>
                    <li><a href="cursos/python/tema7.html">Tema 7: Tipos de Datos Estructurados</a> - <a href="cursos/python/quiz7.html">Quiz 7</a></li>
                    <li><a href="cursos/python/tema8.html">Tema 8: Programación Orientada a Objetos</a> - <a href="cursos/python/quiz8.html">Quiz 8</a></li>
                </ul>
            </div>
        `;
    } else {
        courseList.innerHTML = `<p>Por favor, <a href="login.html">inicia sesión</a> para ver los cursos.</p>`;
    }
});
