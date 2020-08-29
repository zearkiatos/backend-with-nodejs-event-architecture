const http = require("http");
const server = http.createServer();

server.on("request", (request, response) => {
  if ((request.method === "POST" && request.url == "/your-birthday")) {
      let body = [];
      request.on('data', chunk => {
          body.push(chunk);
      })
      .on('end', () => {
        response.writeHead(200, { "Content-Type": "text/plain" });
        body = Buffer.concat(body).toString();
        const { day, month, year } = splitDate(body, '-');
        const response = ``
        response.end(body);
      });
  }
  else {
    response.statusCode = 404;
    response.end();
  }
});

server.listen(8002);

const splitDate = (stringDate, splitChar ) => {
    const dateArray = stringDate.split(splitChar);
    const day = dateArray[0];
    const month = dateArray[1];
    const year = dateArray[2];

    return {
        day,
        month,
        year
    }

}

const getDay = (dayNumber) => {
    const day = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    switch()
} 

console.log("Server in the url http://localhost:8002 🚀");