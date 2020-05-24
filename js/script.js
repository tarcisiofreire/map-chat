let btContact = document.querySelector('.bt-contact');

btContact.addEventListener("click", function(){
    let listClasses = document.getElementById("main-view").classList;
    if(listClasses.length == 0){
        listClasses.add('chat-activated');
    }else{
        listClasses.toggle('chat-activated');
        listClasses.toggle('chat-deactivated');
    };
});
