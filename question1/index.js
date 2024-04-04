const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(require("express-bearer-token"));


app.use(cors());
app.use(express.json());


const port = 3000 || process.env.PORT;

app.get("/categories/:category/products",async (req,res)=>{
    try{
        
    //taking the top n value
    const {n} = req.query;
    const{categoryName} =req.params.category; 

    //retriving product details from all five companies
    promises =[
        await fetch(`http://20.244.56.144/text/companies/AMZ/categories/${categoryName}/products?top=${n}`,{
        method: 'Get',
        Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMjA4MjM2LCJpYXQiOjE3MTIyMDc5MzYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijg3ZmQ1NmM4LThmZTgtNDk0Yy04YTk2LWI0OWI2N2FjMDlkYiIsInN1YiI6ImtpdGNiZS4yNS4yMWJjYjAwN0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6Ijg3ZmQ1NmM4LThmZTgtNDk0Yy04YTk2LWI0OWI2N2FjMDlkYiIsImNsaWVudFNlY3JldCI6Im1RY1hIcnlOQWtQdE53THQiLCJvd25lck5hbWUiOiJBcmp1biBBIENoYW5kcmFuIiwib3duZXJFbWFpbCI6ImtpdGNiZS4yNS4yMWJjYjAwN0BnbWFpbC5jb20iLCJyb2xsTm8iOiI3MTE1MjFCQ0IwMDcifQ.zAc4zdqful2VIgoFQb2-GOQp3yQypVzzPD_FglsO1hs',
	    body: JSON.stringify(body),
	    headers: {'Content-Type': 'application/json'}
        }),
        await fetch(`http://20.244.56.144/text/companies/FLP/categories/${categoryName}/products?top=${n}`,{
        method: 'Get',
        Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMjA4MjM2LCJpYXQiOjE3MTIyMDc5MzYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijg3ZmQ1NmM4LThmZTgtNDk0Yy04YTk2LWI0OWI2N2FjMDlkYiIsInN1YiI6ImtpdGNiZS4yNS4yMWJjYjAwN0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6Ijg3ZmQ1NmM4LThmZTgtNDk0Yy04YTk2LWI0OWI2N2FjMDlkYiIsImNsaWVudFNlY3JldCI6Im1RY1hIcnlOQWtQdE53THQiLCJvd25lck5hbWUiOiJBcmp1biBBIENoYW5kcmFuIiwib3duZXJFbWFpbCI6ImtpdGNiZS4yNS4yMWJjYjAwN0BnbWFpbC5jb20iLCJyb2xsTm8iOiI3MTE1MjFCQ0IwMDcifQ.zAc4zdqful2VIgoFQb2-GOQp3yQypVzzPD_FglsO1hs',
	    body: JSON.stringify(body),
	    headers: {'Content-Type': 'application/json'}
        }),
        await fetch(`http://20.244.56.144/text/companies/SNP/categories/${categoryName}/products?top=${n}`,{
        method: 'Get',
        Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMjA4MjM2LCJpYXQiOjE3MTIyMDc5MzYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijg3ZmQ1NmM4LThmZTgtNDk0Yy04YTk2LWI0OWI2N2FjMDlkYiIsInN1YiI6ImtpdGNiZS4yNS4yMWJjYjAwN0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6Ijg3ZmQ1NmM4LThmZTgtNDk0Yy04YTk2LWI0OWI2N2FjMDlkYiIsImNsaWVudFNlY3JldCI6Im1RY1hIcnlOQWtQdE53THQiLCJvd25lck5hbWUiOiJBcmp1biBBIENoYW5kcmFuIiwib3duZXJFbWFpbCI6ImtpdGNiZS4yNS4yMWJjYjAwN0BnbWFpbC5jb20iLCJyb2xsTm8iOiI3MTE1MjFCQ0IwMDcifQ.zAc4zdqful2VIgoFQb2-GOQp3yQypVzzPD_FglsO1hs',
	    body: JSON.stringify(body),
	    headers: {'Content-Type': 'application/json'}
        }),
        await fetch(`http://20.244.56.144/text/companies/MYN/categories/${categoryName}/products?top=${n}`,{
        method: 'Get',
        Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMjA4MjM2LCJpYXQiOjE3MTIyMDc5MzYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijg3ZmQ1NmM4LThmZTgtNDk0Yy04YTk2LWI0OWI2N2FjMDlkYiIsInN1YiI6ImtpdGNiZS4yNS4yMWJjYjAwN0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6Ijg3ZmQ1NmM4LThmZTgtNDk0Yy04YTk2LWI0OWI2N2FjMDlkYiIsImNsaWVudFNlY3JldCI6Im1RY1hIcnlOQWtQdE53THQiLCJvd25lck5hbWUiOiJBcmp1biBBIENoYW5kcmFuIiwib3duZXJFbWFpbCI6ImtpdGNiZS4yNS4yMWJjYjAwN0BnbWFpbC5jb20iLCJyb2xsTm8iOiI3MTE1MjFCQ0IwMDcifQ.zAc4zdqful2VIgoFQb2-GOQp3yQypVzzPD_FglsO1hs',
	    body: JSON.stringify(body),
	    headers: {'Content-Type': 'application/json'}
        }),
        await fetch(`http://20.244.56.144/text/companies/AZO/categories/${categoryName}/products?top=${n}`,{
        method: 'Get',
        Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMjA4MjM2LCJpYXQiOjE3MTIyMDc5MzYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijg3ZmQ1NmM4LThmZTgtNDk0Yy04YTk2LWI0OWI2N2FjMDlkYiIsInN1YiI6ImtpdGNiZS4yNS4yMWJjYjAwN0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6Ijg3ZmQ1NmM4LThmZTgtNDk0Yy04YTk2LWI0OWI2N2FjMDlkYiIsImNsaWVudFNlY3JldCI6Im1RY1hIcnlOQWtQdE53THQiLCJvd25lck5hbWUiOiJBcmp1biBBIENoYW5kcmFuIiwib3duZXJFbWFpbCI6ImtpdGNiZS4yNS4yMWJjYjAwN0BnbWFpbC5jb20iLCJyb2xsTm8iOiI3MTE1MjFCQ0IwMDcifQ.zAc4zdqful2VIgoFQb2-GOQp3yQypVzzPD_FglsO1hs',
	    body: JSON.stringify(body),
	    headers: {'Content-Type': 'application/json'}
        }),
    ]
   const response = await Promise.all(promises);
   const data = await Promise.all(response.map(async(response)=>{
    const json = await response.json();
    return json();
   }))



   //sort the data according to price and filter the top n values
   let combinedData = [];
   data.foreach(details=>{
    combinedData = combinedData.concat(details);
   })

   combinedData.sort((a,b)=>(a.price>b.price)?1:-1);

   const topNData = combinedData.splice(0,n);

   return res.status(200).send(topNData)
    }catch(e){
        res.sendStatus(400).send(e);
    }
})


app.listen(port,()=>{
    console.log("Server running on port :"+port);
})