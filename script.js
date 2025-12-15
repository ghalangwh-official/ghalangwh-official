const cmd = document.getElementById("cmd");
const output = document.getElementById("output");

cmd.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    handle(cmd.value.trim());
    cmd.value = "";
  }
});

function print(text) {
  output.textContent += "\n" + text;
  output.scrollTop = output.scrollHeight;
}

function handle(input) {
  print(`\n$ ${input}`);

  switch (input) {
    case "help":
      print("available commands:");
      print(" help        → show commands");
      print(" about       → who am I");
      print(" projects    → list projects");
      print(" run crtsh   → launch crt.sh tool");
      print(" clear       → clear terminal");
      break;

    case "about":
      print("Ghalang — Linux enjoyer, Bash addict, automation guy.");
      print("I build tools, not just websites.");
      break;

    case "projects":
      print("projects:");
      print(" - crtsh   (LIVE)");
      print(" - sholat  (soon)");
      print(" - yt-dlp  (demo)");
      break;

    case "run crtsh":
      print("launching crt.sh God Mode...");
      setTimeout(() => {
        window.location.href = "/projects/crtsh/";
      }, 800);
      break;

    case "clear":
      output.textContent = "";
      break;

    default:
      print("command not found 💀");
  }
}
