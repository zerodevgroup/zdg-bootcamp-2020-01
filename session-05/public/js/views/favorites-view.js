class FavoritesView {
  constructor() {  }

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
    viewTitle.append("Favorites View")

    container.append(viewTitle)

    app.store.favorites.forEach((favorite) => {
      let favoritesCard = new FavoritesCard({
        cardColor: "#ffbf00",
        cardData: [
          {
            value: favorite.Title,
            style: "font-weight: 700;"
          },
          {
            value: favorite.Year,
            style: ""
          },
          {
            value: favorite.Rated,
            style: "float: right;"
          },
          {
            value: favorite.Genre,
            style: "margin-top: 4px;"
          }
        ],
        onclick: () => {
          // pass favorite to detail view
          favorite.showButton = false
          app.store.movieDate = favorite
          app.switchView("DetailView")
        }
      })

      favoritesCard.generateContent(container)
    })

    parentContainer.append(container)
  }
}