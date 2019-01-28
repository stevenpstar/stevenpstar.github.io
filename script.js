var preview_image = document.getElementById("preview_image");
var preview_video = document.getElementById("preview_video");

var project_title = document.getElementById("project_title");
var project_description = document.getElementById("project_description");

var circle_1 = document.getElementById("circle_1");
var circle_2 = document.getElementById("circle_2");
var circle_3 = document.getElementById("circle_3");

var content = document.getElementById("content");

function Project(title, description, preview_images) {
    this.title = title;
    this.description = description;
    this.preview_images = preview_images;
}

var projects = [];

var current_project = 0;

var project_sheet = new Project("Sheet/", 
"Sheet/ is a browser-based music notation app built with HTML5 Canvas and Javascript featuring notation editing and basic playback. Sheet/ works on both desktop and mobile/touch devices and is compatible with Chrome and Firefox.",
[{type: "video", source: "touchcontroltests.mp4"}, {type: "image", source: "sheetprev3.png"}, {type: "image", source: "sheetprev2.png"}]);

var project_bingo = new Project("Situation Bingo",
"Situation Bingo is a customisable multiplayer bingo game. Create a bingo-board based on family gatherings, a night out, or video games to spice up the activity. Situation Bingo was created using Node/Express, Socket.io, Javascript and HTML5 Canvas. Hosted on Heroku.",
[{type: "image", source: "bingoprev2.png"}, {type: "image", source: "bingoprev3.png"}, {type: "image", source: "bingoprev1.png"}]);

var project_ludum = new Project("Ludum Dare 42",
"My Entry for Ludum Dare 42 'Running out of Space' built in under 48 hours. A small city-building web game where you need to mine the already limited tiles you can build on inorder to gain more resources. HTML5 Canvas, Javascript", 
[{type: "video", source: "ludumdarevid.mp4"},{type: "image", source: "ludumdareprev1.png"}, {type: "image", source: "ludumdareprev2.png"}]);

projects.push(project_sheet);
projects.push(project_bingo);
projects.push(project_ludum);

function setProject(project) {
    selectImage("1");

    if (projects[project].preview_images[0].type === "image") {
        preview_video.src = "";
        preview_image.src = "./Resources/" + projects[project].preview_images[0].source;
        if (!preview_video.classList.contains("prev_hidden")) {
            preview_video.classList.add("prev_hidden");
        }
        if (preview_image.classList.contains("prev_hidden")) {
            preview_image.classList.remove("prev_hidden");
        }
    } else {
        preview_video.src = "./Resources/" + projects[project].preview_images[0].source;
        if (!preview_image.classList.contains("prev_hidden")) {
            preview_image.classList.add("prev_hidden");
        }
        if (preview_video.classList.contains("prev_hidden")) {
            preview_video.classList.remove("prev_hidden");
        }
    }
    project_title.innerHTML = projects[project].title;
    project_description.innerHTML = projects[project].description;
    current_project = project;
    
}

setProject(0);


function selectImage(circle) {
    if (circle === "1") {
        if (!circle_1.classList.contains("content-preview-circle-selected")) {
            circle_1.classList.add("content-preview-circle-selected");
            if (projects[current_project].preview_images[0].type === "image") {
                preview_image.src = "./Resources/" + projects[current_project].preview_images[0].source;
                preview_video.src = "";
                if (!preview_video.classList.contains("prev_hidden")) {
                    preview_video.classList.add("prev_hidden");
                }
                if (preview_image.classList.contains("prev_hidden")) {
                    preview_image.classList.remove("prev_hidden");
                }
            } else {
                preview_video.src = "./Resources/" + projects[current_project].preview_images[0].source;
                if (!preview_image.classList.contains("prev_hidden")) {
                    preview_image.classList.add("prev_hidden");
                }
                if (preview_video.classList.contains("prev_hidden")) {
                    preview_video.classList.remove("prev_hidden");
                }
            }
            
        }
    
        if (circle_2.classList.contains("content-preview-circle-selected")) {
            circle_2.classList.remove("content-preview-circle-selected");
        }
    
        if (circle_3.classList.contains("content-preview-circle-selected")) {
            circle_3.classList.remove("content-preview-circle-selected");
        }
    } else if (circle === "2") {
        if (!circle_2.classList.contains("content-preview-circle-selected")) {
            circle_2.classList.add("content-preview-circle-selected");

            if (projects[current_project].preview_images[1].type === "image") {
                preview_video.src = "";
                preview_image.src = "./Resources/" + projects[current_project].preview_images[1].source;
                if (!preview_video.classList.contains("prev_hidden")) {
                    preview_video.classList.add("prev_hidden");
                }
                if (preview_image.classList.contains("prev_hidden")) {
                    preview_image.classList.remove("prev_hidden");
                }
            } else {
                preview_video.src = "./Resources/" + projects[current_project].preview_images[1].source;
                if (!preview_image.classList.contains("prev_hidden")) {
                    preview_image.classList.add("prev_hidden");
                }
                if (preview_video.classList.contains("prev_hidden")) {
                    preview_video.classList.remove("prev_hidden");
                }
            }
        }
    
        if (circle_1.classList.contains("content-preview-circle-selected")) {
            circle_1.classList.remove("content-preview-circle-selected");
        }
    
        if (circle_3.classList.contains("content-preview-circle-selected")) {
            circle_3.classList.remove("content-preview-circle-selected");
        }
    } else if (circle === "3") {
        if (!circle_3.classList.contains("content-preview-circle-selected")) {
            circle_3.classList.add("content-preview-circle-selected");

            if (projects[current_project].preview_images[2].type === "image") {
                preview_video.src = "";
                preview_image.src = "./Resources/" + projects[current_project].preview_images[2].source;
                if (!preview_video.classList.contains("prev_hidden")) {
                    preview_video.classList.add("prev_hidden");
                }
                if (preview_image.classList.contains("prev_hidden")) {
                    preview_image.classList.remove("prev_hidden");
                }
            } else {
                preview_video.src = "./Resources/" + projects[current_project].preview_images[2].source;
                if (!preview_image.classList.contains("prev_hidden")) {
                    preview_image.classList.add("prev_hidden");
                }
                if (preview_video.classList.contains("prev_hidden")) {
                    preview_video.classList.remove("prev_hidden");
                }
            }
        }
    
        if (circle_1.classList.contains("content-preview-circle-selected")) {
            circle_1.classList.remove("content-preview-circle-selected");
        }
    
        if (circle_2.classList.contains("content-preview-circle-selected")) {
            circle_2.classList.remove("content-preview-circle-selected");
        }
    }
}

function nextProject() {
    content.classList.remove("content-animation");
    void content.offsetHeight;
    content.classList.add("content-animation");
    if (current_project < projects.length-1) {
        current_project++;
        setProject(current_project);
    } else {
        current_project = 0;
        setProject(current_project);
    }
    
    
}

function previousProject() {
    content.classList.remove("content-animation");
    void content.offsetHeight;
    if (current_project > 0) {
        current_project--;
        setProject(current_project);
    } else {
        current_project = projects.length-1;
        setProject(current_project);
    }
    content.classList.add("content-animation");
}