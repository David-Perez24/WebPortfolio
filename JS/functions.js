const Btn1 = document.querySelector("#Btn1");
const Btn2 = document.querySelector("#Btn2");
const Btn3 = document.querySelector("#Btn3");
const Btn4 = document.querySelector("#Btn4");
const left1 = document.querySelector("#l1");
const right1 = document.querySelector("#r1");
const left2 = document.querySelector("#l2");
const right2 = document.querySelector("#r2");
const left3 = document.querySelector("#l3");
const right3 = document.querySelector("#r3");
const presentationDiv = document.querySelector("#presentation");
const knowledgeDiv = document.querySelector("#knowledge");
const experienceDiv = document.querySelector("#experience");
const contains = [presentationDiv,knowledgeDiv,experienceDiv];
document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  Btn1.addEventListener("click", ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    containerDiv(0);

  });
  Btn2.addEventListener("click", ()=>{
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
    containerDiv(1);
  });
  Btn3.addEventListener("click", ()=>{
    window.scrollTo({
      top: window.innerHeight*2,
      behavior: 'smooth'
    });
    containerDiv(2);
  });
  Btn4.addEventListener("click", ()=>{
    window.scrollTo({
      top: window.innerHeight*3+15,
      behavior: 'smooth'
    });

  });
  left1.addEventListener("click", (e)=>{
    e.stopPropagation();
    clasesControl(0);
  });
  left2.addEventListener("click", (e)=>{
    e.stopPropagation();
    clasesControl(1);
  });
  left3.addEventListener("click", (e)=>{
    e.stopPropagation();
    clasesControl(2);
  });
  right1.addEventListener("click", (e)=>{
    e.stopPropagation();
    clasesControl(0);
  });
  right2.addEventListener("click", (e)=>{
    e.stopPropagation();
    clasesControl(1);
  });
  right3.addEventListener("click", (e)=>{
    e.stopPropagation();
    clasesControl(2);
  });

  presentationDiv.addEventListener("click", (e)=>{
    e.stopPropagation();
    clasesControl(0);
  });
  knowledgeDiv.addEventListener("click", (e)=>{
    e.stopPropagation();
    clasesControl(1);
  });
  experienceDiv.addEventListener("click", (e)=>{
    e.stopPropagation();
    clasesControl(2);
  });
});
const containerDiv = (selector) => {
  let inserHt, containData = [];
  let position = ["top-present","top-know","top-expe"];
  contains[selector].innerHTML = "";
  contains[selector].classList.replace('presentatDiv', 'container-data');
  contains[selector].removeAttribute('positionation');
  contains[selector].setAttribute("positionation",position[selector]);
    switch (selector) {
      case 0:
        containData[1] = `<div class='container-img'>
          <img src='Media/Images/profile.jpg' alt='No encontré la imagen'>
        </div>`;
        containData[0] = "<p>I'm studying to be system engineer, my vision for the future is to work in a great company, I search new experiences on this area."+
          "I'm proactive, self-taught person, I have predisposition and initiative to time of work, like to learn about new technologies."+
          "I have a big vision to the future.</p>";
        inserHt = insers("left","l1","paragraph-Left","p1-l1","right","r1","paragraph-Right","img-size",containData[0],containData[1]);
        break;
      case 1:
        containData[1] = "pepe";
        containData[0] = "<p>I'm studying to be system engineer, my vision for the future is to work in a great company, I search new experiences on this area."+
          "I'm proactive, self-taught person, I have predisposition and initiative to time of work, like to learn about new technologies."+
          "I have a big vision to the future.</p>";
        inserHt = insers("left","l2","paragraph-Left","p2-l2","right","r2","paragraph-Right","p2-r2",containData[0],containData[1]);
        break;
      case 2:
        containData[1] = "francisco";
        containData[0] = "<p>I'm studying to be system engineer, my vision for the future is to work in a great company, I search new experiences on this area."+
          "I'm proactive, self-taught person, I have predisposition and initiative to time of work, like to learn about new technologies."+
          "I have a big vision to the future.</p>";
        inserHt = insers("left","l3","paragraph-Left","p3-l3","right","r3","paragraph-Right","p3-r3",containData[0],containData[1]);
        break;
      }
      contains[selector].innerHTML = inserHt;
}
const panelDiv = (selector) => {
  let position = ["top-presDiv","topknowDiv","top-expeDiv"];
  contains[selector].innerHTML = "";
  contains[selector].classList.replace('container-data', 'presentatDiv');
  contains[selector].removeAttribute('positionation');
  contains[selector].setAttribute("positionation",position[selector]);
  switch (selector) {
    case 0:
      alert("hola");
      break;
    case 1:
      alert("hola2");
      break;
    case 2:
      alert("hola3");
      break;
    default:

  }
}

const clasesControl = (selector) => {
  const classLst = contains[selector].classList.contains('container-data');
  if (!classLst) {
    containerDiv(selector);
  }else{
    panelDiv(selector);
  }
}

const insers = (clsl,idl,clspl,idpl,clsr,idr,clspr,idpr,containl,containr) => {
  frag = `<div class='${clsl}' id='${idl}'>
                <div class='${clspl}' id='${idpl}'>
                  ${containl}
                </div>
              </div>
              <div class='${clsr}' id='${idr}'>
                <div class='${clspr}' id='${idpr}'>
                  ${containr}
                </div>`;
    return frag;
}
