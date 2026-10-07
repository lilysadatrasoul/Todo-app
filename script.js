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
    
 









