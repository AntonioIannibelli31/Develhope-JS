const order = {
  name: "",
  surname: "",
  city: "",
};

// if (
//   order &&
//   order.customer &&
//   order.customer.address &&
//   !order.customer.address.city
// ) {
//   console.log("City is required");
// }

if (order?.city == false) {
  console.log("City is required");
}
