'use strict';
const _ = require('lodash');
const db = require('./db.js');

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};
const getHobbies = () => {
  const dataAccessMethod = () => {
    // fill me in :) should return an array of hobbies without duplicate value.
    const hobbies = _.uniq(_.map(db.hobbiesOfUserByUsername, (hobby) => hobby).flat())
    return hobbies;
  };
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (hobby) => {
  const dataAccessMethod = () => {
    // fill me in :) should return an arry of age count based on hobby.
    var users = Object.keys(db.hobbiesOfUserByUsername).filter(function(key) {return db.hobbiesOfUserByUsername[key].includes(hobby)});
    var userAge = {};
    for(const user of users){
      for(const [key, value] of Object.entries(db.usersById)){
        if(value.username === user){
          if (!userAge[`${value.age}`]){
            userAge[`${value.age}`] = 0;
          }
          userAge[`${value.age}`] += 1;
        }
      }
    }
    return userAge;
  };
  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getHobbies,
};
