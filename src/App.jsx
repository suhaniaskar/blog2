import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useState,useEffect} from 'react';
export default function App() {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    getData();
  },[]);
  const getData = async () => {
    try {
   const incomingData = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
   );
    const formattedData = await incomingData.json();
    setBlog(formattedData);
    console.log(formattedData);
   } catch(error) {
    console.log(error);
   }
    };
  return (
    <div>
      <Container className="my-5">
        <h1 className="my-5 text-center display-2">Blog list</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              
            </tr>
         </thead>
         <tbody>
         {blogs.map((blog,i) => (
          <tr key={blog.id}>
            <td>{i+1}</td>
            <td>{blog.title}</td>
            {}
            </tr>
         ))}
        </tbody>
        </Table>
        </Container>
        </div>
  );

         }
