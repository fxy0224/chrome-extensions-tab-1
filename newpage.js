function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("time").textContent = timeString;

  const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  const dateString = `${now.getFullYear()}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getDate().toString().padStart(2, '0')}        ${weekdays[now.getDay()]}`;
  document.getElementById("date").textContent = dateString;
}

// 初次加载时更新时间和日期
updateTime();

// 每秒更新一次时间和日期
setInterval(updateTime, 1000);