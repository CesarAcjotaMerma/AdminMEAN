const getMenuFrontEnd = (role = 'USER_ROLE') => {

    const menu = [
        {
          titulo: 'Productos',
          icono: 'mdi mdi-cake',
          submenu: [
            // { titulo: 'Usuarios', url: 'usuarios' },
            { titulo: 'Lista Productos', url: 'hospitales' },
            { titulo: 'Nuevo Producto', url: 'medicos' },
          ]
        },
        {
          titulo: 'Categorias',
          icono: 'mdi mdi-folder-multiple',
          submenu: [
            // { titulo: 'Usuarios', url: 'usuarios' },
            { titulo: 'Lista Categorias', url: 'hospitales' },
            { titulo: 'Nueva Categoria', url: 'medicos' },
          ]
        },
        {
          titulo: 'Ventas',
          icono: 'mdi mdi-clipboard-check',
          submenu: [
            // { titulo: 'Usuarios', url: 'usuarios' },
            { titulo: 'Lista Ventas', url: 'hospitales' },
            { titulo: 'Nueva Venta', url: 'medicos' },
          ]
        },
        {
          titulo: 'Proveedores',
          icono: 'mdi mdi-stove',
          submenu: [
            // { titulo: 'Usuarios', url: 'usuarios' },
            { titulo: 'Lista Proveedores', url: 'hospitales' },
          ]
        },
      ];

    if ( role === 'ADMIN_ROLE' ) {

      menu.unshift({ 
        titulo: "Usuarios", 
        icono: 'mdi mdi-account-multiple', 
        submenu: [
          { titulo: 'Lista de Usuarios', url: 'usuarios' },
          { titulo: 'Nuevo Usuario', url: 'grafica1' },
        ]
      });

      // menu[0].submenu.unshift({ titulo: 'Usuarios', url: 'usuarios' });
      menu[4].submenu.unshift({ titulo: 'Agregar Nuevo', url: 'medicos'});

      menu.unshift({ 
        titulo: "Dashboard", 
        icono: 'mdi mdi-view-dashboard', 
        submenu: [
          { titulo: 'Main', url: '/' },
          { titulo: 'Gráficas', url: 'grafica1' },
          { titulo: 'rxjs', url: 'rxjs' },
          { titulo: 'Promesas', url: 'promesas' },
          { titulo: 'ProgressBar', url: 'progress' },
        ]
      });
    }
    return menu;
}

module.exports = {
    getMenuFrontEnd
}
