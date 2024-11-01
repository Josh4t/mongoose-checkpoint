const findPeopleByName = (personName, done) => {
    Person.find({ name: personName }, (err, people) => {
      if (err) return done(err);
      done(null, people);
    });
  };
