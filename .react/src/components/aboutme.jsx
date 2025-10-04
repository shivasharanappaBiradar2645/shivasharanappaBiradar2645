


function aboutme(){

    return (
        <>
        <section className="flex flex-col items-center justify-center  md:max-w-3xl bg-base-200 mt-3 mx-2 md:mx-auto  p-8 ">
      <h1 className='mb-2' >ABOUT ME</h1>
      <img
        src="/profile.webp"
        alt="Shiva"
      
        className="w-36 h-36 rounded-full object-cover mb-6 mt-0"
      />
      <p className="text-justify mb-2 max-w-2xl">
        Hi, I'm Shiva, currently a  college student with a deep
        interest in the inner workings of computers and the world around us.
      </p>
      <p className="text-justify mb-2 max-w-2xl">
        My journey in technology has led me to specialize in Python, particularly in backend development, where I enjoy building libraries and crafting CLI applications.
      </p>
      <p className="text-justify mb-2 max-w-2xl">
        What truly drives me is a passion for understanding complex systems and
        solving intricate problems. This curiosity fuels my ambition to delve
        into system architecture and advanced computational techniques.
      </p>
      <p className="text-justify max-w-2xl">
        When I'm not immersed in coding, you'll often find me exploring the vast
        expanse of the internet, constantly reading and learning new things.
      </p>
    </section>

        </>
    );
};


export default aboutme;