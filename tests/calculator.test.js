const { calculateDiscount } = require("../src/calculator");

test("Debe aplicar 20% de descuento para VIP con más de 1000", () => {
  expect(calculateDiscount(1200, "VIP", "Monday")).toBe(960);
});

test("Debe aplicar 5% para Regular con menos de 500", () => {
  expect(calculateDiscount(400, "Regular", "Tuesday")).toBe(380);
});



