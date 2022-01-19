# Shopify-Summer2022-Challenge

## Build an inventory tracking web application for a logistics company witht the following features

* Basic CRUD Functionality. You should be able to:
    * Create inventory items
    * Edit Them
    * Delete Them
    * View a list of them

* Along with one additional feature:
    * Allow image uploads AND store image with generated thumbnails

<p align="center">
    <u><h2 align="center">Installations</h2></u>
</p>

- To install all the dependencies run 
```bash
npm i
```
- Please also run this command
```bash
brew install GraphicsMagick
```

- First create a Firebase Project
- Go to your Firebase project Dashboard and click on storage in the build tab. Once you have initialized your firebase storage, inside the storage menu there will be a tab called **Rules**, where you would have to change the following line:
```
 allow read, write: if request.auth != null;
```
to 
```
 allow read, write: if request.auth == null;
```

-  Generate an serviceAccountkey for your firebase project. Go to your ```Firebase project -> Project Settings -> Service Accounts``` and download the firebase SDK by clicking ```Generate New Private Key``` button
- Rename the file to ``` serviceAccountKey.json ``` and put it in the root folder. The file will look like this
```
 {
  "type": ,
  "project_id": ,
  "private_key_id": ,
  "private_key": ,
  "client_email": ,
  "client_id": ,
  "auth_uri": ,
  "token_uri": ,
  "auth_provider_x509_cert_url": ,
  "client_x509_cert_url": 
}
```

- Create a ```.env``` file and enter your create a variable called BUCKET_URL and store your firebase bucket url

```
  BUCKET_URL=YOUR_BUCKET_URL
```

<p align="center">
    <u><h2 align="center">How to Run it</h2></u>
</p>

- To run the application, start up your terminal /command prompt ,and go to the project folder and then run the following command
```bash
node index.js
```

## Features
<p align="center">
    <u><h2 align="center">CRUD Functionality</h2></u>
</p>


- Create inventory items
- Edit inventory item
- Delete inventory item
- View inventory

