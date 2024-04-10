let header = document.getElementById('header');
let text = document.getElementById('ptext');
let picture = document.getElementById('image');
let site = document.getElementById('primary');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');


function tab(name) {
  let border = "5px solid rgb(68, 25, 161)";

  if (name === 'tabone') {
    one.style.borderBottom = border;
    two.style.borderBottom = "none";
    three.style.borderBottom = "none";
    four.style.borderBottom = "none";
  }
  if (name === 'tabtwo')
  {
    two.style.borderBottom = border;
    one.style.borderBottom = "none";
    three.style.borderBottom = "none";
    four.style.borderBottom = "none";
  }
  if (name === 'tabthree')
  {
    three.style.borderBottom = border;
    one.style.borderBottom = "none";
    two.style.borderBottom = "none";
    four.style.borderBottom = "none";
  }
  if (name === 'tabfour'){
    four.style.borderBottom = border;
    one.style.borderBottom = "none";
    two.style.borderBottom = "none";
    three.style.borderBottom = "none";
  }

  switch (name) {
    case 'tabone':
      header.innerHTML = "Basic Details";
      text.innerHTML = "Name - Leykun Taye \<br /> Address - Bishoftu, Ethiopia \<br /> PoB - Bale, Oromia \<br /> Interested in Web development";
      picture.style.background = "url('logo.png')";
      picture.style.backgroundRepeat = "no-repeat";
      picture.style.borderRadius = "10px";
      break;
      case 'tabtwo':
      header.innerHTML = "Bio";
      text.innerHTML = "I'm a Frontend Focused junior Web Developer building and managing the Front-end of Websites and Web Applications including (UX & UI design) that leads to the success of the overall product. \<br />" +
                         "\<br/> I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches myskills and experience then don't hesitate to contact me.";
      picture.style.background = "url('study.jpg')";
      picture.style.backgroundRepeat = "no-repeat";
      picture.style.backgroundSize = "contain";
      picture.style.borderRadius = "10px";
      break;
      case 'tabthree':
      header.innerHTML = "Education details";
      text.innerHTML = "Primary School - Jamaican Rastafarian Development Community School \<br /> High school - Lead star international Academy \<br /> Preparatory - Bishotu Preparatory school \<br /> BSC - Bahir dar University 4\<sup>th</sup> year Information System student";
      picture.style.background = "url('student.jpg')";
      picture.style.backgroundRepeat = "no-repeat";
      picture.style.backgroundSize = "contain";
      picture.style.borderRadius = "10px";
      break;
      case 'tabfour':
      header.innerHTML = "Project four";
      text.innerHTML = "Email - leykunta@gmail.com \<br /> Phone - 0926475493";
      picture.style.background = "url('gmail.png')";
      picture.style.backgroundRepeat = "no-repeat";
      picture.style.backgroundSize = "contain";
      picture.style.borderRadius = "10px";
      break;
  }
}