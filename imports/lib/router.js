BlazeLayout.setRoot('.container-fluid');

FlowRouter.route('/', {
  name: "dashboard",
  action: function(params, queryParams) {
    BlazeLayout.render("Dashboard");
  }
});

FlowRouter.route('/transactions', {
  name: "transactions",
  action: function(params, queryParams) {
    BlazeLayout.render("Transactions");
  }
});

FlowRouter.route('/inventory', {
  name: "checkins",
  action: function(params, queryParams) {
    console.log("routing inventory");
    console.log(params);
    console.log(queryParams);
  }
});

FlowRouter.route('/pos', {
  name: "checkins",
  action: function(params, queryParams) {
    console.log("routing pos");
    console.log(params);
    console.log(queryParams);
  }
});

FlowRouter.route('/search', {
  name: "checkins",
  action: function(params, queryParams) {
  }
});
