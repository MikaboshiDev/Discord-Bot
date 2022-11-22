const Discord = require(`discord.js`);
module.exports = {
    name: "ccc",
    desc: "Como estudiar c++ y que es",
    aliases: [""],
    run: async (client, message, args, prefix) => {
        const embed = new Discord.EmbedBuilder()
                          .setTitle(`Como estudiar c++ y que es`)
                          .setColor(client.color)
                          .setDescription(`C++ es un lenguaje de programacion, y es muy util para programar, y para estudiar c++ tienes que aprender los conceptos basicos, como las variables, los ciclos, las funciones, etc, y luego puedes aprender a programar en c++`)
                          .addFields(
                            {name: `Ejemplo de c++`, value:`\`\`\`cpp\n#include <iostream>\n\nint main() {\n  std::cout << "Hello World!";\n  return 0;\n}\n\`\`\``},
                            {name: `Que es un Ciclo for`, value:`Un ciclo for es un ciclo que se repite una cantidad de veces, por ejemplo, si tu quieres que un programa te diga hola 10 veces, puedes usar un ciclo for, y el codigo seria asi:\n\`\`\`cpp\n#include <iostream>\n\nint main() {\n  for(int i = 0; i < 10; i++) {\n    std::cout << "Hola";\n  }\n  return 0;\n}\n\`\`\``},
                            {name: `Ejemplo de ciclo for`, value:`\`\`\`cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  for (int i = 0; i < 5; i++) {\n    cout << i << "\n";\n  }\n  return 0;\n}\n\`\`\``},
                            {name: `Que es una funcion`, value:` Una funcion es un bloque de codigo que se ejecuta cuando la llamas, por ejemplo, si tu quieres que un programa te diga hola, puedes hacer una funcion que diga hola, y luego llamarla, y el codigo seria asi:\n\`\`\`cpp\n#include <iostream>\n\nvoid hola() {\n  std::cout << "Hola";\n}\n\nint main() {\n  hola();\n  return 0;\n}\n\`\`\``},
                            {name: `Ejemplo de funcion`, value:`\`\`\`cpp\n#include <iostream>\nusing namespace std;\n\nvoid myFunction() {\n  cout << "I just got executed!";\n}\n\nint main() {\n  myFunction();\n  return 0;\n}\n\`\`\``},
                            {name: `Que es una variable`, value:`Una variable es un espacio de memoria que se usa para guardar datos, por ejemplo, si tu quieres guardar un numero, puedes usar una variable, y el codigo seria asi:\n\`\`\`cpp\n#include <iostream>\n\nint main() {\n  int numero = 10;\n  std::cout << numero;\n  return 0;\n}\n\`\`\``},
                            {name: `Ejemplo de variable`, value:`\`\`\`cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int myNum = 5;\n  cout << myNum;\n  return 0;\n}\n\`\`\``},
                            {name: `Que es una clase`, value:`Una clase es un tipo de dato, por ejemplo, si tu quieres guardar un numero, puedes usar una variable, pero si tu quieres guardar un objeto, puedes usar una clase, y el codigo seria asi:\n\`\`\`cpp\n#include <iostream>\n\nclass Persona {\n  public:\n    std::string nombre;\n    int edad;\n};\n\nint main() {\n  Persona persona1;\n  persona1.nombre = "Juan";\n  persona1.edad = 20;\n  std::cout << persona1.nombre << " tiene " << persona1.edad << " años";\n  return 0;\n}\n\`\`\``},
                            {name: `Ejemplo de clase`, value:`\`\`\`cpp\n#include <iostream>\nusing namespace std;\n\nclass MyClass {\n  public:\n    void myMethod() {\n      cout << "Hello World!";\n    }\n};\n\nint main() {\n  MyClass myObj;\n  myObj.myMethod();\n  return 0;\n}\n\`\`\``},
                            {name: `Que es un objeto`, value:`Un objeto es una instancia de una clase, por ejemplo, si tu quieres guardar un numero, puedes usar una variable, pero si tu quieres guardar un objeto, puedes usar una clase, y el codigo seria asi:\n\`\`\`cpp\n#include <iostream>\n\nclass Persona {\n  public:\n    std::string nombre;\n    int edad;\n};\n\nint main() {\n  Persona persona1;\n  persona1.nombre = "Juan";\n  persona1.edad = 20;\n  std::cout << persona1.nombre << " tiene " << persona1.edad << " años";\n  return 0;\n}\n\`\`\``},
                            {name: `Ejemplo de objeto`, value:`\`\`\`cpp\n#include <iostream>\nusing namespace std;\n\nclass MyClass {\n  public:\n    void myMethod() {\n      cout << "Hello World!";\n    }\n};\n\nint main() {\n  MyClass myObj;\n  myObj.myMethod();\n  return 0;\n}\n\`\`\``},
                            {name: `Que es un constructor`, value:`Un constructor es un metodo que se ejecuta cuando se crea un objeto, por ejemplo, si tu quieres que un programa te diga hola, puedes hacer una funcion que diga hola, y luego llamarla, y el codigo seria asi:\n\`\`\`cpp\n#include <iostream>\n\nclass Persona {\n  public:\n    std::string nombre;\n    int edad;\n    Persona(std::string nombre, int edad) {\n      this->nombre = nombre;\n      this->edad = edad;\n    }\n};\n\nint main() {\n  Persona persona1("Juan", 20);\n  std::cout << persona1.nombre << " tiene " << persona1.edad << " años";\n  return 0;\n}\n\`\`\``},
                            {name: `Ejemplo de array`, value:`\`\`\`cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};\n  cout << cars[0];\n  return 0;\n}\n\`\`\``},
                          )
                          .setFooter({text:`Que es c++ y sus funciones`})
                          .setTimestamp()

                          message.reply({ embeds: [embed]})
    }
    }