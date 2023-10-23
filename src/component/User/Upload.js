import React ,{useState} from 'react';
import AWS from 'aws-sdk'

// var albumBucketName = "brainintelcorp";
// var bucketRegion = "us-east-1";
// var IdentityPoolId = "us-east-1:e2ae7738-2b59-4830-884c-ed0565282451";

 var albumBucketName = "brainiteltestuser";
 var bucketRegion = "us-east-1";
var IdentityPoolId = "us-east-1:3dea756b-4538-44d0-af01-d6afbd0f7f8e";

AWS.config.region = bucketRegion; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId,
});

var s3= new AWS.S3({
  apiVersion: "2012-10-17",
  params: { Bucket: albumBucketName }
});

const UploadImageToS3WithNativeSdk = () => {

    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {


        var params = { Body: file,
             Bucket:albumBucketName, 
             Key: file.name}; 
             s3.putObject(params,function(err, data) { if (err){ console.log(err, err.stack)}
            else {
                console.log('sucess');
            }
            }); // an error occurred else console.log(data); // successful response /* data = { ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", VersionId: "tpf3zF08nBplQK1XLOefGskR7mGDwcDk" } */ });
    

        console.log('s3-----');
        console.log(s3);
        // s3.listObjects(
        //     { Prefix: albumBucketName },   
        //       function(err, data)   
        //       { if (err)  
        //         { return alert("There was an error viewing your album: " + err.message); }
           
        //   else {
        //     console.log('success!!');
        //   }
        // })
    }

        // var upload = new AWS.S3.ManagedUpload({
        //     service: s3,
        //     params: {
        //       Body: file,
        //       Bucket: albumBucketName,
        //       Key: file.name,
        //     },
        //   });
      
          //  start the upload
        //   upload.send(function (err, data) {
        //     if (err) {
        //       console.log("Error", err.code, err.message);
        //       alert("There was an error uploading the file, please try again");
        //     } else {
        //         console.log("File successfully uploaded to S3");
        //     }
        //   });
        // }
        
        // var upload = s3.upload({
        //     params: {
        //     //   Bucket: albumBucketName,
        //       Key: file.name,
        //       Body: file
        //     }
            
        //   });
        //   var promise = upload.promise();

        //   promise.then(
        //     function(data) {
        //       alert("Successfully uploaded photo.");
        //       //viewAlbum(albumName);
        //     },
        //     function(err) {
        //         console.log('eror message------');
        //         console.log(err);
        //     }
        //   );

        //   s3.listObjects(
        //     { Prefix: albumBucketName },   
        //       function(err, data)   
        //       { if (err)  
        //         { return alert("There was an error viewing your album: " + err.message); 
        //   }  
        //   else {
        //     console.log('success!!');
        //   }
        // })

        // const params = {
        //     ACL: 'public-read',
        //     Body: file,
        //     Bucket: S3_BUCKET,
        //     Key: file.name
        // };

        // myBucket.putObject(params)
        //     .on('httpUploadProgress', (evt) => {
        //         setProgress(Math.round((evt.loaded / evt.total) * 100))
        //     })
        //     .send((err) => {
        //         if (err) console.log(err)
        //     })
    


    return <div>
        <div>Native SDK File Upload Progress is {progress}%</div>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </div>
}

export default UploadImageToS3WithNativeSdk;