'use strict';

const Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "category", deps: []
 * createTable "role", deps: []
 * createTable "user", deps: [role]
 * createTable "review", deps: [user]
 *
 **/

const info = {
    "revision": 1,
    "name": "init-migrations",
    "created": "2023-04-19T06:03:46.403Z",
    "comment": ""
};

const migrationCommands = [

    {
        fn: "createTable",
        params: [
            "SequelizeMigrationsMeta",
            {
                "revision": {
                    "primaryKey": true,
                    "type": Sequelize.INTEGER
                },
                "name": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "state": {
                    "allowNull": false,
                    "type": Sequelize.JSON
                },
            },
            {}
        ]
    },
    {
        fn: "bulkDelete",
        params: [
            "SequelizeMigrationsMeta",
            [{
                revision: info.revision
            }],
            {}
        ]
    },
    {
        fn: "bulkInsert",
        params: [
            "SequelizeMigrationsMeta",
            [{
                revision: info.revision,
                name: info.name,
                state: '{"revision":1,"tables":{"category":{"tableName":"category","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"name":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"slug":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"description":{"seqType":"Sequelize.TEXT","allowNull":false},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false}},"indexes":{}},"user":{"tableName":"user","schema":{"id":{"seqType":"Sequelize.STRING(50)","allowNull":false,"primaryKey":true},"firstname":{"seqType":"Sequelize.STRING(50)","allowNull":false},"lastname":{"seqType":"Sequelize.STRING(50)","allowNull":false},"username":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"email":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"phoneNumber":{"seqType":"Sequelize.STRING(13)","allowNull":false,"unique":true},"whatsappNumber":{"seqType":"Sequelize.STRING(13)","allowNull":false,"unique":true},"city":{"seqType":"Sequelize.STRING(30)","allowNull":false},"country":{"seqType":"Sequelize.STRING(30)","allowNull":false},"address":{"seqType":"Sequelize.STRING(255)","allowNull":false},"password":{"seqType":"Sequelize.STRING(255)","allowNull":false,"unique":true},"roleId":{"seqType":"Sequelize.STRING","allowNull":true,"references":{"model":"role","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false}},"indexes":{}},"role":{"tableName":"role","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"name":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"slug":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false}},"indexes":{}},"review":{"tableName":"review","schema":{"id":{"seqType":"Sequelize.STRING(50)","allowNull":false,"primaryKey":true},"userId":{"seqType":"Sequelize.STRING","allowNull":true,"references":{"model":"user","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"comment":{"seqType":"Sequelize.TEXT","allowNull":false},"rating":{"seqType":"Sequelize.INTEGER","allowNull":false},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false}},"indexes":{}}}}'
            }],
            {}
        ]
    },




    {
        fn: "createTable",
        params: [
            "category",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "name": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "slug": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "description": {
                    "allowNull": false,
                    "type": Sequelize.TEXT
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "role",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "name": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "slug": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "user",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "firstname": {
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "lastname": {
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "username": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "email": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "phoneNumber": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(13)
                },
                "whatsappNumber": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(13)
                },
                "city": {
                    "allowNull": false,
                    "type": Sequelize.STRING(30)
                },
                "country": {
                    "allowNull": false,
                    "type": Sequelize.STRING(30)
                },
                "address": {
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "password": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "roleId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "role",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.STRING
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "review",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "userId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "user",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.STRING
                },
                "comment": {
                    "allowNull": false,
                    "type": Sequelize.TEXT
                },
                "rating": {
                    "allowNull": false,
                    "type": Sequelize.INTEGER
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    }
];

const rollbackCommands = [

    {
        fn: "bulkDelete",
        params: [
            "SequelizeMigrationsMeta",
            [{
                revision: info.revision,
            }],
            {}
        ]
    },



    {
        fn: "dropTable",
        params: ["user"]
    },
    {
        fn: "dropTable",
        params: ["review"]
    },
    {
        fn: "dropTable",
        params: ["category"]
    },
    {
        fn: "dropTable",
        params: ["role"]
    }
];

module.exports = {
  pos: 0,
  up: function(queryInterface, Sequelize) {
    let index = this.pos;

    return new Promise(function(resolve, reject) {
      function next() {
        if (index < migrationCommands.length) {
          let command = migrationCommands[index];
          console.log("[#"+index+"] execute: " + command.fn);
          index++;
          queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
        } else resolve();
      }

      next();
    });
  },
  down: function(queryInterface, Sequelize) {
    let index = this.pos;

    return new Promise(function(resolve, reject) {
      function next() {
        if (index < rollbackCommands.length) {
          let command = rollbackCommands[index];
          console.log("[#"+index+"] execute: " + command.fn);
          index++;
          queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
        }
        else resolve();
      }

      next();
    });
  },
  info
};
