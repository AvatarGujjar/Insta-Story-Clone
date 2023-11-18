var arr=[
    {dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D" , story:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVsfGVufDB8fDB8fHww" , story:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsfGVufDB8fDB8fHww" , story:"https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1vZGVsfGVufDB8fDB8fHww" , story:"https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://plus.unsplash.com/premium_photo-1691801710552-1e22dcf13585?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG1vZGVsfGVufDB8fDB8fHww" , story:"https://plus.unsplash.com/premium_photo-1691801690578-f9cad8dafbdd?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"}
]

var clutter =""
arr.forEach(function(elem,idx){
    //consol.log(elem.dp,idx)
   clutter +=`<div class="story">
     <img id="${idx}" src="${elem.dp}" alt="">
   </div>`
});

document.querySelector("#storiyan").innerHTML = clutter;

document.querySelector("#storiyan" ).addEventListener("click", function(dets) {
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.
    target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    
    }, 4000)
});

// var cltr=id+1;
document.querySelector("#full-screen").addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "none"
    
    });


/*document.querySelector("#full-screen").addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "none"
    });


    document.querySelector("#full-screen").addEventListener("click", function(dets){
    for(var i=id; i<(arr.length-1); id++ ){
        document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.
         target.id].story})`
        }
    });
*/

