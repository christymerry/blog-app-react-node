import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
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
  

  return (
    <form>
      <input type="text" placeholder="Title" value={title} onChange={ev =>setTitle(ev.target.value)}/>
      <input type="text" placeholder="Summary" value ={summary} onChange={ev =>setSummary(ev.target.value)}/>
      <input type="file" />
      <ReactQuill value={content} onChange={newvalue=>setContent(newvalue)} modules ={modules} formats ={formats}/>
      <button style={{marginTop:'5px'}}>Create Post</button>
    </form>
  );
}

export default CreatePost;
