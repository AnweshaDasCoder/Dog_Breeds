Webcam.attach( '#camera' );

camera = document.getElementById("camera");
     
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

function snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });

  }

    //<script>src='https://unpkg.com/ml5@latest/dist/ml5.min.js'</script> 
 
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7qw7d1YKGW/model.json',modelLoaded);
 
function modelLoaded() {
  console.log('Model Loaded! ml5 version:', ml5.version);
}

function check()
  {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }

function gotResult(error, results) {
 
  if (error) {
    console.error(error);
  } else {
   
    console.log(results);
     document.getElementById("name").innerHTML ='The type of dog is - ' + results[0].label;
    document.getElementById("accuracy").innerHTML = 'The accuracy of the dog is - ' + results[0].confidence.toFixed(3) + "%";
  }
}