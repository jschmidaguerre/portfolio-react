import React from 'react'

const ContactButton = () => {
  return (
    <div class="flex justify-center items-center space-x-4 mt-6 font-rajdhani">
        <a 
        href="#projects" 
        class="bg-zinc-800 text-white px-6 py-2 rounded-md hover:bg-zinc-300 hover:text-black transition">
            View My Work
        </a>
        <a 
        class="ml-4 text-white border border-zinc-800 px-6 py-2 rounded-md hover:bg-zinc-800 
         transition"
        href="/CV Juan Segundo Schmid Aguerre (English).pdf"
        download="CV Juan Segundo Schmid Aguerre (English).pdf">
            Download Resume
        </a>
  </div>
  )
}

export default ContactButton