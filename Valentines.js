displayHello = function(){
   // document.getElementById('running-cat').style.display="block"
    slideCat();
    document.getElementById('button-summon-cat').style.display="none";
    document.getElementById('button-hiiiii').style.display="block";
};

slideCat = function(){
    var cat = document.getElementById('running-cat');
    cat.style.left = '3'; // Sliding the cat onto the screen
};

displayQuestions = function(){
    document.getElementById('running-cat').style.display="none";
    
    document.getElementById('button-hiiiii').style.display="none";
    setClassDisplayToNone('.container');
    setClassDisplayToFlex('.Questions-div');
    document.getElementById('crying-cat').style.display="none";
    document.getElementById('heart-cat').style.display="block";
   
};

displayHappyCat = function(){
    document.getElementById('happy-cat').style.display="block";
    setClassDisplayToNone('.Questions-div');
    setClassDisplayToFlex('.HappyCat-Div');
    toggleHappyCatMusic(); //play happy cat music on loop

};


pressedNo = function(){
    document.getElementById('heart-cat').style.display="none";
    document.getElementById('crying-cat').style.display="block";

    toggleSadCatMusic() //time for sad music :/
    
    const yesButton = document.getElementById('Button-yes');
    const computedStyle = getComputedStyle(yesButton);
    const currentWidth = parseFloat(computedStyle.width);
    const currentHeight = parseFloat(computedStyle.height);
    //increase the size!
    const newWidth = currentWidth*1.1;
    const newHeight = currentHeight*1.1;

    yesButton.style.width = newWidth + "px";
    yesButton.style.height = newHeight + "px";

};
toggleHappyCatMusic = function() {
    var audio = document.getElementById('happyCatAudio');
    var sadCatAudio = document.getElementById('sadCatAudio')
    if(sadCatAudio.play){
        sadCatAudio.pause(); //pause that shit
    }
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
};
toggleSadCatMusic = function() {
    var audio = document.getElementById('sadCatAudio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
};
setClassDisplayToFlex = function(className) {
    var elements = document.querySelectorAll(className);

    // Iterate over selected elements
    elements.forEach(function(element) {
        //loopar dem
        element.style.display = 'flex';
        var children = element.children;
        for (var i = 0; i < children.length; i++) {
          //gör dem synliga
            children[i].style.display = 'block';
        }
    });
};
setClassDisplayToNone = function(className) {
    //samma som i förra fast none
    var elements = document.querySelectorAll(className);
    elements.forEach(function(element) {
        element.style.display = 'none';
    
        var children = element.children;
        for (var i = 0; i < children.length; i++) {
            children[i].style.display = 'none';
        }
    });
};