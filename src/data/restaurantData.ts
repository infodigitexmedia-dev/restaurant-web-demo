import heroPastaImg from '../assets/images/hero_gourmet_pasta_1794573262727.jpg';
import burgerImg from '../assets/images/food_gourmet_burger_1794573262672.jpg';
import pizzaImg from '../assets/images/food_artisan_pizza_1794573264037.jpg';
import pastaImg from '../assets/images/food_creamy_pasta_1794573263940.jpg';
import dessertImg from '../assets/images/food_chocolate_dessert_1794573264092.jpg';
import cappuccinoImg from '../assets/images/food_premium_cappuccino_1794573264682.jpg';
import bruschettaImg from '../assets/images/food_starters_bruschetta_1794573264935.jpg';
import salmonImg from '../assets/images/food_main_salmon_1794573265782.jpg';
import interiorImg from '../assets/images/restaurant_interior_dining_1794573265986.jpg';

import { DemoOffer, DemoReview, MenuItem } from '../types';

export const IMAGES = {
  heroPasta: heroPastaImg,
  burger: burgerImg,
  pizza: pizzaImg,
  pasta: pastaImg,
  dessert: dessertImg,
  cappuccino: cappuccinoImg,
  bruschetta: bruschettaImg,
  salmon: salmonImg,
  interior: interiorImg,
};

/**
 * Editable placeholders — replace these values with the restaurant's live
 * contact details and community invite links when deploying for a client.
 */
export const RESTAURANT_CONFIG = {
  brandName: 'THE URBAN TABLE',
  eyebrow: 'CAFÉ · BISTRO · DINING',
  tagline: 'Great Food, Better Experiences.',
  contact: {
    address: '248 Mercer Street, Culinary District (Editable Placeholder Address)',
    phone: '+1 (555) 234-8910 (Editable Placeholder Phone)',
    email: 'hello@theurbantable-demo.example',
    mapCoordinatesLabel: '40.7282° N, 73.9942° W (Replace with Restaurant Location)',
    hours: [
      { days: 'Monday – Thursday', time: '11:30 AM – 10:30 PM' },
      { days: 'Friday – Saturday', time: '11:30 AM – 11:30 PM' },
      { days: 'Sunday Brunch & Dinner', time: '10:00 AM – 10:00 PM' },
    ],
  },
  links: {
    whatsappCommunity: 'https://chat.whatsapp.com/REPLACE_WITH_WHATSAPP_COMMUNITY_INVITE',
    instagramProfile: 'https://instagram.com/REPLACE_WITH_RESTAURANT_INSTAGRAM',
    googleReviews: 'https://g.page/r/REPLACE_WITH_GOOGLE_REVIEWS_LINK',
    googleMaps: 'https://maps.google.com/?q=REPLACE_WITH_RESTAURANT_ADDRESS',
  },
};

export const HOME_PREVIEW_CARDS: {
  id: string;
  title: string;
  category: 'Burgers' | 'Pizza' | 'Pasta' | 'Desserts' | 'Coffee';
  image: string;
  demoPrice: string;
}[] = [
  {
    id: 'preview-burger',
    title: 'Artisan Brioche Burger',
    category: 'Burgers',
    image: burgerImg,
    demoPrice: '$19',
  },
  {
    id: 'preview-pizza',
    title: 'Wood-Fired Margherita',
    category: 'Pizza',
    image: pizzaImg,
    demoPrice: '$21',
  },
  {
    id: 'preview-pasta',
    title: 'Creamy Truffle Tagliatelle',
    category: 'Pasta',
    image: pastaImg,
    demoPrice: '$23',
  },
  {
    id: 'preview-dessert',
    title: 'Dark Chocolate Ganache Cake',
    category: 'Desserts',
    image: dessertImg,
    demoPrice: '$13',
  },
  {
    id: 'preview-coffee',
    title: 'Single-Origin Cappuccino',
    category: 'Coffee',
    image: cappuccinoImg,
    demoPrice: '$6',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 'starter-burrata-bruschetta',
    name: 'Heirloom Tomato & Burrata Bruschetta',
    category: 'Starters',
    description:
      'Charred country sourdough layered with creamy pugliese burrata, roasted heirloom cherry tomatoes, and cold-pressed basil oil.',
    demoPrice: '$15',
    dietaryType: 'Vegetarian',
    allergens: ['Dairy', 'Gluten'],
    dietaryNote: 'Vegetarian · Nut-free',
    image: bruschettaImg,
  },
  {
    id: 'starter-truffle-arancini',
    name: 'Crisp Saffron & Fontina Arancini',
    category: 'Starters',
    description:
      'Golden risotto spheres filled with aged fontina cheese, served over slow-simmered San Marzano marinara and herb oil.',
    demoPrice: '$14',
    dietaryType: 'Vegetarian',
    allergens: ['Dairy', 'Gluten', 'Egg'],
    dietaryNote: 'Vegetarian · Prepared fresh to order',
    image: pastaImg,
  },

  // Burgers
  {
    id: 'burger-urban-classic',
    name: 'The Urban Signature Brioche Burger',
    category: 'Burgers',
    description:
      'Double-seared prime chuck patty, 18-month aged sharp cheddar, balsamic caramelized onions, vine tomato, and house herb aioli.',
    demoPrice: '$19',
    dietaryType: 'Non-Vegetarian',
    allergens: ['Gluten', 'Dairy', 'Egg'],
    dietaryNote: 'Gluten-free bun option available upon request',
    image: burgerImg,
    featuredOnHome: true,
  },
  {
    id: 'burger-portobello-melt',
    name: 'Char-Grilled Portobello & Gruyère Melt',
    category: 'Burgers',
    description:
      'Herb-marinated roasted portobello mushroom cap, melted cave-aged gruyère, baby arugula, and truffle mustard glaze on toasted brioche.',
    demoPrice: '$17',
    dietaryType: 'Vegetarian',
    allergens: ['Gluten', 'Dairy'],
    dietaryNote: 'Vegetarian · Can be prepared vegan without cheese',
    image: burgerImg,
  },

  // Pizza
  {
    id: 'pizza-margherita-napoli',
    name: 'Wood-Fired Margherita Classica',
    category: 'Pizza',
    description:
      '48-hour fermented sourdough crust blistered in our stone oven with crushed San Marzano tomatoes, fior di latte mozzarella, and sweet basil.',
    demoPrice: '$21',
    dietaryType: 'Vegetarian',
    allergens: ['Gluten', 'Dairy'],
    dietaryNote: 'Vegetarian · Stone-baked sourdough',
    image: pizzaImg,
    featuredOnHome: true,
  },
  {
    id: 'pizza-hot-honey-diavola',
    name: 'Artisan Calabrian Diavola & Hot Honey',
    category: 'Pizza',
    description:
      'Crisp cured soppressata, smoked provolone, roasted red chilies, and wildflower chili honey over rich tomato passata.',
    demoPrice: '$24',
    dietaryType: 'Non-Vegetarian',
    allergens: ['Gluten', 'Dairy'],
    dietaryNote: 'Mildly spiced · Sourdough crust',
    image: pizzaImg,
  },

  // Pasta
  {
    id: 'pasta-creamy-tagliatelle',
    name: 'Creamy Parmigiano & Black Pepper Tagliatelle',
    category: 'Pasta',
    description:
      'Silky house-extruded egg ribbons tossed in velvety 24-month Parmigiano-Reggiano cream, cracked Tellicherry pepper, and fresh basil.',
    demoPrice: '$23',
    dietaryType: 'Vegetarian',
    allergens: ['Gluten', 'Dairy', 'Egg'],
    dietaryNote: 'Vegetarian · House-made pasta',
    image: pastaImg,
    featuredOnHome: true,
  },
  {
    id: 'pasta-herb-fettuccine',
    name: 'Slow-Braised Garlic Herb Fettuccine',
    category: 'Pasta',
    description:
      'Hand-cut artisanal fettuccine finished with roasted garlic confit, toasted pine nuts, shaved pecorino, and garden herbs.',
    demoPrice: '$22',
    dietaryType: 'Vegetarian',
    allergens: ['Gluten', 'Dairy', 'Tree Nuts', 'Egg'],
    dietaryNote: 'Vegetarian · Contains pine nuts',
    image: heroPastaImg,
  },

  // Main Course
  {
    id: 'main-seared-salmon',
    name: 'Crispy-Skin Atlantic Salmon & Beurre Blanc',
    category: 'Main Course',
    description:
      'Pan-roasted Atlantic salmon served with charred spring asparagus, rosemary baby potatoes, and chive lemon beurre blanc.',
    demoPrice: '$29',
    dietaryType: 'Non-Vegetarian',
    allergens: ['Fish', 'Dairy'],
    dietaryNote: 'Naturally gluten-free · Rich in omega-3',
    image: salmonImg,
  },
  {
    id: 'main-roasted-cauliflower',
    name: 'Herb-Crusted Cauliflower & Wild Mushroom Jus',
    category: 'Main Course',
    description:
      'Cast-iron roasted cauliflower steak over velvety parsnip purée, sautéed wild forest mushrooms, and aged balsamic reduction.',
    demoPrice: '$24',
    dietaryType: 'Vegetarian',
    allergens: ['None'],
    dietaryNote: '100% Plant-based & Gluten-free',
    image: bruschettaImg,
  },

  // Coffee
  {
    id: 'coffee-artisan-cappuccino',
    name: 'Single-Origin Velvet Cappuccino',
    category: 'Coffee',
    description:
      'Double ristretto of ethically sourced Ethiopian & Colombian roast crowned with silky microfoam rosetta latte art.',
    demoPrice: '$6',
    dietaryType: 'Vegetarian',
    allergens: ['Dairy (Oat/Almond available)'],
    dietaryNote: 'Vegetarian · Oat or almond milk available',
    image: cappuccinoImg,
    featuredOnHome: true,
  },
  {
    id: 'coffee-espresso-cortado',
    name: 'Spiced Brown Sugar Cortado',
    category: 'Coffee',
    description:
      'Equal parts rich double espresso and steamed whole milk infused with toasted Madagascar vanilla and subtle cinnamon.',
    demoPrice: '$5.50',
    dietaryType: 'Vegetarian',
    allergens: ['Dairy (Oat/Almond available)'],
    dietaryNote: 'Vegetarian · Served in warm stoneware',
    image: cappuccinoImg,
  },

  // Beverages
  {
    id: 'beverage-botanical-spritz',
    name: 'Blood Orange & Rosemary Bistro Spritz',
    category: 'Beverages',
    description:
      'Fresh-pressed Sicilian blood orange juice layered with sparkling mineral water, garden rosemary sprig, and citrus bitters (zero-proof).',
    demoPrice: '$8',
    dietaryType: 'Vegetarian',
    allergens: ['None'],
    dietaryNote: 'Zero-proof botanical · Vegan & Gluten-free',
    image: bruschettaImg,
  },
  {
    id: 'beverage-iced-matcha',
    name: 'Ceremonial Iced Vanilla Matcha',
    category: 'Beverages',
    description:
      'Stone-ground Uji matcha whisked to order over crystal ice with lightly sweetened oat milk.',
    demoPrice: '$7.50',
    dietaryType: 'Vegetarian',
    allergens: ['None'],
    dietaryNote: '100% Vegan · Dairy-free',
    image: cappuccinoImg,
  },

  // Desserts
  {
    id: 'dessert-chocolate-ganache',
    name: 'Layered Dark Chocolate Ganache Torte',
    category: 'Desserts',
    description:
      'Rich 70% single-estate dark chocolate sponge layered with silky cocoa ganache, warm chocolate glaze, and fresh red raspberries.',
    demoPrice: '$13',
    dietaryType: 'Vegetarian',
    allergens: ['Gluten', 'Dairy', 'Egg'],
    dietaryNote: 'Vegetarian · Signature pastry chef creation',
    image: dessertImg,
    featuredOnHome: true,
  },
  {
    id: 'dessert-espresso-tiramisu',
    name: 'House Espresso Mascarpone Tiramisu',
    category: 'Desserts',
    description:
      'Espresso-soaked savoiardi biscuits layered with whipped Italian mascarpone cream and dusted with Dutch-process cocoa.',
    demoPrice: '$12',
    dietaryType: 'Vegetarian',
    allergens: ['Gluten', 'Dairy', 'Egg'],
    dietaryNote: 'Vegetarian · Contains espresso',
    image: dessertImg,
  },
];

export const DEMO_OFFERS: DemoOffer[] = [
  {
    id: 'offer-welcome',
    title: 'Welcome Treat',
    subtitle: 'First-Visit Hospitality Showcase',
    description:
      'Enjoy a special welcome offer on your first visit—designed to showcase how restaurants greet first-time digital guests with a complimentary starter or signature coffee.',
    availabilityNote: 'Demo Offer · Illustrative welcome hospitality concept',
    ctaLabel: 'Book Your First Visit',
    targetPage: 'book-table',
  },
  {
    id: 'offer-weekend',
    title: 'Weekend Special',
    subtitle: 'Curated Friday–Sunday Dining Experience',
    description:
      'Discover exciting weekend dining offers featuring chef-curated tasting pairings, seasonal brunch highlights, and warm evening table atmospheres.',
    availabilityNote: 'Demo Offer · Illustrative weekend seasonal showcase',
    ctaLabel: 'Preview Full Menu',
    targetPage: 'menu',
  },
  {
    id: 'offer-stamps',
    title: 'Surprise Rewards',
    subtitle: '3-Visit Loyalty Milestone',
    description:
      'Collect 3 loyalty stamps and unlock a surprise gift. Demonstrates how repeat guest engagement turns casual diners into loyal regulars.',
    availabilityNote: 'Demo Offer · Interactive loyalty stamp preview',
    ctaLabel: 'Try Loyalty Demo',
    targetPage: 'vip-club',
  },
  {
    id: 'offer-vip',
    title: 'VIP Exclusive',
    subtitle: 'Community Member Privileges',
    description:
      'Special deals reserved for VIP Club members, including early access to seasonal menu launches, chef’s table announcements, and celebration treats.',
    availabilityNote: 'Demo Offer · Requires VIP Community showcase',
    ctaLabel: 'Explore VIP Club',
    targetPage: 'vip-club',
  },
];

export const INITIAL_DEMO_REVIEWS: DemoReview[] = [
  {
    id: 'rev-1',
    author: 'Elena Vance',
    visitContext: 'Evening Dinner · Table for 2',
    rating: 5,
    dateLabel: 'Illustrative Demo Review',
    comment:
      'The creamy truffle tagliatelle arrived steaming at the table and the candlelit ambiance felt effortless. Being able to browse allergen notes right from our table made the evening so relaxing.',
  },
  {
    id: 'rev-2',
    author: 'Marcus Sterling',
    visitContext: 'Weekend Brunch · Group of 4',
    rating: 5,
    dateLabel: 'Illustrative Demo Review',
    comment:
      'From the blistered sourdough margherita to the single-origin cappuccino, every detail felt thoughtfully crafted. Reserving our corner booth online took less than thirty seconds.',
  },
  {
    id: 'rev-3',
    author: 'Priya Nair',
    visitContext: 'Date Night · VIP Community Member',
    rating: 5,
    dateLabel: 'Illustrative Demo Review',
    comment:
      'The dark chocolate ganache torte with fresh raspberries was unforgettable. Our server was attentive without ever hovering, and the VIP Club welcome treat was a lovely touch.',
  },
  {
    id: 'rev-4',
    author: 'Daniel Holloway',
    visitContext: 'Business Lunch',
    rating: 4,
    dateLabel: 'Illustrative Demo Review',
    comment:
      'Warm espresso tones, calm acoustics, and standout crispy-skin salmon. Requesting extra cutlery and the bill digitally kept our lunch right on schedule.',
  },
];
