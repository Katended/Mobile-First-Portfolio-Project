const bodyTag = document.querySelector('body');
const worksContainter = document.getElementById('portfolio');
const defaultWorks = [
  {
    title: 'Tonic',
    subtitle: 'CANOPY',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgdesk: './images/snapshoot-portfolio-desktop1.png',
    imgmob: './images/snapshoot-portfolio-mobile1.png',
    employment: ['Back End Dev', '2015'],
    technologies: ['HTML', 'CCS', 'JavaScript', 'Ruby', 'Bootstrap'],
    dataset: 0,
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'FACEBOOK',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgdesk: './images/snapshoot-portfolio-desktop2.png',
    imgmob: './images/snapshoot-portfolio-mobile2.png',
    employment: ['Full Stack Dev', '2015'],
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 1,
  },
  {
    title: 'Tonic',
    subtitle: 'FACEBOOK',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgdesk: './images/snapshoot-portfolio-desktop3.svg',
    imgmob: './images/snapshoot-portfolio-mobile3.png',
    employment: ['Full Stack Dev', '2015'],
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 2,
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'Uber',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgdesk: './images/snapshoot-portfolio-desktop4.png',
    imgmob: './images/snapshoot-portfolio-mobile4.png',
    employment: ['Lead Developer', '2018'],
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 3,
  },
];

// function to add element given tag name and class name
const createElement = (tag, className) => {
  const el = document.createElement(tag);
  if (typeof className !== 'undefined') { el.classList.add(className); }
  return el;
};

// function to create ul and li elements given an array of items & the class name of the ul element

const createList = (items, className) => {
  const ul = createElement('ul', className);
  items.forEach((item) => {
    const li = createElement('li');
    li.innerText = item;
    ul.appendChild(li);
  });
  return ul;
};

// function to create a button element given the class name, id and text content of the button
const createButton = (className, dataset, text) => {
  const btn = createElement('button', className);
  btn.innerText = text;
  btn.setAttribute('data-projectbtn', dataset);
  return btn;
};

// function expression for add other projects
const createDefaultWorks = (defaultWorks) => {
  // create card container
  const cardContainter = createElement('div', 'card-one');
  // create image div
  const imgDiv = createElement('div');
  cardContainter.appendChild(imgDiv);
  // create image
  const imgDesk = createElement('img');
  imgDesk.src = defaultWorks.imgdesk;
  imgDesk.classList.add('imgalin', `imgdesk${parseInt(defaultWorks.dataset + 1, 10)}`);
  imgDiv.appendChild(imgDesk);
  const imgMob = createElement('img');
  imgMob.src = defaultWorks.imgmob;
  imgMob.classList.add('imgalin', `imgmob${parseInt(defaultWorks.dataset + 1, 10)}`);
  imgDiv.appendChild(imgMob);
  // create image div
  const subSectionDiv = createElement('div', 'grid-element');
  cardContainter.appendChild(subSectionDiv);
  // Section title
  const defaultWorksTitle = createElement('h2');
  defaultWorksTitle.innerHTML = defaultWorks.title;
  subSectionDiv.appendChild(defaultWorksTitle);
  // Section span
  const subSectionSpan1 = createElement('span', 'sublinks');
  subSectionDiv.appendChild(subSectionSpan1);
  // Section span title
  const subSectionSpan2 = createElement('span');
  subSectionSpan2.innerHTML = defaultWorks.subtitle;
  subSectionSpan1.appendChild(subSectionSpan2);
  const employmentHistory = createList(defaultWorks.employment);
  subSectionSpan1.appendChild(employmentHistory);
  // description
  const descriptionTag = createElement('p');
  descriptionTag.innerHTML = defaultWorks.description;
  subSectionDiv.appendChild(descriptionTag);
  // Section span tech
  const sectionTechSpan = createElement('span', 'sublinksround');
  subSectionDiv.appendChild(sectionTechSpan);
  // list of technologies
  const technologiesList = createList(defaultWorks.technologies);
  sectionTechSpan.appendChild(technologiesList);
  // 'see project' button
  const seeProjectBtn = createButton('project-btn', defaultWorks.dataset, 'See Project');
  seeProjectBtn.classList.add('call-to-action');
  subSectionDiv.appendChild(seeProjectBtn);
  return cardContainter;
};

defaultWorks.forEach((item) => {
  worksContainter.appendChild(createDefaultWorks(item));
});

function windowModal(e) {
  const docFrag = document.createDocumentFragment();
  const projectCardInfo = defaultWorks[parseInt(e.target.dataset.projectbtn, 10)];
  const projectPopup = document.createElement('div', 'projectPopup');
  const cardContainter = createElement('div', 'popupContainer');
  const closeIcon = createElement('span', 'closePop');
  closeIcon.innerHTML = '&times;';
  closeIcon.id = 'closeBtn';
  cardContainter.appendChild(closeIcon);
  const subSectionSpan1 = createElement('span', 'sublinks');
  subSectionSpan1.id = 'item4';
  cardContainter.appendChild(subSectionSpan1);
  const defaultWorksTitle = createElement('h2', 'popUp');
  defaultWorksTitle.innerHTML = projectCardInfo.title;
  subSectionSpan1.appendChild(defaultWorksTitle);
  const subSectionSpan2 = createElement('span', 'subtittle');
  subSectionSpan2.innerHTML = projectCardInfo.subtitle;
  subSectionSpan1.appendChild(subSectionSpan2);
  const employmentHistory = createList(projectCardInfo.employment);
  subSectionSpan1.appendChild(employmentHistory);
  const imgDiv = createElement('div', 'item2');
  cardContainter.appendChild(imgDiv);

  // create image
  const imgDesk = createElement('img');
  imgDesk.src = projectCardInfo.imgdesk;
  imgDesk.classList.add('imgalin', `imgdesk${parseInt(projectCardInfo.dataset + 1, 10)}`);
  imgDiv.appendChild(imgDesk);
  const imgMob = createElement('img');
  imgMob.src = projectCardInfo.imgmob;
  imgMob.classList.add('imgalin', `imgmob${parseInt(projectCardInfo.dataset + 1, 10)}`);
  imgDiv.appendChild(imgMob);
  const subSectionDiv = createElement('div', 'grid-element');
  cardContainter.appendChild(subSectionDiv);
  // surround div
  const surroundDiv = createElement('div', 'bottomflex');
  subSectionDiv.appendChild(surroundDiv);
  // description
  const descriptionTag = createElement('p');
  descriptionTag.innerHTML = projectCardInfo.description;
  surroundDiv.appendChild(descriptionTag);
  // link div
  const linkDiv = createElement('div', 'linkdiv');
  surroundDiv.appendChild(linkDiv);
  // Section span tech
  const sectionTechSpan = createElement('span', 'sublinksround');
  linkDiv.appendChild(sectionTechSpan);
  // list of technologies
  const technologiesList = createList(projectCardInfo.technologies);
  sectionTechSpan.appendChild(technologiesList);
  const popupLinkContainer = createElement('span', 'popupLinkContainer');
  linkDiv.appendChild(popupLinkContainer);
  const liveLink = createElement('a', 'liveLink');
  liveLink.innerHTML = 'See live&nbsp;&nbsp;<img  src="/images/icons/live.png" size="50%">';
  liveLink.href = 'https://katended.github.io/mobilefirstproject2/Index.html';
  popupLinkContainer.appendChild(liveLink);
  const sourceLink = createElement('a', 'sourceLink');
  sourceLink.innerHTML = 'See source&nbsp;&nbsp;<img  src="/images/icons/git.png" class="btnIcons">';
  sourceLink.href = 'https://katended.github.io/mobilefirstproject2/';
  popupLinkContainer.appendChild(sourceLink);
  docFrag.appendChild(cardContainter);
  projectPopup.appendChild(docFrag);
  bodyTag.appendChild(projectPopup);
  document.querySelector('header').style.filter = 'blur(10px)';
  document.getElementById('about-me').style.filter = 'blur(10px)';
  document.getElementById('intro').style.filter = 'blur(10px)';
  document.getElementById('portfolio').style.filter = 'blur(10px)';
  document.getElementById('contact').style.filter = 'blur(10px)';

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', () => {
    bodyTag.removeChild(projectPopup);
    document.querySelector('header').style.filter = 'blur(0px)';
    document.getElementById('about-me').style.filter = 'blur(0px)';
    document.getElementById('intro').style.filter = 'blur(0px)';
    document.getElementById('portfolio').style.filter = 'blur(0px)';
    document.getElementById('contact').style.filter = 'blur(0px)';
  });
}
const projectsBtn = document.querySelectorAll('.call-to-action');
projectsBtn.forEach((btn) => btn.addEventListener('click', windowModal));