function calculateDiscount(price, customerType, dayOfWeek) {
  let discount = 0;

  if (price <= 0) return 0;

  if (customerType === "VIP") {
    if (price > 1000) discount = 0.2;
    else discount = 0.15;
  } else if (customerType === "Regular") {
    if (price > 500) discount = 0.1;
    else discount = 0.05;
  } else if (customerType === "New") {
    if (dayOfWeek === "Monday") discount = 0.07;
    else if (dayOfWeek === "Friday") discount = 0.1;
    else discount = 0.03;
  } else {
    discount = 0.02;
  }

  if (dayOfWeek === "Sunday") discount += 0.05;
  if (price > 2000) discount += 0.03;

  return price - price * discount;
}

module.exports = { calculateDiscount };


