import { Link } from "react-router-dom";
function Hero() {
  return (
    
    
    <section className="bg-linear-to-br from-[#E9D5FF] via-[#C084FC] to-[#A855F7] min-h-screen flex items-center">
    


    
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}  
        <div>  
         <span className="inline-block bg-[#6B21A8] text-[#F3E8FF] px-4 py-2 rounded-full text-sm font-semibold">
          AI Powered Employee Wellness
          
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-[#F4EFE2] mt-8 leading-tight">
            Predict Employee <br />
            Burnout Before It <br />
            Becomes a Problem.
          </h1>

          
          <p className="text-[#F3E8FF] text-lg mt-6 leading-8 max-w-xl">
            BurnoutPredict AI uses Artificial Intelligence and Machine Learning
            to identify burnout risks early, helping organizations improve
            employee well-being, productivity, and workplace satisfaction.
          </p>

          <div className="flex gap-5 mt-8">
<Link
  to="/book-demo"
  className="bg-[#A855F7] text-white font-semibold px-7 py-3 rounded-xl hover:bg-[#9333EA] transition duration-300 shadow-lg"
>
  Book Demo
</Link>

<Link
  to="/features"
  className="border-2 border-[#A855F7] text-white px-7 py-3 rounded-xl hover:bg-[#A855F7] hover:text-white transition duration-300"
>
  Explore Features
</Link>

<Link
  to="/dashboard"
  className="border-2 border-[#A855F7] text-white px-7 py-3 rounded-xl hover:bg-[#A855F7] hover:text-white transition duration-300"
>
  Dashboard
</Link>
  
  
</div>
</div>
        {/* Right Section */}
        <div>

          
          <div className="bg-[#2E1065] rounded-3xl shadow-2xl p-1 border border-[#4C1D95]">

            <div className="flex justify-between items-center mb-4">

              <h2 className="text-2xl font-bold text-[#F4EFE2]">
                Burnout Dashboard
              </h2>

              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                AI Active
              </span>

            </div>

            {/* Top Cards */}

           <div className="grid grid-cols-2 gap-4">
  <div className="bg-[#4C1D95] rounded-xl p-5">
    <p className="text-[#E9D5FF]">
      Employees
    </p>
    <h2 className="text-3xl font-bold text-white mt-2">
      520
    </h2>
           
              </div>
<div className="bg-[#4C1D95] rounded-xl p-5">
  <p className="text-[#E9D5FF]">
    High Risk
  </p>
  <h2 className="text-3xl font-bold text-white  
  mt-2">
    18
  </h2>
</div>
            
            

              

            </div>

            {/* Graph */}

            <div className="mt-8">
        <h3 className="font-semibold mb-4 text-white">
  Burnout Prediction
</h3>

<div className="flex items-end justify-between h-36">
  <div className="bg-[#A855F7] w-8 h-14 rounded"></div>
  <div className="bg-[#A855F7] w-8 h-20 rounded"></div>
  <div className="bg-[#A855F7] w-8 h-28 rounded"></div>
  <div className="bg-[#A855F7] w-8 h-18 rounded"></div>
  <div className="bg-[#A855F7] w-8 h-32 rounded"></div>
  <div className="bg-[#A855F7] w-8 h-24 rounded"></div>
  <div className="bg-[#A855F7] w-8 h-36 rounded"></div>
</div>
             
             
            

            </div>

            {/* Progress */}

            <div className="mt-8">

<h3 className="font-semibold text-white mb-4">
  Department Burnout Risk
</h3>

<p className="text-[#E9D5FF] mb-2">Engineering</p>

<div className="bg-[#4C1D95] h-2 rounded-full mb-4">
  <div className="bg-[#A855F7] h-2 rounded-full w-4/5"></div>
</div>
    <p className="text-[#E9D5FF] mb-2">HR</p>

<div className="bg-[#4C1D95] h-2 rounded-full mb-4">
  <div className="bg-[#A855F7] h-2 rounded-full w-3/5"></div>
</div>

<p className="text-[#E9D5FF] mb-2">Sales</p>

<div className="bg-[#4C1D95] h-2 rounded-full">
  <div className="bg-[#A855F7] h-2 rounded-full w-2/3"></div>
</div>



          
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;