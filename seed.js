'use strict';

const accounts = [
  {
    name: 'Main Account',
    desc: 'Our main account',
  },
  {
    name: 'Extra Account',
    desc: 'Our extra account',
  },
];

module.exports = async function ({ entities, db, sql }) {
  for (const values of accounts) {
    const account = await entities.account.save({
      input: { name: values.movie },
    });

    console.log('Created account:', account);
  }
};
