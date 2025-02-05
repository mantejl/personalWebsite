export default function Home() {
  return (
    <div className="animate-fadeIn flex flex-col lg:flex-row items-center justify-center">
      <img
        src={"/profilePicture.JPG"}
        alt="Your Profile Picture"
        className="w-1/4 mt-20 ml-16 lg:ml-8 lg:mr-16"
      />

      <p className="text-center m:text-left mb-8 lg:mt-24 lg:text-2xl lg:mr-16">
        Hello! My name is Mantej Lamba, and I am currently in my fourth year at
        the University of Southern California, pursuing a combined bachelor's
        and master's degree in Computer Science, with an anticipated graduation date of 2025.
        My academic journey reflects a strong passion for technology, and my
        focus areas include cybersecurity, AI/machine learning, and full-stack
        web development. I am enthusiastic about exploring the intersection of
        these fields and leveraging technology to address real-world challenges.
        As I continue my education, I am eager to gain hands-on experience
        through both professional and academic opportunities. In the future, my
        goal is to work in the cybersecurity field, building products and tools
        to help protect our critical infrastructure and data.
      </p>
    </div>
  );
}
