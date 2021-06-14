//const myid = document.getElementById("myid").innerText



const saveComments = document.getElementById("savecomment")
saveComments.addEventListener("click", async function(e){
    e.preventDefault()
    console.log("I am in post.js", myid)
    const response = await fetch('/api/comments/' + myid, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: 'hellooo'
      });
})
