// @codekit-prepend "jquery-1.9.1.js"
// @codekit-prepend "enquire.js"
// @codekit-prepend "modernizr.js"

enquire
  .register("(max-width: 600px)", {
    match: function() {

      $("#map-content").load("parts/map-baby.html")
    }
  })
  .register("(min-width: 601px)", {
    match: function() {
      $("#map-content").load("parts/map-mama.html")
    }
  })
  .listen();