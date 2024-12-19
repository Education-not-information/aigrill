import Database from "better-sqlite3";

const db = new Database("aiGrill.db");
db.pragma("journal_mode = WAL");

function customerTable() {
  db.exec(`
            CREATE TABLE IF NOT EXISTS customers (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            comment TEXT,
            imgSrc TEXT NOT NULL,
            date TEXT NOT NULL,
            time TEXT NOT NULL,
            people INTEGER NOT NULL,
            uniqueId TEXT NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
}

//customerTable();

function productsTable() {
  db.exec(`
              CREATE TABLE IF NOT EXISTS products (
                  id INTEGER PRIMARY KEY,
                  name TEXT NOT NULL,
                  title TEXT NOT NULL,
                  desc TEXT NOT NULL,
                  srcUrl TEXT NOT NULL,
                  category TEXT NOT NULL,
                  ingredients TEXT NOT NULL,
                  price INTEGER NOT NULL,
                  sold INTEGER NOT NULL
              )
          `);
}

//productsTable();

function insertCollection() {
  const insert = db.prepare(
    "INSERT INTO products (name, title, desc, srcUrl, category, ingredients, price, sold) VALUES (@name, @title, @desc, @srcUrl, @category, @ingredients, @price, @sold)",
  );

  const insertMany = db.transaction((products) => {
    for (const item of products) {
      insert.run(item);
    }
  });

  insertMany([
    {
      name: "Cherry Steak",
      title: "Bold and flavorful",
      desc: "A bold steak with a sweet and smoky twist. Grilled to perfection and topped with a luscious cherry glaze. A tender, perfectly cooked steak elevated by a rich, ruby-red cherry reduction",
      srcUrl: "/cherrySteak.jpg",
      category: "steak",
      ingredients: "Aged beef (100%): salt: black peper",
      price: 45,
      sold: 9853,
    },
    {
      name: "Smoked Steak",
      title: "Grilled and smoked steak",
      desc: "A perfectly cooked steak, seared to a golden brown crust and juicy on the inside. The rich, savory flavors of the meat are enhanced by a simple seasoning of salt and pepper. Each bite is a tender, flavorful experience",
      srcUrl: "/steakjuice.jpg",
      category: "steak",
      ingredients: "Aged beef (100%): salt: black peper",
      price: 45,
      sold: 11853,
    },
    {
      name: "Tender Kabab",
      title: "Tender chunks of marinated meat",
      desc: "A classic Turkish dish featuring succulent pieces of marinated meat, carefully threaded onto skewers and grilled over an open flame. The result is a smoky, flavorful delight that's tender on the inside and crispy on the outside",
      srcUrl: "/kababonfire.jpg",
      category: "kabab",
      ingredients: "Aged beef (100%): salt: black peper",
      price: 45,
      sold: 27853,
    },
    {
      name: "Platter Special",
      title: "Our generous special family platter",
      desc: "A feast for the whole family! Our generous platter is loaded with a variety of your favorite dishes, perfect for sharing. Enjoy a delicious assortment of [list of dishes: steak, suasages, kabab skews, served with rice, salad and bread]",
      srcUrl: "/mix-grill-color.jpg",
      category: "platter",
      ingredients: "Mixed meat (100%): salt: black peper, specail marinate",
      price: 80,
      sold: 6853,
    },
    {
      name: "Grilled sausages",
      title: "Grilled sausages, sizzling with flavor",
      desc: "Succulent sausages, expertly grilled over an open flame until golden brown and crispy. Each bite is a burst of flavor, with a smoky char and a juicy, meaty center.",
      srcUrl: "/grilled-sausage.jpg",
      category: "sausage",
      ingredients: "Meat (90%): fat: (10%), natural flavors",
      price: 25,
      sold: 12853,
    },
    {
      name: "Special Burger",
      title: "Juicy beef patty with chef's specail flavors",
      desc: "The combination of flavors and textures is what makes a special burger so satisfying. The savory beef patty, the gooey melted meat, the crisp vegetables, and the tangy sauces all come together to create a delicious and iconic dish.",
      srcUrl: "/challenger.jpg",
      category: "burger",
      ingredients: "Meat (100%): natural flavors",
      price: 30,
      sold: 25853,
    },
    {
      name: "Limited Burger",
      title: "The patties are sandwiched between a sesame seed bun",
      desc: "Next level with double the beefy goodness. It features two juicy beef patties, each topped with a slice of melted cheese, typically American cheese, cheddar, or Swiss.  1  The patties are sandwiched between a sesame seed bun, and often accompanied by classic toppings like lettuce, tomato, onion, pickles, ketchup, and mustard. 2 ",
      srcUrl: "/Dreamer.jpg",
      category: "burger",
      ingredients: "Meat (100%): natural flavors",
      price: 25,
      sold: 11853,
    },

    {
      name: "Double Burger",
      title:
        "It features two juicy beef patties, each topped with a slice of melted cheese",
      desc: "The double patty adds a satisfying heft and richness to the burger, making it a meal in itself. It's a popular choice for those with hearty appetites or a craving for a truly indulgent burger experience",
      srcUrl: "/doubleBurger.jpg",
      category: "burger",
      ingredients: "Meat (100%): natural flavors",
      price: 25,
      sold: 10853,
    },
    {
      name: "Cheese Burger",
      title:
        "Classic food, consisting of a juicy beef patty with melted cheese",
      desc: "A cheeseburger is a classic fast food staple, consisting of a juicy beef patty topped with a slice of melted cheese, typically American cheese, cheddar, or Swiss. 1 It's usually served on a sesame seed bun with a variety of toppings like lettuce, tomato, onion, pickles, ketchup, and mustard.The combination of flavors and textures is what makes a cheeseburger so satisfying. The savory beef patty, the gooey melted cheese, the crisp vegetables, and the tangy sauces all come together to create a delicious and iconic dish.",
      srcUrl: "/cheeseburger.jpg",
      category: "burger",
      ingredients: "Meat (100%): natural flavors",
      price: 20,
      sold: 5853,
    },
    {
      name: "Grilled steak",
      title: "The most popular cuts of beef for grilling are ribeye",
      desc: "A grilled beef steak is a classic dish that is enjoyed by people all over the world. It is a versatile dish that can be cooked to any degree of doneness, from rare to well done. The most popular cuts of beef for grilling are ribeye, New York strip, and filet mignon.",
      srcUrl: "/beefSteak.jpg",
      category: "steak",
      ingredients: "Aged beef (100%): natural flavors",
      price: 50,
      sold: 10153,
    },
    {
      name: "Tender steak",
      title: "Texture of the tender steak with beautiful golden brown color",
      desc: "Tender steak should have a beautiful golden brown color. It should also have grill marks on the surface of the steak. The texture of a tender steak is tender and juicy. It should be cooked to the desired degree of doneness",
      srcUrl: "/fillet-of-beef.jpg",
      category: "steak",
      ingredients: "Aged beef (100%): natural flavors",
      price: 50,
      sold: 19153,
    },
    {
      name: "Perfect steak",
      title: "Unique blend of savory and flora",
      desc: "A steak marinated in rose water and then grilled or pan-seared to perfection. The rose water adds a delicate floral flavor to the meat, while the grilling process creates a crispy exterior and a juicy interior. This dish is often served with a side of roasted vegetables or a light salad",
      srcUrl: "/jucieSteak.jpg",
      category: "steak",
      ingredients: "Aged beef (100%): natural flavors",
      price: 50,
      sold: 69153,
    },
    {
      name: "Kabab Skews",
      title: " It is made by marinating chunks of meat",
      desc: " Kabab on Skews is a popular dish in many parts of the world. It is made by marinating chunks of meat, such as lamb, beef, or chicken, in a flavorful blend of spices and then grilling them on skewers over an open flame. The result is a juicy and tender kebab with a smoky flavor.",
      srcUrl: "/shish-kebab.jpg",
      category: "kabab",
      ingredients: "Meat (100%): salt: black peper",
      price: 55,
      sold: 17858,
    },
    {
      name: "Shish Kabab",
      title: "Shish kebab with a smoky flavor.",
      desc: "Kabab is a popular dish in many parts of the world, especially in the Middle East, South Asia, and Southeast Asia. It is made by marinating chunks of meat, such as lamb, beef, chicken",
      srcUrl: "/shishKabab.jpg",
      category: "kabab",
      ingredients: "Meat (100%): salt: black peper",
      price: 45,
      sold: 53858,
    },
    {
      name: "Mixed grill",
      title: "A mix grill is a delicious and satisfying meal.",
      desc: "Grilled beef steaks, such as ribeye, sirloin, or fillet mignon, are a popular choice for mix grills. They are typically cooked to medium-rare or medium-well. A mix grill is a delicious and satisfying meal that typically includes a variety of grilled meats.",
      srcUrl: "/mix-grill.jpg",
      category: "platter",
      ingredients: "Mixed meat (100%): salt: black peper",
      price: 75,
      sold: 10058,
    },
    {
      name: "Family Platter",
      title: "Typically includes a variety of grilled meats.",
      desc: "Grilled beef steaks, such as ribeye, sirloin, or fillet mignon, are a popular choice for mix grills. They are typically cooked to medium-rare or medium-well. A mix grill is a delicious and satisfying meal that typically includes a variety of grilled meats.",
      srcUrl: "/familyPlatter.jpg",
      category: "platter",
      ingredients: "Mixed meat (100%): salt: black peper",
      price: 95,
      sold: 25058,
    },
    {
      name: "Red sausages",
      title: "Classic comfort food that can be enjoyed by people of all ages",
      desc: "Grilled sausages are a classic comfort food that can be enjoyed by people of all ages. They are typically made from ground beef, or lamb, and are seasoned with a variety of spices, such as salt, pepper, garlic, and herbs.",
      srcUrl: "/grillRedSuasage.jpg",
      category: "sausage",
      ingredients: "Meat (100%): salt: black peper",
      price: 30,
      sold: 15058,
    },
    {
      name: "Smoky sausages",
      title: "The sausages are cooked over an open flame.",
      desc: "A classic and delicious way to cook sausages, the smoky flavor of the grill adds a unique twist to the traditional taste. The sausages are cooked over an open flame, allowing the meat to absorb the smoky flavor of the wood or charcoal. The result is a juicy and flavorful sausage that is perfect for any occasion.",
      srcUrl: "/smokySausages.jpg",
      category: "sausage",
      ingredients: "Meat (100%): salt: black peper",
      price: 30,
      sold: 85058,
    },
  ]);
}

//insertCollection();

function deleteAll() {
  db.exec(`DELETE FROM products`);
}

//deleteAll();

export function getCustomers() {
  return db.prepare("SELECT * FROM customers").all();
}

export function getProducts() {
  return db.prepare("SELECT * FROM products").all();
}

export function deleteItem(post) {
  const stmt = db.prepare("DELETE FROM customers WHERE id = ?");

  return stmt.run(post.id);
}

//deleteItem({ id: "9" });

export function insertBooking(post) {
  const stmt = db.prepare(
    "INSERT INTO customers (name, email, comment, imgSrc, date, time, people, uniqueId) VALUES (?,?,?,?,?,?,?,?)",
  );

  return stmt.run(
    post.name,
    post.email,
    post.comment,
    post.imgSrc,
    post.date,
    post.time,
    post.people,
    post.uniqueId,
  );
}
