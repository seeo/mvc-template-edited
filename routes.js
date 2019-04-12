module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const controller = require('./controllers/mastercontroller')(allModels);

  // app.get('/pokemons', controller.index);
  app.get('/hardcoded', controller.hardcoded);
  app.get('/users', controller.users);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
