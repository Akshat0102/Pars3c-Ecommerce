import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.css";

export type DirectoryCategory = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: "chocolates",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683120880375-074c4ba3f775?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/shop/chocolates",
  },
  {
    id: 2,
    title: "coffee",
    imageUrl:
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/shop/coffee",
  },
  {
    id: 3,
    title: "honey",
    imageUrl:
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/shop/honey",
  },
  {
    id: 4,
    title: "cookies",
    imageUrl:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/shop/cookies",
  },
  {
    id: 5,
    title: "bread",
    imageUrl:
      "https://images.unsplash.com/photo-1599819055803-717bba43890f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/shop/bread",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
