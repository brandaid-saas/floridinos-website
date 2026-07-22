// Floridino's menu data — single source read by the Menu page (future menu editor writes here).
// Salads, Sandwiches, Kid's Menu & Lunch Specials transcribed from the 2026 menu photo.
// Pizza / Calzones / Pasta / Desserts are PLACEHOLDERS — need photos of the menu's other panels.
export const MENU_VERSION = 5;
export const MENU = [
  { title: "Salads", note: "Individually prepared to order. Choice of Famous Original House, Ranch, Blue Cheese, Caesar, Balsamic Vinaigrette or Honey Raspberry Vinaigrette. Extra dressing .99", items: [
    { name: "Tossed Salad", price: "$5.65", desc: "A small side salad with lettuce, tomatoes and cucumbers." },
    { name: "Cranberry Chicken Salad", price: "$13.45", desc: "Spring mix, chicken, cranberries, walnuts, tomatoes, Blue cheese crumbles and Honey Raspberry Vinaigrette dressing." },
    { name: "Crispy Fried Chicken Salad", price: "$12.95", desc: "Lettuce, chicken, tomatoes, cucumbers, Mozzarella & Cheddar cheeses and bacon bits." },
    { name: "Antipasto Salad", price: "$13.25", desc: "Lettuce, ham, salami, Provolone cheese, tomatoes, cucumbers, black olives and pepperoncinis." },
    { name: "Mahi Mahi Salad", price: "$16.95", desc: "Blackened Mahi Mahi served on Spring mix with tomatoes, cucumbers, shredded red cabbage & carrots." },
    { name: "Chef Salad", price: "$13.25", desc: "Lettuce, sliced turkey, ham, tomatoes, cucumbers and Mozzarella cheese." },
    { name: "Buffalo Chicken Salad", price: "$12.95", desc: "Lettuce, Buffalo chicken, tomatoes, cucumbers, and Blue cheese crumbles." },
    { name: "Greek Salad", price: "$13.75", desc: "Classic with lettuce, tomatoes, cucumbers, Feta cheese, pepperoncinis and Greek olives." },
    { name: "Chicken Caesar Salad", price: "$13.25", desc: "Romaine lettuce, chicken, tomatoes, croutons and Caesar salad dressing." },
    { name: "Artichoke Chicken Salad", price: "$13.25", desc: "Romaine lettuce, grilled chicken, tomatoes, cucumbers, olives, & Feta cheese with our Famous Original House dressing." },
    { name: "Steak Salad", price: "$13.25", desc: "Romaine lettuce, shredded steak, tomatoes, green olives, Blue cheese crumbles, Parmesan cheese and our Famous Original House dressing." }
  ]},
  { title: "Sandwiches", note: "All sandwiches are served with French fries. * Get as a conventional sandwich or as a wrap!", items: [
    { name: "New York Style Pastrami Sandwich", price: "$13.25", desc: "Pastrami & cheese served hot with a Kosher pickle." },
    { name: "Reuben Sandwich", price: "$13.55", desc: "Thin sliced corned beef topped with Swiss cheese, sauerkraut and Thousand Island dressing." },
    { name: "Cuban Sandwich", price: "$13.25", desc: "Ham, salami, Swiss cheese, lettuce, tomato and pickles." },
    { name: "Meatball Sandwich", price: "$13.25", desc: "With Mozzarella cheese." },
    { name: "Eggplant Parmigiana Sandwich", price: "$13.25", desc: "" },
    { name: "Chicken Parmigiana Sandwich", price: "$13.25", desc: "" },
    { name: "Super Steak Sandwich", price: "$13.55", desc: "Steak, sautéed mushrooms, onions, peppers and Mozzarella cheese." },
    { name: "Floridino's Deluxe Sandwich", price: "$13.25", desc: "Oven-baked ham, pepperoni, salami and cheese with lettuce, tomatoes, onions and our Famous Original House dressing." },
    { name: "Chicken Caesar Wrap *", price: "$12.95", desc: "Chicken, Romaine lettuce, tomatoes, Parmigiana cheese, Caesar salad dressing and served with fries." },
    { name: "Hot Ham & Cheese Sandwich *", price: "$11.95", desc: "" },
    { name: "Super Turkey Club *", price: "$13.25", desc: "Turkey and cheese with lettuce, tomato, bacon and mayo." },
    { name: "Floridino's Signature Chicken Sandwich *", price: "$12.95", desc: "Chicken tenders coated in our Famous Signature sauce on a toasted bun with lettuce, tomato and mayo." }
  ]},
  { title: "Specialty Pizzas", note: "Small 10\" / Medium 14\"", items: [
    { name: "Sundried Tomato Pizza", price: "$13.25 / $21.55", desc: "Sundried tomatoes, chicken, gourmet garlic sauce, fresh basil, spinach and Parmesan cheese." },
    { name: "La Cubana", price: "$13.25 / $21.55", desc: "Ham, sausage, deli crisp pickles, Banana peppers, mustard-mayo sauce and Mozzarella cheese." },
    { name: "Ravioli Pizza", price: "$13.25 / $20.95", desc: "Ravioli, Marinara sauce, fresh spinach & Mozzarella cheese." },
    { name: "Margherita", price: "$12.95 / $19.45", desc: "Roma tomatoes, garlic, fresh basil and Mozzarella cheese." },
    { name: "Buffalo Chicken Pizza", price: "$13.25 / $20.95", desc: "Chicken, Buffalo sauce, Mozzarella & Blue cheese crumbles." },
    { name: "BBQ Chicken", price: "$13.25 / $20.95", desc: "Chicken, spicy BBQ sauce, onions and Mozzarella cheese." },
    { name: "New York Classic Pizza", price: "$13.55 / $21.95", desc: "Chicken, Pesto, tomatoes, Banana peppers, Greek olives, spinach, Blue cheese crumbles and Mozzarella cheese." },
    { name: "Carbonara", price: "$13.55 / $20.95", desc: "Chicken topped with Mozzarella cheese, bacon, Alfredo sauce and baked to perfection!" }
  ]},
  { title: "Gourmet White Pizzas", note: "Includes fresh tomatoes, garlic, Mozzarella, Ricotta and Romano cheeses with Floridino's Secret White Sauce. Small 10\" / Medium 14\"", items: [
    { name: "White Pizza", price: "$12.65 / $17.95", desc: "" },
    { name: "Spinach Pizza", price: "$12.95 / $20.95", desc: "" },
    { name: "Chicken Pizza", price: "$13.25 / $20.95", desc: "" },
    { name: "Vegetarian Pizza", price: "$13.25 / $21.95", desc: "Tomatoes, eggplant, spinach, mushrooms and sliced Banana peppers." }
  ]},
  { title: "Pizza! Pizza! Pizza!", note: "Toppings: sausage, bacon, ground beef, pepperoni, ham, mushrooms, onions, green or Banana peppers, black or green olives, anchovies, meatballs or pineapple. Small 10\" / Medium 14\" / Large 18\"", items: [
    { name: "Cheese Pizza", price: "$11.75 / $12.95 / $16.55", desc: "" },
    { name: "Additional Topping", price: "$1.75 / $2.65 / $3.55", desc: "" },
    { name: "Extra Cheese", price: "$1.95 / $2.95 / $3.95", desc: "" },
    { name: "Special Pizza", price: "$14.65 / $21.45 / $26.95", desc: "Pepperoni, ham, mushrooms, green peppers and onions." },
    { name: "Deluxe Pizza", price: "$14.75 / $21.95 / $27.95", desc: "Pepperoni, ham, ground beef, mushrooms, green peppers, onions and olives." },
    { name: "Meat Lover's Pizza", price: "$14.45 / $21.95 / $27.95", desc: "Pepperoni, ham, bacon, ground beef & sausage." },
    { name: "Floridino's Deep Dish Pizza", price: "$14.35 / $23.95", desc: "Sauce with Mozzarella & Cheddar cheeses and three toppings of your choice." }
  ]},
  { title: "Calzones", note: "\"Folded Over & Baked to Perfection!\" Freshly baked dough filled with our homemade sauce, Mozzarella cheese and your selection of items.", items: [
    { name: "Two Item Calzone", price: "$13.25", desc: "Choice of items: broccoli, eggplant, green peppers, banana peppers, ham, meat sauce, mushrooms, onions, pepperoni, Ricotta cheese or sausage. Add $1.99 for each additional item." },
    { name: "Tuscan Chicken Broccoli Alfredo", price: "$13.95", desc: "Grilled chicken, broccoli, mushrooms, Alfredo sauce and Mozzarella cheese. Extra sauce $.99." },
    { name: "Chicken Ranch Calzone", price: "$13.95", desc: "Chicken, bacon, onions, fresh tomato with Ranch dressing." },
    { name: "Hawaiian Calzone", price: "$13.95", desc: "Ham, pineapple, bacon, cheese and sauce." },
    { name: "Black 'n Blue Chicken", price: "$13.95", desc: "Blackened grilled chicken, onions, Blue cheese crumbles and Mozzarella cheese." },
    { name: "Louisiana Cajun Hot", price: "$13.95", desc: "Chicken, spicy hot sauce, Mozzarella cheese and served with Ranch dressing." },
    { name: "Meatball Calzone", price: "$13.95", desc: "" },
    { name: "Deluxe Calzone", price: "$13.95", desc: "Ham, ground beef, sausage and pepperoni." },
    { name: "Special Calzone", price: "$13.95", desc: "Pepperoni, ham, onions, green peppers and mushrooms." },
    { name: "Calzone Napolitana", price: "$13.95", desc: "Sausage, Mozzarella cheese, sautéed onions and peppers with Marinara sauce." },
    { name: "Philly-All-The-Way Calzone", price: "$13.95", desc: "Steak, sautéed onions, green peppers and mushrooms." }
  ]},
  { title: "Gourmet Calzones", note: "Includes fresh tomatoes, fresh garlic, fresh Mozzarella, Ricotta and Romano cheeses.", items: [
    { name: "White Calzone", price: "$13.25", desc: "" },
    { name: "Eggplant Calzone", price: "$13.25", desc: "" },
    { name: "Broccoli Calzone", price: "$13.25", desc: "" },
    { name: "Chicken Calzone", price: "$13.55", desc: "" },
    { name: "Spinach Calzone", price: "$13.25", desc: "" }
  ]},
  { title: "Pasta Dinners", note: "Served with Floridino's Famous Breadsticks. Add a House Salad only $4.75 or extra sauce $1.50.", items: [
    { name: "Sundried Tomato Penne Pasta", price: "$13.75", desc: "Penne pasta, sundried tomatoes, gourmet garlic sauce, chicken, fresh basil, spinach and Parmesan cheese." },
    { name: "Spaghetti or Penne with Meatball", price: "$11.65", desc: "Baked with cheese $12.95." },
    { name: "Ravioli with Meatball", price: "$12.95", desc: "Baked with cheese." },
    { name: "Lasagna with Meatball", price: "$13.65", desc: "Baked with cheese." },
    { name: "Chicken Parmigiana", price: "$13.95", desc: "With choice of Spaghetti or Penne." },
    { name: "Eggplant Parmigiana", price: "$13.75", desc: "With choice of Spaghetti or Penne." },
    { name: "Stuffed Manicotti & Meatball", price: "$12.55", desc: "With Mozzarella cheese." },
    { name: "Eggplant Rollatini", price: "$13.75", desc: "Rolled eggplant stuffed with Ricotta and spinach, baked with cheese and served with choice of Spaghetti or Penne." },
    { name: "Chicken Alfredo w/ Penne", price: "$13.65", desc: "" },
    { name: "Tuscan Alfredo Penne Pasta", price: "$13.95", desc: "Chicken, broccoli and mushrooms." },
    { name: "Cajun Chicken Alfredo", price: "$13.65", desc: "" },
    { name: "Stuffed Shells", price: "$12.95", desc: "With Mozzarella cheese and a meatball." },
    { name: "Spaghetti Al Fuoco", price: "$12.55", desc: "Sautéed on open fire with fresh tomato, olive oil, garlic, fresh basil and topped with Parmesan cheese. With chicken or sausage $13.55 · with blackened Mahi Mahi $16.95." }
  ]},
  { title: "From the Sea", items: [
    { name: "Mahi Mahi with Spaghetti Al Fuoco", price: "$16.95", desc: "Blackened Mahi Mahi served on spaghetti sautéed on an open fire with fresh tomatoes, olive oil, garlic, fresh basil and topped with Parmesan cheese." },
    { name: "Baked Mahi Mahi", price: "$16.95", desc: "Mahi Mahi baked with onions, garlic sauce and tomatoes. Served with your choice of broccoli or Spring mix side salad." }
  ]},
  { title: "Kid's Menu", note: "12 and under", items: [
    { name: "Kid's Pizza", price: "$8.95", desc: "With one topping & a drink." },
    { name: "Chicken Tenders", price: "$8.95", desc: "With fries" },
    { name: "Kid's Spaghetti with Half Meatball", price: "$8.95", desc: "" },
    { name: "Chicken Nuggets", price: "$8.95", desc: "With fries" }
  ]},
  { title: "Lunch Specials", note: "Everyday 11 am – 2 pm", items: [
    { name: "Antipasto Salad", price: "$11.95", desc: "Includes breadsticks with cheese." },
    { name: "Pizza Muffins (6)", price: "$11.95", desc: "Any two toppings. $1.00 extra per additional topping. Includes antipasto salad." },
    { name: "Bowl of Soup", price: "$6.25", desc: "" },
    { name: "Lunch Calzone", price: "$11.95", desc: "Any two items in Calzone plus antipasto salad." },
    { name: "Soup & Salad", price: "$11.95", desc: "" },
    { name: "1/2 Sandwich & Soup", price: "$11.95", desc: "" }
  ]},
  { title: "Pazzo Pizza Muffins", note: "12 Large", items: [
    { name: "Havana Pizza Muffins", price: "$16.95", desc: "Ham, sausage, deli crisp pickles, Banana peppers, mustard/mayo sauce and Mozzarella cheese." },
    { name: "Mikey's Famous Pizza Muffins", price: "$16.45", desc: "Ham, ground beef and Mozzarella cheese." },
    { name: "Jonathan's Favorite Buffalo Chicken Pizza Muffins", price: "$16.95", desc: "Chicken, Buffalo sauce and Mozzarella cheese." },
    { name: "Ravioli Pizza Muffins", price: "$16.95", desc: "Ravioli, Marinara sauce, fresh spinach and Mozzarella cheese." },
    { name: "Big Mike's Pizza Muffins", price: "$16.95", desc: "Chicken, spinach, garlic, Ricotta cheese and Mozzarella cheese with our Famous White Sauce." },
    { name: "Sal's Chicken Ranch Pizza Muffins", price: "$16.95", desc: "Ranch dressing, chicken, bacon & Mozzarella cheese." }
  ]},
  { title: "Famous Wings", note: "35 Years of Perfection! Our Signature Sauce, Hot Garlic Parmigiana, Mild or Medium, Honey BBQ, Blackened, Buffalo, Sweet Teriyaki or Slappin' Honey Garlic.", items: [
    { name: "Boneless Wings (10)", price: "$13.95", desc: "" },
    { name: "Boneless Wings (16)", price: "$15.95", desc: "" },
    { name: "Boneless Wings (24)", price: "$25.95", desc: "" },
    { name: "Traditional Jumbo Wings (10)", price: "$14.95", desc: "" },
    { name: "Traditional Jumbo Wings (16)", price: "$23.95", desc: "" },
    { name: "Traditional Jumbo Wings (24)", price: "$33.95", desc: "" }
  ]},
  { title: "Tyler's Famous Breadsticks", items: [
    { name: "Plain (6)", price: "$4.95", desc: "" },
    { name: "Breadsticks w/ Mozzarella (6)", price: "$7.95", desc: "" },
    { name: "Sweet BBQ Chicken Breadsticks", price: "$9.45", desc: "Banana peppers, onions & Mozzarella cheese." },
    { name: "Garlic Baguettes (6)", price: "$5.95", desc: "" },
    { name: "Garlic Baguettes (12)", price: "$9.95", desc: "" },
    { name: "Pazzo \"Crazy\" Bread", price: "$7.55", desc: "Brushed w/ fresh garlic sauce." },
    { name: "Fiore del Amore", price: "$10.65", desc: "Stuffed with rich Ricotta, butter garlic sauce and Mozzarella cheese. Served with Marinara sauce topped with fresh basil." }
  ]},
  { title: "More Appetizers", items: [
    { name: "Madi's Mini Pepperoni Bites", price: "$9.95", desc: "Pepperoni and Mozzarella cheese baked in a baguette!" },
    { name: "Madi's Mini Spinach Bites", price: "$9.95", desc: "Spinach & Mozzarella cheese baked in a baguette with toasted garlic!" },
    { name: "Mikayla's Pizza Fries", price: "$8.95", desc: "Pizza sauce, Mozzarella cheese & baked." },
    { name: "French Fries", price: "$6.55", desc: "With bacon & melted cheese $9.55." },
    { name: "Onion Rings", price: "$8.65", desc: "" },
    { name: "Mozzarella Sticks (6)", price: "$6.95", desc: "" },
    { name: "Jalape\u00f1o Poppers", price: "$6.95", desc: "" },
    { name: "Chicken Tenders", price: "$12.95", desc: "" },
    { name: "Mikey's Famous Pizza Muffins (6)", price: "$8.95", desc: "Ham & ground beef." }
  ]},
  { title: "Flatbread Pizzas", items: [
    { name: "BBQ Chicken", price: "$10.45", desc: "Mozzarella & onions." },
    { name: "Chicken Artichoke", price: "$10.95", desc: "Tomatoes, onions, Blue cheese crumbles and Mozzarella cheese with our Famous White Sauce." },
    { name: "Margherita", price: "$9.65", desc: "Fresh basil, tomato, our Famous White Sauce and Mozzarella cheese." }
  ]},
  { title: "Specialty Coffees", items: [
    { name: "Espresso", price: "$2.95 / $3.65", desc: "Single / Double." },
    { name: "Cappuccino", price: "$4.55 / $4.95", desc: "In-House / To Go 12oz." },
    { name: "Caf\u00e9 Con Leche", price: "$4.55 / $4.95", desc: "In-House / To Go 12oz." }
  ]},
  { title: "Desserts", items: [
    { name: "Cannoli", price: "$3.75", desc: "Regular or Chocolate." },
    { name: "Zeppole", price: "$6.95", desc: "Sugar-coated fried dough." },
    { name: "Tiramisu", price: "$6.95", desc: "" },
    { name: "Assorted Desserts", price: "$6.95", desc: "In front case." }
  ]},
  { title: "Full Bar", note: "Happy Hour: Mon\u2013Fri 4pm\u20139pm \u00b7 Sat & Sun Happy Hour ALL DAY! Domestic drafts $2.95 \u2013 16 oz.", items: [
    { name: "Bud Light on Tap", price: "$3.25 / $11.85", desc: "Glass / Pitcher." },
    { name: "Michelob Ultra", price: "$3.75 / $12.45", desc: "Glass / Pitcher." },
    { name: "Miller Lite", price: "$3.55 / $11.85", desc: "Glass / Pitcher." },
    { name: "Yuengling", price: "$3.65 / $11.85", desc: "Glass / Pitcher." },
    { name: "Domestic by the Bottle", price: "$4.25", desc: "" },
    { name: "Import by the Bottle", price: "$4.75", desc: "Imported beer by the pitcher is unavailable." },
    { name: "Wine \u2014 by the Glass or Bottle", price: "", desc: "Sparkling Pinot Grigio, Sauvignon Blanc, Chardonnay or alternate whites. Pinot Noir, Merlot, Cabernet Sauvignon and Italian reds or blends." },
    { name: "Soda", price: "$3.55", desc: "Free refills." },
    { name: "Iced Tea", price: "$3.55", desc: "Free refills." }
  ]}
];
