/*
const postDiv = document.querySelectorAll('.post');
let postImg, postP, postSchool, postWriter;

postDiv.forEach(div => {
  postImg = div.querySelectorAll('img');
  postP = div.querySelectorAll('p');
  postSchool = div.querySelectorAll('span')[0];
  postWriter = div.querySelectorAll('span')[2];
});
*/

/*
function getDataIndex(storyData) {
  console.log(storyData);
  postDiv.forEach(div => {
    const dataIndex = div.dataset.index;
    dataIndexValue(dataIndex, storyData);
  });
}
*/
/*function dataIndexValue(dataIndexValue, id) {
  console.log(dataIndexValue);
  console.log(id);
}

dataIndexValue();*/

/*
function setSchool(selectStoryData) {
  postSchool.textContent = selectStoryData.school;
}

async function fetchProductData() {
  try {
    const response = await fetch('http://localhost:3000/storyData'); // Replace 'data.json' with the actual file path if it's different
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return [];
  }
}

// Main function to get the 'id' values of all products
async function getProductIds() {
  const products = await fetchProductData();
  // const productIds = products.map(product => product.id);
  return products;
}

async function handleClick(event) {
  const productsData = await getProductIds();
  const clickedElement = event.target.closest('.post[data-index]');
  if (clickedElement) {
    const dataIndex = clickedElement.getAttribute('data-index');
    const dataIndexNumber = parseInt(dataIndex);

    const storyDataArrayIndex = dataIndexNumber - 1;
    const selectStoryData = productsData[storyDataArrayIndex];
    if (selectStoryData) {
      setSchool(selectStoryData.school);
    }
  }
}
/*
postDiv.forEach(div => {
  div.addEventListener('click', handleClick);
});


// Example usage: get product IDs and log them to the console
getProductIds()
  .then(dataIndex => console.log(dataIndex))
  .catch(error => console.error('Error getting product IDs:', error));

function test() {
  postDiv.forEach(div => {
    const dataIndex = div.getAttribute('data-index');
    console.log(dataIndex);
  });
}

test();
*/

const postDivs = document.querySelectorAll('.post');
/*
let postImg, postP, postSpan, postSchool, postWriter;

postDivs.forEach(div => {
  postImg = div.querySelectorAll('img');
  postP = div.querySelectorAll('p');
  postSpan = div.querySelectorAll('span');
  postSchool = postSpan[0];
  postWriter = postSpan[2];
});
*/

function setImage(imageElements, product) {
  imageElements.forEach(image => {
    image.src = product.src;
    image.alt = product.alt;
  });
}

function setTitleText(titleElements, product) {
  titleElements.forEach(pTitle => {
    pTitle.textContent = product.title;
  });
}

function setSchoolText(schoolElements, product) {
  schoolElements.forEach(spanSchool => {
    spanSchool.textContent = product.school;
  });
}

function setWriterText(writerElements, product) {
  writerElements.forEach(spanWriter => {
    spanWriter.textContent = product.writer;
  });
}

async function fetchProductData() {
  try {
    const response = await fetch('http://localhost:3000/storyData'); // Replace 'data.json' with the actual file path if it's different
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return [];
  }
}

async function getProductIds() {
  const products = await fetchProductData();
  // const productIds = products.map(product => product.id);
  return products;
}

async function loadPostData() {
  const productsIdValue = await getProductIds();
  productsIdValue.forEach(product => {
    postDivs.forEach(postDiv => {
      const dataIndex = parseInt(postDiv.getAttribute('data-index'));
      if (dataIndex === product.id) {
        const imageElements = postDiv.querySelectorAll('.postImage');
        const titleElements = postDiv.querySelectorAll('.postTitle');
        const schoolElements = postDiv.querySelectorAll('.postSchool');
        const writerElements = postDiv.querySelectorAll('.postWriter');
        console.log(product);
        setImage(imageElements, product);
        setTitleText(titleElements, product);
        setSchoolText(schoolElements, product);
        setWriterText(writerElements, product);
      }
    });
  });
}
loadPostData();

getProductIds()
  .then(dataIndex => console.log(dataIndex))
  .catch(error => console.error('Error getting product IDs:', error));
