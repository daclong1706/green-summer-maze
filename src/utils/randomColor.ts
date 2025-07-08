export function getRandomBgColor() {
  const colors = [
    "#FFEBEE",
    "#E3F2FD",
    "#E8F5E9",
    "#FFF3E0",
    "#F3E5F5",
    "#FBE9E7",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
