/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ax39gronnlrcy7h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d5igsjfw",
    "name": "is_complete",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ax39gronnlrcy7h")

  // remove
  collection.schema.removeField("d5igsjfw")

  return dao.saveCollection(collection)
})
