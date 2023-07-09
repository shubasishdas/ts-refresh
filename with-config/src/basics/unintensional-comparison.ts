const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...

  console.log("~~~a");
} else if (value === "b") {
  // Oops, unreachable
  console.log("b");
} else {
  console.log("~~~other~~~");
}

console.log({ value });
