var read=require("readline-sync")
var util=require('../Utility/oppsutil.js')
var file=require('fs')
var companyfile=file.readFileSync('/home/admin1/Desktop/programs/Object Oriented program/JSON_FIle/companylist.json','utf8')
var customerfile=file.readFileSync('/home/admin1/Desktop/programs/Object Oriented program/JSON_FIle/customer.json','utf8')
var companydata = JSON.parse(companyfile)
var customerdata=JSON.parse(customerfile)

console.log("=======================Commercial data processing============================== ")
console.log()
util.stock(companydata,customerdata)