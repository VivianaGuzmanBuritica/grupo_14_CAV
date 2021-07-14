const bcrypt= require('bcryptjs');
let hash = bcrypt.hashSync('vivi', 10);
console.log(hash);
console.log(bcrypt.compareSync('vivi', hash));

