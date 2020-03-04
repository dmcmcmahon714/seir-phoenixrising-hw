// create 5 burgers (at least 3 should be beef)


// find all the burgers
// > db.burger.find()
// { "_id" : ObjectId("5e60229213195b5f932ac9f5"), "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "_id" : ObjectId("5e6022c813195b5f932ac9f6"), "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "_id" : ObjectId("5e6026cf2bb697272469b6f5"), "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "_id" : ObjectId("5e6027112bb697272469b6f6"), "meat" : "beef", "cheese" : true, "toppings" : [ "onions" ] }
// { "_id" : ObjectId("5e6027242bb697272469b6f7"), "meat" : "waygu", "cheese" : false, "toppings" : [ "pickles" ] }
// { "_id" : ObjectId("5e6027322bb697272469b6f8"), "meat" : "bison", "cheese" : false, "toppings" : [ "mustard" ] }
// { "_id" : ObjectId("5e6027552bb697272469b6f9"), "meat" : "steak", "cheese" : true, "toppings" : [ "mushrooms" ] }
// { "_id" : ObjectId("5e6027672bb697272469b6fa"), "meat" : "beef", "cheese" : true, "toppings" : [ "jalapenos" ] }
// > 

// show just the meat of each burger

// > db.burger.distinct("meat")
// [ "beef", "bison", "steak", "waygu" ]
// > 

// show just the toppings of each burger

// > db.burger.distinct("toppings")
// [ "jalapenos", "ketchup", "mushrooms", "mustard", "onions", "pickles" ]
// > 

// show everything but the cheese

// > db.burger.find({cheese: false})
// { "_id" : ObjectId("5e60229213195b5f932ac9f5"), "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "_id" : ObjectId("5e6022c813195b5f932ac9f6"), "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "_id" : ObjectId("5e6026cf2bb697272469b6f5"), "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "_id" : ObjectId("5e6027242bb697272469b6f7"), "meat" : "waygu", "cheese" : false, "toppings" : [ "pickles" ] }
// { "_id" : ObjectId("5e6027322bb697272469b6f8"), "meat" : "bison", "cheese" : false, "toppings" : [ "mustard" ] }
// > 
// find all the burgers with beef
// > db.burger.find({'meat':'beef'})
// { "_id" : ObjectId("5e60229213195b5f932ac9f5"), "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "_id" : ObjectId("5e6022c813195b5f932ac9f6"), "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "_id" : ObjectId("5e6026cf2bb697272469b6f5"), "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "_id" : ObjectId("5e6027112bb697272469b6f6"), "meat" : "beef", "cheese" : true, "toppings" : [ "onions" ] }
// { "_id" : ObjectId("5e6027672bb697272469b6fa"), "meat" : "beef", "cheese" : true, "toppings" : [ "jalapenos" ] }
// > 

// find all the burgers that are not beef

// > db.burger.find({meat:{$ne:'beef'}})
// { "_id" : ObjectId("5e6027242bb697272469b6f7"), "meat" : "waygu", "cheese" : false, "toppings" : [ "pickles" ] }
// { "_id" : ObjectId("5e6027322bb697272469b6f8"), "meat" : "bison", "cheese" : false, "toppings" : [ "mustard" ] }
// { "_id" : ObjectId("5e6027552bb697272469b6f9"), "meat" : "steak", "cheese" : true, "toppings" : [ "mushrooms" ] }
// > 

// find the first burger with cheese

// > db.burger.findOne({cheese: true})
// {
//         "_id" : ObjectId("5e6027112bb697272469b6f6"),
//         "meat" : "beef",
//         "cheese" : true,
//         "toppings" : [
//                 "onions"
//         ]
// }
// > 


// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.findOneAndReplace({"cheese": false})


// find the burger you updated to have double cheese

// it's boolean :-(

// find and update all the beef burgers to be 'veggie'

db.burger.update({$set{"meat" : "veggie"}})

// delete just one of your veggie burgers
// WRONG - DELETES ALL : db.burger.remove({meat: 'veggie'})


// drop the collection

db.burger.drop()
//Expected Output
//true

// drop the database

db.dropDatabase(burger)
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
