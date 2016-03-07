var col = document.getElementById("list-box");
var But = document.getElementById("but");




var total = 0, totalPage = 0, pageNum = 25, curPage = 1;

u.ajax("data.txt", function (data)
{
    total = data.length;
    totalPage = Math.ceil(total / pageNum);
    bindData(curPage, data);
    mar();
    var page=0;
    curPage = page;

    But.onclick= function (e) {
        e = e || window.event;
        var tar = e.target || e.srcElement;

        if (tar.tagName.toLowerCase() === "li") {

            if (tar.id === "li1") {
                curPage = 1;
            } else if (tar.id === "li2") {
                curPage = 2;


            } else if (tar.id === "li3") {
                curPage = 3;

            } else if (tar.id === "li4") {
                curPage = 4;

            }  else if (tar.id === "next") {
                if (curPage === totalPage) {
                    return;
                }else{curPage++;}

            }else if(tar.id==="last"){
                curPage=totalPage;
            }
    }
        bindData(curPage, data);
        bindPage()


        mar();

    };
});
//1页 0-11 2页 12-23  3页 24-35  n也  n*pageNum-12-n*pageNum-1
function bindData(page, data) {
    var sIndex = (page - 1) * pageNum, eIndex = page * pageNum - 1;
    var str = "";
    for (var i = sIndex; i <= eIndex; i++) {
        var cur = data[i];
        if (cur) {
            str += '<li class="list1 list">';
            str += '<div class="list-content">';
            str += '<div class="list-img"><img src="'+cur.img+'" alt=""/></div>';
            str += '<p class="state">'+cur.state+'</p>';

            str += "</div>";
            str += "</li>"
        }
    }
    col.innerHTML = str;

}


/*最右边的margin-right等于0*/
function mar(){
   var List=document.getElementById("list-box").getElementsByTagName("li");
    for(var i=0;i<List.length;i++){
        if(List[i].className=="list1 list"){
        var z=i+1;
        if(z%5===0){
            List[i].style.marginRight=0;

        }}
    }
}

function bindPage(){
    var oPageLis=document.getElementById("but").getElementsByTagName("li");
    for(var i=0;i<4;i++){
            if(oPageLis[i].id==="li1"||"li2"||"li3"||"li4"&&oPageLis[i].innerHTML==curPage){
            oPageLis[i].className=i===(curPage-1)?"select":null;
       }
}
}
