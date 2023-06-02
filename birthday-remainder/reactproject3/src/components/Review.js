import people from './data'
import {useState} from 'react'
const Review=()=>{

const [index,setIndex]=useState(0)
const {image,name,job,text}=people[index]
const indexValue=(number)=>{
    if(number>people.length-1){
       return 0
    }
    else if(number<0){
        return people.length-1
    }
    else{
        return number
    }

}
    const nextBtn=()=>{
        setIndex((index)=>{
            let newIndex=index+1
            return indexValue(newIndex);
        })
       
    }
    const prevBtn=()=>{
        setIndex((index)=>{
            let newIndex=index-1
            return indexValue(newIndex);
        })
       
    }
    const randomBtn=()=>{
        let random= Math.floor(Math.random()*people.length)
        if(random===index){
            random=index+1
        }
        let newIndex=random
       
        setIndex(indexValue(newIndex))
    }
    return(
        <>
          <div class="d-flex justify-content-center mt-4">
          <div
            class="
              shadow
              p-3
              mb-5
              bg-body-tertiary
              rounded
              card
              border border-0
              text-center
            " 
            style={{width: "35rem"}}
          >
            <div class="text-center" >
              <img
                src={image}
                id="image"
                class="rounded-circle mt-3"
                width="140px"
                height="140px"
                alt=""
              />
            </div>
            <div class="card-body">
              <h5 class="card-title fs-4 fw-bold" style={{letterSpacing: "5px"}} id="name">
               {name}
              </h5>
              <p class="text-primary fs-4" id="job">{job}</p>
              <p class="card-text text-muted" id="description">
               {text}
               <br />
               </p>
               <button id="pre-btn" class="btn bg-light btn-sm" onClick={prevBtn}
               ><i
                 class="bi bi-chevron-compact-left"
                 style={{fontSize: "30px" ,color:"dodgerblue"}}
               ></i>
          </button>
         
               <button  id="next-btn" class="btn bg-light btn-sm" onClick={nextBtn}>
            
               <i
                 class="bi bi-chevron-compact-right"
                 style={{fontSize: "30px" ,color:"dodgerblue"}}
               ></i>
             </button>
             <br/>
              <a href="#random" class="btn btn-outline-info" onClick={randomBtn}id="random">Surprise Me</a>
            </div>
          </div>
        </div></>
    )
}
export default Review
