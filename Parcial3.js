function main() {
    // Crear el array de tiendas de ropa
    let tiendas = [
      { nombre: "Tienda A", direccion: "Calle 123", telefono: "123456789", productos: ["Pantalones", "Camisas"], horario: "9:00 AM - 6:00 PM" },
      { nombre: "Tienda B", direccion: "Avenida XYZ", telefono: "987654321", productos: ["Vestidos", "Zapatos"], horario: "10:00 AM - 7:00 PM" },
      { nombre: "Tienda C", direccion: "Plaza Principal", telefono: "555555555", productos: ["Chaquetas", "Bufandas"], horario: "8:00 AM - 5:00 PM" },
      { nombre: "Tienda D", direccion: "Calle Principal", telefono: "999999999", productos: ["Sombreros", "Calcetines"], horario: "11:00 AM - 8:00 PM" }
    ];
  
    // Mostrar los objetos en la consola
    console.log(tiendas);
  
    function filtrarPorHorario(horario) {
      let filtro = tiendas.filter(function (tienda) {
        return tienda.horario === horario;
      });
      return filtro;
    }
  
    // Filtrar tiendas por horario "10:00 AM - 7:00 PM"
    let filtro = filtrarPorHorario("10:00 AM - 7:00 PM");
  
    // Mostrar las tiendas filtradas en la consola
    console.log(filtro);
  }
  
  // Llamar a la función principal
  main();
  