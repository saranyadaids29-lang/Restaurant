const foodData = [
  // =====================================================
  // SOUTH INDIAN
  // =====================================================

  {
    id: 1,
    name: "Masala Dosa",
    cuisine: "South Indian",
    category: "South Indian",
    price: 90,
    image:
      "https://i.pinimg.com/736x/01/7c/09/017c097d961cea4422fc194eab0df700.jpg",
    description:
      "Crispy golden dosa filled with delicious spiced potato masala.",
    rating: 4.8
  },

  {
    id: 2,
    name: "Idli Sambar",
    cuisine: "South Indian",
    category: "South Indian",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft steamed idlis served with hot sambar and coconut chutney.",
    rating: 4.7
  },

  {
    id: 3,
    name: "Paneer Dosa",
    cuisine: "South Indian",
    category: "South Indian",
    price: 160,
    image:
      "https://i.pinimg.com/736x/f2/fa/c4/f2fac4255c3153adfd0b32b1561f83b5.jpg",
    description:
      "Crispy dosa stuffed with spicy and creamy paneer filling.",
    rating: 4.6
  },

  {
    id: 4,
    name: "Sambar",
    cuisine: "South Indian",
    category: "South Indian",
    price: 60,
    image:
      "https://i.pinimg.com/736x/ae/48/38/ae483866ddd6d6d37e90c0ba2854fab4.jpg",
    description:
      "Traditional South Indian lentil and vegetable curry with spices.",
    rating: 4.7
  },

  {
    id: 5,
    name: "South Indian Full Meals",
    cuisine: "South Indian",
    category: "South Indian",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1742281258189-3b933879867a?auto=format&fit=crop&w=900&q=80",
    description:
      "Complete South Indian meal served with rice, curries, vegetables and sides.",
    rating: 4.9
  },

  {
    id: 6,
    name: "Parotta",
    cuisine: "South Indian",
    category: "South Indian",
    price: 80,
    image:
      "https://i.pinimg.com/736x/9b/cd/fc/9bcdfc2a2bbcc55e390135877ded841f.jpg",
    description:
      "Flaky and layered South Indian flatbread served with curry.",
    rating: 4.7
  },

  {
    id: 7,
    name: "Medu Vada",
    cuisine: "South Indian",
    category: "South Indian",
    price: 65,
    image:
      "https://i.pinimg.com/736x/58/e3/fe/58e3fec8c136a11e6318ce97a27c60ce.jpg",
    description:
      "Crispy golden lentil fritters served with chutney and sambar.",
    rating: 4.8
  },

  {
    id: 8,
    name: "Ven Pongal",
    cuisine: "South Indian",
    category: "South Indian",
    price: 75,
    image:
      "https://i.pinimg.com/736x/8f/47/cd/8f47cdeda86f544aa7cd2aa8137d3358.jpg",
    description:
      "Comforting South Indian rice and lentil dish seasoned with pepper and spices.",
    rating: 4.7
  },

  // =====================================================
  // NORTH INDIAN
  // =====================================================

  {
    id: 9,
    name: "Butter Chicken",
    cuisine: "North Indian",
    category: "North Indian",
    price: 260,
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80",
    description:
      "Tender chicken cooked in a rich and creamy tomato butter gravy.",
    rating: 4.9
  },

  {
    id: 10,
    name: "Tandoori Chicken",
    cuisine: "North Indian",
    category: "North Indian",
    price: 240,
    image:
      "https://images.unsplash.com/photo-1727280376746-b89107a5b0df?auto=format&fit=crop&w=900&q=80",
    description:
      "Juicy chicken marinated with yogurt and traditional tandoori spices.",
    rating: 4.8
  },

  {
    id: 11,
    name: "Chicken Biryani",
    cuisine: "North Indian",
    category: "North Indian",
    price: 220,
    image:
      "https://i.pinimg.com/736x/94/fd/76/94fd76a0637602b7b5ea59fc5a76e4ad.jpg",
    description:
      "Aromatic basmati rice cooked with tender chicken and fragrant spices.",
    rating: 4.9
  },

  {
    id: 12,
    name: "Paneer Butter Masala",
    cuisine: "North Indian",
    category: "North Indian",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft paneer cubes cooked in a rich creamy tomato-based gravy.",
    rating: 4.8
  },

  {
    id: 13,
    name: "Butter Naan",
    cuisine: "North Indian",
    category: "North Indian",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1559561724-4ea348cd867f?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft tandoor-baked naan brushed with delicious melted butter.",
    rating: 4.7
  },

  {
    id: 14,
    name: "Chole Bhature",
    cuisine: "North Indian",
    category: "North Indian",
    price: 150,
    image:
      "https://i.pinimg.com/736x/71/93/a1/7193a1bfc88a791155ad067eb08b24df.jpg",
    description:
      "Fluffy bhature served with spicy chickpea chole.",
    rating: 4.8
  },

  {
    id: 15,
    name: "Aloo Paratha",
    cuisine: "North Indian",
    category: "North Indian",
    price: 100,
    image:
      "https://i.pinimg.com/1200x/03/aa/b3/03aab37fb7b3ab7e966ecd76ca4d6ab3.jpg",
    description:
      "Indian flatbread stuffed with spicy mashed potato filling.",
    rating: 4.7
  },

  {
    id: 16,
    name: "Rajma Chawal",
    cuisine: "North Indian",
    category: "North Indian",
    price: 140,
    image:
      "https://i.pinimg.com/736x/8d/87/0d/8d870de83030c68bcc839f926d076c7f.jpg",
    description:
      "Comforting kidney bean curry served with steamed rice.",
    rating: 4.7
  },

  // =====================================================
  // CHINESE
  // =====================================================

  {
    id: 17,
    name: "Hakka Noodles",
    cuisine: "Chinese",
    category: "Chinese",
    price: 150,
    image:
      "https://i.pinimg.com/736x/c6/09/37/c60937175a1a3c29a19be9921fab4299.jpg",
    description:
      "Stir-fried noodles tossed with vegetables and flavorful Asian sauces.",
    rating: 4.7
  },

  {
    id: 18,
    name: "Chinese Fried Rice",
    cuisine: "Chinese",
    category: "Chinese",
    price: 140,
    image:
      "https://i.pinimg.com/736x/77/ee/db/77eedb59847d7e883c1f4b4f9e37334c.jpg",
    description:
      "Fragrant fried rice cooked with vegetables and Chinese seasoning.",
    rating: 4.7
  },

  {
    id: 19,
    name: "Veg Manchurian",
    cuisine: "Chinese",
    category: "Chinese",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1577186912275-4f74c57458ef?auto=format&fit=crop&w=900&q=80",
    description:
      "Crispy vegetable balls tossed in a spicy Manchurian sauce.",
    rating: 4.8
  },

  {
    id: 20,
    name: "Spring Rolls",
    cuisine: "Chinese",
    category: "Chinese",
    price: 120,
    image:
      "https://i.pinimg.com/736x/c3/1b/86/c31b8642e3ac87c840f57cd9ee37eddb.jpg",
    description:
      "Crispy golden rolls filled with seasoned vegetables.",
    rating: 4.6
  },

  {
    id: 21,
    name: "Schezwan Noodles",
    cuisine: "Chinese",
    category: "Chinese",
    price: 170,
    image:
      "https://i.pinimg.com/736x/4a/6b/db/4a6bdb60bff487ea6d46349b05ae8733.jpg",
    description:
      "Spicy stir-fried noodles prepared with bold Schezwan sauce.",
    rating: 4.8
  },

  {
    id: 22,
    name: "Chilli Paneer",
    cuisine: "Chinese",
    category: "Chinese",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?auto=format&fit=crop&w=900&q=80",
    description:
      "Crispy paneer tossed with peppers, onions and spicy Chinese sauce.",
    rating: 4.8
  },

  // =====================================================
  // JAPANESE
  // =====================================================

  {
    id: 23,
    name: "Sushi Platter",
    cuisine: "Japanese",
    category: "Japanese",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1560689011-2ceb5b1bfcb7?auto=format&fit=crop&w=900&q=80",
    description:
      "A colorful selection of Japanese-style sushi rolls and pieces.",
    rating: 4.9
  },

  {
    id: 24,
    name: "Japanese Ramen",
    cuisine: "Japanese",
    category: "Japanese",
    price: 280,
    image:
      "https://i.pinimg.com/736x/44/90/93/44909309e2260b3aa353b9a7c208631d.jpg",
    description:
      "Warm ramen noodles served in a flavorful Japanese-style broth.",
    rating: 4.8
  },

  {
    id: 25,
    name: "Tempura",
    cuisine: "Japanese",
    category: "Japanese",
    price: 300,
    image:
      "https://i.pinimg.com/736x/d0/94/ac/d094aca508b35b71b8fc5bbde4dfe5aa.jpg",
    description:
      "Light and crispy Japanese-style battered seafood and vegetables.",
    rating: 4.7
  },

  {
    id: 26,
    name: "Gyoza",
    cuisine: "Japanese",
    category: "Japanese",
    price: 220,
    image:
      "https://i.pinimg.com/1200x/a8/b1/69/a8b16985826449598c595e1d0b1caf8b.jpg",
    description:
      "Japanese-style dumplings served with a flavorful dipping sauce.",
    rating: 4.8
  },

  {
    id: 27,
    name: "Teriyaki Chicken",
    cuisine: "Japanese",
    category: "Japanese",
    price: 320,
    image:
      "https://i.pinimg.com/736x/6a/3d/c4/6a3dc4c03b2c0f5f7760471434390a84.jpg",
    description:
      "Tender chicken glazed with sweet and savory teriyaki sauce.",
    rating: 4.8
  },

  {
    id: 28,
    name: "Sushi & Ramen",
    cuisine: "Japanese",
    category: "Japanese",
    price: 480,
    image:
      "https://i.pinimg.com/736x/19/50/b4/1950b4a2bd56ad033b5027a12ed63940.jpg",
    description:
      "A Japanese combo featuring sushi and delicious ramen.",
    rating: 4.9
  },

  // =====================================================
  // DRINKS
  // =====================================================

  {
    id: 29,
    name: "Mango Lassi",
    cuisine: "Indian Drinks",
    category: "Drinks",
    price: 90,
    image:
      "https://i.pinimg.com/736x/e8/a3/2a/e8a32a665883d2d1afff0639ca387a33.jpg",
    description:
      "Creamy chilled yogurt drink blended with sweet ripe mangoes.",
    rating: 4.9
  },

  {
    id: 30,
    name: "Fresh Lime Soda",
    cuisine: "Refreshing Drinks",
    category: "Drinks",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80",
    description:
      "Refreshing lime drink with a perfect balance of sweet and tangy flavors.",
    rating: 4.6
  },

  {
    id: 31,
    name: "Cold Coffee",
    cuisine: "Cafe Drinks",
    category: "Drinks",
    price: 110,
    image:
      "https://i.pinimg.com/736x/e6/e3/bd/e6e3bd8ec20ced2cf3d2c1791e9f7835.jpg",
    description:
      "Chilled creamy coffee served with ice and a rich coffee flavor.",
    rating: 4.7
  },

  {
    id: 32,
    name: "Mango Juice",
    cuisine: "Fresh Drinks",
    category: "Drinks",
    price: 80,
    image:
      "https://i.pinimg.com/736x/35/69/cd/3569cd542d4880ccebd8400762d591c9.jpg",
    description:
      "Refreshing juice made from sweet and juicy ripe mangoes.",
    rating: 4.7
  },

  {
    id: 33,
    name: "Strawberry Milkshake",
    cuisine: "Milkshakes",
    category: "Drinks",
    price: 140,
    image:
      "https://i.pinimg.com/736x/94/2b/03/942b0316b3cb91cc5c5f2ec0c47a53cb.jpg",
    description:
      "Creamy strawberry milkshake blended with fresh strawberries.",
    rating: 4.8
  },

  {
    id: 34,
    name: "Masala Chai",
    cuisine: "Indian Drinks",
    category: "Drinks",
    price: 50,
    image:
      "https://i.pinimg.com/736x/a3/58/e6/a358e64e72594e21a841ffd8ecf1559e.jpg",
    description:
      "Hot Indian tea brewed with milk, ginger and aromatic spices.",
    rating: 4.8
  },

  // =====================================================
  // SNACKS
  // =====================================================

  {
    id: 35,
    name: "Samosa",
    cuisine: "Indian Snacks",
    category: "Snacks",
    price: 50,
    image:
      "https://i.pinimg.com/1200x/1b/da/ca/1bdaca54b40441bc8a1bccc733e3ca43.jpg",
    description:
      "Crispy pastry filled with spicy potato and peas.",
    rating: 4.8
  },

  {
    id: 36,
    name: "French Fries",
    cuisine: "Fast Food",
    category: "Snacks",
    price: 100,
    image:
      "https://i.pinimg.com/736x/62/07/01/620701147f4cefd9d14fb91657601c31.jpg",
    description:
      "Golden crispy potato fries served hot and fresh.",
    rating: 4.7
  },

  {
    id: 37,
    name: "Paneer Tikka",
    cuisine: "Indian Snacks",
    category: "Snacks",
    price: 190,
    image:
      "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?auto=format&fit=crop&w=900&q=80",
    description:
      "Grilled paneer cubes marinated with Indian spices and vegetables.",
    rating: 4.8
  },

  {
    id: 38,
    name: "Chicken 65",
    cuisine: "Indian Snacks",
    category: "Snacks",
    price: 190,
    image:
      "https://i.pinimg.com/1200x/6b/ee/97/6bee973baaeab4c4da15ef28eaf06241.jpg",
    description:
      "Spicy crispy fried chicken marinated with South Indian spices.",
    rating: 4.8
  },

  {
    id: 39,
    name: "Veg Spring Rolls",
    cuisine: "Chinese Snacks",
    category: "Snacks",
    price: 120,
    image:
      "https://i.pinimg.com/1200x/ed/23/35/ed2335a08f9dd1fcf6d59123eaf984c1.jpg",
    description:
      "Crispy vegetable spring rolls served with spicy dipping sauce.",
    rating: 4.7
  },

  {
    id: 40,
    name: "Onion Pakoda",
    cuisine: "Indian Snacks",
    category: "Snacks",
    price: 70,
    image:
      "https://i.pinimg.com/736x/31/e1/b2/31e1b26ca40d1075a0a941751fe5846c.jpg",
    description:
      "Crispy onion fritters seasoned with spices and gram flour.",
    rating: 4.7
  }
];

export default foodData;