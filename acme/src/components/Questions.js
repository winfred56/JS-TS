import {BsFillPlusCircleFill} from "react-icons/bs"
import {useState} from "react";
import boltbg from "./../assets/bolt-bg.svg"
import ansub from "./../assets/ansub.svg"

export default function Questions() {
    const questions = [
        {
            question: "Who's behind Supafast",
            answer: "Supafast is led by two world-class design engineers with a combined experience of over 5+ years. Our clients span the globe, including Y Combinator startups, early-stage ventures, angel investors, and creators."
        },
        {
            question: "Why not hire a full-time designer and developer",
            answer: "Hiring full-time professionals can be a headache. It's costlier and more challenging to manage. A senior designer might set you back $100k+, while a developer could easily exceed $300k. That's a total of $500k+ when you factor in benefits, vacation days, and more."
        },
        {
            question: "What if I'm not happy with the results?",
            answer: "This doesn't happen very often, if you're not happy, we offer unlimited revisions. We'll continue refining the project until you're 100% content."
        },
        {
            question: "How quickly will I receive my project?",
            answer: "You'll get the initial concept within 24-48 hours. We'll keep tweaking it until you're entirely satisfied. Typically, designing and developing a landing page takes around 2 weeks."
        },
    ]
    const [clickedQuestion, setClickedQuestion] = useState(Array(questions.length).fill(false))
    const handleQuestionClick = (index) => {
        const newClickedQuestion = [...clickedQuestion];
        newClickedQuestion[index] = !newClickedQuestion[index];
        setClickedQuestion(newClickedQuestion);
    };

    return (
        <div className="bg-background pb-10 md:pb-36 w-full text-sm md:text-base pt-20 md:pt-56 px-5 md:px-20 text-body-text">
            <div className="rounded-lg mx-5 p-6 md:mx-20 bg-gradient-to-b from-[#131313] to-[#191919]">
                <h1 className="font-Headings text-white text-3xl md:pb-20 text-left font-semibold md:text-6xl">
                    Questions? Answers.
                </h1>
                <div className="grid gap-4 grid-flow-row-dense grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-2">
                        {questions.map((question, index) => (
                            <div onClick={() => handleQuestionClick(index)} key={index}
                                 className="cursor-pointer mt-10 border-b-2 border-white/10">
                                <div className="flex justify-between">
                                    <h3 className="flex items-center font-Headings font-normal md:font-medium justify-start text-left text-white text-xl md:text-3xl">{question.question}</h3>
                                    <div className={`flex flex-row items-center justify-end text-3xl`}>
                                        <BsFillPlusCircleFill
                                            className={`${clickedQuestion[index] ? "rotate-45" : "rotate-0"} transition-transform`}/>
                                    </div>
                                </div>
                                <p className={`${clickedQuestion[index] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} transition-max-h duration-500 ease-in-out text-left text-body-text font-body-text text-lg mt-4 md:text-2xl flex justify-start items-center overflow-hidden`}>
                                    {question.answer}
                                </p>
                            </div>
                        ))}

                    </div>
                    <div className="relative p-8 md:col-span-1">
                        <img className="w-full" src={boltbg} alt=""/>
                        <div
                            className="p-5 md:p-10 absolute top-0 left-0 flex flex-col items-center justify-center text-center w-full h-full space-y-5">
                            <a href="https://x.com/">
                                <img alt="scribble" loading="eager" decoding="async" data-nimg="1"
                                     className="cursor-pointer" src={ansub}/>
                            </a>
                            <span className="lg:text-xl xl:text-2xl text-white p-4 font-body-text ">
		Have more questions? Book a free intro call.
	</span>
                            <a href="#"
                               className="rounded-lg bg-white p-3.5 lg:p-4 px-10 lg:px-16 text-md lg:text-lg font-bold text-black tracking-tight cta-btn cursor-pointer hover:scale-105 transition duration-300 ease-out">Book
                                a call</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}