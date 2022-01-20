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

- To install all the dependencies run 
```bash
npm i
```
- Please also run this command
```bash
brew install GraphicsMagick
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


- All the inventry items are stored in the Firebase Database
- **Create inventory items** : POST {/api/inventory/add}
   - Sample body request:
   ```
   {
      "item" : "sanitizer",
      "qunatity" : 4
   }
   ```
   - Sample Postman Request:
    ![Screen Shot 2022-01-19 at 6 47 41 PM](https://user-images.githubusercontent.com/60456975/150245325-9d0f7855-158b-412e-bad6-661e12678fda.png)
    
- **View inventory** : GET {/api/inventory/view}
   - Sample Postman Request:
   ![Screen Shot 2022-01-19 at 6 48 57 PM](https://user-images.githubusercontent.com/60456975/150245621-8b61ef05-b4db-4a1f-b2c3-a46430c12bb3.png)

- **Edit inventory item** : PUT {/api/inventory/edit}
   - Sample body request:
   ```
   {
      "item" : "sanitizer",
      "qunatity" : 9
   }
   ```
   - Sample Postman Request:
   ![Screen Shot 2022-01-19 at 6 50 27 PM](https://user-images.githubusercontent.com/60456975/150245424-81ee4c21-b97b-4b9d-adc6-183291e7f425.png)

- **Delete inventory item** : DELETE {/api/inventory/delete/$item_name}
   - In the request url replace $item_name with the item you want to delete from the inventory
   - Sample Request:
   ![Screen Shot 2022-01-19 at 6 51 51 PM](https://user-images.githubusercontent.com/60456975/150245497-1c9ba362-b10f-4192-a47f-2bdb0addaf5d.png)


<p align="center">
    <u><h2 align="center">Images</h2></u>
</p>

- Once images are uploaded, a thumbnail is genrated which is then stored in the Firebase Storage which then can downloaded using hre firebase download url 
   genrated by Firebase
- Upload Image and store the generated thumnbnail: POST {/api/image/upload}
  - Sample body request:
   ```
   {
      "file" : test2.png
   }
   ```
  - Sample Postamn Request:
  ![Screen Shot 2022-01-19 at 8 32 56 PM](https://user-images.githubusercontent.com/60456975/150246429-2e202895-b122-4d09-962d-b75f192b033e.png)

  
- Image Download  : GET {/api/images/download}
  - 
  - Sample body request:
   ```
   {
      "imageName" : test2.png
   }
   ```
  - Sample Postman Request:
  ![Screen Shot 2022-01-19 at 8 33 13 PM](https://user-images.githubusercontent.com/60456975/150246468-379b50c5-3e94-4bd8-afbb-5a514ef9c176.png)

