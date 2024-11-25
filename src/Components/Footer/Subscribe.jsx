
const Subscribe = () => {
  return (
    
    <div className="max-w-[80%] mx-auto p-2 bg-white bg-opacity-20 border-[2px] border-white rounded-lg relative -mb-20">
      
      <div className="bg-white bg-bg-shadow bg-cover bg-center rounded-lg py-10">
        <h3 className="text-center text-black text-xl md:text-3xl font-bold mb-2"> Subscribe to our Newsletter </h3>
        <p className="text-center text-black text-opacity-70 text-sm md:text-base mb-2 mx-2"> Get the latest updates and news right in your inbox! </p>
        <div className="flex flex-col md:flex-row justify-center gap-3 px-8 md:px-0 mx-auto my-6">
          <input className="md:w-[60%] px-3 py-2 rounded-md border-[1px] border-black border-opacity-20 " type="text" placeholder="Enter your email" />
          <button className="px-3 py-2 bg-orange-200 shadow-custom-inset rounded-md" > Subscribe </button>
        </div>
      </div>

     
    </div>
  );
};

export default Subscribe;