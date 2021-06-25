
const sequelize = require('../config/connection');

const userData = require("./userData");
const postData = require("./postData");
const commentData = require("./commentData")

console.log("I am in comment")
console.log("JS-comment.js")

$(".savecomment").on("click",function(event){
    event.preventDefault()
    console.log("Save Comment")
})

// additiona code
// get comments by id
let posts = {
    id:1,
    title : "my post",
    description: "my 1st comment"
    
}
// get comments by id
var comments =[
    {
    post_id: 1,
    user_id:18,
    description: "this is the 1st commment"
}
]

posts.comments=comments;
//now posts look li


let posts={
    id: 1,
    title: "my post",
    comments: [{post_id: 1,
    user_id: 18,
    text: "this is the 1st comment"
}]
}
