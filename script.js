//When chooosing a sertain data the info schould appear under the cats.

//checkboxes
const historyBox=document.getElementById('historyBox');
const familyBox=document.getElementById('familyBox');
const welthBox=document.getElementById('welthBox');

//where the text appears
const textToCats=document.getElementById('textToCats');

//eventlisteners
historyBox.addEventListener('change', function() {
  bringText(1);
  if(!this.checked){
    removeText();
  }
});

familyBox.addEventListener('change', function() {
  bringText(2);
  if(!this.checked){
    removeText();
  }
});

welthBox.addEventListener('change', function() {
  bringText(3);
  if(!this.checked){
    removeText();
  }
});


//database
const infoArray = [
  {
    id: 1,
    label: "history",
    description: "Short story about a magnificant famnily",
    content: "Everyone born and raised in the south of the northpole. Everyone in this big cat family is colored by the orange sunset. No one has never seen us pale. Even big cat pay taxes to the royal family of orange cats."
  },
  {
    id: 2,
    label: "family",
    description: "Family three",
    content: "Two of the bright brain of catalonian cat kitty cat had a kitty of their own. One moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in"
  },
  {
    id: 3,
    label: "welth",
    description: "The big welth",
    content: "100 000 000 000 $"
  }
];

//funnctions to make text appear
function bringText(id){
  let headlineOfText = document.createElement('h3');
  let textContent = document.createElement('p');
  const texty = infoArray.filter((obj) =>{
    return obj.id == id;
  })
  //get the right text
  headlineOfText.innerHTML = texty[0].description;
  textContent.innerHTML = texty[0].content;
  //display text
  textToCats.appendChild(headlineOfText);
  textToCats.appendChild(textContent);
}
function removeText(){
  textToCats.replaceChildren();
}