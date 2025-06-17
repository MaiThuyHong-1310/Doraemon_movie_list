const movies = [
  {
    id: "1",
    title: "Doraemon: Nobita và Vũ trụ phiêu lưu ký",
    image: "https://thuviensach.vn/img/news/2024/06/larger/16170-doraemon-movie-nobita-va-vu-tru-phieu-luu-ky-1.jpg?v=3265",
    trailer: "https://www.youtube.com/watch?v=RMv6yKBR7hU"
  },
  {
    id: "2",
    title: "Doraemon: Nobita và Đảo giấu vàng",
    image: "https://i.ytimg.com/vi/98IizofPo7s/maxresdefault.jpg",
    trailer: "https://www.youtube.com/watch?v=RtKGs7IQQD8"
  }
  // Thêm phim khác nếu muốn
];

const listDiv = document.getElementById("movie-list");

movies.forEach(movie => {
  const movieDiv = document.createElement("div");
  movieDiv.className = "movie";
  movieDiv.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <h2>${movie.title}</h2>
    <button onclick="window.open('${movie.trailer}', '_blank')">Xem trailer</button><br>
    <a href="movie_1.html?id=${movie.id}" class="back-button">Xem chi tiết</a>
  `;
  listDiv.appendChild(movieDiv);
});