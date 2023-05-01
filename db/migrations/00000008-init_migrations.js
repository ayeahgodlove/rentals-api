'use strict';

const Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "password" on table "user"
 * changeColumn "address" on table "user"
 * changeColumn "country" on table "user"
 * changeColumn "city" on table "user"
 * changeColumn "whatsappNumber" on table "user"
 * changeColumn "phoneNumber" on table "user"
 * changeColumn "lastname" on table "user"
 * changeColumn "firstname" on table "user"
 *
 **/

const info = {
    "revision": 8,
    "name": "init-migrations",
    "created": "2023-04-28T09:51:18.758Z",
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
                state: '{"revision":8,"tables":{"category":{"tableName":"category","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"name":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"slug":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"description":{"seqType":"Sequelize.TEXT","allowNull":false},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"user":{"tableName":"user","schema":{"id":{"seqType":"Sequelize.STRING(50)","allowNull":false,"primaryKey":true},"authStrategy":{"seqType":"Sequelize.STRING(10)","allowNull":false},"firstname":{"seqType":"Sequelize.STRING(50)","allowNull":true},"lastname":{"seqType":"Sequelize.STRING(50)","allowNull":true},"username":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"avatar":{"seqType":"Sequelize.STRING(255)","allowNull":true},"email":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"phoneNumber":{"seqType":"Sequelize.STRING(13)","allowNull":true,"unique":true},"whatsappNumber":{"seqType":"Sequelize.STRING(13)","allowNull":true,"unique":true},"city":{"seqType":"Sequelize.STRING(30)","allowNull":true},"country":{"seqType":"Sequelize.STRING(30)","allowNull":true},"address":{"seqType":"Sequelize.STRING(255)","allowNull":true},"password":{"seqType":"Sequelize.STRING(255)","allowNull":true,"unique":true},"roleId":{"seqType":"Sequelize.STRING","allowNull":true,"references":{"model":"role","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"role":{"tableName":"role","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"name":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"slug":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"review":{"tableName":"review","schema":{"id":{"seqType":"Sequelize.STRING(50)","allowNull":false,"primaryKey":true},"userId":{"seqType":"Sequelize.STRING","allowNull":true,"references":{"model":"user","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"comment":{"seqType":"Sequelize.TEXT","allowNull":false},"rating":{"seqType":"Sequelize.INTEGER","allowNull":false},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}}}}'
            }],
            {}
        ]
    },



    {
        fn: "changeColumn",
        params: [
            "user",
            "password",
            {
                "unique": true,
                "allowNull": true,
                "type": Sequelize.STRING(255)
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user",
            "address",
            {
                "allowNull": true,
                "type": Sequelize.STRING(255)
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user",
            "country",
            {
                "allowNull": true,
                "type": Sequelize.STRING(30)
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user",
            "city",
            {
                "allowNull": true,
                "type": Sequelize.STRING(30)
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user",
            "whatsappNumber",
            {
                "unique": true,
                "allowNull": true,
                "type": Sequelize.STRING(13)
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user",
            "phoneNumber",
            {
                "unique": true,
                "allowNull": true,
                "type": Sequelize.STRING(13)
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user",
            "lastname",
            {
                "allowNull": true,
                "type": Sequelize.STRING(50)
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user",
            "firstname",
            {
                "allowNull": true,
                "type": Sequelize.STRING(50)
            }
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
        fn: "changeColumn",
        params: [
            "user",
            "password",
            {
                "unique": true,
                "allowNull": false,
                "type": Sequelize.STRING(255)
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user",
            "address",
            {
                "allowNull": false,
                "type": Sequelize.STRING(255)
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user",
            "country",
            {
                "allowNull": false,
                "type": Sequelize.STRING(30)
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user",
            "city",
            {
                "allowNull": false,
                "type": Sequelize.STRING(30)
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user",
            "whatsappNumber",
            {
                "unique": true,
                "allowNull": false,
                "type": Sequelize.STRING(13)
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user",
            "phoneNumber",
            {
                "unique": true,
                "allowNull": false,
                "type": Sequelize.STRING(13)
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user",
            "lastname",
            {
                "allowNull": false,
                "type": Sequelize.STRING(50)
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user",
            "firstname",
            {
                "allowNull": false,
                "type": Sequelize.STRING(50)
            }
        ]
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
