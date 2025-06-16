const movies = [
  {
    title: "Doraemon: Nobita và Vũ trụ phiêu lưu ký",
    image: "https://thuviensach.vn/img/news/2024/06/larger/16170-doraemon-movie-nobita-va-vu-tru-phieu-luu-ky-1.jpg?v=3265",
    trailer: "https://www.youtube.com/watch?v=RMv6yKBR7hU"
  },
  {
    title: "Doraemon: Nobita và Đảo giấu vàng",
    image: "https://i.ytimg.com/vi/98IizofPo7s/maxresdefault.jpg",
    trailer: "https://www.youtube.com/watch?v=RtKGs7IQQD8"
  },
  {
    title: "Doraemon: Nobita và Hiệp sĩ rồng",
    image: "https://newshop.vn/public/uploads/products/30636/sach-doraemon-tranh-truyen-mau-tap-9-nobita-va-hiep-si-rong.jpg",
    trailer: "https://www.youtube.com/watch?v=khn7zECoZJY"
  },
  {
    title: "Doraemon: Nobita và Mặt trăng phiêu lưu ký",
    image: "https://tse4.mm.bing.net/th?id=OIP.Qjj5CFg6Q_j0iAVrqmglaAAAAA&pid=Api&P=0&h=180",
    trailer: "https://www.youtube.com/watch?v=G5Hg5h9eEc4"
  },
  {
    title: "Doraemon: Nobita và Xứ sở nghìn lẻ một đêm",
    image: "https://tse2.mm.bing.net/th?id=OIP.YJE_MsvoT5POKSStEPg3rAHaLm&pid=Api&P=0&h=180",
    trailer: "https://www.youtube.com/watch?v=dnv-4-VY6Ks"
  }
];

const listDiv = document.getElementById("movie-list");

movies.forEach(movie => {
  const movieDiv = document.createElement("div");
  movieDiv.className = "movie";

  movieDiv.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <h2>${movie.title}</h2>
    <button onclick="window.open('${movie.trailer}', '_blank')">Xem trailer</button>
  `;

  listDiv.appendChild(movieDiv);
});
