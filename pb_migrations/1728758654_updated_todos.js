/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ax39gronnlrcy7h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "omrv6sch",
    "name": "date_set",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ax39gronnlrcy7h")

  // remove
  collection.schema.removeField("omrv6sch")

  return dao.saveCollection(collection)
})
