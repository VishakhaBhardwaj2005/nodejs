// const http = require('http');

// const myserver=http.createServer((req, res) => {
//     if(req.url=='/'){
//     res.end('Welcome to ABES Enginnering College');}

//     else if(req.url=='/about us'){
//         res.end('ABES Engineering College is a premier institution located in Ghaziabad, Uttar Pradesh, India. Established in 2000, the college has been committed to providing quality education and fostering innovation in the field of engineering and technology. ABES offers a wide range of undergraduate and postgraduate programs in various engineering disciplines, including Computer Science, Electronics, Mechanical, Civil, and more. The college is known for its state-of-the-art infrastructure, experienced faculty, and strong industry connections, which contribute to the holistic development of its students. ABES Engineering College aims to nurture talent and prepare students for successful careers in the ever-evolving world of technology.');
//     }
//     else{
//         req.url=='/contact'
//         res.end('image src=https://erp.abes.ac.in/onlineenquiry/SignIn.aspx');
//     }


// })
// myserver.listen(8000,()=> {
//     console.log('Server is running on port 8000');
// })
const http = require('http');

const myserver = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url == '/') {
        res.end('<h1>ABES COLLEGE</h1>');
    }
    else if (req.url == '/about') {
        res.end('<img src="https://www.abes.ac.in/assets/2.jpg" width="500">');
    }
    else if (req.url == '/contact') {
        res.end('<h1>Address. 19th KM Stone. NH-09 Ghaziabad (UP). PIN - 201009</h1>');
    }
    else {
        res.end('404 Page Not Found');
    }
});

myserver.listen(8000, () => {
    console.log('Server is running on port 8000');
});