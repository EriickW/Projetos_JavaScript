
const border_radius_left_top = document.querySelector("#border-radius-left-top")
const forma = document.querySelector("#forma")
const border_radius_right_top = document.querySelector("#border-radius-right-top")
const border_radius_left_bottom = document.querySelector("#border-radius-left-bottom")
const border_radius_right_bottom = document.querySelector("#border-radius-right-bottom")


border_radius_left_top.addEventListener("change", ()=>{
    let border_radius = border_radius_left_top.value
    forma.style.borderTopLeftRadius = border_radius + "px"

})
border_radius_right_top.addEventListener("change", ()=>{
    let border_radius = border_radius_right_top.value
    forma.style.borderTopRightRadius = border_radius + "px"

})
border_radius_left_bottom.addEventListener("change", ()=>{
    let border_radius = border_radius_left_bottom.value
    forma.style.borderBottomLeftRadius = border_radius + "px"

})
border_radius_right_bottom.addEventListener("change", ()=>{
    let border_radius = border_radius_right_bottom.value
    forma.style.borderBottomRightRadius = border_radius + "px"

})