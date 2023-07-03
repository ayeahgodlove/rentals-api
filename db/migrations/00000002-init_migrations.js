'use strict';

const Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "country" on table "user"
 * changeColumn "city" on table "user"
 *
 **/

const info = {
    "revision": 2,
    "name": "init-migrations",
    "created": "2023-07-03T19:46:26.176Z",
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
                state: '{"revision":2,"tables":{"category":{"tableName":"category","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"name":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"slug":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"description":{"seqType":"Sequelize.TEXT","allowNull":false},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"user":{"tableName":"user","schema":{"id":{"seqType":"Sequelize.STRING(50)","allowNull":false,"primaryKey":true},"authStrategy":{"seqType":"Sequelize.STRING(10)","allowNull":false},"firstname":{"seqType":"Sequelize.STRING(50)","allowNull":true},"lastname":{"seqType":"Sequelize.STRING(50)","allowNull":true},"username":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"avatar":{"seqType":"Sequelize.STRING(255)","allowNull":true},"email":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"phoneNumber":{"seqType":"Sequelize.STRING(13)"},"whatsappNumber":{"seqType":"Sequelize.STRING(13)"},"city":{"seqType":"Sequelize.STRING(100)","allowNull":true},"country":{"seqType":"Sequelize.STRING(100)","allowNull":true},"address":{"seqType":"Sequelize.STRING(255)","allowNull":true},"password":{"seqType":"Sequelize.STRING(255)","allowNull":true,"unique":true},"verified":{"seqType":"Sequelize.BOOLEAN"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"userDoc":{"tableName":"userDoc","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"userId":{"seqType":"Sequelize.STRING","allowNull":true,"references":{"model":"user","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"idCard1":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"idCard2":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"passportPhoto":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"role":{"tableName":"role","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"name":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"branch":{"tableName":"branch","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"storeId":{"seqType":"Sequelize.STRING","allowNull":true,"references":{"model":"store","key":"id"},"onUpdate":"CASCADE","onDelete":"NO ACTION"},"name":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"town":{"seqType":"Sequelize.STRING(128)","allowNull":false},"address":{"seqType":"Sequelize.STRING(255)","allowNull":false},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"store":{"tableName":"store","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"name":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"location":{"seqType":"Sequelize.STRING(255)","allowNull":false,"unique":false},"imageBannerUrl":{"seqType":"Sequelize.STRING(255)","allowNull":false,"unique":true},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"product":{"tableName":"product","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"storeId":{"seqType":"Sequelize.STRING","allowNull":true,"references":{"model":"store","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"name":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"amount":{"seqType":"Sequelize.DECIMAL","allowNull":false,"comment":"product prices"},"description":{"seqType":"Sequelize.STRING(255)","allowNull":false},"longDescription":{"seqType":"Sequelize.TEXT","allowNull":false},"durationOfRentage":{"seqType":"Sequelize.INTEGER","allowNull":false,"comment":"duration of rentage in months"},"condition":{"seqType":"Sequelize.STRING(255)","allowNull":false},"availabilityStartDate":{"seqType":"Sequelize.DATE"},"availabilityEndDate":{"seqType":"Sequelize.DATE"},"availabilityStartTime":{"seqType":"Sequelize.DATE"},"availabilityEndTime":{"seqType":"Sequelize.DATE"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"productImage":{"tableName":"productImage","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"productId":{"seqType":"Sequelize.STRING","allowNull":true,"references":{"model":"product","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"productName":{"seqType":"Sequelize.STRING(255)","allowNull":false},"imageUrl":{"seqType":"Sequelize.STRING(255)","allowNull":false,"unique":true},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"review":{"tableName":"review","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true,"comment":"ID field which is set as a primary key and unique"},"userId":{"seqType":"Sequelize.STRING","allowNull":true,"references":{"model":"user","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"comment":{"seqType":"Sequelize.TEXT","allowNull":false},"rating":{"seqType":"Sequelize.INTEGER","allowNull":false},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"tag":{"tableName":"tag","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"name":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"UserRole":{"tableName":"UserRole","schema":{"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"userId":{"seqType":"Sequelize.STRING(50)","primaryKey":true,"references":{"model":"user","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"roleId":{"seqType":"Sequelize.STRING(20)","primaryKey":true,"references":{"model":"role","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"}},"indexes":{}}}}'
            }],
            {}
        ]
    },



    {
        fn: "changeColumn",
        params: [
            "user",
            "country",
            {
                "allowNull": true,
                "type": Sequelize.STRING(100)
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
                "type": Sequelize.STRING(100)
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
