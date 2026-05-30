export type ProductItem = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  currency: string;
};

export type ShopCategory = {
  title: string;
  items: ProductItem[];
};

const SHOP_DATA: ShopCategory[] = [
  {
    title: 'Chocolates',
    items: [
      {
        id: 1,
        name: 'Dark Chocolate Bar',
        description:
          'Rich artisan dark chocolate crafted from premium cocoa beans sourced from tropical farms. Deep roasted cocoa notes blend beautifully with a smooth velvety finish.',
        imageUrl:
          'https://images.unsplash.com/photo-1587271644048-2fbb187de8d8?q=80&w=687&auto=format&fit=crop',
        price: 15,
        currency: '$',
      },
      {
        id: 2,
        name: 'Milk Chocolate Truffles',
        description:
          'Creamy milk chocolate truffles filled with silky ganache and lightly dusted with cocoa powder. Perfect for gifting or enjoying with evening coffee.',
        imageUrl:
          'https://images.unsplash.com/photo-1545015451-f05567aa6bcc?q=80&w=687&auto=format&fit=crop',
        price: 22,
        currency: '$',
      },
      {
        id: 3,
        name: 'Hazelnut Chocolate',
        description:
          'Smooth chocolate blended with crunchy roasted hazelnuts for a luxurious nutty flavor. Every bite offers the perfect balance of sweetness and texture.',
        imageUrl:
          'https://images.unsplash.com/photo-1571091799989-e88304d6aed3?q=80&w=687&auto=format&fit=crop',
        price: 18,
        currency: '$',
      },
      {
        id: 4,
        name: 'White Chocolate Bites',
        description:
          'Delicate white chocolate bites featuring buttery sweetness and creamy texture. Crafted to melt softly with every indulgent bite.',
        imageUrl:
          'https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=736&auto=format&fit=crop',
        price: 16,
        currency: '$',
      },
      {
        id: 5,
        name: 'Chocolate Gift Box',
        description:
          'A premium assorted chocolate collection curated with handcrafted flavors and elegant presentation. Ideal for celebrations and festive gifting.',
        imageUrl:
          'https://images.unsplash.com/photo-1573013792262-761a3e17fb39?q=80&w=784&auto=format&fit=crop',
        price: 35,
        currency: '$',
      },
      {
        id: 6,
        name: 'Caramel Chocolate Squares',
        description:
          'Soft caramel-filled chocolate squares layered with rich cocoa and buttery caramel goodness. A smooth and satisfying dessert experience.',
        imageUrl:
          'https://images.unsplash.com/photo-1695568180969-19fc8ed20aff?q=80&w=687&auto=format&fit=crop',
        price: 20,
        currency: '$',
      },
    ],
  },

  {
    title: 'Coffee',
    items: [
      {
        id: 7,
        name: 'Espresso Roast',
        description:
          'Bold espresso roast crafted for strong coffee lovers with intense aroma and deep cocoa undertones. Delivers a smooth lingering finish in every cup.',
        imageUrl:
          'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1028&auto=format&fit=crop',
        price: 25,
        currency: '$',
      },
      {
        id: 8,
        name: 'Cold Brew Blend',
        description:
          'Specially roasted blend designed for refreshing cold brew coffee with naturally sweet flavor notes. Smooth texture with low acidity.',
        imageUrl:
          'https://images.unsplash.com/photo-1565990436705-4bc429d16511?q=80&w=627&auto=format&fit=crop',
        price: 28,
        currency: '$',
      },
      {
        id: 9,
        name: 'Vanilla Latte Mix',
        description:
          'Creamy vanilla latte mix combining premium coffee with sweet vanilla bean essence. Perfect for cozy mornings and relaxing evenings.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1723759448747-1d174225e61f?q=80&w=1170&auto=format&fit=crop',
        price: 30,
        currency: '$',
      },
      {
        id: 10,
        name: 'Caramel Cappuccino',
        description:
          'Smooth cappuccino blend infused with buttery caramel sweetness and balanced espresso richness. Crafted for café-style indulgence at home.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?q=80&w=687&auto=format&fit=crop',
        price: 27,
        currency: '$',
      },
      {
        id: 11,
        name: 'Mocha Premium Beans',
        description:
          'Premium mocha coffee beans roasted carefully to highlight chocolatey aroma and deep coffee flavor. Ideal for rich espresso drinks.',
        imageUrl:
          'https://images.unsplash.com/photo-1523247452367-d68f888d4b80?q=80&w=687&auto=format&fit=crop',
        price: 34,
        currency: '$',
      },
      {
        id: 12,
        name: 'Arabica Gold Blend',
        description:
          'Luxury Arabica blend offering floral aroma, smooth acidity, and elegant depth of flavor. Carefully sourced from premium plantations.',
        imageUrl:
          'https://images.unsplash.com/photo-1661685249316-a06e692e1cb2?q=80&w=687&auto=format&fit=crop',
        price: 40,
        currency: '$',
      },
    ],
  },

  {
    title: 'Cookies',
    items: [
      {
        id: 13,
        name: 'Chocolate Chip Cookies',
        description:
          'Classic chocolate chip cookies baked golden brown with gooey chocolate chunks throughout. Crisp edges and soft chewy centers.',
        imageUrl:
          'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=765&auto=format&fit=crop',
        price: 12,
        currency: '$',
      },
      {
        id: 14,
        name: 'Butter Cookies',
        description:
          'Traditional butter cookies with delicate crisp texture and rich buttery flavor. Perfect alongside tea, coffee, or desserts.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1699372280928-e43192b296b4?q=80&w=1170&auto=format&fit=crop',
        price: 10,
        currency: '$',
      },
      {
        id: 15,
        name: 'Oatmeal Raisin Cookies',
        description:
          'Wholesome oatmeal cookies packed with raisins, cinnamon warmth, and homemade flavor. Soft texture with balanced sweetness.',
        imageUrl:
          'https://images.unsplash.com/photo-1645258751218-1a1ddb1630dc?q=80&w=1170&auto=format&fit=crop',
        price: 14,
        currency: '$',
      },
      {
        id: 16,
        name: 'Double Choco Cookies',
        description:
          'Decadent double chocolate cookies loaded with dark cocoa and melty chocolate centers. Rich flavor designed for chocolate lovers.',
        imageUrl:
          'https://images.unsplash.com/photo-1619149651177-b09092806f1a?q=80&w=687&auto=format&fit=crop',
        price: 16,
        currency: '$',
      },
      {
        id: 17,
        name: 'Almond Crunch Cookies',
        description:
          'Crunchy almond cookies baked with roasted nuts and buttery dough for a delightful nutty bite. Crisp texture with subtle sweetness.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1677661620506-be418c437463?q=80&w=687&auto=format&fit=crop',
        price: 18,
        currency: '$',
      },
      {
        id: 18,
        name: 'Coffee Cookies',
        description:
          'Coffee-infused cookies crafted with espresso flavor and rich roasted aroma. Perfect for pairing with warm cappuccino or latte.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1675435646468-5c3b3e550331?q=80&w=1170&auto=format&fit=crop',
        price: 15,
        currency: '$',
      },
    ],
  },

  {
    title: 'Honey',
    items: [
      {
        id: 19,
        name: 'Organic Wild Honey',
        description:
          'Pure organic wild honey harvested naturally from floral-rich regions. Smooth golden texture with naturally sweet earthy flavor.',
        imageUrl:
          'https://images.unsplash.com/photo-1679941279735-b3b35e8bc476?q=80&w=687&auto=format&fit=crop',
        price: 20,
        currency: '$',
      },
      {
        id: 20,
        name: 'Forest Honey',
        description:
          'Deep forest honey collected from woodland blossoms with earthy aroma and rich flavor profile. Thick texture with natural sweetness.',
        imageUrl:
          'https://images.unsplash.com/photo-1695638696498-706b5082eeb8?q=80&w=736&auto=format&fit=crop',
        price: 24,
        currency: '$',
      },
      {
        id: 21,
        name: 'Lavender Honey',
        description:
          'Elegant lavender honey infused with floral fragrance and smooth sweetness. Delicate flavor perfect for tea and desserts.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1693156020256-bfd68030ef7b?q=80&w=687&auto=format&fit=crop',
        price: 26,
        currency: '$',
      },
      {
        id: 22,
        name: 'Raw Natural Honey',
        description:
          'Unprocessed raw honey preserving natural nutrients, enzymes, and authentic flavor. Thick golden consistency with floral notes.',
        imageUrl:
          'https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=687&auto=format&fit=crop',
        price: 22,
        currency: '$',
      },
      {
        id: 23,
        name: 'Acacia Honey',
        description:
          'Light acacia honey known for its crystal-clear appearance and subtle floral sweetness. Smooth texture ideal for everyday use.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1726704133644-bd521a727cf8?q=80&w=817&auto=format&fit=crop',
        price: 28,
        currency: '$',
      },
      {
        id: 24,
        name: 'Honey Gift Jar',
        description:
          'Beautiful artisan honey jar carefully packaged for gifting and festive occasions. Combines elegance with naturally rich flavor.',
        imageUrl:
          'https://images.unsplash.com/photo-1621937879394-3209a3a116db?q=80&w=880&auto=format&fit=crop',
        price: 32,
        currency: '$',
      },
    ],
  },

  {
    title: 'Bread',
    items: [
      {
        id: 25,
        name: 'Sourdough Bread',
        description:
          'Traditional sourdough loaf featuring crisp crust, airy texture, and signature tangy artisan flavor. Freshly baked every morning.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1664640733898-d5c3f71f44e1?q=80&w=687&auto=format&fit=crop',
        price: 18,
        currency: '$',
      },
      {
        id: 26,
        name: 'Whole Wheat Bread',
        description:
          'Fresh whole wheat bread baked daily using wholesome grains and natural ingredients. Soft texture with rich earthy flavor.',
        imageUrl:
          'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1172&auto=format&fit=crop',
        price: 12,
        currency: '$',
      },
      {
        id: 27,
        name: 'Brioche Loaf',
        description:
          'Soft buttery brioche loaf crafted with rich dough and delicate golden crumb. Perfect for breakfast toast and sandwiches.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1701209595879-9f6f4f418c0b?q=80&w=687&auto=format&fit=crop',
        price: 20,
        currency: '$',
      },
      {
        id: 28,
        name: 'Garlic Bread',
        description:
          'Warm garlic bread brushed generously with herb butter and roasted garlic seasoning. Crispy edges with soft flavorful center.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1711752902734-a36167479983?q=80&w=688&auto=format&fit=crop',
        price: 15,
        currency: '$',
      },
      {
        id: 29,
        name: 'Multigrain Bread',
        description:
          'Nutritious multigrain bread packed with healthy seeds, grains, and hearty flavor. Soft inside with textured crust.',
        imageUrl:
          'https://images.unsplash.com/photo-1507638940746-7b17d6b55b8f?q=80&w=716&auto=format&fit=crop',
        price: 17,
        currency: '$',
      },
      {
        id: 30,
        name: 'French Baguette',
        description:
          'Classic French baguette featuring crisp golden crust and light airy interior. Fresh bakery-style flavor perfect for every meal.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1726761768709-32b3dcc03112?q=80&w=686&auto=format&fit=crop',
        price: 14,
        currency: '$',
      },
    ],
  },
];

export default SHOP_DATA;