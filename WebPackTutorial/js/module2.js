console.log("Module 2 is ready");
var _ = require('lodash')
var people = [{
  "id": 1,
  "first_name": "Jean",
  "last_name": "Dean",
  "email": "jdean0@printfriendly.com",
  "gender": "Female",
  "ip_address": "112.129.179.37"
}, {
  "id": 2,
  "first_name": "Robin",
  "last_name": "Mendoza",
  "email": "rmendoza1@telegraph.co.uk",
  "gender": "Female",
  "ip_address": "59.228.134.90"
}, {
  "id": 3,
  "first_name": "Rachel",
  "last_name": "King",
  "email": "rking2@artisteer.com",
  "gender": "Female",
  "ip_address": "143.199.108.43"
}, {
  "id": 4,
  "first_name": "Michael",
  "last_name": "Lane",
  "email": "mlane3@cnbc.com",
  "gender": "Male",
  "ip_address": "217.240.49.14"
}, {
  "id": 5,
  "first_name": "Anna",
  "last_name": "Williams",
  "email": "awilliams4@cdbaby.com",
  "gender": "Female",
  "ip_address": "72.98.227.208"
}, {
  "id": 6,
  "first_name": "Willie",
  "last_name": "Gonzales",
  "email": "wgonzales5@telegraph.co.uk",
  "gender": "Male",
  "ip_address": "148.16.63.203"
}, {
  "id": 7,
  "first_name": "Ruby",
  "last_name": "Barnes",
  "email": "rbarnes6@alibaba.com",
  "gender": "Female",
  "ip_address": "66.237.131.146"
}, {
  "id": 8,
  "first_name": "Lisa",
  "last_name": "Day",
  "email": "lday7@ebay.com",
  "gender": "Female",
  "ip_address": "223.43.30.41"
}, {
  "id": 9,
  "first_name": "Amanda",
  "last_name": "Hudson",
  "email": "ahudson8@skype.com",
  "gender": "Female",
  "ip_address": "4.111.50.15"
}, {
  "id": 10,
  "first_name": "Andrea",
  "last_name": "Ryan",
  "email": "aryan9@miitbeian.gov.cn",
  "gender": "Female",
  "ip_address": "198.163.242.218"
}, {
  "id": 11,
  "first_name": "Randy",
  "last_name": "Shaw",
  "email": "rshawa@comcast.net",
  "gender": "Male",
  "ip_address": "137.228.24.82"
}, {
  "id": 12,
  "first_name": "Walter",
  "last_name": "Long",
  "email": "wlongb@hexun.com",
  "gender": "Male",
  "ip_address": "176.16.245.108"
}, {
  "id": 13,
  "first_name": "Thomas",
  "last_name": "Rivera",
  "email": "triverac@wikispaces.com",
  "gender": "Male",
  "ip_address": "3.124.214.130"
}, {
  "id": 14,
  "first_name": "Laura",
  "last_name": "Gonzales",
  "email": "lgonzalesd@wordpress.com",
  "gender": "Female",
  "ip_address": "229.18.250.217"
}, {
  "id": 15,
  "first_name": "Laura",
  "last_name": "Cook",
  "email": "lcooke@time.com",
  "gender": "Female",
  "ip_address": "239.133.242.162"
}, {
  "id": 16,
  "first_name": "Anthony",
  "last_name": "Diaz",
  "email": "adiazf@sakura.ne.jp",
  "gender": "Male",
  "ip_address": "155.21.214.113"
}, {
  "id": 17,
  "first_name": "Julia",
  "last_name": "Alvarez",
  "email": "jalvarezg@oakley.com",
  "gender": "Female",
  "ip_address": "250.25.41.135"
}, {
  "id": 18,
  "first_name": "Carol",
  "last_name": "Sanders",
  "email": "csandersh@example.com",
  "gender": "Female",
  "ip_address": "113.108.81.249"
}, {
  "id": 19,
  "first_name": "Jack",
  "last_name": "Young",
  "email": "jyoungi@nydailynews.com",
  "gender": "Male",
  "ip_address": "83.42.71.51"
}, {
  "id": 20,
  "first_name": "Kathryn",
  "last_name": "Kelley",
  "email": "kkelleyj@sciencedirect.com",
  "gender": "Female",
  "ip_address": "48.152.76.142"
}]

var FemaleCount = _.filter(people, {gender: "Female"}).length;
alert(FemaleCount + " females.");
