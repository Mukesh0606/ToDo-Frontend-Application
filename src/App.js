import { Routes, Route } from "react-router-dom";
import React from "react";
import {Container, Navbar, Button, Card, Row, Form} from 'react-bootstrap';
import logo from './Logo.png';
// import Navbar1 from './components/Navbar1'
// import { TodoCard } from "./components/TodoCard";
// import { CreateTodo } from "./components/createTodo";
// import { ShowTodoList } from "./components/showTodoList";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { UpdateTodo } from "./components/updateTodo";
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTodo, removeTodo }) {
    return (
      <div className="todo">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        </div>
      </div>
    );
  }
  
  function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
        <Form onSubmit={handleSubmit}> 
            <Form.Group>
                <Form.Label><b>Add Todo</b></Form.Label>
                <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
            </Form.Group>
            <Button variant="primary mb-5" type="submit">Submit </Button>
        </Form>
    );
  }

function App() {

    const [todos, setTodos] = React.useState([
        {
          text: "This is a sampe todo",
          isDone: false
        }
      ]);
    
      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
        // e.preventDefault();

        // axios.post("http://localhost:8000/api/todo", index)
        //     .then((res) => {
        //         // setData({ title: "", description: "" });
        //         console.log(res.data.message);
        //     })
        //     .catch((err) => {
        //         console.log("Error couldn't create TODO");
        //         console.log(err.message);
        //     });
      };
    
      const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
      };
    
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        // axios.delete(`http://localhost:8000/api/todo/`+index);
        // setTodo((data) => {
        //     return data.filter((todo) => todo._id !== e.target.name);
        // });
      };

    //   useEffect(
    //     function () {
    //         axios.get("http://localhost:8000/api/todo")
    //             .then((res) => {
    //                 console.log(res.data);
    //                 setTodo(res.data);
    //             })
    //             .catch((err) => {
    //                 console.log(err.message);
    //             });
    //     },
    //     [update]
    // );
    
    return (
        <>
            <div className='header'>
                <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                    <h2><img className='App-logo' alt="" src={logo} width="60" height="60"/>{'  '}To Do Application</h2>
                    </Navbar.Brand>
                </Container>
                </Navbar>
            </div>
            <div className="app">
                <div className="container">
                    <h1 className="text-center mb-4">Todo List</h1>
                    <FormTodo addTodo={addTodo} />
                    <div>
                    {todos.map((todo, index) => (
                        <Card>
                        <Card.Body>
                            <Todo
                            key={index}
                            index={index}
                            todo={todo}
                            markTodo={markTodo}
                            removeTodo={removeTodo}
                            />
                        </Card.Body>
                        </Card>
                    ))}
                    </div>
                </div>
            </div>
      </>
        
    );
}

export default App;
