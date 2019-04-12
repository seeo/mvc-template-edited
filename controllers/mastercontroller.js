module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  // let indexControllerCallback = (request, response) => {
  //     db.pokemon.getAll((error, allPokemon) => {
  //       response.render('pokemon/index', { allPokemon });
  //     });
  // };

  let hardcoded = (req, res) => {
    res.send('hardcoded string')
  }

  let users = (req, res) => {
    db.users.getAll((error, allUsers) => {
      console.log(allUsers);
      res.send('done');
      response.render('pokemon/index', { allPokemon });
    });
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    users: users,
    // index: indexControllerCallback,
    hardcoded: hardcoded,
  };

}
