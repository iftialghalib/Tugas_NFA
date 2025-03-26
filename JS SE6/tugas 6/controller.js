import users from './data.js' 
const index = () => { 
    console.log("Daftar user:") 
    users.forEach(({ nama, umur, alamat, email }) => { 
        console.log(`Nama: ${nama}, Umur: ${umur}, Alamat: ${alamat}, Email: ${email}`); 
    });
};
const store = (newUser) => { 
    users.push(newUser) 
    console.log("user berhasil ditambahkan"); 
    // console.log("")
    // console.log("data baru user")
    // index()
} 
const destroy = (index) => { 
    if (index >= 0 && index < users.length) { 
        users.splice(index, 1) 
        // console.log("user berhasil dihapus"); 
        // console.log("")
        // console.log("data baru user")
        // index()
    } else { 
        console.log("user tidak ditemukan"); 
        // console.log("")
        // console.log("data user tetap")
        // index()
} 
} 
export { index, store, destroy }