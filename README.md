<br />

<div align="center">
    <a href="https://visit-counter.vercel.app/">
        <img src="https://visit-counter.vercel.app/counter.png?page=https%3A%2F%2Fgithub.com%2FdevXprite%2Fvisit-counter&s=70&c=00ff00&bg=00000000&no=3&ff=digii" alt="visits">
    </a>
    <h2 align="center">Visit Counter</h2>
    <p>Easy way to know how many visitors are viewing your Github, Website</p> <br>
</div>

## Reference for Image


| query | Usage                                       | Default     | Example                                                                      |
| ----- | ------------------------------------------- | ----------- | ---------------------------------------------------------------------------- |
| page  | It can be your username or your website url |             | https://visit-counter.vercel.app/counter.png?page=example.com                |
| s     | Font size of counter                        | 40          | https://visit-counter.vercel.app/counter.png?page=example.com&s=60           |
| c     | Color of counter                            | #00ff00     | https://visit-counter.vercel.app/counter.png?page=example.com&c=00ffff       |
| bg    | Background Color of counter                 | transparent | https://visit-counter.vercel.app/counter.png?page=example.com&bg=000000      |
| ff    | Font Family                                 | Digital     | https://visit-counter.vercel.app/counter.png?page=example.com&ff=electrolize |
| no    | No of digits in Counter                     | 2           | https://visit-counter.vercel.app/counter.png?page=example.com&no=6           |

## Getting the Raw Counts
If you don't want the PNG file but still want the count to use in something else, you can do a GET request to `/counter`

### Using fetch in javascript

```javascript
fetch("https://visit-counter.vercel.app/counter?page=example.com")
  .then(response => response.text())
  .then(count => console.log('counts: ',count));
```

### Using Requests in Python

```python
import requests

url = "https://visit-counter.vercel.app/counter?page=example.com"
response = requests.request("GET", url)

print("counts:", response.text)
```

### Using cURL in PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://visit-counter.vercel.app/counter?page=example.com',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);
curl_close($curl);

echo "counts: $response";
```

## Installation
1. Get your firebase database URL at [here](https://console.firebase.google.com)
2. Clone the repo
    ```bash
    git clone https://github.com/devXprite/visit-counter
    ```
3. Install NPM packages
    ```bash
    cd visit-counter
    npm install
    ```
4. Enter your Database URL in `.env`
   ```bash
   FIREBASE_DATABASE='YOUR DATABASE URL'
   ```
5. Start Server
   ```bash
   npm start
   ```

## Deploy
Click this button to configure your Project and deploy it to Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FdevXprite%2Fvisit-counter&env=FIREBASE_DATABASE)
