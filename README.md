# KikiArcade
## NaNtendo

_Integrantes:_

+ Andreco Juárez
+ Patricio Alfaro
+ Diego Hernández

## Guía de instalación: 

- Asegurate de tener instalado Un navegador, ***Se recomienda ampliamente utilizar Firefox***, ya que los juegos están mejor optimizados para esta plataforma
- Accede a tu línea de comandos y clona el repositorio en la ubicación que desees con el comando: `git clone https://github.com/DiegoHhrt/KikiArcade.git`

## Configuración del proyecto
1. Con el repositorio ya instalado, identifíca la ruta del mismo y accede a ella a través de la barra de direcciones de tu navegador Firefox. Por ejemplo: `file:///C:/Users/Tu_usuario_/Resto_de_la_ubicación`
2. ¡Kiki Arcade está listo para recibirte! Navega atravez de las vistas.  
## Características
- Kiki arcade cuenta con 2 juegos basados respectívamente en un clásico nostálgico y en un clásico moderno, apelando a diversos grupos de edad, lo que crea la posibilidad de que las personas descubran cosas con las que podrían no estar familiarizadas.
- Ofrece opciones de personalización, por lo que genera un sentimiento de individualidad y se adapta a las preferencias de cualquier persona.
- Es un sitio accesible por lo que personas con discapacidades o con limitaciones contextuales aún pueden ser capaces de disfrutar las diversas funciones del sitio y sus juegos. 
- Las vistas son en su mayoría adaptables, lo que diversifíca sus posibilidades y formatos de uso.
## Comentarios adicionales
- ***Los juegos de kiki arcade cuentan con una mejor experiencia de uso en Firefox, debido a que su motor es más capaz de manejar los diversos temporizadores e intervalos manejados en los juegos***, sin embargo, si se desea utilizar Chrome u algún otro navegador deben seguirse los siguentes pasos: 
    1. Asegurate de tener instalado un editor de texto como VisualStudioCode o Atom, (Entre otros), de no ser así, dirígete al sitio de descarga de [Visual Studio Code](https://code.visualstudio.com/) o de [Atom](https://atom.io/)
    2. Identifica la ruta en que has clonado el repositorio del kiki Arcade
    3. Accede a la carpeta del repositorio
    4. Identifica la carpeta "dynamics" y abrela
    5. Identifica la carpeta "Js" y abrela, en ella encontraras 7 archivos de JavaScript
    6. Con tu editor de texto abre el archivo _screens.js_
    7. Identifica las líneas _264_ y _281_, en ambas, reemplaza el valor de 15 por _60_
    8. Identifica las líneas _250_ y _252_, en ambas reemplaza el valor de 4.5 por _10_
    9. Identifica la línea 278, en ella modifica el valor de 7 por _16_
    10. Guarda los cambios realizados al archivo con  `Ctr+s` 
- Siguendo estos pasos el ritmo de juego en otro navegador se asemejará un poco más a la experiencia en Firefox, sin embargo, se sacrificará un poco de la experiencia visual, ya que las animaciónes tendrán una transición menos suave.
