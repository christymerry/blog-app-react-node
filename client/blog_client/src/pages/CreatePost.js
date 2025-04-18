import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { Navigate } from 'react-router-dom';
const modules ={
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ align: [] }],
  
      [{ list: 'ordered'}, { list: 'bullet' }],
      [{ indent: '-1'}, { indent: '+1' }],
  
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['link', 'image', 'video'],
      [{ color: [] }, { background: [] }],
    ],
    clipboard: {
      matchVisual: false,
    },
  }
  const formats = [
    'bold', 'italic', 'underline', 'strike',
    'align', 'list', 'indent',
    'size', 'header',
    'link', 'image', 'video',
    'color', 'background',
  ]

function CreatePost() {

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const[files,setFiles]=useState('');
  const[redirect,setRedirect] = useState(false);

  async function createNewPost(ev){
    const data = new FormData();
    data.set('title',title);
    data.set('summary',summary);
    data.set('content',content);
    data.set('file',files[0])
    ev.preventDefault();
    console.log(files)
   const response = await fetch('http://localhost:4000/post',{
        method:'POST',
        body:data,
    })
    console.log(await response.json());
    if(response.ok){
        setRedirect(true);

    }


  }

  if(redirect){
    return <Navigate to={'/'}/>
  }
  
return (
    <form onSubmit={createNewPost}>
      <input type="text" placeholder="Title" value={title} onChange={ev =>setTitle(ev.target.value)}/>
      <input type="text" placeholder="Summary" value ={summary} onChange={ev =>setSummary(ev.target.value)}/>
      <input type="file"  onChange={ev=>setFiles(ev.target.files)}/>
      <ReactQuill value={content} onChange={newvalue=>setContent(newvalue)} modules ={modules} formats ={formats}/>
      <button style={{marginTop:'5px'}}>Create Post</button>
    </form>
  );
}

export default CreatePost;
