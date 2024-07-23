/* cSpell:disable */
import frauditt from '@/images/projects/Frauddit.png'
import EventEase from '@/images/projects/EventEase.png'
import trippin from '@/images/projects/trippin.png'
import autoPilot from '@/images/projects/AutoPilot.png'
import InsightAI from '@/images/projects/InsightAI.png'
import yahtzeeCLI from '@/images/projects/yahtzee_cli.png'
import Yahtzee from '@/images/projects/yahtzee.png'
import Monkey from '@/images/projects/Monkey.png'
/* cSpell:enable */

export const portfolioData = [
    {
        id: 0,
        title: "Monkey Interpreter",
        description: `
        This project was a journey for me to learn more about how interpreters work.
        It is a project based on the interpreter designed in 'Writing an Interpreter in Go' by Thorsten Ball.
        My goal was to understand concepts like Lexical Analysis, Tokenization, and Parsing.
        `,
        technologyUsed: [
            "Go",
        ],
        challenges: `
        This project is a lot of new concepts for me. I'm using this project to gain a better understanding of Go and its syntax.
        In addition to new programming language, I'm also learning under-the-hood concepts for interpreters.
        Things like lexical analysis and parsing have been awesome to learn about! While challenging, this project has been a
        great way to get some hands on experience with interpreters and how they operate.
        `,
        futurePlans: `
        To be determined
        `,
        image: Monkey,
        color: 'dark',
        // deployed: "https://insightai-ten.vercel.app/",
        gitLink: "https://github.com/jduriu/Monkey-Interpreter",
    },
    {
        id: 1,
        title: "Yahtzee",
        description: `
        A full stack application given as a tribute to a family game I grew up on as a child. Hopefully a well built application
        with some surprising features disguised under the cover of a simple dice game.
        `,
        technologyUsed: [
            "Python",
            "FastAPI",
            "Javascript",
            "React",
            "NextJS",
            "MongoDB",
            "Docker",
        ],
        challenges: `
        I can only describe this application as a long term relationship. It has served as a testing ground for any new technology I am currently learning.
        For this project I tried to challenge myself and use minimal pre-built components. This included everything from custom UI features to building
        an authentication service with automatic refresh logic. While challenging, it allowed me to learn and fully understand what goes on under the hood of some
        complex features.
        `,
        futurePlans: `
        As of this writing in May of 2024, I'm consistently updating this project with the hope of deploying it on an enterprise cloud service like AWS soon.
        `,
        image: Yahtzee,
        color: 'dark',
        // deployed: "https://insightai-ten.vercel.app/",
        gitLink: "https://github.com/jduriu/yahtzee",
    },
    {
        id: 2,
        title: "InsightAI",
        description: `
        A journal application design with server-side rendering in mind. Users can log in and record journal instances
        which are stored and analyzed using OpenAI and LangChain. Entries are analyzed and the user is able to receive live
        feedback in the UI.
        `,
        technologyUsed: [
            "Javascript",
            "React",
            "NextJS",
            "PostgreSQL",
            "OpenAI/GPT3.5",
            "LangChain",
        ],
        challenges: `
        When using new frameworks and APIs there are always bound to be challenges. For this project, my main concern was finding
        documentation and previous examples in development. In some ways, the hardest part was waiting for modules and libraries
        to catch up and become compatible with NextJS 13.
        `,
        futurePlans: `
        I intend to fortify this project such that it can be used by a number of people. Currently features are relying on capped services
        which can affect user experience. My plan is to continue to build out the API and add additional features.
        `,
        image: InsightAI,
        color: 'light',
        deployed: "https://insightai-ten.vercel.app/",
        gitLink: "https://gitlab.com/jduriu/insightai",
    },
    {
        id: 3,
        title: "EventEase",
        description: `
        A conference management application designed to handle both internal and client facing aspects. These
        include internal models to schedule conferences, locations, participants, and presentations.
        `,
        technologyUsed: [
            "Python",
            "Django",
            "Javascript",
            "React",
            "PostgreSQL",
            "Docker",
            "RabbitMQ",
        ],
        challenges: `
        This project was converted from a monolithic structure to microservices. It was definitely a challenge to convert a single
        Django project to multiple. Along with this came the conversion of database from the standard django sqlite to postgres.
        Transferring data was a challenge, but was resolved using the built in django data load commands.
        `,
        futurePlans: `
        I intend to add some additional features to the front end user experience. These include bringing back in the accounts
        service for front end authentication/authorization, and adding more detailed view pages for conferences.
        `,
        image: EventEase,
        color: 'light',
        deployed: null,
        gitLink: "https://gitlab.com/jduriu/event-ease",
    },
    {
        id: 4,
        title: "Frauditt", // cspell: disable-line
        description: `
            This application was the combined effort of myself, Laurie Kim, Orion Schlegelmich,
            and Gary Lu. Starting from ideation and white-boarding all of the way into continuous
            integration and continuous deployment. The website is geared toward alerting and informing
            the community about fraudulent activities. Whether its a scam call or fake email, this
            website gives the community a single space to post their experiences and spread awareness.
            `,
        technologyUsed: [
            "Python",
            "FastAPI",
            "Javascript",
            "React",
            "PostgreSQL",
            "Docker",
        ],
        challenges: `
            This project had a lot of hurdles. Learning the FastApi framework in a matter of weeks
            was a huge challenge. Coming together as a team quickly and learning to work efficiently
            also provided challenges. We implemented user stories to produce work tickets to ensure
            the project was split amongst us and was completed in a logical manner.
            `,
        futurePlans: `
            I think this project has a lot of potential. I intend to try and incorporate some additional microservices
            to allow users to comment and see more details regarding specific incidents. I would also like to implement
            a map feature to see where these frauds are most common and where they are concentrated.
            `,
        image: frauditt, // cspell: disable-line
        color: 'light',
        deployed: null,
        gitLink: "https://gitlab.com/jduriu/frauddit",
    },
    {
        id: 5,
        title: "AutoPilot",
        description: `
            An application based on the combined effort of myself and Laurie Kim designed to manage a car dealership.
            It includes three different APIs, Inventory, Service, and Sales. Service and Sales both poll automobile data
            from the Inventory to determine if the car is available to be purchased or if it was previously purchased
            from the dealership. The service API has the ability to register new vehicles and assign work technicians
            and service jobs to be completed. The sales API can create sales records and assign sales representatives to them.
            `,
        technologyUsed: [
            "Python",
            "Django",
            "Javascript",
            "React",
            "Docker",
            "PostgreSQL",
        ],
        challenges: `
            This project was developed off of a template scaffold. It was challenging to jump into someone else's
            repository and understand what every piece was doing. However, once I took some time to understand the
            source code, it became much easier to develop new features. This project was also my first experience working
            with a partner. We had to take time to consider processes and git workflows to ensure as little code conflicts
            as possible.
            `,
        futurePlans: `
            None at this time
            `,
        image: autoPilot,
        color: 'light',
        deployed: null,
        gitLink: "https://gitlab.com/jduriu/AutoPilot",
    },
    {
        id: 6,
        title: "Yahtzee CLI", // cspell: disable-line
        description: `
            A simple yahtzee game clone built to be run in the command line. This is the first
            in a series of versions I intend to build. The purpose of this project was to implement
            the game logic for future versions.
            `,
        technologyUsed: [
            "Python",
        ],
        challenges: `
            This project was relatively straight forward. However I did experience some challenges when setting up
            classes and organization. Determining which data needed to be shared and the life cycle of that
            data took some trial and error.
            `,
        futurePlans: `
            Add additional error handling and a better user experience for help menus.
            Implement the logic in a full stack application.
            `,
        image: yahtzeeCLI, // cspell: disable-line
        color: 'dark',
        deployed: null,
        gitLink: "https://github.com/jduriu/yahtzee_cli",
    },
    {
        id: 7,
        title: "Trippin", // cspell: disable-line
        description: `
            A vacation planning application which
            allows the user to log a vacation trip, the duration of events,
            and their locations. There is also an added feature that allows the
            user to enter a yelp search url for a particular location and return top
            destinations in that area.
            `,
        technologyUsed: [
            "Python",
            "Django",
            "Beautiful Soup",
            "SQLite",
        ],
        challenges: `
            I faced several challenges in this project. Mainly at the time feeling like
            a novice with Python. However it was a great learning experience in what is
            possible. Understanding how the beautiful soup query feature parses data from
            html pages was a great way to understand how querying works and how it can
            be implemented in useful ways.
            `,
        futurePlans: `
            This was one of the first applications I ever built, and it serves as a reminder of
            where I started in my journey into software development.
            `,
        image: trippin, // cspell: disable-line
        color: 'light',
        deployed: null,
        gitLink: "https://gitlab.com/jduriu/trippin",
    },
]
