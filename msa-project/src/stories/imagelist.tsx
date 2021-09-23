import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function StandardImageList() {
  return (
    <ImageList
      sx={{ width: 600, height: 500 }}
      cols={3}
      rowHeight={150}
      variant="woven"
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=300&h=650&fit=crop&auto=format`}
            srcSet={`${item.img}?w=300&h=650&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1612536057832-2ff7ead58194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "corgi",
  },
  {
    img: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80",
    title: "fadou",
  },
  {
    img: "https://images.unsplash.com/photo-1601880348117-25c1127a95df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "sleepy",
  },
  {
    img: "https://images.unsplash.com/photo-1565726166189-e9814a05ffde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1592924728350-f7d4fd5d1655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1588054384802-88b17ab0d288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1507660392550-9aff6e04c7e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1517527181905-db18299d4d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1604186838347-9faaf0b83be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1578251122719-faf0727a76de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Bike",
  },
];
