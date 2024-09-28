// Account Login :

const login = document.getElementById("nav-login");
login.addEventListener("click",()=>{
    window.open("./media/signin.html","_parent");
});

const searchbar = document.getElementById("search-box");
const searchicon = document.getElementById("search-icon");
searchicon.addEventListener("click",()=>{
    if(searchbar.value==0){
        searchbar.placeholder="Search something here!";
    }
});

