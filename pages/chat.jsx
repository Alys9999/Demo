import styles from '../styles/Home.module.css';
import { Container, Box, TextField, Button} from "@mui/material";

export default function Chat() {
  const messages = [
    { sender: 'John', content: 'Hello, how are you?' },
    { sender: 'Jane', content: 'I am doing well, thank you!' },
  ];

  return (
    
    <div className="flex flex-col w-full h-full">
      <Container maxWidth="sm" className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Chat Page</h1>
        <Box className="w-full h-full align-bottom  mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'John' ? 'justify-end' : 'justify-start'} mb-2`}>
              <div className={`rounded-lg p-2 ${message.sender === 'John' ? 'bg-blue-300 text-white' : 'bg-gray-300'}`}>
                {message.content}
              </div>
            </div>
          ))}
        </Box>
        <TextField label="Message" fullWidth variant="outlined" />
        <Button variant="contained" color="primary">Send</Button>

        <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
          </label>
      </div> 
      </Container>

      

    </div> 

  )
}
