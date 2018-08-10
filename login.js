var myImage=document.getElementById("imageslider");
var arryImage=["4.jpg","13.jpg","15.jpg","16.jpg","1.jpg"];
var index=0;
const changeImage=()=>{
    myImage.setAttribute("src=image/",arryImage[index]);
    index++;
    if(index>=arryImage.length){
        index=0;
    }
};
setInterval(changeImage,2000);