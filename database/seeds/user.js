exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").then(function() {
    // Inserts seed entries
    return knex("users").insert([
      { name: "Bob the Builder", job: "Builder" },
      { name: "John", job: "Computer Nerd" },
      { name: "Mike", job: "Salesman" }
    ]);
  });
};
