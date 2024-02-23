export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <img
        src={"/profilePicture.png"}
        alt="Your Profile Picture"
        className="w-1/4 mt-16 ml-16 lg:ml-8 lg:mr-16"
      />

      <p className="text-center m:text-left mt-4 lg:mt-24 lg:text-2xl lg:mr-16">
        Hello! My name is Mantej Lamba, and I am currently in my third year at
        the University of Southern California, pursuing a combined bachelor's
        and master's degree in Computer Science. I am on track to complete my
        studies within four years, with an anticipated graduation date of 2025.
        My academic journey reflects a deep passion for technology, and my focus
        areas include cybersecurity, AI/machine learning, and full-stack web
        development. I am enthusiastic about exploring the intersection of these
        fields and leveraging technology to address real-world challenges. As I
        continue my education, I am eager to contribute to advancements in the
        ever-evolving landscape of computer science.
      </p>
    </div>
  );
}
