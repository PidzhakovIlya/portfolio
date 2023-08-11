import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Work} from "./work/Work";
import projectImg1 from "../../../assets/images/project-1.webp"
import projectImg2 from "../../../assets/images/project-2.webp"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles";
import {TabsMenu, TabStatusType} from "../../../components/menu/TabsMenu";
import {AnimatePresence, motion} from "framer-motion"

const worksData = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        src: projectImg1,
        title: "PROJECT 1",
        type: "project-1",
        id: 1
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        src: projectImg2,
        title: "PROJECT 2",
        type: "project-2",
        id: 2
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        src: projectImg2,
        title: "PROJECT 3",
        type: "project-3",
        id: 3
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        src: projectImg2,
        title: "PROJECT 4",
        type: "project-4",
        id: 4
    }
];


const tabsItems: Array<{ status: TabStatusType, title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Project-1",
        status: "project-1"
    },
    {
        title: "Project-2",
        status: "project-2"
    },
    {
        title: "Project-3",
        status: "project-3"
    },
    {
        title: "Project-4",
        status: "project-4"
    },
];

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredWorks = worksData

    if (currentFilterStatus === "project-1") {
        filteredWorks = worksData.filter(work => work.type === "project-1")
    }
    if (currentFilterStatus === "project-2") {
        filteredWorks = worksData.filter(work => work.type === "project-2")
    }
    if (currentFilterStatus === "project-3") {
        filteredWorks = worksData.filter(work => work.type === "project-3")
    }
    if (currentFilterStatus === "project-4") {
        filteredWorks = worksData.filter(work => work.type === "project-4")
    }

    function changeFilterStatus(value: TabStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabsMenu tabsItems={tabsItems}
                          changeFilterStatus={changeFilterStatus}
                          currentFilterStatus={currentFilterStatus}/>
                <S.GridWrapper>

                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div
                                    layout={true}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={w.id}
                                >

                                    <Work
                                        text={w.text}
                                        src={w.src}
                                        title={w.title}
                                        key={w.id}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </S.GridWrapper>
            </Container>
        </S.Works>
    );
};

