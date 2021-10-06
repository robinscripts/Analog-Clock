setInterval(() => {
    let dat= new Date();

    let htime=dat.getHours();
    let mtime=dat.getMinutes();
    let stime=dat.getSeconds();

    let hrotation= 30*htime + mtime/2 + stime/120;
    let mrotation= 6*mtime + stime/10;
    let srotation= 6*stime;

    hours.style.transform=`rotate(${hrotation}deg)`;
    minutes.style.transform=`rotate(${mrotation}deg)`;
    seconds.style.transform=`rotate(${srotation}deg)`;
}, 1000);