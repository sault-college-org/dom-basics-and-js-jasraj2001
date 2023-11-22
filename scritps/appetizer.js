const Appetizer = () => {
    const appetizerContent = document.createElement('div');
    appetizerContent.setAttribute('class', 'container');

    appetizerContent.style.display = "flex";
    appetizerContent.style.flexDirection = "column";
  
    const appetizerHeader = document.createElement('h1');
  appetizerHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
  appetizerHeader.innerHTML = 'Appetizer';
  
  const appetizerList = document.createElement('ul');
  appetizerList.setAttribute('class', 'appetizerList');

  const appetizerItems = () => {
    const list = document.createElement('li');
    list.setAttribute('class', 'nav-item list-unstyled mx-2');

    const appetizer1 = document.createElement('h1');
    appetizer1.setAttribute('id', 'appetizer1');
    appetizer1.setAttribute('class', 'text-center');
    appetizer1.innerHTML = 'Stuffed mushrooms';
    list.appendChild(appetizer1);
    const appetizerParagraph1 = document.createElement('p');
    appetizerParagraph1.setAttribute('class', 'my-3 pb-3');
    appetizerParagraph1.innerHTML = 'Stuffed mushrooms are always a holiday favorite appetizer. They are the perfect cheesy mushroom bite';
    list.appendChild(appetizerParagraph1)  

    const appetizer2 = document.createElement('h1');
    appetizer2.setAttribute('id', 'appetizer2');
    appetizer2.setAttribute('class', 'text-center');
    appetizer2.innerHTML = 'Jalapeno popper dip';
    list.appendChild(appetizer2);
    const appetizerParagraph2 = document.createElement('p');
    appetizerParagraph2.setAttribute('class', 'my-3 pb-3');
    appetizerParagraph2.innerHTML = 'The ultra-popular Mexican food Jalapeno Popper Dip appetizer.';
    list.appendChild(appetizerParagraph2) 

    const appetizer3 = document.createElement('h1');
    appetizer3.setAttribute('id', 'appetizer3');
    appetizer3.setAttribute('class', 'text-center');
    appetizer3.innerHTML = 'Cheese Ball Bites';
    list.appendChild(appetizer3);
    const appetizerParagraph3  = document.createElement('p');
    appetizerParagraph3.setAttribute('class', 'my-3 pb-3');
    appetizerParagraph3.innerHTML = 'Your favourite party-perfect appetizer made mini! A simply adorable starter for the holiday season.';
    list.appendChild(appetizerParagraph3) 

    return list;
  };

  appetizerContent.appendChild(appetizerHeader);
  appetizerContent.appendChild(appetizerItems());

  return appetizerContent;
};

  
  export default Appetizer;