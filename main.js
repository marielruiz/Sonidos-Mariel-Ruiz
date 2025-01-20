function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/vYZFEHHBB/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Escucho -" + results[0].label;
        document.getElementById("result_confidence").innerHTML="Presición -" + (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("result_label").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";

        img= document.getElementById('cinnamoroll1')
        img2=document.getElementById('hellokitty1')
        img3=document.getElementById('kuromi1')
        img4=document.getElementById('pochaco1')

        if(results[0].label=="cinnamoroll"){
            img.src='cinamoroll2.png';
            img2.src= 'hellokitty1.png';
            img3.src= 'kuromi1.png';
            img4.src= 'pochaco1.png';
        }else if(results[0].label=="hello kitty"){
            img.src='cinnamoroll1.png';
            img2.src= 'hellokitty2.png';
            img3.src= 'kuromi1.png';
            img4.src= 'pochaco1.png';
        }else if(results[0].label=="kuromi"){
            img.src='cinnamoroll1.png';
            img2.src= 'hellokitty1.png';
            img3.src= 'kuromi2.png';
            img4.src= 'pochaco1.png';
        }else{
            img.src='cinnamoroll1.png';
            img2.src= 'hellokitty1.png';
            img3.src= 'kuromi1.png';
            img4.src= 'pochaco2.png';
        }


    }
    

}