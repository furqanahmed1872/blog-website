import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

const articles = [
  {
    id: 1,
    imgUrl:
      "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
    title: "African Wildlife",
    path: "Africa / Leave a Comment",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
          non mauris vitae erat consequat auctor`,
  },
  {
    id: 1,
    imgUrl:
      "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
    title: "African Wildlife",
    path: "Africa / Leave a Comment",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
          non mauris vitae erat consequat auctor`,
  },
  {
    id: 1,
    imgUrl:
      "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
    title: "African Wildlife",
    path: "Africa / Leave a Comment",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
          non mauris vitae erat consequat auctor`,
  },
  {
    id: 1,
    imgUrl:
      "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
    title: "African Wildlife",
    path: "Africa / Leave a Comment",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
          non mauris vitae erat consequat auctor`,
  },
  {
    id: 1,
    imgUrl:
      "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
    title: "African Wildlife",
    path: "Africa / Leave a Comment",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
          non mauris vitae erat consequat auctor`,
  },
  {
    id: 1,
    imgUrl:
      "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
    title: "African Wildlife",
    path: "Africa / Leave a Comment",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
          non mauris vitae erat consequat auctor`,
  },
];

app.use(
  cors({
    origin: "http://localhost:5173", // Allow only the frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/articles", (req, res) => {
  res.send(articles);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
