const btn=document.querySelectorAll('.list-item')
const container=document.querySelectorAll('.container')
const item_list=document.querySelector('.item-list-container')
const alt_list=document.querySelector('.alt-list')
const dark_btn=document.querySelector('#dark-btn')
const light_btn=document.querySelector('#light-btn')
const dark_btn1=document.querySelector('#dark-btn1')
const light_btn1=document.querySelector('#light-btn1')
const name1=document.querySelector('.name')
const show_menu=document.querySelector('.show-menu')
const close_btn=document.querySelector('.close-btn')
import { Application } from '@splinetool/runtime';


const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);

//app.load('https://prod.spline.design/PQxH3gC5eV8nOzgC/scene.splinecode');
app.load('https://prod.spline.design/NceLiLWqgDGFv8bk/scene.splinecode');


const btn_click=()=>{

    item_list.classList.add('hide')
    alt_list.classList.remove('hide')
    // name1.classList.remove('hide')
}

const show_btn_click=()=>{
    // console.log('clicked')
    alt_list.classList.add('hide')
    item_list.classList.remove('hide')
    // name1.classList.add('hide')

    // item_list.classList.add('hide')
    // alt_list.classList.remove('show-menu')
    // alt_list.style.display='none'
}

show_menu.addEventListener('click',show_btn_click)
close_btn.addEventListener('click',btn_click)


const change_darkmode=()=>{
    // console.log('executed')
    dark_btn.classList.add('hide')
    dark_btn1.classList.add('hide')
    var r = document.querySelector(':root')
    var rs = getComputedStyle(r)
  let val=rs.getPropertyValue('--light-mode-primary')
  let val2=rs.getPropertyValue('--light-text-color')
  r.style.setProperty('--dark-mode-primary', val);
  r.style.setProperty('--dark-text-color', val2);
  r.style.setProperty('--input-text-color-dark','#565151');
  r.style.setProperty('--input-color-dark','#dad6de');
  r.style.setProperty('--project-content-light','#e2e1e4')
  r.style.setProperty('--description','#3e0c64')
  r.style.setProperty('--icon-color','#3e0c64')

  
  light_btn.classList.remove('hide')
  light_btn1.classList.remove('hide')
}


const change_lightmode=()=>{
    console.log('hello345')
    light_btn.classList.add('hide')
    light_btn1.classList.add('hide')
    var r = document.querySelector(':root')
    var rs = getComputedStyle(r)
  let val=rs.getPropertyValue('--dark-mode-primary')
  console.log(val)
  let val2=rs.getPropertyValue('--dark-text-color')
  r.style.setProperty('--dark-mode-primary', '#2f1c42');
  r.style.setProperty('--dark-text-color', '#fefefe');
  r.style.setProperty('--input-text-color-dark','aliceblue')
  r.style.setProperty('--input-color-dark','#3e0c64')
  r.style.setProperty('--project-content-light','#3e0c64')
  r.style.setProperty('--description','#eeeeee')
  r.style.setProperty('--icon-color','#eeeeee')
  dark_btn.classList.remove('hide')
  dark_btn1.classList.remove('hide')
}

// })
let pos;

var offsety;
var containerheight

btn.forEach((link,id)=>{
    link.addEventListener('click',(e)=>{
        let pos=0;
        const id = e.currentTarget.getAttribute("href").slice(1)+`s`;
        //console.log(id)
        const element=document.getElementById(id)
        // console.log(element)
        let containerheight = element.getBoundingClientRect().height
        let navheight=item_list.getBoundingClientRect().height
        link.classList.add('active')
        clear_btn(id)
        console.log(element.offsetTop)
         pos=element.offsetTop
        //  console.log(pos)
         if(id===0){
            pos=0
         }
         pos=pos-navheight;
        //  pos=(height*id);
        window.scrollTo({
            top:pos
        })
    })
})


const clear_btn=(id1)=>{
    btn.forEach((link,id)=>{
        if(id1!==id){
            link.classList.remove('active')
        }
    })
}


