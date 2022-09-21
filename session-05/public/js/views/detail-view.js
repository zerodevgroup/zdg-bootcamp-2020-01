class DetailView {
  constructor() {
    this.movieData = app.store.movieData
    console.log(this.movieData)
  }

  generateNavBar(parentContainer) {
    let navBar = new NavBar({
      title:"Movie Search",
      navData:[
        {
          name:"Home",
          route:"HomeView"
        },
        {
          name:"Favorites",
          route:"FavoritesView"
        }
      ]
    })
    navBar.generateContent(parentContainer)
  }

  generateContent(parentContainer) {
    let container = document.createElement("div")
    container.classList.add("w3-container")

    let viewTitle = document.createElement("h3")
    viewTitle.append("Detail View")

    container.append(viewTitle)

    let movieData = this.movieData

    let detailCard = new DetailCard({
      backgroundColor: "#ffbf00",
      headerTitle: movieData.Title,
      posterData: movieData.Poster,
      contentData: [
        movieData.Director,
        movieData.Plot,
        movieData.Actors,
        movieData.Genre,
        movieData.Released,
        movieData.Rated,
        movieData.Awards
      ],
      favoriteButtonData: {
        showButton: movieData.showButton,
        buttonColor: "#ffbf00",
        buttonText: "Add to Favorites",
        onclick: () => {
          app.store.favorites.push(movieData)
          app.switchView("FavoritesView")
        }
      }
    })

    detailCard.generateContent(container)

    parentContainer.append(container)
  }
}