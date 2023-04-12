import {createBrowserRouter,createRoutesFromElements,
  Route,RouterProvider,Outlet} from 'react-router-dom';
  import { useState,useEffect, createContext} from 'react';
  import Home from './pages/Home';
  import Form from './pages/Form';
  import About from './pages/About';
  import BlogFeed from './pages/BlogFeed';
  import Missing from './pages/Missing';
  import Header from './pages/Header';
  import Nav from './pages/Nav';
  import Footer from './pages/Footer';
  import {format} from 'date-fns';
  import api from './api/blogs';
 



  export const AppContext = createContext();

function App() {
  //New Router updated version
  const router = createBrowserRouter(
    createRoutesFromElements(
  <Route path="/" element={<Root/>}>
       <Route index element={<Home />}/>
        <Route path="/form" element={<Form/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/blog/:id" element={<BlogFeed/>} /> 
        <Route path="*" element={<Missing/>} /> 
  </Route>
    ));
    

    //states
    const [search,setSearch] = useState('');
    const [blogs, setBlogs] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [blogTitle, setBlogTitle] = useState('');
    const [blogBody, setBlogBody] = useState('');
    const [blogAuthor,setBlogAuthor] = useState('')


    useEffect(()=>{
       const fetchBlogs = async()=>{
        try{
          const response = await api.get('/blogs');
          setBlogs(response.data);
        }catch(err){
          console.log(`Error:${err.message}`);
        }
       }
       fetchBlogs();
    },[])

    useEffect(()=>{
      const filteredResults = blogs.filter(blog =>
        ((blog.body).toLowerCase()).includes(search.toLowerCase())
        || ((blog.title).toLowerCase()).includes(search.toLowerCase())
        );
        setSearchResults(filteredResults.reverse());
    },[blogs,search])


    //eventHandlers
    const handleDelete = async (id)=>{
      try{
        await api.delete (`/blogs/${id}`);
      const deleted = blogs.filter(blog=> blog.id !== id );
      setBlogs(deleted);
      }catch(err){
        console.log(`Error:${err.message}`);
      }
    }

    const handleSubmit = async (e)=>{
      e.preventDefault();
      const id = blogs.length ? blogs[blogs.length - 1].id + 1 : 1;
      const datetime = format(new Date(),'MMMM dd, yyyy pp');
      const newPost = {id, title: blogTitle,date:datetime,author:blogAuthor, body: blogBody};
      try{
      const response = await api.post('/blogs', newPost);
      const allPosts = [...blogs,response.data];
      setBlogs(allPosts);
      setBlogTitle('');
      setBlogBody('');
      setBlogAuthor('');
     }catch(err){
       console.log(`Error:${err.message}`);
     }
     }
     
    
  
  return (
    <AppContext.Provider value={{blogs, setBlogs,handleDelete,search,setSearch,searchResults, setSearchResults,
      handleSubmit,blogTitle, setBlogTitle,blogBody, setBlogBody,blogAuthor,setBlogAuthor
     }}>
     <div className="App">
       <RouterProvider router={router}/>
     </div>
     </AppContext.Provider>
  );
}

const Root = () =>{
  return(
    <>
      <Header/>
      <Nav/>
    
      <Outlet/>
    
    <Footer/>
    </>
  )
}


export default App;
