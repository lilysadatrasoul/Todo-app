/*const products = [
    { name: "Laptop", stock: 0 },
    { name: "Phone", stock: 3 },
    { name: "Tablet", stock: 1 }
];

const result = products.map((product) =>//////////////داخل تابع کال بک اگه ریترن  نکنیم نیاز نیست }را بذاریم/////////
    product.stock > 0
        ? `${product.name} is available`
        : `${product.name} is not available`
);

console.log(result);*/

//////////////////////////////DOM/////////////
/*<p id="text">Welcome</p>
const text=document.getElementById("text")
<h2 id="name">Ali</h2>
const name=document.getElementById("name")
name.textContent="sara"


<p id="text">Hello</p>
<button id="btn">Change text</button>
const text=document.getElementById("text")
const button=document.getElementById("btn")

button.addEventListener("click",()=>{
    text.textContent="welcome"
})*/

/*

const count=document.getElementById("count")
const button=document.getElementById("btn")
let number=0
button.addEventListener("click",()=>{
    number+=1
   count.textContent=number

})*/


/*/////////////////////////////// add    minus   reset    change color       ///////////////////////*/

//   const count=document.getElementById("count2")
//   const add=document.getElementById("add")
//   const minus=document.getElementById("minus")
//   const btn=document.getElementById("reset")
//   const text=document.getElementById("text")
//   const color=document.getElementById("colorBtn")
//   const inp=document.getElementById("nameInput")
//   const button=document.getElementById("showBtn")
//   const p=document.getElementById("result")
//   let number =0

//   add.addEventListener("click",()=>{
//     number+=1
//     count.textContent=number

//   })
//   minus.addEventListener("click",()=>{
//     number-=1
//     count.textContent=number
//   })



  
//   btn.addEventListener("click",()=>{

//     number=0
//     count.textContent=number
   
//   })

//   color.addEventListener("click",()=>{
//     text.style.color = "red";
//     document.body.style.backgroundColor="lightblue"
//   })

//  button.addEventListener("click",()=>{
//     inp.value===""
//     ? (p.textContent="Please enter your name")
//     : (p.textContent= inp.value)&&(inp.value = "")
//  })

//  button.addEventListener("click", () => {
//     if (inp.value === "") {
//         p.textContent = "Please enter your name";
//     } else {
//         p.textContent = inp.value;
//         inp.value = "";
//     }
// });

///////// addclass   removeclass   toggleclass//// 

// const text = document.getElementById("text");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
    
//     text.classList.toggle("active");
// });




// const body = document.body;
// const button = document.getElementById("btn");

// const classes = ["red", "blue", "green"];
// let index = 0;

// button.addEventListener("click", () => {
//    body.classList.remove(...classes);///////////////  spread

//     if (index < classes.length) {
//         body.classList.add(classes[index]);
//         index += 1;
//     } else {
//         index = 0;
//     }
// });


////////////////////    تمرین ایندکس///////



// const p=document.getElementById("name")
// const btn=document.getElementById("btn")
// const names = ["Ali", "Sara", "Mani"];
// let index = 0;

// btn.addEventListener("click",()=>{
    
//       p.textContent=names[index]
//       index+=1
    
//      if (index === names.length) {
//         index = 0;
//     }
// })


// const p=document.getElementById("text")
// const btn=document.getElementById("btn")
// const colors = ["red", "blue", "green"];
// let index = 0;
// btn.addEventListener("click",()=>{
//     p.style.color=colors[index]//////////////////////  مهم
//     index+=1
//     if(index===colors.length){
//         index=0
//     }

// })

// const p=document.getElementById("text")
// const btn=document.getElementById("btn")
// const names = ["Ali", "Sara", "Mani"];
// const colors = ["red", "blue", "green"];
// let index = 0;
// btn.addEventListener("click",()=>{
//     p.textContent=names[index]
//     p.style.color=colors[index]
//     index+=1
//     if(index===(colors.length||names.length))//// این منطق غلطه 
//     ////////////////////////// درستش پایینه
//     (index >= names.length || index >= colors.length)
//         index=0
// })




// const body = document.body;
// const btn = document.getElementById("btn");

// const classes = ["red", "blue", "green"];
// let index = 0;

// btn.addEventListener("click", () => {
//     body.classList.remove(...classes);

//     if (index < classes.length) {
//         body.classList.add(classes[index]);
//     }

//     index += 1;

//     if (index > classes.length) {
//         index = 0;
//     }
// });

//////////////////////////////HTML = چیزهای ثابت صفحه
/////////////////////////////JavaScript = چیزهایی که در لحظه تغییر می‌کنن یا ساخته می‌شن


// const h2 = document.createElement("h2");
// h2.textContent="welcom"
// document.body.appendChild(h2);



// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     const p = document.createElement("p");
//     p.textContent = "New item";
//     p.classList.add("myText")
//     document.body.appendChild(p);
// });

/////////////////////////////تو دو بدون ذخیره
// const btn=document.getElementById("btn")///////////////////////////////input  button  li  ul////////
// const list=document.getElementById("list")
// const inp=document.getElementById("nameInput")

// const savedTasks = localStorage.getItem("tasks");
// let tasks = [];


// if (savedTasks !== null) {
//     tasks = JSON.parse(savedTasks);
// }

// function saveTasks() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function createTaskElement(taskValue) {
//     const li = document.createElement("li");

//     const taskText = document.createElement("span");
//     taskText.textContent = taskValue;
//     li.appendChild(taskText);
// //دکمه ی حذف
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("deleteBtn");
//     li.appendChild(deleteBtn);

//         deleteBtn.addEventListener("click", (event) => {
//         event.stopPropagation();

//         const index = tasks.indexOf(taskValue);

//         tasks.splice(index, 1);

//         saveTasks();

//         li.remove();
//     });

    


//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.classList.add("editBtn");
//     li.appendChild(editBtn);    

//     list.appendChild(li);
// }

// tasks.forEach((task) => {
//     createTaskElement(task);
// });

//     function addTask() {
//     if (inp.value.trim() === "") {////////مفهوم تریم////
//         return;//////////////مفهوم ری ترن در ایف////////
//     }

//    const taskValue = inp.value.trim();

//     tasks.push(taskValue);
//     savedTasks();
   
//     createTaskElement(taskValue);
    
   

//     ///بخش دیلیت

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("deleteBtn");
//     li.appendChild(deleteBtn)
    

//     deleteBtn.addEventListener("click",(event)=>{
//     event.stopPropagation();//////////////////نذار این کلیک از دکمه بره به عنصرهای والد مثل ال ای
        
//     const index=tasks.indexOf(taskValue);
//      tasks.splice(index, 1);
//      saveTasks();
    
//         li.remove();
//       //////وقتی یک ایونت از عنصر بچه به والد میره و تو نمی‌خوای والد هم واکنش نشون بده، از stopPropagation() استفاده می‌کنی.
//     });

// ///بخش ویرایش

//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.classList.add("editBtn")
//     li.appendChild(editBtn);

//     function saveEdit(){
//             if (editInput.value.trim() === "") {
//             editInput.replaceWith(taskText);
//             editBtn.textContent = "Edit";
//             return;
//         }

//         taskText.textContent = editInput.value.trim();
//         editInput.replaceWith(taskText);
//         editBtn.textContent = "Edit";
//     }


// let editInput;

// editBtn.addEventListener("click", (event) => {
//     event.stopPropagation();

//     if (editBtn.textContent === "Edit") {
//         editInput = document.createElement("input");
//         editInput.value = taskText.textContent;

//     editInput.addEventListener("click", (event) => {
//          event.stopPropagation();
//     });   
    
    
//     editInput.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//         saveEdit();
//     }
// });

//         taskText.replaceWith(editInput);
//         editBtn.textContent = "Save";
//         editInput.focus();
//     } else {
//       saveEdit();
//     }
// });


//     li.addEventListener("click", () => {
//             li.classList.toggle("done");
//     });

//     list.appendChild(li);

//     inp.value = "";
//     inp.focus();////////یعنی نشانگر تایپ برگرده داخل اینپوت
// }
  
//    btn.addEventListener("click", () => {
//     addTask();
// });


// inp.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//         addTask();
       
//     }
// });
// ///////////////////////////////////////////////////////////تو دو بدون ذخیره

/////////////////////////////////////////////////////////localStorage

// localStorage.setItem("userName","sara")

// const esm=localStorage.getItem("userName")
// console.log(esm);
    
////////////////////////////////////////////////////////JSON.stringify////JSON.parse
//////////////////////////ارایه یا ابجکت به رشته JSON.stringify
////////////////////رشته یا  ارایه به  ابجکت JSON.parse

// const colors = ["red", "blue", "green"];
// localStorage.setItem("colors",JSON.stringify(colors))
// const savedColors=localStorage.getItem("colors")
// const colorArray=JSON.parse(savedColors)
// console.log(colorArray)
  

const btn = document.getElementById("btn");
const list = document.getElementById("list");
const inp = document.getElementById("nameInput");
const allBtn = document.getElementById("allBtn");
const doneBtn = document.getElementById("doneBtn");
const pendingBtn = document.getElementById("pendingBtn");
const taskCount = document.getElementById("taskCount");
const doneCount = document.getElementById("doneCount");
const pendingCount = document.getElementById("pendingCount");
const clearBtn = document.getElementById("clearBtn");
const sortBtn = document.getElementById("sortBtn");



//اطلاعات قبلی رو از حافظه می‌گیریم
const savedTasks = localStorage.getItem("tasks");

let tasks = [];
///////اگر قبلاً چیزی ذخیره شده، تبدیلش کن به آرایه و بریز داخل تسکس

if (savedTasks !== null) {
    tasks = JSON.parse(savedTasks);
}

function updateCount(){
    taskCount.textContent = `Total tasks: ${tasks.length}`;

}
function updateCountDone() {
    const doneTasks = tasks.filter((task) => task.done === true);

    doneCount.textContent = `Done tasks: ${doneTasks.length}`;
}
function updateCountPending() {
    const pendingTasks = tasks.filter((task) => task.done === false);

    pendingCount.textContent = `pending tasks: ${pendingTasks.length}`;
}

updateCount();
updateCountDone();
updateCountPending();



///////برای ذخیره هم یه تابع جدا ساختیم
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//////// وظیفه این تابع اینه که یک تسک موجود رو بگیره و ظاهرش رو روی صفحه بسازه

function createTaskElement(task) {

    const li = document.createElement("li");

    if (task.done === true) {/////////////برای اینکه بعد از رفرش حالت انجام‌شده برگرده
        li.classList.add("done");
    }
    const taskInfo = document.createElement("div");
    const taskActions = document.createElement("div");


    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    taskInfo.appendChild(taskText);

    const taskDate = document.createElement("small");
    taskDate.textContent = task.createdAt;
    taskInfo.appendChild(taskDate);




// دکمه حذف//// داخل تابع هست

const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    taskActions.appendChild(deleteBtn);

deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();

        tasks = tasks.filter((item) => item.id !== task.id);

        /////const index = tasks.findIndex((item) => item.id === task.id);

        /////tasks.splice(index, 1);

        saveTasks();
        updateCount();
        updateCountDone();
        updateCountPending();
        li.remove();
});


// دکمه ویرایش

const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");
    taskActions.appendChild(editBtn);
    
     li.appendChild(taskInfo);
        li.appendChild(taskActions);

    let editInput;
    
function saveEdit() {

        if (editInput.value.trim() === "") {
            editInput.replaceWith(taskText);
            editBtn.textContent = "Edit";
            return;
        }

        const newValue = editInput.value.trim();

        const index = tasks.findIndex((item) => item.id === task.id);
        
        if(index!==-1){
            tasks[index].text = newValue;
            saveTasks();
        }
        taskText.textContent = newValue;

        editInput.replaceWith(taskText);

        editBtn.textContent = "Edit";
}


editBtn.addEventListener("click", (event) => {
        event.stopPropagation();

        if (editBtn.textContent === "Edit") {

            editInput = document.createElement("input");

            editInput.value = taskText.textContent;

        editInput.addEventListener("click", (event) => {
                event.stopPropagation();
        });

        editInput.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    saveEdit();
                }
        });

            taskText.replaceWith(editInput);

            editBtn.textContent = "Save";

            editInput.focus();

        } else {
            saveEdit();
        }

       
     });


    // انجام شده

 let currentFilter = "all";

    li.addEventListener("click", () => {
        const index = tasks.findIndex((item) => item.id === task.id);

        if (index !== -1) {
        tasks[index].done = !tasks[index].done;

        li.classList.toggle("done");

        saveTasks();
        updateCountDone();
        updateCountPending();
        renderCurrentFilter();
        }
    });


    list.appendChild(li);
    }
/////////////////////////////////////تابع رندر
function renderTasks(tasksToShow) {
    list.innerHTML = "";

    tasksToShow.forEach((task) => {
        createTaskElement(task);
    });
}
///////////////////////////////////////تابع فیلتر رندر
function renderCurrentFilter() {
    if (currentFilter === "done") {
        const doneTasks = tasks.filter((task) => task.done === true);
        renderTasks(doneTasks);

    } else if (currentFilter === "pending") {
        const pendingTasks = tasks.filter((task) => task.done === false);
        renderTasks(pendingTasks);

    } else {
        renderTasks(tasks);
    }
}

//////////دکمه ی کلیر ال

clearBtn.addEventListener("click", () => {
    tasks = [];

    currentFilter = "all";
    saveTasks();

    list.innerHTML = "";

    updateCount();
    updateCountDone();
    updateCountPending();
});

//فقط انجام‌شده‌ها
doneBtn.addEventListener("click", () => {
    currentFilter = "done";

    const doneTasks = tasks.filter((task) => task.done === true);
    renderTasks(doneTasks);////فقط یک وظیفه داره: هر آرایه‌ای بهش بدی، همون‌ها رو روی صفحه نمایش بده.
});

//فقط انجام‌نشده‌ها
pendingBtn.addEventListener("click", () => {
    currentFilter = "pending";

    const pendingTasks = tasks.filter((task) => task.done === false);
    renderTasks(pendingTasks);

});
//همه ی تسک ها رو نشون میده
allBtn.addEventListener("click", () => {
        currentFilter = "all";
        renderTasks(tasks);
    
});

//////به ترتیب انجام شده ها برن پایین لیست و انجام نشده ها بیان بالای لیست

sortBtn.addEventListener("click", () => {///مرتب کردن اعضای یک آرایه
tasks.sort((a, b) => a.done - b.done);///سورت پندینگ بالا انجام شده پایین
//tasks.sort((a, b) => b.done - a.done);/////سورت انجام شده بالا و پندینگ پایین
 saveTasks();    
renderCurrentFilter();
});




/////وظیفه‌ش اینه که متن input رو بگیره و تبدیلش کنه به یک آبجکت جدید
function addTask() {
     //console.log("addTask اجرا شد");

    if (inp.value.trim() === "") {
        return;
    }

    const taskValue = inp.value.trim();

    const newTask = {
        id: Date.now(),
        text: taskValue,
        done: false,
        createdAt: new Date().toLocaleString("en-GB")
        //createdAt: new Date().toLocaleTimeString()
    };
    ///console.log(newTask)

    tasks.push(newTask);///////اضافه شدن به آرایه

    saveTasks();///////ذخیره در localStorage

    updateCount();
    updateCountPending();

    renderCurrentFilter();

    // /*createTaskElement(newTask)*/;/////// نمایش روی صفحه/ حذف کردیم
    //  چون در تابع رندر کارنت فیلتر  تا بع رندر یعنی نمایش داریم

    inp.value = "";

    inp.focus();
}


tasks.forEach((task) => {
    createTaskElement(task);
});


btn.addEventListener("click", () => {
    addTask();
});


inp.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
  




//// تمرین سورت
//products.sort((a,b)=>a.price-b.price)
    
 









