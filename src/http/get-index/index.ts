function quote() {
    let min = 0
    let max = quotes.length - 1
    let random = ~~(Math.random() * (max - min) + min)
    return quotes[random]
}

let quotes = [
    "It's a family that's loaded with grudges and passion.",
    "To be a good actor you have to be something like a criminal",
    "I think I jump around more when I'm alone.",
    "I bought a Yamaha-1 and I was doing 180 miles per hour home",
]

export async function handler(req: object) {
    return {
        statusCode: 200,
        headers: {
            'content-type': 'text/html; charset=utf8',
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
        },
        body: `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Hi!</title>
  </head>
  <body>

    <h1 style="text-align: center;">
      ${quote()}
    </h1>

  </body>
</html>
`
    }
}

// Example responses

/* Forward requester to a new path
export async function handler (req: object) {
  return {
    statusCode: 302,
    headers: {
      'location': '/about',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
*/

/* Respond with successful resource creation
export async function handler (req: object) {
  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({ok: true})
  }
}
*/

/* Deliver client-side JS
export async function handler (req: object) {
  return {
    headers: {
      'content-type': 'text/javascript; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: 'console.log("Hello world!")',
  }
}
*/
