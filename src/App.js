import logo from './logo.svg';
import './App.css';
import AWS from 'aws-sdk';
function App() {
  const s3 = new AWS.S3({
    region: 'XXXX', //region
    accessKeyId: 'XXXXX', //access key
    secretAccessKey: 'XXXXXX', //Secret Key
  });
  return (
    <div className="App">
        <img src={ s3.getSignedUrl('getObject', {
          Bucket: 'XXXXXX', //bucket 
          Key: 'XXXXX', //Path to file from bucket
  })}/>
    </div>
  );
}

export default App;
