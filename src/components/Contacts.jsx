import React from "react";

function Contacts() {
  const handleSubmit =()=>{
    e.preventDefault();
  }
    
  return (
    <div className="w-10/12 m-auto">
      <h1 className="text-2xl scroll-py-8 text-center uppercase font-bold">
        Contact Form
      </h1>
      <p className="text-center py-4">
        Please fill in the form very correctly{" "}
      </p>
      <div className="py-4">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="py-2 text-xl">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Please enter your name"
              className="outline-none border-[1px] border-gray-400 p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="py-2 text-xl">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Please enter your email"
              className="outline-none border-[1px] border-gray-400 p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone number" className="py-2 text-xl">
              Phone Number
            </label>
            <input
              type="text"
              id="phone number"
              placeholder="Please enter your phone number"
              className="outline-none border-[1px] border-gray-400 p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="py-2 text-xl">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Please enter subject"
              className="outline-none border-[1px] border-gray-400 p-2 rounded"
            />
          </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="py-2 text-xl">
              Message
            </label>
            <textarea rows={10}
              type="text"
              id="name"
              placeholder="Please enter your name"
              className="outline-none border-[1px] border-gray-400 p-2 rounded "
            ></textarea>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded my-4 text-xl font-bold hover:bg-green-600 " >Send</button>
        </form>
        
      </div>
    </div>
  );
}

export default Contacts;
