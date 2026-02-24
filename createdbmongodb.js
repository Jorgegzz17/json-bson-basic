use ('mi_base_de_datos_jlgm');

dbuser.usuarios.insertOne({
    nombre:"pepe salazar",
    edad:67,
    email:"pepe.salazarQgmail.com",
    isActive: false,
    saldo:123456.77,
    fechaRegistro: new Date(),
    genero:"Masculino",
    ciudad:"L.A",
    indiomas: ["español","ingles"],
    numerosTelefono:["81 56 56 45 34","81 34 56 78 90"]

});