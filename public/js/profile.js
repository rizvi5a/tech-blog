const newFormHandler = async (event) => {
  event.preventDefault();
//alert("newFormHandler");
  const title = document.querySelector('#post-title').value.trim();
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
      alert('Failed to create post');
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


  
  const newcommentFormHandler = async (event) => {
    event.preventDefault();
   //alert("newcommentFormHandler");
  const ctitle = document.querySelector('#comment-title').value.trim();
  const cdescription = document.querySelector('#comment-desc').value.trim();

  if (ctitle && cdescription) {
   const response = await fetch(`/api/comments`, {
  method: 'POST',
  body: JSON.stringify({ctitle,  cdescription }),
  headers: {
    'Content-Type': 'application/json',
  }
});

if (response.ok) {
  document.location.replace('/profile');
} else {
  alert('Failed to create comment');
}
  }
  }
const delcommentButonHandler = async (event) => {
  if (event.target.hasAttribute('cdata-id')) {
    const id = event.target.getAttribute(' cdata-id');
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });


    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete comments');
    }
  }
};

document
.querySelector('.new-comment-form')
.addEventListener('submit', newcommentFormHandler );

  
document
.querySelector('.comment-list')
.addEventListener('click', delcommentButonHandler);
