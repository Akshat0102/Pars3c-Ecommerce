export type ProductItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type ShopCategory = {
  title: string;
  items: ProductItem[];
};

const SHOP_DATA: ShopCategory[] = [
  {
    title: 'Chocolate',
    items: [
      {
        id: 1,
        name: 'Dark Chocolate Bar',
        imageUrl: 'https://images.unsplash.com/photo-1587271644048-2fbb187de8d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 15,
      },
      {
        id: 2,
        name: 'Milk Chocolate Truffles',
        imageUrl: 'https://images.unsplash.com/photo-1545015451-f05567aa6bcc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 22,
      },
      {
        id: 3,
        name: 'Hazelnut Chocolate',
        imageUrl: 'https://images.unsplash.com/photo-1571091799989-e88304d6aed3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 18,
      },
      {
        id: 4,
        name: 'White Chocolate Bites',
        imageUrl: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 16,
      },
      {
        id: 5,
        name: 'Chocolate Gift Box',
        imageUrl: 'https://images.unsplash.com/photo-1573013792262-761a3e17fb39?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 35,
      },
      {
        id: 6,
        name: 'Caramel Chocolate Squares',
        imageUrl: 'https://images.unsplash.com/photo-1695568180969-19fc8ed20aff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 20,
      },
    ],
  },

  {
    title: 'Coffee',
    items: [
      {
        id: 7,
        name: 'Espresso Roast',
        imageUrl: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 25,
      },
      {
        id: 8,
        name: 'Cold Brew Blend',
        imageUrl: 'https://images.unsplash.com/photo-1565990436705-4bc429d16511?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 28,
      },
      {
        id: 9,
        name: 'Vanilla Latte Mix',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1723759448747-1d174225e61f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 30,
      },
      {
        id: 10,
        name: 'Caramel Cappuccino',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 27,
      },
      {
        id: 11,
        name: 'Mocha Premium Beans',
        imageUrl: 'https://images.unsplash.com/photo-1523247452367-d68f888d4b80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 34,
      },
      {
        id: 12,
        name: 'Arabica Gold Blend',
        imageUrl: 'https://images.unsplash.com/photo-1661685249316-a06e692e1cb2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 40,
      },
    ],
  },

  {
    title: 'Cookies',
    items: [
      {
        id: 13,
        name: 'Chocolate Chip Cookies',
        imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 12,
      },
      {
        id: 14,
        name: 'Butter Cookies',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1699372280928-e43192b296b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 10,
      },
      {
        id: 15,
        name: 'Oatmeal Raisin Cookies',
        imageUrl: 'https://images.unsplash.com/photo-1645258751218-1a1ddb1630dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 14,
      },
      {
        id: 16,
        name: 'Double Choco Cookies',
        imageUrl: 'https://images.unsplash.com/photo-1619149651177-b09092806f1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 16,
      },
      {
        id: 17,
        name: 'Almond Crunch Cookies',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1677661620506-be418c437463?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 18,
      },
      {
        id: 18,
        name: 'Coffee Cookies',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1675435646468-5c3b3e550331?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 15,
      },
    ],
  },

  {
    title: 'Honey',
    items: [
      {
        id: 19,
        name: 'Organic Wild Honey',
        imageUrl: 'https://images.unsplash.com/photo-1679941279735-b3b35e8bc476?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 20,
      },
      {
        id: 20,
        name: 'Forest Honey',
        imageUrl: 'https://images.unsplash.com/photo-1695638696498-706b5082eeb8?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 24,
      },
      {
        id: 21,
        name: 'Lavender Honey',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1693156020256-bfd68030ef7b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 26,
      },
      {
        id: 22,
        name: 'Raw Natural Honey',
        imageUrl: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 22,
      },
      {
        id: 23,
        name: 'Acacia Honey',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1726704133644-bd521a727cf8?q=80&w=817&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 28,
      },
      {
        id: 24,
        name: 'Honey Gift Jar',
        imageUrl: 'https://images.unsplash.com/photo-1621937879394-3209a3a116db?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 32,
      },
    ],
  },

  {
    title: 'Bread',
    items: [
      {
        id: 25,
        name: 'Sourdough Bread',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1664640733898-d5c3f71f44e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 18,
      },
      {
        id: 26,
        name: 'Whole Wheat Bread',
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 12,
      },
      {
        id: 27,
        name: 'Brioche Loaf',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1701209595879-9f6f4f418c0b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 20,
      },
      {
        id: 28,
        name: 'Garlic Bread',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1711752902734-a36167479983?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 15,
      },
      {
        id: 29,
        name: 'Multigrain Bread',
        imageUrl: 'https://images.unsplash.com/photo-1507638940746-7b17d6b55b8f?q=80&w=716&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 17,
      },
      {
        id: 30,
        name: 'French Baguette',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1726761768709-32b3dcc03112?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 14,
      },
    ],
  },
];

export default SHOP_DATA;