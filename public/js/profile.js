const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  //const needed_funding = document.querySelector('#post-funding').value.trim();
  const description = document.querySelector('#post-desc').value.trim();
    console.log("alert")
  if (title && description) {
     console.log("POST",title,description)
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({title, description}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create a post'); 
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);



// const addComments = async (event) => {
//   event.preventDefault()
//   // if (event.target.hasAttribute('data-id')) {
//     //  const comment= event.target.getAttribute('data-id');
//     let comment = document.getElementById("addcomments").value.trim()
    
//     if (commentstext)
//     console.log(comment)
//     const response = await fetch(`/api/comments`, {
//       method: 'POST',
//       body: JSON.stringify({ commentstext:comment }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
    //  const response = await fetch(`/api/comments/${id}`) 
    //   // const response = await fetch(`/api/comments/`,{
    //   method: 'POST',
    //   body: comment
    // }).then(function(response){
    //   console.log("Respobse",response)
    // })

  //   if (response.ok) {
  //     console.log("Resp okay")
  //     document.location.replace('/profile');
  //   } else {
  //     alert('Failed to delete comment');
  //   }
  // }


  // document
  // .querySelector('.addComments')
  // .addEventListener('submit', newFormHandler);

  // //comments
  // const myid = document.getElementById("myid").innerText



  // const saveComments = document.getElementById("savecomment")
  // saveComments.addEventListener("click", async function(e){
  //     e.preventDefault()
  //     console.log("the error")
  //     const response = await fetch('/api/comments/' + myid, {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: 'hellooo'
  //       });
  // })
  