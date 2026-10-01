

const Home = () => {

  const handleDownload = () => {
    const pdfUrl = '/Shubhamkejriwal.pdf'; 
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'Shubhamkejriwal.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="text-white w-full min-h-screen flex justify-center relative px-4 sm:pt-16 pt-16">
      <div className="lg:max-w-4xl w-full sm:pt-10">
        {/* Tag line */}
        <h3 className="flex items-center gap-2 border border-[#565656] rounded-2xl px-5 py-2 text-xs w-fit mb-8">
          INTRODUCE
        </h3>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight">
          I am <span className="text-[#28E98C] font">Shubham Kejriwal</span>,
          <div>
            {/* <Typewriter
              options={{
                strings: ['Web Developer', 'Web Designer', 'FrontEnd Developer'],
                autoStart: true,
                loop: true,
              }}
            /> */}
          </div>
        </h1>

        <p className="mt-10 sm:mt-16 text-[#999999] text-lg max-w-full sm:max-w-2xl">
          I design and code beautifully simple things and I love what I do.
          Just simple like that!
        </p>
        <div className='pt-20'>
          <button onClick={handleDownload} className='px-10 py-2 rounded-xl bg-[#28E98C] text-[#161616]'>Resume</button>
        </div>
      </div>

      {/* Moving Circle (Decorative) */}
      <div className="absolute lg:top-[65%] top-[70%] lg:left-[70%] right-20 md:right-40 transform lg:translate-x-0 translate-x-[-50%] translate-y-[-50%]">
        <div className="logo w-20 h-20 sm:w-30 sm:h-30 rounded-full bg-[#28E98C] animate-ping"></div>
      </div>
    </div>
  );
};

export default Home;
