module.exports = (req, res) => {
  res.render("errors/404", {
      title: "404 | страница не найдена",
  })
}