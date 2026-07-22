// Floridino's catering menu data — transcribed from FloridinosCateringMenu_Oct2023REV.pdf
// Each category has one or more "groups" — a subtitle + items. Categories with a single, unlabeled
// group render as a plain list; a category can bundle several labeled groups under one shared section.
export const CATERING_VERSION = 1;
export const CATERING = [
  { title: "Fresh Salads", groups: [
    { subtitle: null, items: [
      { name: "Garden Salad", price: "$28.95 / $42.95", desc: "Serves 8–10 / Serves 18–20." },
      { name: "Grilled Chicken Caesar Salad", price: "$32.95 / $49.95", desc: "Serves 8–10 / Serves 18–20." },
      { name: "Chef Salad", price: "$34.95 / $49.95", desc: "Serves 8–10 / Serves 18–20." },
      { name: "Antipasto Salad", price: "$34.95 / $52.95", desc: "Serves 8–10 / Serves 18–20." },
      { name: "Artichoke Chicken Salad", price: "$39.95 / $58.95", desc: "Serves 8–10 / Serves 18–20." },
      { name: "Greek Salad", price: "$32.95 / $49.95", desc: "Serves 8–10 / Serves 18–20." }
    ]}
  ]},
  { title: "Floridino's Famous Wings", note: "25 Years of Perfection! Choice of Signature Sauce, Hot Garlic Parmigiano, Mild or Medium, Honey BBQ, Blackened, Buffalo or Sweet Teriyaki.", groups: [
    { subtitle: null, items: [
      { name: "Boneless Wings (24)", price: "Market Price", desc: "" },
      { name: "Boneless Wings (48)", price: "Market Price", desc: "" },
      { name: "Boneless Wings (96)", price: "Market Price", desc: "" },
      { name: "Traditional Wings (24)", price: "Market Price", desc: "" },
      { name: "Traditional Wings (48)", price: "Market Price", desc: "" },
      { name: "Traditional Wings (96)", price: "Market Price", desc: "" }
    ]}
  ]},
  { title: "Pasta Favorites", groups: [
    { subtitle: null, items: [
      { name: "Baked Lasagna", price: "$48.95", desc: "Serves 10–12." },
      { name: "Penne Pasta", price: "$39.95", desc: "Serves 10–12." },
      { name: "Penne Pasta with Grilled Chicken", price: "$49.95", desc: "Serves 10–12." },
      { name: "Alfredo Penne with Grilled Chicken", price: "$62.95", desc: "Serves 10–12." },
      { name: "Chicken Parmigiana with Penne Pasta", price: "$79.95", desc: "Serves 10–12." },
      { name: "Eggplant Parmigiana", price: "$44.95", desc: "Serves 10–12. Add penne pasta $34.95." },
      { name: "Baked Penne Pasta with Meat Sauce", price: "$44.95", desc: "Serves 10–12." },
      { name: "Eggplant Rollatini", price: "$44.95", desc: "Serves 10–12. Add pasta $34.95." },
      { name: "Floridino's Meatballs", price: "$29.95", desc: "Add one dozen to any pasta order." }
    ]}
  ]},
  { title: "Pizzas & Calzones", groups: [
    { subtitle: null, items: [
      { name: "Cheese Pizza (18\")", price: "$15.95", desc: "" },
      { name: "One-Topping Pizza (18\")", price: "$18.95", desc: "" },
      { name: "Two-Topping Pizza (18\")", price: "$21.95", desc: "" },
      { name: "Three-Topping Pizza (18\")", price: "$24.95", desc: "" },
      { name: "Gourmet White Pizza", price: "Custom", desc: "Build your own — fresh garlic, Mozzarella, Ricotta, Pecorino & Parmesan cheeses with our Secret White Sauce. Add Broccoli, Spinach, Eggplant, Feta cheese, Olives or Chicken." },
      { name: "Calzone", price: "Custom", desc: "Build your own — freshly baked dough filled with our homemade sauce, Mozzarella cheese and your choice of Broccoli, Eggplant, Green Peppers, Mushrooms, Onions, Olives, Ricotta cheese, Pepperoni, Ham, Ground Beef or Sausage." },
      { name: "Garlic Baguettes", price: "$5.95 / $9.95", desc: "Half Dozen / Dozen." },
      { name: "Red Mini Calzones", price: "$49.95", desc: "Serves 8–10." },
      { name: "White Mini Calzones", price: "$52.95", desc: "Serves 8–10." },
      { name: "Pazzo Pizza Muffin Platter", price: "$39.95 / $59.95", desc: "Serves 10–12 / Serves 18–20." }
    ]}
  ]},
  { title: "Dessert & Lunch Specials", groups: [
    { subtitle: null, items: [
      { name: "Tiramisu", price: "", desc: "Light chocolate, lady fingers with sweet Mascarpone cheese. Ask us about all our other great desserts!" },
      { name: "Antipasto Salad with Garlic Baguettes", price: "$42.95", desc: "Serves 10–12." },
      { name: "Antipasto Salad with Assorted Famous Pizza Muffins", price: "$59.95", desc: "Serves 10–12." }
    ]}
  ]}
];
