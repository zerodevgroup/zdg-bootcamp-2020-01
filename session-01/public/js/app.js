class App {
  constructor() {
    // Get the content element
    let content = document.getElementById("content")

    // Create title
    let title = document.createElement("h3")
    title.append("Movie App!")

    // Append the title to the content element
    content.append(title)
  }
}

let app = new App()