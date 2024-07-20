const tierInput = document.getElementById('tier');
console.log(tierInput.value);
const submitBtn = document.getElementById('submit');
const imgForm = document.getElementById('img-form')
const itemContainers = document.getElementsByClassName('item-container')
let currentDraggedItem;

for (const itemContainer of itemContainers) {
  setItemContainersForDrag(itemContainer)
}

// submit event  for send input
imgForm.addEventListener('submit',(event)=>{
  event.preventDefault();
  console.log('submit image');
const imageItemInput = document.getElementById('img-input')

if(imageItemInput.value === ''){
    return alert('give new valid image url')
  };
  createTierListItems(imageItemInput.value )
  imageItemInput.value = ''
  
})

// const tierItem= document.getElementById('tier-item')


// const submitImage = document.getElementById('submitImage')
// submitImage.addEventListener('click',(event)=>{
// event.preventDefault();
// const target = event.target;
// if(tierItem.value === ''){
//   return alert('select item')
// };
// addImageUrl(tierItem.value);
// tierItem.value = ''


// })

// function addImageUrl(imageUrl){
// const tierListItems = document.createElement('div');
// tierListItems.classList.add('tier-list-items');

// const img = document.createElement('img');
// img.src = imageUrl;

// tierListItems.appendChild(img)

// const nonTierSection = document.getElementById('non-tier-section')
// nonTierSection.appendChild(tierListItems)



// }



//for image items

/*
 * to create TierListItems
 */
function createTierListItems(imageUrl){
  const imageDiv= document.createElement('div');
  imageDiv.classList.add('item-container');
  //dragable true use to set this element to inside all the newly create image div
  imageDiv.setAttribute('draggable', 'true');
  const img = document.createElement('img');
  img.src = imageUrl;
  
  imageDiv.appendChild(img)
  
  const nonTierSection = document.getElementById('non-tier-section')
  nonTierSection.appendChild(imageDiv)
  setItemContainersForDrag(imageDiv)
  
  
  }


//submit event for create tier list 
submitBtn.addEventListener('click', (event) => {
  console.log('button is clicked');
  event.preventDefault();
  const target = event.target;
  console.log(tierInput.value);
  if(tierInput.value===''){
    return alert('create a new tier list')
  };

  createTierList(tierInput.value);

  tierInput.value = ''
});



//create tier list

function createTierList(tierListName) {
  //tier list
  const newTierList = document.createElement('div');
  newTierList.classList.add('tier-list');

 //heading
  const heading = document.createElement('h1');
  heading.textContent=tierListName;
heading.style.backgroundColor= getRandomColor();
  
//tier list item container
  const newTierListItems = document.createElement('div');
  newTierListItems.classList.add('tier-list-items');

  //call set drop zone to selet the drop zone
  setADropZone (newTierListItems)

  newTierList.appendChild(heading);
  newTierList.appendChild(newTierListItems);

  // Make sure the section exists in your HTML (modify ID if needed)
  const tierSection = document.getElementById('tier-list-section');
  tierSection.appendChild(newTierList);
};


  function setItemContainersForDrag(itemContainer) {
    //start dragging 
    itemContainer.addEventListener('dragstart', (event) => {
      console.log('started dragging');
      console.log(event);
      currentDraggedItem= event.target.parentNode;
    });

    //dblclick event to restore the element
    itemContainer.addEventListener('dblclick', (event)=>{
      const parentNode = event.target.parentNode;
      const nonTierSection = document.getElementById('non-tier-section')
      nonTierSection.appendChild(parentNode)
    })
  }


  //drop zone
function setADropZone (newTierList){
  newTierList.addEventListener('drop', (event)=>{
    event.preventDefault(); //stop the default behaviour of drop, with out stopping default behaviour drop will not happen.
  })

  //dragover
newTierList.addEventListener('dragover',function(event){
  // console.log("drag over a drop zone")

if(this !== currentDraggedItem){
  this.appendChild(currentDraggedItem)
}
})
 

}

//I create a func to select the random color
function getRandomColor(){
  let letter = '0123456789ABCDE'
  let color= "#";
  for(let i = 0;  i<6; i++){ // i use 6 because we will use hexa color and inside hexa we need 6 characters to create a color
color+=letter[Math.floor(Math.random()*16)]
  }
  return color;
}















