// var get = document.getElementById("trans")
// function move( ){
//     get.style.transitionTimingFunction = "linear";
// }
// const container = document.querySelector("container")
// const  login = document.getElementById(".LOGIN")

// const  signup = document.getElementById(".SIGNUP")
// login.addEventListener('click' , () => {
//     container.classList.add("active")
// })
// signup.addEventListener('click' , () => {
//     container.classList.remove("active")
// })
// // document.querySelector(".SIGNUP").style.display= "none";
// function move()
// {
//     get.style.transitionTimingFunction = "linear";
//     document.querySelector(".LOGIN").style.display= "none";
// }

// var forget = document.getElementById("resetTag");
// forget.addEventListener("click" , function ()
// {
//     document.querySelector(".loginBox").style.display = "none";
//     document.querySelector(".forgetbox").style.display = "none" ;
//     document.querySelector(".forgetbox").style.display = "block";
// });
// var plusRegister = document.getElementById("plus");
// plusRegister.addEventListener("click" , function ()
// {
//     document.querySelector(".loginBox").style.display = "none";
//     document.querySelector(".forgetbox").style.display = "none" ;
//     document.querySelector(".registerBox").style.display = "block";
// });
// var cancelbox = document.getElementById("cancel");
// cancelbox.addEventListener("click" , function ()
// {
//     document.querySelector(".registerBox").style.display = "none";
//     document.querySelector(".forgetbox").style.display = "none" ;

//     document.querySelector(".loginBox").style.display = "block";
// });
// var back = document.getElementById("back");
// back.addEventListener("click" , function () {
//     document.querySelector(".registerBox").style.display = "none";
//     document.querySelector(".forgetbox").style.display = "none" ;

//     document.querySelector(".loginBox").style.display = "block";
// })
// var register = document.getElementById("register") ;
// register.addEventListener("click" , function () {
//     document.querySelector(".registerBox").style.display = "none";

// })



// flappy bird game 

// let move_speed = 3
// let gravity = 0.5;

// let bird = document.querySelector('.bird');
// let img = document.getElementById('bird');
// let bird_props = bird.getBoundingClientRect();
// let background = document.querySelector('.background').getBoundingClientRect();
// let score_val = document.querySelector('.score_val');
// let message = document.querySelector('.message');
// let score_title = document.querySelector('.score_title');
// let game_state = 'start';
// img.style.display = "none";
// message.classList.add('messageStyle');
// document.addEventListener('keydown', function (e) {
//     if (e.key == 'Enter' && game_state !== 'play') {
//         document.querySelectorAll('.pipe_sprite').forEach(function (e) {
//             e.remove();
//         });
//         img.style.display = 'block';
//         bird.style.top = '40vh';
//         game_state = 'play';
//         message.innerHTML = '';
//         score_title.innerHTML = ' Score : ';
//         score_val.innerHTML = '0';
//         message.classList.remove('messageStyle');
//         play();

//     }
// });
// function play() {
//     function move() {
//         if (game_state !== 'play') {
//             return;
//         }
//         let pipe_sprite = document.querySelectorAll('.pipe_sprite');
//         pipe_sprite.forEach(function (element) {
//             let pipe_sprite_props = element.getBoundingClientRect();
//             bird_props = bird.getBoundingClientRect();

//             if (pipe_sprite_props.right <= 0) {
//                 element.remove();
//             }
//             else {
//                 if (bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width && bird_props.left + bird_props.width > pipe_sprite_props.left && bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height && bird_props.top + bird_props.height > pipe_sprite_props.top) {

//                     game_state = 'End';
//                     message.innerHTML = 'Game Over'.fontcolor('red') + '<br> press Enter To  Restart';
//                     message.classList.add('messageStyle');
//                     img.style.display = 'none';
//                     return;
//                 }
//                 else {
//                     if (pipe_sprite_props.right < bird_props.left &&
//                         pipe_sprite_props.right + move_speed >= bird_props.left &&
//                         element.increase_score == '1') {
//                         score_val.innerHTML = + score_val.innerHTML + 1;
//                     }
//                     element.style.left = pipe_sprite_props.left - move_speed + 'px';


//                 }

//             }
//         });
//         requestAnimationFrame(move);
//     }
//     requestAnimationFrame(move);
//     let bird_dy = 0 ;
//     function apply_gravity()
//     {
//         if(game_state !== 'play')
//         {
//             return;
//         }
//         bird_dy = bird_dy + grativy ;
//         document.addEventListener('keydown', (e) => {
//             if (e.key=== 'ArrowUp' || e.key === ' ')
//             {
//                 img.src = 'image/Bird-2.png';
//                 bird_dy = -7.6;
//             }
//         });
//         document.addEventListener('keyup', (e) => {
//             if (e.key=== 'ArrowUp' || e.key === ' ')
//             {
//                 img.src = 'image/Bird.png';
//             }
//         });
//         if(bird_props.top <=0 || bird_props.bottom>= background.bottom)
//         {
//             game_state = 'End';
//             message.style.left = '28vw';
//             window.location.reload();
//             message.classList.remove('messageStyle');
//             return;
//         }
//         bird.style.top = bird_props.top +bird_dy + 'px';
//         bird_props = bird.getBoundingClientRect();
//         requestAnimationFrame(apply_gravity); 

//     }
//     requestAnimationFrame(apply_gravity);
//     let pipe_seperation = 0;
//     let pipe_gap = 35 ;
//     function create_pipe()
//     {
//         if (game_state !== 'play')
//         {
//             return;
//         }
//         if(pipe_seperation>115)
//         {
//             pipe_seperation=0;
//             let pipe_posi = Math.floor(Math.random() *43 ) + 8 ;
//             let pipe_sprite_inv = document.createElement('div');
//             pipe_sprite_inv.className= 'pipe_sprite';
//             pipe_sprite_inv.style.top = pipe_posi -70 + 'vh';
//             pipe_sprite_inv.style.left = '100vw' ;
//             document.body.appendChild(pipe_sprite_inv);
//             let pipe_sprite = document.createElement('div');
//             pipe_sprite.className ='pipe_sprite';
//             pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
//             pipe_sprite.style.left = '100vw';
//             pipe_sprite.increase_score = '1';
//             document.body.appendChild(pipe_sprite);
//         }
//         pipe_seperation++;
//         requestAnimationFrame(create_pipe);
//     }
//     requestAnimationFrame(create_pipe);
// }
let move_speed = 3;
let gravity = 0.5;

let bird = document.querySelector('.bird');
let img = document.getElementById('bird');
let bird_props = bird.getBoundingClientRect();
let score_val = document.querySelector('.score_val');
let message = document.querySelector('.message');
let score_title = document.querySelector('.score_title');
let game_state = 'start';

message.classList.add('messageStyle');

document.addEventListener('keydown', function (e) {
    if (e.key == 'Enter' && game_state !== 'play') {
        document.querySelectorAll('.pipe_sprite').forEach(function (e) {
            e.remove();
        });
        img.style.display = 'block';
        bird.style.top = '40vh';
        game_state = 'play';
        message.innerHTML = '';
        score_title.innerHTML = ' Score : ';
        score_val.innerHTML = '0';
        message.classList.remove('messageStyle');
        play();
    }
});

function play() {
    function move() {
        if (game_state !== 'play') {
            return;
        }

        let pipe_sprite = document.querySelectorAll('.pipe_sprite');
        pipe_sprite.forEach(function (element) {
            let pipe_sprite_props = element.getBoundingClientRect();
            bird_props = bird.getBoundingClientRect();

            if (pipe_sprite_props.right <= 0) {
                element.remove();
            } else {
                if (
                    bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width &&
                    bird_props.left + bird_props.width > pipe_sprite_props.left &&
                    bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height &&
                    bird_props.top + bird_props.height > pipe_sprite_props.top
                ) {
                    game_state = 'End';
                    message.innerHTML = 'Game Over'.fontcolor('red') + '<br> Press Enter To Restart';
                    message.classList.add('messageStyle');
                    img.style.display = 'none';
                    return;
                } else {
                    if (
                        pipe_sprite_props.right < bird_props.left &&
                        pipe_sprite_props.right + move_speed >= bird_props.left &&
                        element.increase_score === '1'
                    ) {
                        score_val.innerHTML = +score_val.innerHTML + 1;
                    }
                    element.style.left = pipe_sprite_props.left - move_speed + 'px';
                }
            }
        });
        requestAnimationFrame(move);
    }

    requestAnimationFrame(move);

    let bird_dy = 0;

    function apply_gravity() {
        if (game_state !== 'play') {
            return;
        }

        bird_dy = bird_dy + gravity;

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp' || e.key === ' ') {
                img.src = 'images/Bird-2.png';
                bird_dy = -7.6;
            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowUp' || e.key === ' ') {
                img.src = 'images/Bird.png';
            }
        });

        if (bird_props.top <= 0 || bird_props.bottom >= window.innerHeight) {
            game_state = 'End';
            message.style.left = '28vw';
            message.classList.remove('messageStyle');
            // Reload only if necessary, you might want to handle game over differently
            // window.location.reload();
            return;
        }

        bird.style.top = bird_props.top + bird_dy + 'px';
        bird_props = bird.getBoundingClientRect();

        requestAnimationFrame(apply_gravity);
    }

    requestAnimationFrame(apply_gravity);

    let pipe_separation = 0;
    let pipe_gap = 35;

    function create_pipe() {
        if (game_state !== 'play') {
            return;
        }

        if (pipe_separation > 115) {
            pipe_separation = 0;
            let pipe_posi = Math.floor(Math.random() * 43) + 8;

            let pipe_sprite_inv = document.createElement('div');
            pipe_sprite_inv.className = 'pipe_sprite';
            pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
            pipe_sprite_inv.style.left = '100vw';
            document.body.appendChild(pipe_sprite_inv);

            let pipe_sprite = document.createElement('div');
            pipe_sprite.className = 'pipe_sprite';
            pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
            pipe_sprite.style.left = '100vw';
            pipe_sprite.increase_score = '1';
            document.body.appendChild(pipe_sprite);
        }

        pipe_separation++;
        requestAnimationFrame(create_pipe);
    }

    requestAnimationFrame(create_pipe);
}


////////
window.addEventListener('scroll', reveal);

function reveal() {
  console.log('scroll event triggered');

  var reveals = document.querySelectorAll('.reveal');
  for (var index = 0; index < reveals.length; index++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[index].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[index].classList.add('active');
    } else {
      reveals[index].classList.remove('active');
    }
  }
}
