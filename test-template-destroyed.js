if (Meteor.isClient) {
  
  UI.body.events({
    "click .render": function() {
      var el = $(".template").get(0);
      var element = document.createElement("div");
      el.appendChild(element);
      UI.insert(UI.renderWithData(Template.hello, {name: "Dalchand"}), element);
    },
    "click .destroy": function() {
      var el = $(".template").get(0);
      el.remove();
    }  
  });

  Template.hello.created = function() {
    console.log("Template created");
  }

  Template.hello.destroyed = function() {
    console.log("Template destroyed");
  }

}

if (Meteor.isServer) {
  
}
