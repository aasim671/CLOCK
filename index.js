setInterval(() => {
  d = new Date();
  hTime = d.getHours();
  mTime = d.getMinutes();
  sTime = d.getSeconds();
  hRot = hTime * 30 + mTime / 2;
  mRot = 6 * mTime;
  sRot = 6 * sTime;

  hour.style.transform = `rotate(${hRot}deg)`;
  min.style.transform = `rotate(${mRot}deg)`;
  sec.style.transform = `rotate(${sRot}deg)`;
}, 1000);
