if (Meteor.isClient) {
  
  UI.body.events({
    "click .render": function() {
      var el = $(".template").get(0);
      UI.insert(UI.renderWithData(Template.hello, {name: "Dalchand"}), el);
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
