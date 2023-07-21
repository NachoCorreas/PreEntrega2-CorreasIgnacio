 
function mostrarProductosPorMarca() {
    while (true) {
      const marcaIngresada = prompt(
        "Ingrese la marca deseada o escriba 'salir' para salir: adidas, nike o converce"
      ).toLowerCase();
  
      if (marcaIngresada === "salir") {
        alert("Gracias por visitar nuestro catalogo.");
        break;
      }
  
      const productosPorMarca = ProdMarcas.filter(
        (producto) => producto.marca.toLowerCase() === marcaIngresada
      );
  
      if (productosPorMarca.length === 0) {
        alert("No se encontraron productos con esa marca.");
      } else {
        alert("Productos con la marca " + marcaIngresada + ":");
        for (const producto of productosPorMarca) {
          alert(
            `Nombre: ${producto.nombre}\nPrecio: $${producto.precio}\nTalle: ${producto.talle}`
          );
        }
      }
    }
  }
  
  mostrarProductosPorMarca();
  
  

