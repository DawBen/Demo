// const express = require('express');
import express from "express";
const app = express();
const port = 4000;

const VideosList = () => {
    let videos = [];
    const items = localStorage.getItem('videos');
    if(items!==null){
        videos = JSON.parse(items);
    }
    return videos;    
}
const VideoById = (id) =>{
    const videos = VideosList();
    const video = videos.filter(video =>{
        return video.id==id;
    });
    return video;
}
const addVideos = (data) => {
  const videos = VideosList();
  videos.push(data);
  localStorage.setItem("videos", JSON.stringify(videos));
  return { status: true, message: "Add successfully" };
};
const videos = [
  {
    id: 1,
    title: "An apple mobile which is nothing like apple",
    duration: "12:05",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  },
  {
    id: 2,
    title: "Samsung Universe 9",
    duration: "10:25",
    thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
  },
  {
    id: 3,
    title: "Samsung Galaxy Book",
    duration: "06:51",
    thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
  },
];

app.get("/videos", (req, res) => {
  res.json(videos);
});
app.get("/videos", (req, res) => {
  res.send(VideoList());
});

app.get('/videos',(req,res) => {
    const id = req.params.id;
    const video = VideoById(id);
    res.send(video);
});
app.post("/videos", (req, res) => {
  const body = req.body;
  const mess = addVideos(body);
  res.send(mess);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
