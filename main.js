

    $(document).ready(()=>$('.footer-icon,.featred-link,.question-icone,.fas fa-search fa-fw').click(false))
    let info=document.querySelector('.featured-info');
    let inven=document.getElementById('invent');

    
    const cars=[{
         brand:'mercedes',
         image:'/images/mercedes.jpeg',
         model:'New Model',
         country:'germany',
         price:'20.000'
        
    },{
        brand:'ford',
        image:'/images/american5.jpeg',
        model:'New Model',
        country:'usa',
        price:'21.000'

       
   },{
    brand:'BMW',
    image:'/images/german5.jpeg',
    model:'New Model',
    country:'germany',
    price:'30.000'
   
},{
    brand:'Audi',
    image:'/images/german4.jpeg',   
    model:'New Model',
    country:'germany',
    price:'40.000'
   
},
{
    brand:'Mustang',
    image:'/images/american4.jpeg',
    model:'New Model',
    country:'usa',
    price:'23.000'    
   
},
{
    brand:'ford',
    image:'/images/american5.jpeg',   
    model:'New Model',
    country:'usa',
    price:'18.000'
   
}
]


 document.addEventListener('DOMContentLoaded', ()=> {

info.innerHTML= '';
inven.innerHTML=' ';


let data=" ";
let output=" ";

cars.forEach(item=>{

   // console.log(item.image);

         data +=`<div class="featred-item my-3 d-flex p-2 text-capitalize flex-wrap">
         <span data-img="${item.image}" class="featred-icon mr-2">
                <i class="fas fa-car-alt"></i>
        </span>
         <h5 class="font-weight-bold mx-1">${item.brand}</h5>
         <h5 class="font-weight-bold mx-1">${item.model}</h5>

     </div>`;
       })

       info.innerHTML=data;

       info.addEventListener('click',e=>{

        
      if (e.target.parentElement.classList.contains('featred-icon')){
         
          const img=e.target.parentElement.dataset.img;
          document.querySelector('.featred-photo').src=img;
          
      }

       })

   
     cars.forEach(item=>{

        output +=`<div class="col-10 mx-auto my-3 col-md-6 col-lg-4 car-single ${item.country}">
        <card class="card car-card">
        <img src="${item.image}" class="card-img car-img"alt="">
      <div class="card-body">
          <div class="car-info d-flex justify-content-between">
              <div class="car-text text-uppercase">
                  <h6 class="font-weight-bold">${item.brand}</h6>
                  <h6>${item.model}</h6>
              </div>
              <h5 class="car-value align-selft-center py-2 px-3">
                  ${item.price}
              </h5>
          </div>
      </div>
      <div class="card-footer text-capitalize d-flex justify-content-between">
          <p> <span> <i class="fas fa-cogs"></i></span>sedan</p>
          <p> <span> <i class="fas fa-cogs"></i></span>automatic</p>
          <p> <span> <i class="fas fa-gas-pump"></i></span>sedan</p>

      </div>
        </card>
    </div>`;

     })  
 
     inven.innerHTML=output;

 

 const filter=document.querySelectorAll('.filter-btn')
 
 filter.forEach(btn=>{
  
     btn.addEventListener('click',(e)=>{
   
       const value=event.target.dataset.filter;
       
     const singlecar=document.querySelectorAll('.car-single');

     console.log(singlecar);

     singlecar.forEach(item=>{

     if (value === "all"){

        item.style.display="block";
     }else{
        
       (!item.classList.contains(value) ) ? item.style.display="none" : item.style.display="block"

     }

     })


     

     })

 })
})


window.sr=ScrollReveal();
sr.reveal('#cont',{
    duration:2000,
    origin:'top',
    distance:'600px'
})

sr.reveal('#ski .col-xs-12',{
    duration:3000,
    origin:'bottom',
    distance:'500px'
})


sr.reveal('.tool1',{
    duration:2000,
    origin:'left',
    distance:'500px'
})

sr.reveal('.tool2',{
    duration:2000,
    origin:'right',
    distance:'500px'
})

sr.reveal('.tool3',{
    duration:2000,
    origin:'left',
    distance:'500px'
})



sr.reveal('.footer-icon',{
    duration:2000,
    origin:'left',
    distance:'500px'
})














//  window.addEventListener('load',()=>
 
//      setTimeout(()=>{
//         document.querySelector('.preloader')
//         .classList.add('hideloader')
    
//      },1000)
    
            
//         )
     
 
//  $(document).ready(function() {



//     window.addEventListener('load',()=>
 
//     setTimeout(()=>{
//        document.querySelector('.preloader')
//        .classList.add('hideloader')
   
//     },1000)
   
           
//        )


//        $(window).scroll(function(){
//         if($(document).scrollTop() > 50){
//             $('nav').addClass('shrink');
            
            
         
//         } else {
//             $('nav').removeClass('shrink');
//         }
//     });





