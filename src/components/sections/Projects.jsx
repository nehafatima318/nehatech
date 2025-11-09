
import ReviewOnScroll from "../ReviewOnScroll"
function Projects() {
  return (
      <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <ReviewOnScroll>
          <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects  
                    {" "}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                  hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                 
                  <h3 className="text-xl font-bold mb-2">
                      RentNow Web Application
                  </h3>
                  <p className="text-gray-400 mb-4">
                      Enable users to easily search for and compare rental 
                      properties, vehicles, or other goods from wide selection.
                  </p>
                  <div className="flex flex-wrap gap-2">
                      {["HTML","CSS","Javascript", "Php", "Mysql"].map((tech, key) =>
                          <span key={key}
                              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] tansition">
                                        {tech}

                            </span>
                          )}
                      </div> 
                      
                      
                  </div>

                   
              
                   <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                  hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                 
                  <h3 className="text-xl font-bold mb-2">
                      Delivery Management System
                  </h3>
                  <p className="text-gray-400 mb-4">
                      Enabled streamline and automate delivery operations, leading to increased efficiency, reduced costs, and improved
                        customer satisfaction.

                  </p>
                  <div className="flex flex-wrap gap-2">
                      {["React","Javascript","Typescript","Php", "Mysql"].map((tech, key) =>
                          <span key={key}
                              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] tansition">
                                        {tech}

                            </span>
                          )}
                      </div> 
                      
                      
                  </div>
                  
              </div>
              
              </div>
        </ReviewOnScroll>
    </section>
  )
}

export default Projects