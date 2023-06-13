const psi = "1.3247";

for (let i = 0; i <= 22; i++) {
  const psiPower = Math.pow(psi, i);
  const p = 100 / psiPower + "vw";
  document.documentElement.style.setProperty("--" + i + "pr", p);
}

// var(--xpr)
