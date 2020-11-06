const commentBox = document.getElementById('comment');
const submitButton = document.getElementById('submit');
const commentListWrapper = document.getElementById('commentlist')
const comments = [];
let commentId = 0;

function appendCommentToList(comment, id) {
    let div = document.createElement('div');
    div.className = "comment";
    div.id = id
    div.innerHTML = `<p>${comment}</p><a href="#">Reply</a>  <a href="#">Edit</a>  <a href="#">Delete</a>`
    commentListWrapper.append(div);
}

const submitHandler = (e) => {
    if (commentBox.value) {
        commentId++;
        comments.push({
            id: commentId,
            comment: commentBox.value,
            replies: []
        })
        appendCommentToList(commentBox.value, commentId);
        commentBox.value = '';
    }
    console.log('button clicked', comments);

}



submitButton.addEventListener('click', submitHandler);