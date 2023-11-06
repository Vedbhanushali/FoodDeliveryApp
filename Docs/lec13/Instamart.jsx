import { useState } from "react";

const Section = ({ title, description }) => {
    const [isVisible, setIsVisible] = useState(true);
    return (<div className="border border-black p-2 m-2">
        <h1 className="font-bold text-xl">{title}</h1>
        {isVisible ?
            <button className="cursor-pointer underline" onClick={() => setIsVisible(false)}>
                hide
            </button> :
            <button className="cursor-pointer underline" onClick={() => setIsVisible(true)}>
                Show
            </button>
        }
        {isVisible && <p>{description}</p>}
    </div>)
}
const DepenSection = ({ title, description, isVisible, setIsVisible }) => {
    return (<div className="border border-black p-2 m-2">
        <h1 className="font-bold text-xl">{title}</h1>
        {isVisible ?
            <button className="cursor-pointer underline" onClick={() => setIsVisible(false)}>
                hide
            </button> :
            <button className="cursor-pointer underline" onClick={() => setIsVisible(true)}>
                Show
            </button>
        }
        {isVisible && <p>{description}</p>}
    </div>)
}

const SectionKey = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-black p-2 m-2">
            <h1 className="font-bold text-xl">{title}</h1>
            {isVisible ?
                <>
                    <button className="cursor-pointer underline" onClick={() => setIsVisible(false)}>
                        hide
                    </button>
                    <p>{description}</p>
                </> :
                <button className="cursor-pointer underline" onClick={() => setIsVisible(true)}>
                    Show
                </button>
            }
        </div>
    )
}
const Instamart = () => {
    const [sectionConfig, setSectionConfig] = useState({
        showAbout: true,
        showTeam: true,
    })
    const [section_key, setSection_key] = useState("about")
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold"> Accordian Example</h1>
            <Section title={"About Instamart"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
            <Section title={"Team Instamart"} description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."} />
            <h2 className="text-2xl">cards closing opening dependent on each other</h2>
            {/* This piece of code is not good for all sections added need to maintain a keys config */}
            <DepenSection title={"About Instamart"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                isVisible={sectionConfig.showAbout}
                setIsVisible={() => setSectionConfig({
                    showAbout: true,
                    showTeam: false,
                })}
            />
            <DepenSection title={"Team Instamart"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                isVisible={sectionConfig.showTeam}
                setIsVisible={() => setSectionConfig({
                    showAbout: false,
                    showTeam: true,
                })}
            />
            {/* this code is better than above more readable and maintainable */}
            <h2 className="text-2xl">Optimized code cards closing opening dependent on each other</h2>
            <SectionKey
                title={"About Instamart"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                isVisible={section_key === 'about'}
                setIsVisible={(show) => {
                    show ? setSection_key('about') : setSection_key('')
                }}
            />
            <SectionKey
                title={"Team Instamart"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                isVisible={section_key === 'team'}
                setIsVisible={(show) => {
                    show ? setSection_key('team') : setSection_key('')
                }}
            />
        </div>
    );
};

export default Instamart;