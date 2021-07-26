  
       const joke = document.getElementById("joke");
       const next_btn = document.getElementById("nextbtn");
       
    //    const loadJoke = () => {

    //     const setHeader = {
    //         headers : {
    //             Accept : "application/json"
    //         }
    //     }

    //    fetch('https://icanhazdadjoke.com',setHeader)
    //    .then((res) => res.json())
    //    .then((data) => {
    //        joke.innerHTML = data.joke;
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //    })    
    // }

    const loadJoke = async() => {
     try{
          const  setHeader = {
            headers : {
                Accept: "application/json"
         }
        }
      const res = await fetch('https://icanhazdadjoke.com',setHeader);
      const data = await res.json();
      joke.innerHTML=data.joke;
         
    }catch(err) {
        console.log(`The error is ${err}`);
    }
}

       next_btn.addEventListener('click', loadJoke);
       loadJoke();
  
// for 3d styling

const container = document.querySelector(".container");
const heading = document.querySelector(".info h4");

container.addEventListener('mousemove', (e) => {
    let xAxis=(window.innerWidth/2 - e.pageX) / 25;
    let yAxis=(window.innerHeight/2 - e.pageY) / 25;
    container.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

// Animate in 
container.addEventListener('mouseenter', (e) => {
    container.style.transition="none";
    heading.style.transform="translateZ(100px)"
    joke.style.transform="translateZ(150px)";
    next_btn.style.transform="translateZ(100px)"

});
container.addEventListener('mouseleave', (e) => {
    container.style.transition="all 0.5s ease";
    container.style.transform= "rotateY(0deg) rotateX(0deg)";
    heading.style.transform="translateZ(0px)"
    joke.style.transform="translateZ(0px)";
    next_btn.style.transform="translateZ(0px)"

});
