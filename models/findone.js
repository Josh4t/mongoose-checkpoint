const findOneByFood = (food, done) => {
    Person.findOne({ favoriteFoods: food }, (err, person) => {
      if (err) return done(err);
      done(null, person);
    });
  };
  