async function Run() {
	const api = "https://api.mcstatus.io/v2/status/java/hypixel.net"
	const res = await fetch(api);
	const data = await res.json();

	document.querySelector("#icon").src = `${data.icon}`
	document.querySelector("#icon").style.width = "170px"

	const playerOnline = data.players.list.map(player => player.name_raw).join("\n");

	document.querySelector('#player-online summary').textContent = `Player Online: ${data.players.online}/${data.players.max}`
	document.querySelector('#player-online span').textContent = `${playerOnline.replace(/ /g, "\n")};`

	document.querySelector("#motd-display").innerHTML = data.motd.html.replace("</span><span>", "</span><br><span>");

} 
Run();

const toggleDarkMode = document.getElementById("toggle-dark-mode");
const setBackground = document.documentElement;


toggleDarkMode.addEventListener("click", () => {
  const isDark = setBackground.classList.toggle("dark-mode");
  document.querySelector("#toggle-dark-mode").textContent = isDark ? "☀️" : "🌑";
  console.log(isDark)
});
