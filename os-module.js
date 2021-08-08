const os=require('os');
const user=os.userInfo();
console.log(user);
//method returns the system uptime in seconds.
console.log(os.uptime());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());