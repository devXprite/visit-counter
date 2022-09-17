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
fetch("https://visit-counter.vercel.app/counter")
  .then(response => response.text())
  .then(count => console.log('counts: ',count));
```

### Using Requests in Python

```python
import requests

url = "https://visit-counter.vercel.app/counter"

response = requests.request("GET", url)

print("counts:", response.text)
```

### Using cURL in PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://visit-counter.vercel.app/counter',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);
curl_close($curl);

echo "counts: $response";
```