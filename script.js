let full_screen_open_btn1 = document.getElementById("full_screen_open_btn1");
let full_screen_open_btn2 = document.getElementById("full_screen_open_btn2");
let full_screen_open_btn3 = document.getElementById("full_screen_open_btn3");
let change_txt_1 = document.getElementById("change_txt_1");
let change_work_txt1 = document.getElementById("change_work_txt1");
let change_work_txt2 = document.getElementById("change_work_txt2");
let change_work_txt3 = document.getElementById("change_work_txt3");
let change_work_txt4 = document.getElementById("change_work_txt4");

let package_details = document.getElementById("package_details");

let close_btn = document.getElementById("close_btn");

full_screen_open_btn1.addEventListener("click", () => {
  package_details.style.transform = "scaleY(1)";
  change_txt_1.innerHTML = "Graphic Design";
  change_work_txt2.innerHTML = "Thumbnail Design";
  change_work_txt1.innerHTML = "Branding";
  change_work_txt3.innerHTML = "Logo Design";
  change_work_txt4.innerHTML = "Poster Design";
});

full_screen_open_btn2.addEventListener("click", () => {
  package_details.style.transform = "scaleY(1)";
  change_txt_1.innerHTML = "Video Editing";
  change_work_txt2.innerHTML = "Reels";
  change_work_txt1.innerHTML = "Caption Video";
  change_work_txt3.innerHTML = "Podcast Video";
  change_work_txt4.innerHTML = "Short Video";
});

full_screen_open_btn3.addEventListener("click", () => {
  package_details.style.transform = "scaleY(1)";
  change_txt_1.innerHTML = "T-Shirt Design";
  change_work_txt2.innerHTML = "Calligraphy";
  change_work_txt1.innerHTML = "Typography";
  change_work_txt3.innerHTML = "Customize Your T-shirt With Graphics";
  change_work_txt4.innerHTML = "Vintage Design";
});

close_btn.addEventListener("click", () => {
  package_details.style.transform = "scaleY(0)";
});
