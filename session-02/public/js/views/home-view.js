class HomeView {
  constructor() { }

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
    viewTitle.append("Home View")

    container.append(viewTitle)

    parentContainer.append(container)
  }
}